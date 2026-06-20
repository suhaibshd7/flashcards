# Flashcard App — Exam Authoring Guide

Use this guide to generate new exam `.js` files. Each file pushes one or more exams into the app without touching `index.html`.

---

## File Structure

```
window.RAW_EXAMS_PENDING.push({
  subject: 'Subject Name',   // groups exams on the Home screen tile
  title:   'Exam Title',     // shown inside the subject screen
  raw: `...cards here...`
});
```

- One `.push()` call = one exam tile.
- Multiple exams in one file: call `.push()` multiple times.
- Upload the file into the `exams/` folder on GitHub. `manifest.json` updates itself automatically — a GitHub Action regenerates it on every push into `exams/`, so you never edit it by hand.
- Display order follows alphabetical filename order. Name files so they sort the way you want them to appear (e.g. give chapters a consistent number prefix like `ch06`, `ch07` — not `ch6`, `ch7`, which would sort `ch10` before `ch2`).

---

## Card Formats (inside the `raw` template literal)

Separate cards from each other with a **blank line**.

### 1 — MCQ (Single correct answer)

```
Question text here: >> X)
* First choice
* Second choice
* Third choice
* Fourth choice

```

- `>> X)` marks the card as MCQ. The letter indicates which `*` line is correct by position:
  - `>> A)` → 1st `*` line is correct
  - `>> B)` → 2nd `*` line is correct
  - `>> C)` → 3rd `*` line is correct
  - `>> D)` → 4th `*` line is correct
- Any number of choices allowed (not limited to 4).
- Choices are shuffled randomly at runtime — position in the file matches the letter.

---

### 2 — Multi (Multiple correct answers)

```
Question text here: >> A) C)
* Choice A (correct)
* Choice B (wrong)
* Choice C (correct)
* Choice D (wrong)

```

- Use **two or more letters** after `>>` to mark multiple correct positions.
- The user must select ALL correct choices and NONE of the wrong ones to score correctly.
- Each choice lights up green or red immediately when clicked.
- Shown as `◉` in the session counter to signal multi-select.
- Scoring is all-or-nothing — any wrong click or any missed correct answer = wrong.

---

### 3 — True / False

```
Statement text :: T
Another statement :: F

```

- `:: T` or `:: True` = answer is True
- `:: F` or `:: False` = answer is False
- Case-insensitive.

---

### 4 — Q&A (Direct answer)

```
Term or question → Answer text here

```

- Uses `→` (or `->` or `–>`).
- No choices — the answer is revealed on click.

---

### Optional explanation (all card types)

Add `-- ` on the line immediately after any card to show an explanation after answering:

```
Question: >> A)
* Correct answer
* Wrong
* Wrong
* Wrong
-- This explanation is shown after the user answers.

Which are features of portal hypertension >> A) C)
* Splenomegaly
* Tachycardia
* Ascites
* Fever
-- Splenomegaly and ascites are classic features; tachycardia and fever are not specific.

Cirrhosis is reversible :: F
-- Cirrhosis involves irreversible fibrosis and regenerative nodules.

Portal vein diameter → 13 mm maximum
-- Values above 13 mm suggest portal hypertension on ultrasound.

```

---

## Complete Example File

```
window.RAW_EXAMS_PENDING.push({
  subject: 'Diagnosis',
  title: 'ch6)Hepatobiliary System',
  raw: `Accumulation of fat globules within liver cells describes: >> A)
* Fatty degeneration of the liver
* Cirrhosis
* Hepatic abscess
* Haemangioma
-- Fat accumulates due to impaired lipid metabolism, not inflammation.

Features of portal hypertension on imaging — select all that apply: >> A) B) D)
* Splenomegaly
* Ascites
* Gallstones
* Dilated portal vein
-- Gallstones are not a direct feature of portal hypertension.

Cirrhosis is characterised by irreversible fibrosis :: T
-- Unlike fatty change, cirrhosis cannot be reversed.

The most common benign liver tumour is → Haemangioma
-- Haemangiomas are vascular tumours, usually found incidentally on imaging.`
});
```

---

## Naming Convention

| File (upload into the `exams/` folder) |
| --------------------------------------- |
| `exam-diagnosis-ch6-hepatobiliary.js`   |
| `exam-chest-radiology.js`               |

Filename format: `exam-{subject-slug}-{title-slug}.js`

No manifest entry to add by hand — upload into `exams/` and it appears in `manifest.json` automatically within a few seconds.

---

## Prompt Template (paste into a new chat)

> You are generating exam content for a flashcard app. Output a single `.js` file using this exact format:
>
> ```
> window.RAW_EXAMS_PENDING.push({
> subject: 'SUBJECT',
> title: 'TITLE',
> raw: `CARDS`
> });
> ```
>
> Card format rules:
>
> - **MCQ** (one correct): `Question: >> X)` where X = position of correct answer (A=1st, B=2nd, etc). List choices with `* ` prefix.
> - **Multi** (multiple correct): `Question: >> A) C)` — list two or more letters for the correct positions.
> - **True/False**: `Statement :: T` or `Statement :: F`
> - **Q&A**: `Question → Answer`
> - **Explanation** (optional, any type): `-- explanation text` on the line immediately after the card.
> - Separate cards with a blank line. No backticks inside the template literal (escape as `` \` `` if needed).
>
> Convert these questions (correct answers indicated):
> [PASTE QUESTIONS HERE]
> Subject: [SUBJECT]
> Title: [TITLE]
