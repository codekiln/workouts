# Workouts

A weekly training plan built from Andrew Huberman's *Protocols* (2026), Chapter 2, with a set-by-set log, a quiz on how the plan works, and a prompt for coaching by voice with an AI assistant.

Site: https://codekiln.github.io/workouts/

## Using it

- Open the site on your phone. The **Session** tab shows the day's workout. Saturday is Day 1.
- Fill in load, reps and reps in reserve as you go. Entries save automatically.
- Set **Born** (year and month) at the top of the page to see heart-rate targets on the cardio days.
- The log is saved in the browser you use and is not sent anywhere. Clearing the browser's site data erases it. Use **Export log** on the **History** tab to keep a backup or to move the log to another device, and **Import a file…** on the same tab to load it there.

## Coaching by voice

1. On the **Session** tab, press **Copy prompt** under **Voice session**.
2. Paste it into a new chat in ChatGPT, or any assistant with a voice mode, send it, then switch to voice.
3. Say "starting" and "done, 135 for 8, two left" as you go. When you say "wrap up", the assistant gives a JSON report.
4. Paste the report into **Import the session report** on the **Session** tab, or save it as a file and use **Import a file…** on the **History** tab.

The prompt includes the day's plan and what you logged last time, so copy a fresh one for each workout.

## Make your own copy

You can run your own copy of this site, with your own plan, for free on GitHub Pages. You need a GitHub account.

1. **Fork the repository.** Sign in to GitHub, open [github.com/codekiln/workouts](https://github.com/codekiln/workouts), press **Fork** at the top right, then **Create fork**. You now have `github.com/<your-username>/workouts`.
2. **Turn on GitHub Pages.** In your fork, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch `main` and folder `/ (root)`, and press **Save**.
3. **Open your site.** After a minute or two, the top of the Pages settings shows its address, `https://<your-username>.github.io/workouts/`. Refresh the settings page if the address isn't there yet.

Each change you commit to `main` republishes the site within a couple of minutes.

Your log does not carry over to your copy, because each site address keeps its own log. To bring it along, press **Export log** on the **History** tab of this site, then **Import a file…** on the same tab of yours.

### Changing the plan

Edit a file on GitHub by opening it, pressing the pencil icon, and then **Commit changes**. Or clone your fork and ask an AI coding assistant to make the change; the [Files](#files) section tells it where each part lives.

- **The header:** "codekiln's training week" is in `index.html`.
- **The fork badge:** the link at the top of `index.html` points to this repository. Point it to your fork if you'd like visitors to copy yours.
- **A day's exercises:** each day in `PLAN` in `app.js` has a `title`, a `kind` (`lift`, `cardio` or `rest`), a time budget, an `intro`, `mob: true` to add the mobility circuit, and a list of `blocks`, one per exercise. A block has:
  - `ex`: an exercise id from `EX`
  - `alt`: ids the page offers as swaps
  - `sets`, `unit` (`reps`, `sec`, `min` or `rounds`), and the range `min` to `max`
  - `rest`: the rest between work sets in seconds, as `[shortest, longest]`
  - `perSide`, `optional` and `note`, as needed
- **A new exercise:** add an entry to `EX` with a new id, a `name`, a `kind` (`strength`, `hold`, `cardio` or `mobility`), the muscles it works in `m` (main muscles in `p`, others in `s`), and `setup`, `practice` and `cues` text. A description in `DESC` and photos in `PHOTOS` are optional. Then use the id in a block.
- **Which weekday is Day 1:** `dayFor` and `weekStart` in `app.js` map weekdays to `D1` to `D7`, and each day's `wd` names its weekday.
- **Quiz questions:** `QUIZ` in `app.js`. The first option in each question's `o` list is the right answer; the page shuffles them.

## Files

- `index.html`: the page layout
- `style.css`: styles, with light and dark themes
- `app.js`: everything else
  - `EX`: the exercise library (setup, movement, cues, muscles, demonstration links)
  - `DESC`: plain-language description of each exercise
  - `PLAN`: the seven days, each a list of blocks with sets, rep range and rest
  - `MOB_BLOCKS`: the mobility circuit
  - `QUIZ`: quiz questions
  - `voicePrompt`: the voice-coaching prompt
  - `localDB`: the log, kept in the browser's `localStorage` under the key `wk.log.v1`
- `img/`: exercise photos from Wikimedia Commons; each photo's author and licence are in its caption on the page

## Log format

**Export log** saves a file like this. **Import a file…** accepts the same shape, and also a voice session report.

```json
{
  "type": "workouts-log",
  "version": 1,
  "sessions": {
    "2026-11-08": {
      "date": "2026-11-08",
      "day": "D2",
      "ex": {
        "back-squat": {
          "warmups": [{ "load": 55, "reps": 8 }],
          "sets": [{ "load": 135, "reps": 8, "rir": 2 }]
        }
      },
      "notes": "left knee a bit stiff",
      "steps": 7200,
      "sleep": 7.5,
      "bw": 180
    }
  },
  "quiz": {},
  "settings": { "main": { "unit": "lb", "birthYear": 1990, "birthMonth": 4 } }
}
```

- `day` is `D1` (Saturday) to `D7` (Friday).
- Keys under `ex` are the exercise ids in `EX`, such as `back-squat`, `bench` or `easy-run`.
- Lifts use `load`, `reps` and `rir`. Holds use `sec`. Cardio uses `min` or `rounds`, with `hr` and `note`.
- Importing replaces any date that is in the file and keeps the rest.
