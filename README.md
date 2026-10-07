# Michael Milowski Portfolio

A static portfolio site built with plain HTML, CSS, and JavaScript. It has no build step and is ready for GitHub Pages.

## Edit the content

Open `content.js`. All page copy, section labels, project descriptions, résumé entries, links, and contact details live in that file.

The portrait used on the Home and About pages is set by `aboutPhoto` in `content.js`. To replace it, add the new image to `assets/images/` and update that path.

## Preview locally

Double-click `index.html`, or use any simple local web server. The site uses only relative file paths.

## Publish with GitHub Pages

1. Create a new empty repository on GitHub. A name like `michael-portfolio` works well.
2. Upload every file and folder from this directory to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then click **Save**.
6. GitHub will publish the site and show its URL on that same Pages settings screen. The first deployment can take a few minutes.

## Publish from Git on your computer

Run these commands from this folder after creating an empty GitHub repository:

```text
git init
git add .
git commit -m "Launch portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Then enable GitHub Pages using steps 3–6 above.
