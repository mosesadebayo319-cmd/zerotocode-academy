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

  const learnerStore = LearningState.create({
    getItem: (key) => localStorage.getItem(key),
    setItem: (key, value) => localStorage.setItem(key, value),
    removeItem: (key) => localStorage.removeItem(key)
  }, courseData, (message) => {
    const banner = document.getElementById('storage-warning');
    banner.textContent = message;
    banner.classList.remove('hidden');
  });
  let progress = learnerStore.state.progress;
  let quizScores = learnerStore.state.scores;
  let currentCourse = null;
  let currentLessonId = null;
  let currentPath = 'all';

  function saveProgress() {
    return learnerStore.persist();
  }

  /* ---------- Streak (real calendar days) ---------- */
  function touchStreak() {
    learnerStore.state.streak = LearningState.touchStreak(learnerStore.state.streak);
    saveProgress();
    return getStreak();
  }

  function getStreak() {
    return LearningState.streakCount(learnerStore.state.streak);
  }

  function updateStreakUI() {
    const s = getStreak();
    ['streak-count', 'dashboard-streak'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = s;
    });
  }

  /* ---------- Progress helpers ---------- */
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
    const lesson = courseData[langId]?.lessons.find((l) => l.id === lessonId);
    if (!lesson) return false;
    if (!lesson.quiz || !lesson.quiz.length) return true;
    return (quizScores[quizKey(langId, lessonId)] || 0) >= 70;
  }

  /* ---------- Views ---------- */
  function showView(view) {
    if (!['home', 'dashboard', 'courses', 'paths', 'course'].includes(view)) view = 'home';
    saveDraft();
    LearningRunner.stop();
    document.querySelectorAll('.view').forEach((v) => v.classList.add('hidden'));
    const target = document.getElementById('view-' + view);
    if (target) target.classList.remove('hidden');
    if (view === 'dashboard') updateDashboard();
    if (view === 'courses') renderCoursesGrid();
    if (view === 'paths') renderPaths();
    if (view !== 'course') {
      setRoute('#' + view);
      document.title = (view === 'home' ? 'Learn to code from zero' : view[0].toUpperCase() + view.slice(1)) + ' · ZeroToCode Academy';
      const heading = target.querySelector('h1, h2');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }
    document.querySelectorAll('[data-nav]').forEach((link) => {
      if (link.dataset.nav === view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function setRoute(hash) {
    if (location.hash !== hash) history.pushState(null, '', hash);
  }

  function readRoute() {
    const [route, query] = location.hash.slice(1).split('?');
    const parts = (route || 'home').split('/');
    if (parts[0] === 'learn' && Object.hasOwn(courseData, parts[1])) {
      startCourse(parts[1], parts[2], new URLSearchParams(query).get('path') || 'all');
    } else showView(['home', 'dashboard', 'courses', 'paths'].includes(parts[0]) ? parts[0] : 'home');
  }

  function saveDraft() {
    const editor = document.getElementById('code-runner-editor');
    if (!editor?.dataset.key) return;
    learnerStore.state.drafts[editor.dataset.key] = editor.value;
    const saved = saveProgress();
    const status = document.getElementById('draft-status');
    if (status) status.textContent = saved ? 'Draft saved on this browser' : 'Draft in memory only — download a backup';
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
    const resume = document.getElementById('dashboard-resume');
    const last = learnerStore.state.lastLesson;
    const course = last && courseData[last.lang];
    const lesson = course?.lessons.find((l) => l.id === last.id);
    resume.innerHTML = `<div><p class="text-emerald-200 text-xs font-semibold tracking-widest uppercase">${lesson ? 'Your next step' : 'A small start. A real skill.'}</p>
      <h3 class="font-display text-2xl mt-2">${lesson ? escHtml(lesson.title) : 'Write your first line of Python'}</h3>
      <p class="text-emerald-100 text-sm mt-2">${lesson ? escHtml(course.name) + ' · Pick up where you left off. Your draft is saved here.' : 'Start with one short lesson, try the code, then check what you learned.'}</p></div>
      <button onclick="window.ZeroToCode.resumeLearning()" class="bg-white text-emerald-800 px-6 py-3 rounded-2xl font-semibold shrink-0">${lesson ? 'Resume learning →' : 'Start your first lesson →'}</button>`;
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
      card.className = 'bg-white border border-slate-200 rounded-3xl p-5 modern-card';
      card.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <span class="text-3xl">${course.icon}</span>
            <h4 class="font-semibold text-xl mt-3">${course.name}</h4>
            <p class="text-xs text-slate-500 mt-1">${course.subtitle || ''}</p>
          </div>
          <div class="text-3xl font-semibold text-emerald-700">${pct}<span class="text-base font-normal">%</span></div>
        </div>
        <div class="mt-4">
          <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-2 bg-emerald-500 rounded-full progress-bar" style="width:${pct}%"></div>
          </div>
          <div class="flex justify-between text-xs mt-1.5 text-slate-500">
            <span>${completedCount} / ${course.totalLessons} lessons</span>
          </div>
        </div>
        <button class="mt-5 w-full py-2.5 text-sm font-semibold rounded-2xl ${pct > 0 ? 'bg-emerald-700 text-white' : 'bg-emerald-50 text-emerald-700'}">${pct > 0 ? 'Continue' : 'Start'}</button>`;
      card.querySelector('button').onclick = () => startCourse(langId);
      container.appendChild(card);
    });

    // Certificate panel
    const cert = document.getElementById('certificate-panel');
    if (cert) {
      const pyBeginner = (courseData.python.lessons || []).filter((l) => l.path === 'beginner');
      const done = pyBeginner.filter((l) => (progress.python || []).includes(l.id)).length;
      const ready = pyBeginner.length > 0 && done === pyBeginner.length;
      cert.innerHTML = ready
        ? `<div class="bg-gradient-to-r from-emerald-800 to-teal-800 text-white rounded-3xl p-6">
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
      card.className = 'modern-card bg-white border border-slate-200 rounded-3xl p-6 hover:border-emerald-300';
      card.innerHTML = `
        <div class="flex items-center gap-x-4">
          <span class="text-5xl">${course.icon}</span>
          <div class="flex-1">
            <h3 class="font-semibold text-2xl">${course.name}</h3>
            <p class="text-emerald-700 text-sm">${course.subtitle || ''}</p>
            <div class="mt-4 text-xs text-slate-500">${course.totalLessons} lessons • ${pct}% done</div>
            <div class="h-2 bg-slate-100 rounded-full mt-2 overflow-hidden"><div class="h-2 bg-emerald-500" style="width:${pct}%"></div></div>
          </div>
        </div><button class="mt-5 px-5 py-2 bg-emerald-50 text-emerald-800 rounded-xl font-semibold">${pct > 0 ? 'Continue course →' : 'Explore course →'}</button>`;
      card.querySelector('button').onclick = () => startCourse(langId);
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
        return `<button onclick="window.ZeroToCode.startPythonPath('${p.id}')" class="modern-card text-left bg-white border border-slate-200 rounded-3xl p-6 hover:border-emerald-300">
          <div class="text-4xl mb-3">${p.icon}</div>
          <h3 class="font-semibold text-xl">${p.name}</h3>
          <p class="text-slate-600 text-sm mt-2">${p.desc}</p>
          <p class="text-emerald-700 text-xs font-semibold mt-4">${count} lessons</p>
        </button>`;
      })
      .join('');
  }

  function startPythonPath(pathId) {
    startCourse('python', null, pathId || 'beginner');
  }

  function startCourse(langId, requestedLesson = null, path = null) {
    if (!Object.hasOwn(courseData, langId)) return;
    saveDraft();
    const course = courseData[langId];
    const last = learnerStore.state.lastLesson;
    currentPath = langId === 'python' ? (path || (last?.lang === langId ? last.path : 'beginner')) : 'all';
    if (!['all', 'beginner', 'data', 'backend', 'dsa'].includes(currentPath)) currentPath = 'beginner';
    currentCourse = langId;

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
                currentPath === p ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }">${p}</button>`
          )
          .join('');
      } else pathBar.classList.add('hidden');
    }

    renderLessonsSidebar(langId);
    showView('course');
    const completed = progress[langId] || [];
    let first = requestedLesson && lessons.find((l) => l.id === requestedLesson);
    if (!first && last?.lang === langId && !completed.includes(last.id)) first = lessons.find((l) => l.id === last.id);
    if (!first) first = lessons.find((l) => !completed.includes(l.id));
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
        header.className = 'px-3 pt-3 pb-1 text-[10px] font-bold tracking-wider text-slate-500 uppercase';
        header.textContent = lesson.module + (lesson.project ? ' · Project' : '');
        container.appendChild(header);
      }
      const isCompleted = completed.includes(lesson.id);
      const isCurrent = currentLessonId === lesson.id;
      const item = document.createElement('button');
      item.type = 'button';
      if (isCurrent) item.setAttribute('aria-current', 'step');
      item.setAttribute('aria-label', lesson.title + (isCompleted ? ', completed' : ''));
      item.className = `lesson-item w-full text-left flex items-center gap-x-3 px-4 py-3 rounded-2xl text-sm ${
        isCurrent ? 'bg-emerald-50 border border-emerald-200' : 'hover:bg-slate-50'
      } ${isCompleted ? 'completed' : ''}`;
      item.innerHTML = `
        <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          ${
            isCompleted
              ? '<i aria-hidden="true" class="fa-solid fa-check-circle text-emerald-500 text-lg"></i>'
              : `<span class="text-xs font-mono text-slate-500">${String(index + 1).padStart(2, '0')}</span>`
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

  function renderGuideIntro(guide) {
    if (!guide) return '';
    return `<section aria-label="Lesson preparation" class="mb-6 grid sm:grid-cols-2 gap-4">
      <div class="border border-slate-200 rounded-2xl p-5"><h3 class="font-semibold mb-3">Before you begin</h3><ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">${guide.prerequisites.map(item => `<li>${escHtml(item)}</li>`).join('')}</ul></div>
      <div class="border border-slate-200 rounded-2xl p-5"><h3 class="font-semibold mb-3">By the end, you can</h3><ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">${guide.outcomes.map(item => `<li>${escHtml(item)}</li>`).join('')}</ul></div>
    </section>`;
  }

  function renderWorkedGuide(guide) {
    if (!guide) return '';
    return `<section aria-label="Worked example explanation" class="mb-8 space-y-5">
      <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-5"><h3 class="font-semibold text-emerald-900 mb-2">Expected result</h3><pre class="whitespace-pre-wrap break-words font-mono text-sm text-emerald-900">${escHtml(guide.expectedOutput)}</pre></div>
      <div><h3 class="font-semibold text-lg mb-3">Walk through the code</h3><ol class="list-decimal pl-6 space-y-4">${guide.walkthrough.map(step => `<li class="pl-1"><code class="block whitespace-pre-wrap break-words bg-slate-100 p-3 rounded-xl text-sm">${escHtml(step.code)}</code><p class="mt-2 text-sm leading-6 text-slate-700">${escHtml(step.explanation)}</p></li>`).join('')}</ol></div>
      ${guide.variations.map(example => `<article class="border border-slate-200 rounded-2xl p-5"><h3 class="font-semibold text-lg mb-3">${escHtml(example.title)}</h3><pre class="code-block p-4 rounded-xl text-sm overflow-auto"><code>${escHtml(example.code)}</code></pre><h4 class="font-semibold text-sm mt-4 mb-2">Expected result</h4><pre class="whitespace-pre-wrap break-words font-mono text-sm text-slate-700">${escHtml(example.expectedOutput)}</pre><p class="mt-4 text-sm leading-6 text-slate-700">${escHtml(example.explanation)}</p></article>`).join('')}
    </section>`;
  }

  function renderTroubleshooting(lesson) {
    if (lesson.guide) return `<section aria-label="Troubleshooting" class="mb-6 bg-amber-50 border border-amber-100 rounded-2xl p-5"><h3 class="font-semibold text-lg text-amber-900 mb-4">Common mistakes and how to fix them</h3><dl class="space-y-5">${lesson.guide.mistakes.map(item => `<div><dt class="font-semibold text-sm text-amber-950">${escHtml(item.symptom)}</dt><dd class="text-sm text-amber-900 leading-6 mt-1"><p><strong>Why:</strong> ${escHtml(item.cause)}</p><p><strong>Fix:</strong> ${escHtml(item.fix)}</p></dd></div>`).join('')}</dl></section>`;
    return lesson.pitfalls ? `<div class="mb-6 bg-amber-50 border border-amber-100 rounded-2xl p-5"><h3 class="font-semibold text-amber-900 mb-2">Common mistakes</h3><p class="text-amber-900 text-sm">${lesson.pitfalls}</p></div>` : '';
  }

  function renderRecap(guide) {
    if (!guide) return '';
    return `<section aria-label="Lesson recap" class="my-8 p-5 bg-slate-50 border border-slate-200 rounded-2xl"><h3 class="font-semibold text-lg mb-3">What to take with you</h3><ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">${guide.summary.map(item => `<li>${escHtml(item)}</li>`).join('')}</ul><h4 class="font-semibold mt-5 mb-2">Read more in the documentation</h4><ul class="space-y-2 text-sm">${guide.references.map(ref => {
      const url = new URL(ref.url);
      return url.protocol === 'https:' ? `<li><a class="underline text-emerald-800" href="${url.href.replace(/"/g, '&quot;')}" target="_blank" rel="noopener noreferrer">${escHtml(ref.title)} <span class="sr-only">(opens in a new tab)</span></a></li>` : '';
    }).join('')}</ul></section>`;
  }

  function buildLessonContents() {
    const contents = document.getElementById('lesson-contents');
    const headings = [...document.querySelectorAll('#lesson-explanation .explanation-body h4')];
    if (!headings.length) return;
    contents.classList.remove('hidden');
    const title = document.createElement('p');
    title.className = 'font-semibold text-slate-800 mb-2';
    title.textContent = 'In this explanation';
    const list = document.createElement('ol');
    list.className = 'list-decimal pl-5 space-y-2';
    headings.forEach((heading, index) => {
      heading.id = 'explanation-topic-' + index;
      heading.tabIndex = -1;
      heading.classList.add('scroll-mt-32');
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      link.className = 'text-emerald-800 underline';
      link.onclick = (event) => { event.preventDefault(); heading.focus({ preventScroll: true }); heading.scrollIntoView(); };
      item.appendChild(link);
      list.appendChild(item);
    });
    contents.append(title, list);
  }

  function loadLesson(langId, lessonId) {
    const course = Object.hasOwn(courseData, langId) && courseData[langId];
    const lesson = course?.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    saveDraft();
    LearningRunner.stop();
    currentLessonId = lessonId;
    currentCourse = langId;
    learnerStore.state.lastLesson = { lang: langId, id: lessonId, path: currentPath };
    saveProgress();
    setRoute(`#learn/${langId}/${lessonId}?path=${currentPath}`);
    document.title = lesson.title + ' · ZeroToCode Academy';
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
        <h2 id="lesson-heading" tabindex="-1" class="text-3xl font-semibold tracking-tight mb-3">${escHtml(lesson.title)}</h2>
        <nav aria-label="Lesson sections" class="flex flex-wrap gap-3 text-sm font-semibold text-emerald-700 mb-6">
          <a href="#lesson-explanation" onclick="document.getElementById('lesson-explanation').scrollIntoView(); return false;">1. Understand</a>
          <a href="#lesson-practice" onclick="document.getElementById('lesson-practice').scrollIntoView(); return false;">2. Practise</a>
          <a href="#lesson-check" onclick="document.getElementById('lesson-check').scrollIntoView(); return false;">3. Check & continue</a>
        </nav>
        <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 mb-6">
          <div class="flex gap-x-3">
            <i aria-hidden="true" class="fa-solid fa-bullseye text-emerald-700 mt-1"></i>
            <div><span class="font-semibold text-emerald-700">Learning Objective</span>
            <p class="text-emerald-800 mt-1">${lesson.objective}</p></div>
          </div>
        </div>
        ${renderGuideIntro(lesson.guide)}
        <div class="mb-6">
          <h3 class="font-semibold flex items-center gap-x-2 mb-3 text-lg"><i aria-hidden="true" class="fa-solid fa-lightbulb text-amber-500"></i> Why this matters</h3>
          <p class="text-slate-700 leading-relaxed">${lesson.why}</p>
        </div>
        <div id="lesson-explanation" class="mb-8 scroll-mt-24">
          <h3 class="font-semibold mb-4 text-lg flex items-center gap-x-2"><i aria-hidden="true" class="fa-solid fa-book-open text-emerald-700"></i> Full explanation</h3>
          <nav id="lesson-contents" aria-label="Explanation contents" class="hidden border border-slate-200 rounded-2xl p-5 text-sm mb-4"></nav>
          <div class="explanation-body max-w-none text-[15px] leading-7 text-slate-700 space-y-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6">${lesson.explanation}</div>
        </div>
        ${renderTroubleshooting(lesson)}
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

    html += renderWorkedGuide(lesson.guide);

    // Live runner
    html += renderRunner(runnerKind, lesson, langId);

    // Exercises
    if (lesson.exercises && lesson.exercises.length) {
      html += `<div class="mb-8 mt-8"><h3 class="font-semibold mb-4 text-lg flex items-center gap-x-2"><i aria-hidden="true" class="fa-solid fa-tasks text-emerald-700"></i> Practice Exercises</h3>`;
      window.__solutions = {};
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
            ${ex.successCriteria ? `<p class="font-semibold text-sm mb-2">Check your work</p><ul class="list-disc pl-5 mb-4 space-y-1 text-sm text-slate-700">${ex.successCriteria.map(item => `<li>${escHtml(item)}</li>`).join('')}</ul>` : ''}
            <details class="mb-3">
              <summary class="text-sm text-slate-500 cursor-pointer hover:text-emerald-700">Show hint</summary>
              <p class="text-sm text-slate-600 mt-2 bg-slate-50 p-3 rounded-xl">${escHtml(ex.hint || 'Try changing one value at a time.')}</p>
            </details>
            <div class="flex flex-wrap gap-3">
              <button onclick="window.ZeroToCode.showSolution(this, window.__solutions['${solId}'])" class="px-5 py-2 text-sm font-medium bg-white border border-slate-300 rounded-2xl">Show Solution</button>
              <button onclick="window.ZeroToCode.copyText(window.__solutions['${solId}'])" class="px-5 py-2 text-sm font-medium bg-emerald-700 text-white rounded-2xl">Copy Solution</button>
              ${runnerKind !== 'readonly' ? `<button onclick="window.ZeroToCode.loadSolutionInRunner(window.__solutions['${solId}'])" class="px-5 py-2 text-sm font-medium bg-slate-800 text-white rounded-2xl">Load solution in editor</button>` : ''}
            </div>
            <div class="solution-box hidden mt-4 space-y-3"><pre data-solution-code class="p-4 bg-slate-900 text-emerald-200 text-sm rounded-xl font-mono whitespace-pre-wrap break-words"></pre>${ex.solutionExplanation ? `<p class="text-sm leading-6 text-slate-700"><strong>Why this works:</strong> ${escHtml(ex.solutionExplanation)}</p><h4 class="font-semibold text-sm">Reference solution output</h4><pre class="font-mono text-sm whitespace-pre-wrap break-words bg-slate-50 p-3 rounded-xl">${escHtml(ex.expectedOutput)}</pre>` : ''}</div>
          </div>`;
      });
      html += '</div>';
    }

    html += renderRecap(lesson.guide);

    // Quiz
    if (lesson.quiz && lesson.quiz.length) {
      html += `
        <div id="lesson-check" class="mb-8 scroll-mt-24">
          <h3 class="font-semibold mb-2 text-lg flex items-center gap-x-2"><i aria-hidden="true" class="fa-solid fa-question-circle text-indigo-500"></i> Quick Check <span class="text-xs font-normal text-slate-500">(≥70% required to complete)</span></h3>
          <div id="quiz-container-${lessonId}" class="space-y-4"></div>
          <button id="quiz-submit" onclick="window.ZeroToCode.checkQuiz('${lessonId}','${langId}')" class="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold text-sm">Check answers</button>
          <button id="quiz-retry" onclick="window.ZeroToCode.retryQuiz('${langId}','${lessonId}')" class="hidden mt-4 ml-2 px-6 py-3 border border-slate-300 rounded-2xl font-semibold text-sm">Try again</button>
          <div id="quiz-result-${lessonId}" role="status" class="mt-3 text-sm font-medium">${passed ? 'Previously passed. You can practise again without losing your best score.' : ''}</div>
        </div>`;
    }

    html += `
      ${!lesson.quiz?.length ? '<p id="lesson-check" class="text-sm text-slate-600 mb-4 scroll-mt-24">This lesson uses self-review. Complete the practical exercise and compare your work with the solution before marking it complete.</p>' : ''}
      <div class="pt-6 border-t flex flex-col sm:flex-row gap-3">
        <button id="btn-complete-lesson" onclick="window.ZeroToCode.markLessonComplete('${langId}','${lessonId}')"
          ${isCompleted || !passed ? 'disabled' : ''}
          class="flex-1 py-4 font-semibold rounded-2xl text-lg ${isCompleted ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-700 hover:bg-emerald-700 text-white'}">
          ${isCompleted ? '✓ Lesson completed' : passed ? 'Complete lesson · +65 XP' : 'Pass the quick check to complete'}
        </button>
        <button onclick="window.ZeroToCode.showView('dashboard')" class="px-8 py-4 border border-slate-300 rounded-2xl font-semibold">Dashboard</button>
      </div>
      <p class="text-xs text-slate-500 mt-3">Tip: Run code above, try the exercise, then take the quiz. Mastery beats rushing.</p>
      <p id="lesson-announcement" role="status" class="mt-3 text-sm font-medium text-emerald-800"></p>
    </div>`;

    const lessons = filteredLessons(langId);
    const position = lessons.findIndex((l) => l.id === lessonId);
    const previous = lessons[position - 1];
    const next = lessons[position + 1];
    html += `<nav aria-label="Lesson navigation" class="mt-8 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
      ${previous ? `<button onclick="window.ZeroToCode.loadLesson('${langId}','${previous.id}')" class="px-4 py-3 border border-slate-300 rounded-xl text-sm font-semibold">← Previous lesson</button>` : '<span></span>'}
      <span class="text-xs text-slate-500">${position + 1} of ${lessons.length} lessons</span>
      ${next ? `<button onclick="window.ZeroToCode.loadLesson('${langId}','${next.id}')" class="px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold">Next lesson →</button>` : '<button onclick="showView(\'dashboard\')" class="px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold">Review your progress →</button>'}
    </nav>`;

    container.innerHTML = html;
    buildLessonContents();
    if (lesson.quiz && lesson.quiz.length) renderQuiz(lesson.quiz, lessonId);
    if (runnerKind !== 'readonly' && lesson.codeExample) {
      const ed = document.getElementById('code-runner-editor');
      if (ed) {
        ed.dataset.key = quizKey(langId, lessonId);
        ed.value = learnerStore.state.drafts[ed.dataset.key] ?? lesson.codeExample;
        ed.addEventListener('input', saveDraft);
      }
    }
    renderLessonsSidebar(langId);
    document.getElementById('lesson-heading').focus({ preventScroll: true });
    document.getElementById('lesson-heading').scrollIntoView({ block: 'start' });
  }

  function renderRunner(kind, lesson, langId) {
    if (kind === 'readonly') {
      return `<div id="lesson-practice" class="mb-8 scroll-mt-24 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-600">
        <strong class="text-slate-800">Practise on your computer:</strong> ${langId === 'go' ? 'Install Go, create a folder, run <code>go mod init practice</code>, and save the example in <code>main.go</code>. Run <code>go run .</code>.' : 'Install Rust, run <code>cargo new practice</code>, and save the example in <code>practice/src/main.rs</code>. Open the practice folder and run <code>cargo run</code>.'}
        These tracks require a local development environment.
      </div>`;
    }
    const python = kind === 'python';
    return `<section id="lesson-practice" aria-label="Code playground" class="mb-8 scroll-mt-24 border border-slate-200 rounded-2xl overflow-hidden">
      <div class="bg-slate-900 text-slate-200 px-4 py-3 flex justify-between items-center text-sm flex-wrap gap-3">
        <label for="code-runner-editor" class="font-semibold">${python ? 'Python' : 'Web'} playground</label>
        <div class="flex flex-wrap gap-2">
          ${python ? '<button onclick="window.ZeroToCode.runPython()" class="px-4 py-2 bg-emerald-700 text-white rounded-xl font-semibold text-xs">Run Python ▶</button>' : '<button onclick="window.ZeroToCode.runWeb(false)" class="px-3 py-2 bg-yellow-400 text-slate-900 rounded-xl font-semibold text-xs">Run JS ▶</button><button onclick="window.ZeroToCode.runWeb(true)" class="px-3 py-2 bg-emerald-700 text-white rounded-xl font-semibold text-xs">Preview HTML</button>'}
          <button id="runner-stop" disabled onclick="LearningRunner.stop('Run stopped. You can edit your code and try again.')" class="px-3 py-2 bg-slate-700 text-white rounded-xl text-xs">Stop</button>
        </div>
      </div>
      <textarea id="code-runner-editor" maxlength="20000" aria-describedby="runner-help draft-status" class="block w-full h-56 p-4 font-mono text-sm bg-slate-950 text-emerald-200" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>
      <div class="px-4 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap justify-between gap-2 text-xs"><span id="draft-status" class="text-slate-600">Your code saves on this browser as you type</span><button onclick="window.ZeroToCode.resetExample()" class="text-emerald-800 font-semibold">Reset to example</button></div>
      <p id="runner-help" class="px-4 py-3 text-xs text-slate-600">${python ? 'The first run downloads Python. Each run starts fresh; files are temporary. Add input below for input() calls. Database connections and desktop graphics need a local setup.' : 'Run JS executes console code for up to 5 seconds. For DOM exercises, include the page HTML and a &lt;script&gt; tag, then use Preview HTML.'}</p>
      ${python ? '<details class="px-4 pb-3 text-sm"><summary class="cursor-pointer text-emerald-800 font-semibold">Program input</summary><label for="runner-stdin" class="block text-xs text-slate-600 my-2">One line per input() call. Add these before running.</label><textarea id="runner-stdin" class="w-full border border-slate-300 rounded-lg p-2 font-mono text-sm" rows="3" maxlength="20000"></textarea></details>' : ''}
      <div class="px-4 py-2 bg-slate-900 text-slate-300 text-xs font-semibold">OUTPUT</div>
      <pre class="bg-slate-950 text-emerald-200 p-4 font-mono text-sm min-h-[6rem] max-h-80 overflow-auto whitespace-pre-wrap break-words" id="code-runner-output" role="status" aria-live="polite">Run the code to see what happens.</pre>
      ${!python ? '<iframe id="code-runner-frame" class="w-full h-56 bg-white border-0" sandbox="allow-scripts" referrerpolicy="no-referrer" title="Your HTML preview"></iframe>' : ''}
    </section>`;
  }

  function runPython() { LearningRunner.run('python'); }
  function runWeb(asHtml) { asHtml ? LearningRunner.preview() : LearningRunner.run('javascript'); }

  function loadSolutionInRunner(code) {
    const ed = document.getElementById('code-runner-editor');
    if (ed) {
      if (ed.value !== code && !confirm('Replace your current draft with this solution?')) return;
      ed.value = code;
      saveDraft();
      ed.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function resetExample() {
    if (!confirm('Replace this lesson’s saved draft with the original example?')) return;
    const lesson = courseData[currentCourse].lessons.find((l) => l.id === currentLessonId);
    document.getElementById('code-runner-editor').value = lesson.codeExample;
    saveDraft();
  }

  function renderQuiz(quizQuestions, lessonId) {
    const container = document.getElementById('quiz-container-' + lessonId);
    if (!container) return;
    container.innerHTML = '';
    quizQuestions.forEach((q, qIndex) => {
      const qDiv = document.createElement('fieldset');
      qDiv.className = 'border border-slate-200 rounded-2xl p-5';
      qDiv.innerHTML = `<legend class="font-medium px-1">${qIndex + 1}. ${escHtml(q.q)}</legend>
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
        </div><p id="q-feedback-${lessonId}-${qIndex}" class="mt-3 text-sm"></p>`;
      container.appendChild(qDiv);
    });
  }

  function checkQuiz(lessonId, langId) {
    const course = courseData[langId];
    const lesson = course.lessons.find((l) => l.id === lessonId);
    if (!lesson?.quiz?.length || document.getElementById('quiz-submit').disabled) return;
    const selections = lesson.quiz.map((_, i) => document.querySelector(`input[name="quiz-${lessonId}-${i}"]:checked`));
    const res = document.getElementById('quiz-result-' + lessonId);
    if (selections.some((selection) => !selection)) {
      res.textContent = 'Answer every question before checking. Take your time — there is no penalty for trying.';
      return;
    }
    let correctCount = 0;
    lesson.quiz.forEach((q, qIndex) => {
      const selectedVal = Number(selections[qIndex].value);
      if (selectedVal === q.correct) correctCount++;
      const optionsDiv = document.getElementById(`q-options-${lessonId}-${qIndex}`);
      if (optionsDiv) {
        optionsDiv.querySelectorAll('input').forEach((input) => {
          input.disabled = true;
          const option = Number(input.value);
          if (option === q.correct) input.parentElement.classList.add('bg-emerald-50');
          else if (option === selectedVal) input.parentElement.classList.add('bg-red-50');
        });
        const feedback = document.getElementById(`q-feedback-${lessonId}-${qIndex}`);
        feedback.textContent = (selectedVal === q.correct ? 'Correct. ' : `Not quite. The answer is “${q.options[q.correct]}”. `) + (q.explanation || 'Review the example and try again.');
      }
    });
    const pct = Math.round((correctCount / lesson.quiz.length) * 100);
    quizScores[quizKey(langId, lessonId)] = Math.max(quizScores[quizKey(langId, lessonId)] || 0, pct);
    saveProgress();
    document.getElementById('quiz-submit').disabled = true;
    document.getElementById('quiz-retry').classList.remove('hidden');
    if (res) {
      res.textContent =
        pct >= 70
          ? `Score ${pct}% — passed! You can mark the lesson complete.`
          : `Score ${pct}% — review the feedback and try again. ${hasPassedQuiz(langId, lessonId) ? 'Your earlier passing score is saved.' : 'You need at least 70% to complete.'}`;
      res.className = 'mt-3 text-sm font-medium ' + (pct >= 70 ? 'text-emerald-700' : 'text-red-600');
    }
    // refresh complete button state
    const btn = document.getElementById('btn-complete-lesson');
    if (btn && hasPassedQuiz(langId, lessonId) && !(progress[langId] || []).includes(lessonId)) {
      btn.textContent = 'Complete lesson · +65 XP';
      btn.disabled = false;
    }
  }

  function retryQuiz(langId, lessonId) {
    renderQuiz(courseData[langId].lessons.find((l) => l.id === lessonId).quiz, lessonId);
    document.getElementById('quiz-submit').disabled = false;
    document.getElementById('quiz-retry').classList.add('hidden');
    document.getElementById('quiz-result-' + lessonId).textContent = 'A fresh attempt. Your best score stays saved.';
    document.querySelector(`#quiz-container-${lessonId} input`).focus();
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
    const button = document.getElementById('btn-complete-lesson');
    button.textContent = '✓ Lesson completed — ready for the next one';
    button.disabled = true;
    document.getElementById('lesson-announcement').textContent = 'Lesson completed. Your progress is saved. Use Next lesson when you are ready.';

    // celebrate path completion
    if (langId === 'python' && currentPath === 'beginner') {
      const beginner = courseData.python.lessons.filter((l) => l.path === 'beginner');
      const done = beginner.every((l) => (progress.python || []).includes(l.id));
      if (done) {
        document.getElementById('lesson-announcement').textContent = 'Beginner path complete! Your completion certificate is available on the dashboard.';
      }
    }

  }

  function showSolution(btn, solution) {
    const box = btn.closest('.exercise-box').querySelector('.solution-box');
    if (!box) return;
    box.querySelector('[data-solution-code]').textContent = solution;
    box.classList.toggle('hidden');
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text || '');
      document.getElementById('lesson-announcement').textContent = 'Code copied.';
    } catch {
      document.getElementById('lesson-announcement').textContent = 'Could not access the clipboard. Select the code and copy it using your device’s copy command.';
    }
  }

  function printCertificate() {
    const lessons = courseData.python.lessons.filter((l) => l.path === 'beginner');
    if (!lessons.length || !lessons.every((l) => progress.python.includes(l.id))) return;
    const name = prompt('Your name on the certificate:', 'Learner') || 'Learner';
    const w = window.open('', '_blank');
    if (!w) { alert('Allow pop-ups to open your completion certificate.'); return; }
    w.document.write(`<!DOCTYPE html><html><head><title>Certificate</title>
      <style>body{font-family:Georgia,serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f8fafc}
      .c{border:8px solid #059669;padding:3rem;max-width:640px;text-align:center;background:white}
      h1{color:#059669;margin:0} h2{margin:1rem 0}</style></head><body>
      <div class="c"><p>ZeroToCode Academy</p><h1>Certificate of Completion</h1>
      <p>This certifies that</p><h2>${escHtml(name)}</h2>
      <p>completed the <strong>Python Beginner Builder</strong> path</p>
      <p>Personal learning record · Self-paced study · Not an accredited qualification</p>
      <p style="margin-top:2rem;color:#64748b">${new Date().toLocaleDateString()}</p>
      </div></body></html>`);
    w.document.close();
  }

  function startLearning() {
    startPythonPath('beginner');
  }

  function resumeLearning() {
    const last = learnerStore.state.lastLesson;
    if (last) startCourse(last.lang, last.id, last.path);
    else startLearning();
  }

  function exportProgress() {
    saveDraft();
    const blob = new Blob([learnerStore.export()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zerotocode-backup-' + LearningState.localDay() + '.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function importProgress(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const status = document.getElementById('backup-status');
    try {
      if (file.size > 6000000) throw new Error('Choose a ZeroToCode backup smaller than 6 MB.');
      const saved = learnerStore.import(await file.text());
      progress = learnerStore.state.progress;
      quizScores = learnerStore.state.scores;
      // Refresh the hidden editor so it cannot overwrite a restored draft later.
      document.getElementById('lesson-content').innerHTML = '';
      updateDashboard();
      status.textContent = saved ? 'Backup restored. Completed lessons and best scores are combined; existing drafts on this browser are kept.' : 'Backup restored in memory. Browser storage is unavailable; download a backup before leaving.';
    } catch (error) { status.textContent = error.message; }
    event.target.value = '';
  }

  function resetProgress() {
    if (confirm('Delete all saved progress, quiz scores, code drafts, and streaks on this browser? Download a backup first if you want to keep them.')) {
      const cleared = learnerStore.reset();
      progress = learnerStore.state.progress;
      quizScores = learnerStore.state.scores;
      document.getElementById('lesson-content').innerHTML = '';
      updateDashboard();
      document.getElementById('backup-status').textContent = cleared ? 'Learning data reset on this browser.' : 'Could not clear browser storage. Your saved data may return when the page reloads.';
    }
  }

  function initializeEverything() {
    updateHomeCounts();
    updateStreakUI();
    readRoute();
    window.addEventListener('hashchange', readRoute);
    window.addEventListener('pagehide', saveDraft);
  }

  window.ZeroToCode = {
    showView,
    startCourse,
    startPythonPath,
    startLearning,
    loadLesson,
    checkQuiz,
    retryQuiz,
    markLessonComplete,
    showSolution,
    copyText,
    runPython,
    runWeb,
    loadSolutionInRunner,
    resetExample,
    printCertificate,
    resumeLearning,
    exportProgress,
    importProgress,
    resetProgress,
    getProgress: () => progress,
    courseData
  };

  // global aliases used by HTML onclick
  window.showView = showView;
  window.startCourse = startCourse;
  window.startLearning = startLearning;

  initializeEverything();
})();
