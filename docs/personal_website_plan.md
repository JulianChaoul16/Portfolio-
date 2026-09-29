# Personal Website — Brand & Build Plan

## Project Goal

Create a personal website that acts as the digital home for **Julian Chaoul / Project_Julian**.

The site should feel like a mix of:

- Personal publication
- Engineering portfolio
- Public build log
- Learning journal
- Content hub

The site should **not** feel like a traditional résumé website.

Core brand:

> **Learn. Build. Reflect.**

---

# 1. Visual Direction

## Overall Feel

Minimal, editorial, technical, organic.

The visual identity should combine:

- Warm cream / off-white background
- Near-black text
- Deep forest / olive green accents
- Serif display typography
- Clean sans-serif body text
- Monospace technical details
- Thin borders
- Large whitespace
- Pixelated technical motifs
- Botanical imagery

## Brand Motifs

Use pixelated tree imagery as a recurring visual system.

### Cedar of Lebanon
Represents:
- Strength
- Roots
- Systems
- Long-term thinking

Best used in:
- Hero
- Build section
- Footer

### Olive Tree
Represents:
- Patience
- Longevity
- Reflection
- Wisdom

Best used in:
- About
- Reflection writing
- Footer

### Fig Tree
Represents:
- Curiosity
- Growth
- Learning
- Abundance

Best used in:
- Blog
- Learning sections

## Pixel Style

The trees should not look like retro video game sprites.

Instead:

- Organic tree silhouette / photography
- Portions dissolve into square pixels
- Fine grid overlays
- Tiny coordinate labels
- Code-like text
- Sparse geometric marks
- Pixel fragments extending into whitespace

Think:

> nature being translated into data

---

# 2. Color Palette

Suggested starting palette:

```css
--background: #F3F0E8;
--surface: #EAE5D9;
--text: #171815;
--muted: #77756D;
--green: #234F3D;
--olive: #6E7651;
--border: #CBC6B9;
```

The colors can be adjusted during implementation.

---

# 3. Typography

## Display / Headings

Use an editorial serif.

Possible fonts:

- Instrument Serif
- DM Serif Display
- Cormorant Garamond

## Body

Use a clean modern sans-serif.

Possible fonts:

- Geist
- Inter
- Manrope

## Technical Details

Use a monospace font.

Possible fonts:

- JetBrains Mono
- Geist Mono
- IBM Plex Mono

---

# 4. Navigation

Main navigation:

```text
JULIAN CHAOUL

ABOUT
BLOG
CONTENT
BUILD
RESUME
```

Optional behavior:

- Sticky navbar
- Minimal underline on active section
- Resume opens the PDF in a new tab
- Small green indicator in top-right

---

# 5. Homepage Structure

## Hero

Large minimalist opening screen.

Example:

```text
JULIAN
CHAOUL

Learn. Build. Reflect.

Computer science + mathematics.
Building intelligent systems,
exploring hard problems,
and documenting the process.

[ EXPLORE ]     [ RESUME ↗ ]
```

Supporting microcopy:

```text
IDEAS / CODE / SYSTEMS / PEOPLE
```

Optional `NOW` label:

```text
NOW →
distributed systems
swarm intelligence
real analysis
Project_Julian
```

### Hero Background

Large pixelated **Cedar of Lebanon** integrated into the right side or background.

Possible effects:

- Tree dissolves into pixels
- Grid overlay
- Coordinates
- Tiny labels
- Gentle parallax
- Cursor-reactive pixel movement
- Very subtle grain

Keep motion minimal.

---

# 6. About Section

Heading:

> **I'm Julian.**

Short introduction:

I'm a computer science and mathematics student interested in intelligent systems, robotics, distributed computing, mathematics, entrepreneurship, and building useful things.

Most of my time is spent learning things I don't understand yet, building things that probably won't work the first time, and documenting the process.

## Interests

```text
01  DISTRIBUTED SYSTEMS
02  ROBOTICS + SWARM INTELLIGENCE
03  MATHEMATICS
04  AI
05  ENTREPRENEURSHIP
06  CONTENT CREATION
```

Optional supporting experience:

- Software engineering
- Robotics
- Research
- Mathematics teaching
- Competitive programming
- Leadership

Visual:

- Pixelated olive tree
- Small botanical image
- Coordinates / technical annotations

---

# 7. Blog Section

Heading:

> **Notes on learning, building, and life.**

The blog should have three primary categories:

## LEARN

Topics:

- Mathematics
- Real Analysis
- Quantum Computing
- Distributed Systems
- Robotics
- AI
- Books / ideas

## BUILD

Topics:

- Project retrospectives
- Architecture decisions
- Experiments
- Failed approaches
- Engineering lessons
- Building in public

## REFLECT

Topics:

- Career
- College
- Entrepreneurship
- Productivity
- Leadership
- Ambition
- Personal development

Example layout:

```text
SEP 23, 2026
What Byzantine Generals Taught Me About Autonomous Robots →

SEP 18, 2026
Understanding Completion in Real Analysis →

SEP 12, 2026
Thoughts on Building in Public →
```

Visual motif:

- Fig tree
- Pixel fragments
- Thin horizontal separators

---

# 8. Content Section

Brand this as:

> **Project_Julian**

Description:

Videos about computer science, mathematics, building, learning, and the process in between.

## Layout

Large featured video:

```text
[ FEATURED VIDEO ]
Building a Swarm of Robots From Scratch
```

Then smaller recent videos below.

Suggested categories:

```text
BUILD
LEARN
LIFE
```

Possible elements:

- YouTube thumbnails
- Video duration
- Published date
- View count
- Link to YouTube
- Shorts carousel later

---

# 9. Build Section

This should be one of the strongest sections on the site.

Heading:

> **Building things.**

Subheading:

> Real projects. Real commits. Real progress.

## Featured Projects

### Byzantine Distributed Swarm Voting

Focus:

- Distributed consensus
- Autonomous agents
- Byzantine failures
- Robotics / swarms

Status:

```text
ACTIVE
```

### SparsEDA / Stress Monitoring

Focus:

- Signal processing
- Physiological data
- Mobile
- Backend
- Algorithms

### Swarm Search & Rescue

Focus:

- Multi-agent systems
- Robotics
- Search algorithms
- Simulation

### Robotics Projects

Focus:

- ROS
- LiDAR
- Autonomous navigation
- Costmaps

### Other Projects

Possible inclusions:

- Rust EBNF Tokenizer / Recognizer
- Sudoku Computer Vision Solver
- Colony / civilization simulation
- Experimental AI or distributed systems projects

---

# 10. GitHub Build Log

Pull GitHub activity and transform it into a clean chronological feed.

Example:

```text
BUILD LOG

SEP 23   Byzantine Swarm Voting
         feat: implement consensus timeout

SEP 22   Byzantine Swarm Voting
         fix: prevent duplicate peer votes

SEP 20   Colony Simulation
         experiment: dynamic agent populations

SEP 18   Personal Website
         design: pixelated cedar system
```

Avoid showing a generic GitHub contribution graph as the primary element.

The goal is to make projects feel alive.

Possible integrations:

- GitHub REST API
- GitHub GraphQL API

Display:

- Repo
- Commit message
- Date
- Language
- Commit count
- Project status

---

# 11. Research & Experiments

Optional subsection of Build or About.

Possible areas:

- Robotics
- Autonomous navigation
- NLP
- Stochastic processes
- Physiological signal processing
- Distributed systems
- Swarm systems

Use the title:

> **Research & Experiments**

This should feel exploratory rather than overly formal.

---

# 12. Learning / Now Section

Optional page:

```text
/now
```

Example:

```text
NOW / SEPTEMBER 2026

STUDYING
Real Analysis
Quantum Computing

BUILDING
Byzantine Distributed Swarm Voting

THINKING ABOUT
Swarm Intelligence
Distributed AI
Entrepreneurship

CREATING
Project_Julian
```

This page should change frequently.

---

# 13. Resume

Add a permanent **RESUME** item in the top navigation.

Behavior:

- Opens resume PDF in a new tab
- Optional dedicated `/resume` page
- Resume file can be replaced whenever updated

Also include:

```text
VIEW RESUME ↗
```

in the hero.

The rest of the website should not duplicate the résumé.

The website shows:
- personality
- projects
- thinking
- content
- progress

The résumé shows:
- structured experience
- education
- skills
- accomplishments

---

# 14. Footer

Minimal footer.

Example:

```text
Learn.
Build.
Reflect.

GitHub      →
YouTube     →
LinkedIn    →
Email       →

JULIAN CHAOUL
2026

built while figuring things out.
```

Possible visual:

- Cedar
- Olive
- Fig

All three subtly merged or represented as pixel fragments.

---

# 15. Suggested Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS

## Content

- MDX for blog posts
- Local markdown files initially

## Integrations

- GitHub API
- YouTube Data API

## Hosting

- Vercel

## Optional Later

- Framer Motion
- Analytics
- RSS feed
- Search
- Newsletter
- Project filtering
- Dark mode

---

# 16. Suggested Folder Structure

```text
personal-website/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── blog/
│   ├── content/
│   ├── build/
│   ├── resume/
│   └── now/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PixelTree.tsx
│   ├── SectionHeader.tsx
│   ├── ProjectCard.tsx
│   ├── CommitFeed.tsx
│   ├── VideoCard.tsx
│   └── Footer.tsx
│
├── content/
│   └── blog/
│
├── public/
│   ├── images/
│   ├── trees/
│   └── resume.pdf
│
└── styles/
```

---

# 17. First Build Milestone

Start with only the homepage.

## Phase 1

Build:

- Navbar
- Hero
- Pixel cedar background
- About preview
- Blog preview
- Content preview
- Build preview
- Resume link
- Footer

Do not integrate APIs yet.

Use mock data first.

## Phase 2

Add:

- Blog system
- GitHub activity
- YouTube integration

## Phase 3

Add:

- Animations
- `/now`
- Project pages
- Search
- Additional interactions

---

# 18. Design Rule

Every design decision should reinforce one of these ideas:

```text
LEARN
BUILD
REFLECT
```

The final experience should feel like:

> **An engineer's notebook, a builder's portfolio, and a personal journal in one place.**
