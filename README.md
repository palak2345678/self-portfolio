#  Palak Hajare — Personal Portfolio Website
### Course: JavaScript Lab | CA3 – Mini Project (V Semester)
**Student Name:** Palak Hajare (Palak Shrikant Hajare)  
**Degree:** B.Tech in Computer Science Engineering (Artificial Intelligence & Machine Learning)  
**Institution:** Symbiosis Institute of Technology (SIT Nagpur), Symbiosis International University  
**Graduation Year:** 2028 (2024–2028) | **College GPA:** 8.02  
**Design System:** Apple Minimalist Editorial (Inter / SF Typography, Frosted Glass, Sophisticated Color Accents)  
**Technology Stack:** Semantic HTML5, Modern CSS3, Pure Vanilla JavaScript (ES6+)

---

## 🎯 Project Overview & Objective
This portfolio website is crafted to serve as an identity representing Palak Hajare's academic profile, industry internships at **AMDOX Technologies** and **Awachat Industries Ltd.**, virtual engineering programs at **Forage**, and technical projects (including **ResQ Disaster Response Platform** and the deployed **Customer Sentiment Analysis Agent**).

Designed with the **Apple Minimalist Design System**, featuring:
- Frosted glass sticky navigation header
- Palak's authentic portrait photo with subtle ambient aura and floating note
- Grouped skill categories (without cluttered progress bars)
- **One-click certificate document viewer** supporting authentic PDFs & vector replicas
- **Original 2-page resume** viewable and printable with one click
- Dark / Light mode toggle with persistent `localStorage` state
- Client-side validated contact form with real-time draft persistence

---

## 📌 Rubric Mapping & Sections Included

| Section Number & Title | Key Information & Implementation |
| :--- | :--- |
| **`00 / HERO`** | Real portrait photo, headline: *"Hi, I'm Palak. Building at the intersection of AI, technology & design."*, floating note, CTA action buttons, verified social links: [LinkedIn](https://www.linkedin.com/in/palak-hajare-4b551531a/?isSelfProfile=true) & [GitHub (@palak2345678)](https://github.com/palak2345678). |
| **`01 / ABOUT ME`** | Personal journey in AI/ML, web development, UI/UX design, philosophy quote banner, and quick facts strip (Nagpur, English/Hindi/Marathi/Spanish). |
| **`02 / THE FOUNDATION`** | Education at **Symbiosis University, SIT Nagpur** (GPA: 8.02), **C.G. Wanjari Junior College** (80.0%), **Bhavan's B.P. Vidya Mandir** (92.5%), and core coursework tags. |
| **`03 / MY TOOLKIT`** | **Clean Categorized Skills**: Programming Languages, Web Development, AI & Machine Learning, Tools & Platforms, Core CS, and Areas of Interest. |
| **`04 / SELECTED WORK`** | **6 Detailed Technical Projects**: <br>1. *ResQ — Disaster Response Coordination Platform* (Priority calculation & nearest resource matching)<br>2. *Customer Sentiment Analysis Agent* (Live Streamlit App)<br>3. *Student Performance Prediction* (Scikit-learn)<br>4. *Real-Time Face Detection System* (OpenCV)<br>5. *Rain Detection System* (IoT & Embedded Sensors)<br>6. *AI Expense Audit & Fraud Detection* |
| **`05 / EXPERIENCE & IMPACT`** | **AMDOX Technologies** Internship (Project *"Neural Retail"*, Cert IDs: `adx/1bGDuErq5i` & `adx/24fQ4ThTPJ`) + **Raj Awachat Industries Ltd.** (Data Analytics Intern) + **Forage** AI & ML Virtual Experience programs. |
| **`06 / MILESTONES`** | **One-Click Certificate Viewer**: Infosys Springboard (LLM Engineering & Agentic AI), AMDOX Technologies, Awachat Industries Ltd., Forage, Coursera, Udemy, and Great Learning. |
| **`07 / BEYOND THE CLASSROOM`**| Extra-curricular leadership across collegiate hackathons, collaborative sprints, UI/UX exploration, and peer mentoring. |
| **`08 / MOMENTS`** | Moments gallery reflecting project demo days, campus life at SIT Nagpur, team sprints, and product design wireframing. |
| **`09 / SAY HELLO & RESUME`** | Direct contact actions + interactive Apple contact form with **real-time regex validation**, **LocalStorage auto-drafting**, and toast feedback. |
| **`DOWNLOAD RESUME`** | Prominent action button opening the **exact original 2-page resume** with one-click direct PDF download and browser printing (`window.print()`). |
| **`THEME ENGINE`** | Apple Dark & Light mode toggle with state persistence in `localStorage`. |

---

## 🧠 JavaScript Lab Viva Preparation (2 Marks)

The viva examines your understanding of JavaScript concepts. Here is how your code in [main.js](file:///C:/Users/palak/.gemini/antigravity/scratch/portfolio-website/js/main.js) answers typical questions:

1. **How is the Dark/Light mode implemented and saved?**
   - We check `localStorage.getItem('palak-theme')` on load and fallback to `window.matchMedia('(prefers-color-scheme: dark)')`.
   - On clicking `#themeToggle`, we toggle the class `dark` on `document.body` and update `localStorage.setItem('palak-theme', isDark ? 'dark' : 'light')`.
2. **How does the contact form preserve user drafts?**
   - We listen to the `input` event on form fields and save a serialized JSON object (`JSON.stringify(draft)`) into `localStorage`. On page reload, we parse and restore the draft so input is never lost.
3. **What is the IntersectionObserver API used for?**
   - It watches `.reveal` elements and adds the `.visible` CSS class when elements enter the viewport for smooth Apple-style reveal animations.
4. **How are modals implemented?**
   - Pure DOM manipulation: `modal.classList.add('active')` with `document.body.style.overflow = 'hidden'` to lock background scroll.
   - Includes keyboard accessibility listening to `Escape` key to close any open modal sheet.
5. **How does the one-click certificate viewer work?**
   - We attach event listeners to all `.cert-trigger` cards, read their `data-title`, `data-issuer`, `data-pdf`, and `data-svg` attributes, dynamically configure the modal preview frame, and set up one-click document links.
6. **How does form validation work?**
   - It evaluates inputs against length bounds and an RFC-compliant email regex (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) before simulating an asynchronous dispatch with a loading state and toast notification.

---

## 🚀 How to Run the Website Locally

1. Open File Explorer and navigate to:
   ```plaintext
   C:\Users\palak\.gemini\antigravity\scratch\portfolio-website
   ```
2. Double-click [index.html](file:///C:/Users/palak/.gemini/antigravity/scratch/portfolio-website/index.html) to open the website in Chrome, Edge, or Safari.
3. Everything is self-contained with zero build steps or npm installations needed.
