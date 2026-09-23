# pipeline-deploy-demo

Simple Hello World Node.js app used to demonstrate a GitHub Actions pipeline
with 4 stages and an ephemeral deployment.

## App

Runs a plain HTTP server that responds with a Hello World message.

```bash
node app.js
# in another shell
curl http://localhost:3000/
```

## Pipeline

Defined in `.github/workflows/pipeline.yml`. It has 4 sequential jobs, each
with a `sleep 15` step so the run is easy to demo:

1. **Build** – packages `app.js` into a `dist/` folder and uploads it as an
   artifact.
2. **Test** – downloads the artifact and runs a small smoke test.
3. **Deploy (ephemeral)** – downloads the artifact, starts the app on the
   GitHub-hosted runner, curls it to prove it works, then kills the process.
   Because it runs on an ephemeral runner, the "deployment" dies with the job.
4. **Cleanup** – prints a summary. The environment is already gone at this
   point.

## Trigger

The pipeline runs on pushes/PRs to `main` and can also be started manually via
the **Run workflow** button (`workflow_dispatch`).

## Publish to GitHub

```bash
git init
git add .
git commit -m "chore: initial pipeline demo"
git branch -M main
git remote add origin https://github.com/brunoxy01/pipeline-deploy-demo.git
git push -u origin main
```
