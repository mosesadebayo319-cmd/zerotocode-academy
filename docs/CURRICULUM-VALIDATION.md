# Running curriculum examples

`npm test` executes the standard-library Python and JavaScript examples. The browser suite covers HTML examples. Go and Rust examples run when `go` and `rustc` are available on `PATH`; otherwise those groups are reported as skipped.

Some Python lessons intentionally use optional packages. To validate those examples, create a separate virtual environment and install the dependencies:

```bash
python3 -m venv .venv-curriculum
. .venv-curriculum/bin/activate
python -m pip install numpy pandas matplotlib scipy scikit-learn Django
ACADEMY_PYTHON="$PWD/.venv-curriculum/bin/python" ACADEMY_FULL_CURRICULUM=1 npm test
```

On Windows, activate the environment with `.venv-curriculum\Scripts\activate` and set `ACADEMY_PYTHON` to `.venv-curriculum\Scripts\python.exe`.

The Python package examples are deterministic, local programs; the Django lesson uses its in-process test client. Database service examples, if added, must document and validate their service setup separately. Skipped groups are not verified, so review the test summary before treating a run as complete.
