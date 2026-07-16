/* ZeroToCode Academy — platform logic */
(function () {
  'use strict';

  const courseData = {
    python: window.PYTHON_COURSE,
    javascript: window.JAVASCRIPT_COURSE,
    web: window.WEB_COURSE,
    go: window.GO_COURSE,
    rust: window.RUST_COURSE
  };

  Object.values(courseData).forEach((c) => {
    if (c && c.lessons) c.totalLessons = c.lessons.length;
  });

  let progress = JSON.parse(localStorage.getItem('zerotocode_progress') || '{}');
  let quizScores = JSON.parse(localStorage.getItem('zerotocode_quiz') || '{}');
  let currentCourse = null;
  let currentLessonId = null;
  let currentPath = 'all';
  let pyodide = null;
  let pyodideLoading = null;

  function saveProgress() {
    localStorage.setItem('zerotocode_progress', JSON.stringify(progress));
    localStorage.setItem('zerotocode_quiz', JSON.stringify(quizScores));
  }

  /* ---------- Streak (real calendar days) ---------- */
  function touchStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const data = JSON.parse(localStorage.getItem('zerotocode_streak_data') || '{}');
    if (data.last === today) {
      return data.count || 0;
    }
    const y = new Date();
    y.setDate(y.getDate() - 1);
    const yesterday = y.toISOString().slice(0, 10);
    if (data.last === yesterday) data.count = (data.count || 0) + 1;
    else data.count = 1;
    data.last = today;
    localStorage.setItem('zerotocode_streak_data', JSON.stringify(data));
    return data.count;
  }

  function getStreak() {
    const data = JSON.parse(localStorage.getItem('zerotocode_streak_data') || '{}');
    const today = new Date().toISOString().slice(0, 10);
    const y = new Date();
    y.setDate(y.getDate() - 1);
    const yesterday = y.toISOString().slice(0, 10);
    if (!data.last) return 0;
    if (data.last === today || data.last === yesterday) return data.count || 0;
    return 0;
  }

  function updateStreakUI() {
    const s = getStreak();
    ['streak-count', 'dashboard-streak'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = s;
    });
  }

  /* ---------- Progress helpers ---------- */
  function lessonsForCourse(langId) {
    const course = courseData[langId];
    if (!course) return [];
    if (langId === 'python' && currentPath && currentPath !== 'all') {
      return course.lessons.filter((l) => l.path === currentPath || l.path === 'beginner' && currentPath === 'beginner' || (currentPath !== 'beginner' && l.path === currentPath));
    }
    return course.lessons;
  }

  function filteredLessons(langId) {
    const course = courseData[langId];
    if (!course) return [];
    if (langId !== 'python' || !currentPath || currentPath === 'all') return course.lessons;
    // beginner path: beginner only; other paths: that path (+ optional note)
    return course.lessons.filter((l) => {
      if (currentPath === 'beginner') return l.path === 'beginner' || !l.path;
      return l.path === currentPath;
    });
  }

  function calculateProgress(langId) {
    const lessons = filteredLessons(langId);
    if (!lessons.length) return 0;
    const completed = progress[langId] || [];
    const done = lessons.filter((l) => completed.includes(l.id)).length;
    return Math.round((done / lessons.length) * 100);
  }

  function calculateTotalXP() {
    let xp = 0;
    Object.keys(courseData).forEach((lang) => {
      xp += (progress[lang] || []).length * 65;
      Object.keys(quizScores).forEach((k) => {
        if (k.startsWith(lang + ':') && quizScores[k] >= 70) xp += 15;
      });
    });
    return xp;
  }

  function quizKey(langId, lessonId) {
    return langId + ':' + lessonId;
  }

  function hasPassedQuiz(langId, lessonId) {
    const lesson = courseData[langId].lessons.find((l) => l.id === lessonId);
    if (!lesson || !lesson.quiz || !lesson.quiz.length) return true;
    return (quizScores[quizKey(langId, lessonId)] || 0) >= 70;
  }

  /* ---------- Views ---------- */
  function showView(view) {
    document.querySelectorAll('.view').forEach((v) => v.classList.add('hidden'));
    const target = document.getElementById('view-' + view);
    if (target) target.classList.remove('hidden');
    if (view === 'dashboard') updateDashboard();
    if (view === 'courses') renderCoursesGrid();
    if (view === 'paths') renderPaths();
  }

  function updateHomeCounts() {
    const map = {
      'count-python': 'python',
      'count-javascript': 'javascript',
      'count-web': 'web',
      'count-go': 'go',
      'count-rust': 'rust'
    };
    Object.entries(map).forEach(([elId, lang]) => {
      const el = document.getElementById(elId);
      if (el && courseData[lang]) el.textContent = courseData[lang].totalLessons + ' lessons';
    });
  }

  function updateDashboard() {
    const xpEl = document.getElementById('total-xp');
    if (xpEl) xpEl.textContent = calculateTotalXP().toLocaleString();

    let totalCompleted = 0;
    let totalLessons = 0;
    Object.keys(courseData).forEach((lang) => {
      totalCompleted += (progress[lang] || []).length;
      totalLessons += courseData[lang].totalLessons;
    });
    const lc = document.getElementById('lessons-completed');
    if (lc) lc.textContent = totalCompleted + ' / ' + totalLessons;
    updateStreakUI();

    const container = document.getElementById('dashboard-languages');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(courseData).forEach((langId) => {
      const course = courseData[langId];
      const completedCount = (progress[langId] || []).length;
      const pct = Math.round((completedCount / course.totalLessons) * 100) || 0;
      const card = document.createElement('div');
      card.className = 'bg-white border border-slate-200 rounded-3xl p-5 modern-card cursor-pointer';
      card.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <span class="text-3xl">${course.icon}</span>
            <h4 class="font-semibold text-xl mt-3">${course.name}</h4>
            <p class="text-xs text-slate-500 mt-1">${course.subtitle || ''}</p>
          </div>
          <div class="text-3xl font-semibold text-emerald-600">${pct}<span class="text-base font-normal">%</span></div>
        </div>
        <div class="mt-4">
          <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-2 bg-emerald-500 rounded-full progress-bar" style="width:${pct}%"></div>
          </div>
          <div class="flex justify-between text-xs mt-1.5 text-slate-500">
            <span>${completedCount} / ${course.totalLessons} lessons</span>
          </div>
        </div>
        <button class="mt-5 w-full py-2.5 text-sm font-semibold rounded-2xl ${pct > 0 ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'}">${pct > 0 ? 'Continue' : 'Start'}</button>`;
      card.onclick = () => startCourse(langId);
      container.appendChild(card);
    });

    // Certificate panel
    const cert = document.getElementById('certificate-panel');
    if (cert) {
      const pyBeginner = (courseData.python.lessons || []).filter((l) => l.path === 'beginner');
      const done = pyBeginner.filter((l) => (progress.python || []).includes(l.id)).length;
      const ready = pyBeginner.length > 0 && done === pyBeginner.length;
      cert.innerHTML = ready
        ? `<div class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-3xl p-6">
            <h3 class="font-semibold text-xl">Certificate unlocked 🎓</h3>
            <p class="mt-2 text-emerald-50">You completed the Python Beginner Builder path (${done} lessons).</p>
            <button onclick="window.ZeroToCode.printCertificate()" class="mt-4 px-5 py-2 bg-white text-emerald-700 rounded-2xl font-semibold text-sm">View certificate</button>
          </div>`
        : `<div class="bg-white border border-slate-200 rounded-3xl p-6">
            <h3 class="font-semibold text-lg">Python Beginner Certificate</h3>
            <p class="text-slate-600 text-sm mt-1">Complete all Beginner path lessons to unlock. Progress: ${done}/${pyBeginner.length}</p>
            <div class="h-2 bg-slate-100 rounded-full mt-3 overflow-hidden"><div class="h-2 bg-emerald-500" style="width:${pyBeginner.length ? (done / pyBeginner.length) * 100 : 0}%"></div></div>
          </div>`;
    }
  }

  function renderCoursesGrid() {
    const container = document.getElementById('courses-grid');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(courseData).forEach((langId) => {
      const course = courseData[langId];
      const completedCount = (progress[langId] || []).length;
      const pct = Math.round((completedCount / course.totalLessons) * 100) || 0;
      const card = document.createElement('div');
      card.className = 'modern-card bg-white border border-slate-200 rounded-3xl p-6 cursor-pointer hover:border-emerald-300';
      card.innerHTML = `
        <div class="flex items-center gap-x-4">
          <span class="text-5xl">${course.icon}</span>
          <div class="flex-1">
            <h3 class="font-semibold text-2xl">${course.name}</h3>
            <p class="text-emerald-600 text-sm">${course.subtitle || ''}</p>
            <div class="mt-4 text-xs text-slate-500">${course.totalLessons} lessons • ${pct}% done</div>
            <div class="h-2 bg-slate-100 rounded-full mt-2 overflow-hidden"><div class="h-2 bg-emerald-500" style="width:${pct}%"></div></div>
          </div>
        </div>`;
      card.onclick = () => startCourse(langId);
      container.appendChild(card);
    });
  }

  function renderPaths() {
    const box = document.getElementById('paths-grid');
    if (!box || !courseData.python) return;
    const paths = [
      { id: 'beginner', name: 'Beginner Builder', desc: 'Zero → functions, files, OOP, shop projects', icon: '🌱' },
      { id: 'data', name: 'Data & ML', desc: 'NumPy, Pandas, Matplotlib, machine learning', icon: '📊' },
      { id: 'backend', name: 'Backend Data', desc: 'MySQL & MongoDB for applications', icon: '🗄️' },
      { id: 'dsa', name: 'CS & DSA', desc: 'Structures, search, sort (optional deep dive)', icon: '🧠' },
      { id: 'all', name: 'Full Catalog', desc: 'Every Python lesson in order', icon: '📚' }
    ];
    box.innerHTML = paths
      .map((p) => {
        const count =
          p.id === 'all'
            ? courseData.python.lessons.length
            : courseData.python.lessons.filter((l) => l.path === p.id).length;
        return `<div onclick="window.ZeroToCode.startPythonPath('${p.id}')" class="modern-card bg-white border border-slate-200 rounded-3xl p-6 cursor-pointer hover:border-emerald-300">
          <div class="text-4xl mb-3">${p.icon}</div>
          <h3 class="font-semibold text-xl">${p.name}</h3>
          <p class="text-slate-600 text-sm mt-2">${p.desc}</p>
          <p class="text-emerald-600 text-xs font-semibold mt-4">${count} lessons</p>
        </div>`;
      })
      .join('');
  }

  function startPythonPath(pathId) {
    currentPath = pathId || 'all';
    startCourse('python');
  }

  function startCourse(langId) {
    if (langId !== 'python') currentPath = 'all';
    currentCourse = langId;
    const course = courseData[langId];
    if (!course) return;

    document.getElementById('course-title').innerHTML = `${course.icon} ${course.name}`;
    const pathLabel = langId === 'python' && currentPath !== 'all' ? ` • Path: ${currentPath}` : '';
    document.getElementById('course-subtitle').textContent = (course.subtitle || '') + pathLabel;
    const lessons = filteredLessons(langId);
    document.getElementById('course-header-badge').innerHTML = `<span class="px-3 py-px">${lessons.length} lessons • Free</span>`;

    const pathBar = document.getElementById('python-path-bar');
    if (pathBar) {
      if (langId === 'python') {
        pathBar.classList.remove('hidden');
        pathBar.innerHTML = ['beginner', 'data', 'backend', 'dsa', 'all']
          .map(
            (p) =>
              `<button onclick="window.ZeroToCode.startPythonPath('${p}')" class="px-3 py-1.5 rounded-full text-xs font-semibold ${
                currentPath === p ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }">${p}</button>`
          )
          .join('');
      } else pathBar.classList.add('hidden');
    }

    renderLessonsSidebar(langId);
    showView('course');
    const completed = progress[langId] || [];
    let first = lessons.find((l) => !completed.includes(l.id));
    if (!first) first = lessons[0];
    if (first) loadLesson(langId, first.id);
  }

  function renderLessonsSidebar(langId) {
    const container = document.getElementById('lessons-sidebar');
    container.innerHTML = '';
    const lessons = filteredLessons(langId);
    const completed = progress[langId] || [];
    let lastModule = null;

    lessons.forEach((lesson, index) => {
      if (lesson.module && lesson.module !== lastModule) {
        lastModule = lesson.module;
        const header = document.createElement('div');
        header.className = 'px-3 pt-3 pb-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase';
        header.textContent = lesson.module + (lesson.project ? ' · Project' : '');
        container.appendChild(header);
      }
      const isCompleted = completed.includes(lesson.id);
      const isCurrent = currentLessonId === lesson.id;
      const item = document.createElement('div');
      item.className = `lesson-item flex items-center gap-x-3 px-4 py-3 rounded-2xl cursor-pointer text-sm ${
        isCurrent ? 'bg-emerald-50 border border-emerald-200' : 'hover:bg-slate-50'
      } ${isCompleted ? 'completed' : ''}`;
      item.innerHTML = `
        <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          ${
            isCompleted
              ? '<i class="fa-solid fa-check-circle text-emerald-500 text-lg"></i>'
              : `<span class="text-xs font-mono text-slate-400">${String(index + 1).padStart(2, '0')}</span>`
          }
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-medium leading-tight pr-2 truncate" title="${lesson.title.replace(/"/g, '&quot;')}">${lesson.title}${
        lesson.project ? ' 🛠️' : ''
      }</div>
        </div>`;
      item.onclick = () => loadLesson(langId, lesson.id);
      container.appendChild(item);
    });

    const pct = calculateProgress(langId);
    const bar = document.getElementById('course-progress-bar');
    const txt = document.getElementById('course-progress-text');
    if (bar) bar.style.width = pct + '%';
    if (txt) txt.textContent = pct + '%';
  }

  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function loadLesson(langId, lessonId) {
    currentLessonId = lessonId;
    const course = courseData[langId];
    const lesson = course.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    const container = document.getElementById('lesson-content');
    const isCompleted = (progress[langId] || []).includes(lessonId);
    const passed = hasPassedQuiz(langId, lessonId);
    const runnerKind = langId === 'python' ? 'python' : langId === 'javascript' || langId === 'web' ? 'web' : 'readonly';

    let html = `
      <div class="max-w-3xl">
        <div class="flex items-center gap-x-3 mb-4 flex-wrap gap-y-2">
          <span class="bit-badge text-xs">LESSON ${escHtml(lesson.id).toUpperCase()}</span>
          ${lesson.module ? `<span class="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">${escHtml(lesson.module)}</span>` : ''}
          ${lesson.project ? '<span class="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">Project</span>' : ''}
          ${lesson.path ? `<span class="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">${escHtml(lesson.path)}</span>` : ''}
        </div>
        <h2 class="text-3xl font-semibold tracking-tight mb-3">${escHtml(lesson.title)}</h2>
        <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 mb-6">
          <div class="flex gap-x-3">
            <i class="fa-solid fa-bullseye text-emerald-600 mt-1"></i>
            <div><span class="font-semibold text-emerald-700">Learning Objective</span>
            <p class="text-emerald-800 mt-1">${lesson.objective}</p></div>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="font-semibold flex items-center gap-x-2 mb-3 text-lg"><i class="fa-solid fa-lightbulb text-amber-500"></i> Why this matters</h3>
          <p class="text-slate-700 leading-relaxed">${lesson.why}</p>
        </div>
        <div class="mb-8">
          <h3 class="font-semibold mb-4 text-lg flex items-center gap-x-2"><i class="fa-solid fa-book-open text-emerald-600"></i> Full explanation</h3>
          <div class="explanation-body max-w-none text-[15px] leading-7 text-slate-700 space-y-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6">${lesson.explanation}</div>
        </div>
        ${
          lesson.pitfalls
            ? `<div class="mb-6 bg-amber-50 border border-amber-100 rounded-2xl p-5">
          <h3 class="font-semibold text-amber-900 mb-2"><i class="fa-solid fa-triangle-exclamation mr-2"></i>Common mistakes</h3>
          <p class="text-amber-900/90 text-sm">${lesson.pitfalls}</p>
        </div>`
            : ''
        }
    `;

    if (lesson.codeExample) {
      html += `
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold">Code Example</h3>
            <button onclick="window.ZeroToCode.copyText(document.getElementById('example-code').textContent)" class="text-xs px-3 py-1 bg-slate-100 rounded-xl">Copy</button>
          </div>
          <pre class="code-block p-5 rounded-2xl text-sm overflow-auto"><code id="example-code">${escHtml(lesson.codeExample)}</code></pre>
        </div>`;
    }

    // Live runner
    html += renderRunner(runnerKind, lesson, langId);

    // Exercises
    if (lesson.exercises && lesson.exercises.length) {
      html += `<div class="mb-8 mt-8"><h3 class="font-semibold mb-4 text-lg flex items-center gap-x-2"><i class="fa-solid fa-tasks text-emerald-600"></i> Practice Exercises</h3>`;
      window.__solutions = window.__solutions || {};
      lesson.exercises.forEach((ex, idx) => {
        const solId = `sol-${lessonId}-${idx}`;
        window.__solutions[solId] = ex.solution || '';
        const level = ex.level || 'easy';
        const levelColor = level === 'easy' ? 'bg-emerald-100 text-emerald-700' : level === 'hard' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800';
        html += `
          <div class="exercise-box bg-white border border-slate-200 rounded-2xl p-6 mb-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="font-semibold">${escHtml(ex.title)}</div>
              <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${levelColor}">${level}</span>
            </div>
            <p class="text-slate-700 mb-3">${escHtml(ex.instruction)}</p>
            <details class="mb-3">
              <summary class="text-sm text-slate-500 cursor-pointer hover:text-emerald-600">Show hint</summary>
              <p class="text-sm text-slate-600 mt-2 bg-slate-50 p-3 rounded-xl">${escHtml(ex.hint || 'Try changing one value at a time.')}</p>
            </details>
            <div class="flex flex-wrap gap-3">
              <button onclick="window.ZeroToCode.showSolution(this, window.__solutions['${solId}'])" class="px-5 py-2 text-sm font-medium bg-white border border-slate-300 rounded-2xl">Show Solution</button>
              <button onclick="window.ZeroToCode.copyText(window.__solutions['${solId}'])" class="px-5 py-2 text-sm font-medium bg-emerald-600 text-white rounded-2xl">Copy Solution</button>
              <button onclick="window.ZeroToCode.loadSolutionInRunner(window.__solutions['${solId}'])" class="px-5 py-2 text-sm font-medium bg-slate-800 text-white rounded-2xl">Load in editor</button>
            </div>
            <div class="solution-box hidden mt-4 p-4 bg-slate-900 text-emerald-300 text-sm rounded-xl font-mono whitespace-pre-wrap"></div>
          </div>`;
      });
      html += '</div>';
    }

    // Quiz
    if (lesson.quiz && lesson.quiz.length) {
      html += `
        <div class="mb-8">
          <h3 class="font-semibold mb-2 text-lg flex items-center gap-x-2"><i class="fa-solid fa-question-circle text-indigo-500"></i> Quick Check <span class="text-xs font-normal text-slate-500">(≥70% required to complete)</span></h3>
          <div id="quiz-container-${lessonId}" class="space-y-4"></div>
          <button onclick="window.ZeroToCode.checkQuiz('${lessonId}','${langId}')" class="mt-4 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold text-sm">Submit answers</button>
          <div id="quiz-result-${lessonId}" class="mt-3 text-sm font-medium"></div>
        </div>`;
    }

    html += `
      <div class="pt-6 border-t flex flex-col sm:flex-row gap-3">
        <button id="btn-complete-lesson" onclick="window.ZeroToCode.markLessonComplete('${langId}','${lessonId}')"
          class="flex-1 py-4 font-semibold rounded-2xl text-lg ${isCompleted ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}">
          ${isCompleted ? '✓ Lesson Completed' : passed ? 'Mark as Complete & Earn XP' : 'Pass quiz (≥70%) to complete'}
        </button>
        <button onclick="window.ZeroToCode.showView('dashboard')" class="px-8 py-4 border border-slate-300 rounded-2xl font-semibold">Dashboard</button>
      </div>
      <p class="text-xs text-slate-400 mt-3">Tip: Run code above, try the exercise, then take the quiz. Mastery beats rushing.</p>
    </div>`;

    container.innerHTML = html;
    if (lesson.quiz && lesson.quiz.length) renderQuiz(lesson.quiz, lessonId);
    if (runnerKind !== 'readonly' && lesson.codeExample) {
      const ed = document.getElementById('code-runner-editor');
      if (ed) ed.value = lesson.codeExample.replace(/\\n/g, '\n');
    }
    renderLessonsSidebar(langId);
  }

  function renderRunner(kind, lesson, langId) {
    if (kind === 'readonly') {
      return `<div class="mb-8 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-600">
        <strong class="text-slate-800">Practice setup:</strong> Run Go/Rust examples locally with
        <code class="bg-white px-1 rounded">go run .</code> or <code class="bg-white px-1 rounded">cargo run</code>.
        Copy the example into your project and experiment.
      </div>`;
    }
    if (kind === 'python') {
      return `<div class="mb-8 border border-slate-200 rounded-2xl overflow-hidden">
        <div class="bg-slate-900 text-slate-200 px-4 py-2 flex justify-between items-center text-sm">
          <span><i class="fa-brands fa-python mr-2"></i>Python playground (Pyodide)</span>
          <button onclick="window.ZeroToCode.runPython()" class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-semibold text-white text-xs">Run ▶</button>
        </div>
        <textarea id="code-runner-editor" class="w-full h-48 p-4 font-mono text-sm bg-slate-950 text-emerald-300 outline-none" spellcheck="false"></textarea>
        <div class="bg-black text-green-400 p-4 font-mono text-xs min-h-[4rem] whitespace-pre-wrap" id="code-runner-output">Output will appear here. First run loads Python in the browser (~few seconds).</div>
      </div>`;
    }
    // web / javascript
    return `<div class="mb-8 border border-slate-200 rounded-2xl overflow-hidden">
      <div class="bg-slate-900 text-slate-200 px-4 py-2 flex justify-between items-center text-sm flex-wrap gap-2">
        <span><i class="fa-solid fa-play mr-2"></i>Live web playground</span>
        <div class="flex gap-2">
          <button onclick="window.ZeroToCode.runWeb(false)" class="px-3 py-1.5 bg-yellow-500 text-slate-900 rounded-xl font-semibold text-xs">Run JS</button>
          <button onclick="window.ZeroToCode.runWeb(true)" class="px-3 py-1.5 bg-emerald-600 text-white rounded-xl font-semibold text-xs">Preview HTML</button>
        </div>
      </div>
      <textarea id="code-runner-editor" class="w-full h-48 p-4 font-mono text-sm bg-slate-950 text-sky-200 outline-none" spellcheck="false"></textarea>
      <div class="grid md:grid-cols-2 gap-0 border-t border-slate-800">
        <div class="bg-black text-green-400 p-3 font-mono text-xs min-h-[5rem] whitespace-pre-wrap" id="code-runner-output">Console</div>
        <iframe id="code-runner-frame" class="w-full h-40 bg-white border-0" sandbox="allow-scripts" title="preview"></iframe>
      </div>
    </div>`;
  }

  async function ensurePyodide() {
    if (pyodide) return pyodide;
    if (pyodideLoading) return pyodideLoading;
    const out = document.getElementById('code-runner-output');
    if (out) out.textContent = 'Loading Python runtime (Pyodide)…';
    pyodideLoading = (async () => {
      if (!window.loadPyodide) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }
      pyodide = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' });
      return pyodide;
    })();
    return pyodideLoading;
  }

  async function runPython() {
    const editor = document.getElementById('code-runner-editor');
    const out = document.getElementById('code-runner-output');
    if (!editor || !out) return;
    try {
      const py = await ensurePyodide();
      await py.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = sys.stderr = StringIO()
`);
      try {
        await py.runPythonAsync(editor.value);
        const result = await py.runPythonAsync('sys.stdout.getvalue()');
        out.textContent = result || '(no output — try print(...))';
      } catch (e) {
        out.textContent = String(e);
      }
    } catch (e) {
      out.textContent = 'Failed to load Pyodide: ' + e + '\nYou can still copy code and run locally with python3.';
    }
  }

  function runWeb(asHtml) {
    const editor = document.getElementById('code-runner-editor');
    const out = document.getElementById('code-runner-output');
    const frame = document.getElementById('code-runner-frame');
    if (!editor) return;
    const code = editor.value;
    if (asHtml) {
      if (frame) {
        const doc = frame.contentDocument;
        doc.open();
        doc.write(code.includes('<html') ? code : `<!DOCTYPE html><html><body>${code}<script>window.onerror=function(m){parent.postMessage({t:'err',m},'*')}<\\/script></body></html>`);
        doc.close();
      }
      if (out) out.textContent = 'Preview updated →';
      return;
    }
    // JS console mode
    const logs = [];
    const fakeConsole = {
      log: (...a) => logs.push(a.map(String).join(' ')),
      error: (...a) => logs.push('Error: ' + a.map(String).join(' ')),
      warn: (...a) => logs.push('Warn: ' + a.map(String).join(' '))
    };
    try {
      const fn = new Function('console', code);
      fn(fakeConsole);
      if (out) out.textContent = logs.join('\\n') || '(no console output)';
    } catch (e) {
      if (out) out.textContent = String(e);
    }
  }

  function loadSolutionInRunner(code) {
    const ed = document.getElementById('code-runner-editor');
    if (ed) {
      ed.value = code;
      ed.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function renderQuiz(quizQuestions, lessonId) {
    const container = document.getElementById('quiz-container-' + lessonId);
    if (!container) return;
    container.innerHTML = '';
    quizQuestions.forEach((q, qIndex) => {
      const qDiv = document.createElement('div');
      qDiv.className = 'border border-slate-200 rounded-2xl p-5';
      qDiv.innerHTML = `<p class="font-medium mb-3">${qIndex + 1}. ${escHtml(q.q)}</p>
        <div class="space-y-2" id="q-options-${lessonId}-${qIndex}">
          ${q.options
            .map(
              (opt, oIndex) => `
            <label class="flex items-center gap-x-3 p-3 hover:bg-slate-50 rounded-xl cursor-pointer">
              <input type="radio" name="quiz-${lessonId}-${qIndex}" value="${oIndex}" class="accent-emerald-600" />
              <span>${escHtml(opt)}</span>
            </label>`
            )
            .join('')}
        </div>`;
      container.appendChild(qDiv);
    });
  }

  function checkQuiz(lessonId, langId) {
    const course = courseData[langId];
    const lesson = course.lessons.find((l) => l.id === lessonId);
    if (!lesson || !lesson.quiz) return;
    let correctCount = 0;
    lesson.quiz.forEach((q, qIndex) => {
      const selected = document.querySelector(`input[name="quiz-${lessonId}-${qIndex}"]:checked`);
      const selectedVal = selected ? parseInt(selected.value, 10) : -1;
      if (selectedVal === q.correct) correctCount++;
      const optionsDiv = document.getElementById(`q-options-${lessonId}-${qIndex}`);
      if (optionsDiv) {
        optionsDiv.innerHTML = q.options
          .map((opt, oIndex) => {
            let cls = 'p-3 rounded-xl border flex items-center gap-x-3 ';
            if (oIndex === q.correct) cls += 'bg-emerald-100 border-emerald-300';
            else if (selectedVal === oIndex) cls += 'bg-red-100 border-red-300';
            else cls += 'border-slate-100 text-slate-500';
            return `<div class="${cls}">${escHtml(opt)}</div>`;
          })
          .join('');
      }
    });
    const pct = Math.round((correctCount / lesson.quiz.length) * 100);
    quizScores[quizKey(langId, lessonId)] = pct;
    saveProgress();
    const res = document.getElementById('quiz-result-' + lessonId);
    if (res) {
      res.textContent =
        pct >= 70
          ? `Score ${pct}% — passed! You can mark the lesson complete.`
          : `Score ${pct}% — need 70%. Review the lesson and retry.`;
      res.className = 'mt-3 text-sm font-medium ' + (pct >= 70 ? 'text-emerald-600' : 'text-red-600');
    }
    // refresh complete button state
    const btn = document.getElementById('btn-complete-lesson');
    if (btn && pct >= 70) {
      btn.textContent = 'Mark as Complete & Earn XP';
      btn.className = 'flex-1 py-4 font-semibold rounded-2xl text-lg bg-emerald-600 hover:bg-emerald-700 text-white';
    }
  }

  function markLessonComplete(langId, lessonId) {
    if (!hasPassedQuiz(langId, lessonId)) {
      alert('Pass the quick check quiz with at least 70% before completing this lesson.');
      return;
    }
    if (!progress[langId]) progress[langId] = [];
    if (!progress[langId].includes(lessonId)) {
      progress[langId].push(lessonId);
      saveProgress();
      touchStreak();
      updateStreakUI();
    }
    renderLessonsSidebar(langId);
    loadLesson(langId, lessonId);

    // celebrate path completion
    if (langId === 'python' && currentPath === 'beginner') {
      const beginner = courseData.python.lessons.filter((l) => l.path === 'beginner');
      const done = beginner.every((l) => (progress.python || []).includes(l.id));
      if (done) {
        setTimeout(() => alert('🎉 Beginner path complete! Certificate unlocked on your Dashboard.'), 300);
      }
    }

    // auto advance
    const lessons = filteredLessons(langId);
    const idx = lessons.findIndex((l) => l.id === lessonId);
    if (idx >= 0 && idx < lessons.length - 1) {
      // stay on page; user can click next from sidebar
    }
  }

  function showSolution(btn, solution) {
    const box = btn.closest('.exercise-box').querySelector('.solution-box');
    if (!box) return;
    box.textContent = solution;
    box.classList.toggle('hidden');
  }

  function copyText(text) {
    navigator.clipboard.writeText(text || '').then(
      () => {},
      () => {
        const ta = document.createElement('textarea');
        ta.value = text || '';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
    );
  }

  function printCertificate() {
    const name = prompt('Your name on the certificate:', 'Learner') || 'Learner';
    const w = window.open('', '_blank');
    w.document.write(`<!DOCTYPE html><html><head><title>Certificate</title>
      <style>body{font-family:Georgia,serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f8fafc}
      .c{border:8px solid #059669;padding:3rem;max-width:640px;text-align:center;background:white}
      h1{color:#059669;margin:0} h2{margin:1rem 0}</style></head><body>
      <div class="c"><p>ZeroToCode Academy</p><h1>Certificate of Completion</h1>
      <p>This certifies that</p><h2>${escHtml(name)}</h2>
      <p>completed the <strong>Python Beginner Builder</strong> path</p>
      <p style="margin-top:2rem;color:#64748b">${new Date().toLocaleDateString()}</p>
      </div></body></html>`);
  }

  function startLearning() {
    startPythonPath('beginner');
  }

  function deployToVercelInfo() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-6';
    modal.innerHTML = `<div class="bg-white max-w-lg w-full rounded-3xl p-8">
      <h3 class="font-semibold text-2xl">Live on Vercel</h3>
      <p class="mt-2 text-slate-600">This project is deployed at <a class="text-emerald-600 underline" href="https://zerotocode-teal.vercel.app" target="_blank">zerotocode-teal.vercel.app</a></p>
      <button onclick="this.closest('.fixed').remove()" class="mt-6 w-full py-3 bg-emerald-600 text-white rounded-2xl font-semibold">Close</button>
    </div>`;
    document.body.appendChild(modal);
  }

  function resetProgress() {
    if (confirm('Reset ALL progress, quiz scores, and streak?')) {
      localStorage.removeItem('zerotocode_progress');
      localStorage.removeItem('zerotocode_quiz');
      localStorage.removeItem('zerotocode_streak_data');
      location.reload();
    }
  }

  function initializeEverything() {
    updateHomeCounts();
    updateStreakUI();
    document.getElementById('view-home').classList.remove('hidden');
  }

  window.ZeroToCode = {
    showView,
    startCourse,
    startPythonPath,
    startLearning,
    loadLesson,
    checkQuiz,
    markLessonComplete,
    showSolution,
    copyText,
    runPython,
    runWeb,
    loadSolutionInRunner,
    printCertificate,
    deployToVercelInfo,
    resetProgress,
    getProgress: () => progress,
    courseData
  };

  // global aliases used by HTML onclick
  window.showView = showView;
  window.startCourse = startCourse;
  window.startLearning = startLearning;
  window.deployToVercelInfo = deployToVercelInfo;

  window.onload = initializeEverything;
})();
