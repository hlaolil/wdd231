# WDD 231 — Web Frontend Development I

My coursework for WDD 231 (Web Frontend Development I) at BYU–Pathway Worldwide. It covers JSON data, the Fetch API, third-party APIs, modal dialogs, forms and `localStorage`.

**Live site:** https://hlaolil.github.io/wdd231/

## Projects

| Project | What it does |
| --- | --- |
| [Course home](https://hlaolil.github.io/wdd231/) | About me, links to the course projects, and the Web and Computer Programming certificate courses. You can filter the courses by WDD or CSE, open each one in a modal for details, and see the credit total |
| [Chamber of Commerce](https://hlaolil.github.io/wdd231/chamber/) | "LSH Group Chamber" site. The directory loads members from `data/member.json` in grid or list view. Home shows current weather and a forecast from OpenWeatherMap, plus member spotlights. Discover loads places from JSON and tracks visits with `localStorage`. Join has a membership form and a thank-you page |
| [Revival Fellowship International](https://hlaolil.github.io/wdd231/project/) | Final project for RFI (Butha-Buthe): home with events and contacts, about, ministries loaded from `ministries.json`, a join form with a thank-you page, and a site plan (`rfiplan.html`) |
| `weather.html` | OpenWeatherMap API practice |

## Structure

```
index.html            course home
scripts/chamber.js    course list, modal and navigation for the home page
styles/               shared styles and normalize.css
chamber/              Chamber of Commerce site (data/, scripts/, styles/)
project/              Revival Fellowship International site (data/, scripts/, styles/)
```

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

The JSON files are loaded with `fetch`, so open the pages through a server rather than as files. GitHub Pages publishes the `main` branch.
