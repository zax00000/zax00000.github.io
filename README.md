# Mateusz Świderski — Portfolio

Live at **https://zax00000.github.io**

Game programmer portfolio: enemy AI in Unity and online multiplayer in Unreal Engine 5,
built for three team projects at Futuregames.

A static site — plain HTML, CSS and JavaScript, no build step and no dependencies —
hosted on GitHub Pages.

## Updating the site

All content lives in **`js/data.js`**: name, links, skills, education and every project.
`js/main.js` renders it, so content changes never need the HTML.

| To change… | Edit |
| --- | --- |
| Text, links, skills, education, projects | `js/data.js` |
| Page title and link-preview text | top of `index.html` |
| Colours and spacing | `:root` block at the top of `css/styles.css` |

Then bump the cache-busting version and publish:

```bash
sed -i "s/?v=[0-9]*/?v=$(date +%Y%m%d%H%M)/g" index.html
git add -A
git commit -m "Update portfolio"
git push
```

GitHub Pages redeploys automatically; changes are live within a minute or two.

The `sed` line matters: GitHub Pages tells browsers to cache files for 10 minutes, so
anyone who visited recently would otherwise keep seeing the old `data.js`. Changing the
`?v=` number in `index.html` makes the browser treat the files as new. If you still see
an old version, press **Ctrl + F5**.

## Adding a project

Copy an existing entry in the `PROJECTS` array in `js/data.js`.

- `featured: true` — large card under **Selected Work**
- `featured: false` — compact card under **Personal Projects** (the section and its
  sidebar link appear automatically once there is at least one)

Images go in `assets/games/<project-id>/` — the folder name must match the project's
`id`. Use 16:9 JPEGs around 1600 px wide and under ~400 KB: `thumb.jpg` for the card,
`01.jpg`, `02.jpg`… for the gallery. A project without images gets generated cover art
instead of a broken-image icon.

For a trailer, set `video` to a YouTube **embed** URL
(`https://www.youtube.com/embed/VIDEO_ID`).

Every project also has a direct link: `https://zax00000.github.io/#project=ecdysis`.

## Local preview

Open `index.html` in a browser — no server needed.
