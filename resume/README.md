# Resume

`resume.tex` is the LaTeX source for the general CV; `resume.pdf` is the compiled output kept in version control since there's no build pipeline for this repo.

`resume-eb1.tex` is the detailed EB-1 petition version (exhaustive dates, employer addresses, job descriptions). `resume-eb1.pdf` is its compiled output.

To recompile after editing (from the repository root directory):

```bash
cd resume && pdflatex -interaction=nonstopmode resume.tex && pdflatex -interaction=nonstopmode resume.tex
```

```bash
cd resume && pdflatex -interaction=nonstopmode resume-eb1.tex && pdflatex -interaction=nonstopmode resume-eb1.tex
```

(Run twice so cross-references resolve correctly.)
