# Simple Web Calculator

A clean, minimalist, and responsive web-based calculator built using semantic HTML, CSS Grid, and JavaScript.

![Calculator Preview](./Screenshot%202026-06-06%20142003.png)

## 🚀 Features

- **Grid Layout:** Perfectly aligned buttons using CSS Grid.
- **Modern Design:** Dark mode UI with smooth hover and active state animations.
- **Responsive:** Adapts naturally to desktop and mobile screens.
- **Smart Backspace:** Delete mistakes character by character with the `←` button.
- **Safe Calculation:** Utilizes modern JavaScript execution scopes rather than insecure global evaluation methods.

---

## 🛠️ Built With

- **HTML5:** Dynamic text display inputs and button structures.
- **CSS3:** Flexbox, Grid, custom color variables, and transition effects.
- **JavaScript (ES6):** Functional math manipulation and DOM handling.

---

## 📖 How It Works (Technical Deep Dive)

The core math processor behind this calculator relies on this optimized JavaScript execution string:

```javascript
Function('"use strict";return (' + display.value + ")")();
```
