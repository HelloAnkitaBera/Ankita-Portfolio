# HelloAnkita.dev ✦ Cyberpunk Portfolio

A highly premium, futuristic, and responsive personal developer portfolio website designed for **Ankita Bera**—an AI & ML Student and Creative Coder. Built using semantic HTML5, modern modular CSS3, and dynamic vanilla JavaScript.

---

## 🎨 Visual Design & Theme

- **Cyberpunk Aesthetics:** Styled with a sleek, dark glassmorphism (radial backgrounds with dark-blue depths) and vibrant neon accents (Cyan, Purple, Pink).
- **Drifting Bokeh Lights:** Subtle, performance-optimized background animations that drift lazily to create a premium, deep-space environment.
- **Futuristic Typography:** Curated typography pairing using Google Fonts:
  - **Heading Font:** `Space Grotesk` (clean, geometric, futuristic)
  - **Primary Body Font:** `Plus Jakarta Sans` (highly readable, modern sans-serif)

---

## 🚀 Key Features

### 1. Dynamic Navigation HUD
- **Auto-Styling Header:** Shrinks and adds blur/opacity backdrops dynamically as the user scrolls.
- **Active Section Highlighting:** Employs an `Intersection Observer` to automatically highlight the current navbar section in real-time.
- **Floating Scroll Tracker:** A custom back-to-top circular HUD button displaying the user's scroll progress in a styled gradient ring.

### 2. Micro-Animations & Interactivity
- **Typewriter Hero Badge:** Cycles smoothly through developer roles:
  - *AI & ML Developer*
  - *Python Developer*
  - *Full Stack Developer*
- **Floating Particle System:** Responsive canvas element (`js/components/particles.js`) that renders drifting, interactive node networks behind the UI.
- **Cyberpunk Cursor:** Custom cursor highlighting interactive hover targets.
- **Orbits Animation:** Profile frame decorated with rotating planetary neon rings.

### 3. Modular CS Skills Toolkit
- **Glassmorphism Tech Cards:** Organized categorizations for:
  - **Frontend:** HTML5, CSS3, JavaScript, React, Responsive Design
  - **Backend:** Python, Flask, REST API, JSON
  - **Databases:** MySQL, SQLite
  - **AI & Machine Learning:** Machine Learning concepts, NumPy, Pandas, Scikit-learn
  - **Tools:** Git, GitHub, VS Code, Postman, Figma
  - **Core CS:** DSA, OOP, DBMS, OS, Computer Networks, Software Engineering
- **Infinite Marquee Ticker:** A smooth, CSS-only horizontal ticker scrolling key technical fields at the bottom of the section.

### 4. Real-Time GitHub Dashboard
- **Live Stats Fetching:** Integrates directly with the GitHub API to dynamically pull:
  - Repositories, Followers, Forks, and Star counts.
  - Total Commit count (with smart local caching to prevent rate limiting).
- **Interactive Heatmap Calendar:** Renders a customized, year-selectable (2025/2026) contribution grid similar to GitHub's profile heatmap.
- **Doughnut Language Breakdown:** Dynamic SVG doughnut chart illustrating programming language distribution across public repositories.

---

## 📁 Repository Structure

```text
HelloAnkita/
├── CSS/
│   ├── components/
│   │   ├── about.css       # Layout & orbits animations for the About section
│   │   ├── global.css      # Base reset, scrollbars, and drifting background glows
│   │   ├── home.css        # Hero structure, typewriter styling, and profile glows
│   │   ├── navbar.css      # Navigation bar, mobile toggles, and HUD tracking
│   │   ├── stats.css       # GitHub dashboard layouts, grids, calendar & charts
│   │   └── variables.css   # HSL tailored color palette & typography tokens
│   └── style.css           # Main CSS entry importing modular components
├── js/
│   └── components/
│       ├── github.js       # Live GitHub API fetching, heatmap rendering, & SVG chart
│       ├── navbar.js       # Navbar states, smooth scroll offsets, & active highlights
│       ├── parallax.js     # Smooth layout movement based on mouse trajectory
│       ├── particles.js    # Canvas particle background physics & node connections
│       └── typewriter.js   # Dynamic string typewriter animation for hero tags
├── assets/
│   ├── profile.jpg         # Profile picture asset
│   └── resume.pdf          # Professional CV for download
├── index.html              # Main HTML entry file
└── README.md               # Repository documentation
```

---

## 🛠️ Getting Started & Hosting

### Run Locally
Since this is a client-side static web application, no complex build toolchains are required. You can load it directly in any modern browser:

1. **Option A (Direct File):** Simply open `index.html` in your web browser.
2. **Option B (Recommended for Live Features):** Serve the folder using a local web server to bypass CORS issues on some local files.
   - **VS Code:** Install the **Live Server** extension and click **Go Live**.
   - **Python:** Run the following command in your terminal inside the project root:
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000`.

### Customizing for Your Profile
To customize the portfolio for yourself:
1. Open [index.html](file:///g:/My%20Drive/AB/HelloAnkita/index.html) and update the text content (Bio, Location, Resume links).
2. Open [js/components/github.js](file:///g:/My%20Drive/AB/HelloAnkita/js/components/github.js) and change the `DEFAULT_USERNAME` to your GitHub username:
   ```javascript
   const DEFAULT_USERNAME = "YourGitHubUsername";
   ```
3. Replace `assets/profile.jpg` and `assets/resume.pdf` with your own assets.
