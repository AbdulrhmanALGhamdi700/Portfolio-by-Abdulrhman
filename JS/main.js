/* === Variables & Reset === */
:root {
  --yellow: #FFB020;
  --green:  #00CC88;
  --blue:   #409CFF;
  --black:  #222222;
  --dark:   #121212;
  --light:  #E0E0E0;
  --dur:    0.3s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--dark);
  color: var(--light);
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
}

/* === Header & Nav === */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2rem;
  background: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
}
.logo img {
  height: 2rem;
  margin-right: 0.5rem;
}
.logo span {
  color: var(--yellow);
  font-weight: 700;
  font-size: 1.25rem;
}

/* Nav list */
.nav ul {
  display: flex;
  list-style: none;
  align-items: center;
  gap: 1.5rem;
}

/* Unified styles for links and the CV button */
.nav a,
.dropbtn {
  position: relative;
  display: block;
  padding: 0 1rem;
  line-height: 60px;
  color: var(--light);
  background: none;
  border: none;       /* remove white border */
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: color var(--dur);
  outline: none;
}

/* Hover/active styling and underline via ::after */
.nav a:hover,
.nav a.active,
.dropbtn:hover,
.dropdown.open > .dropbtn {
  color: var(--yellow);
}

.nav a.active::after,
.dropdown.open > .dropbtn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--yellow);
}

/* Dropdown container */
.dropdown {
  position: relative;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  background: var(--black);
  min-width: 180px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1001;
}
.dropdown-content li {
  list-style: none;
}
.dropdown-content a {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--light);
  text-decoration: none;
  transition: background var(--dur), color var(--dur);
}
.dropdown-content a:hover {
  background: var(--blue);
  color: var(--dark);
}

/* Show dropdown on hover (desktop) or when .open is added (mobile) */
.dropdown:hover > .dropdown-content,
.dropdown.open > .dropdown-content {
  display: block;
}

/* Nav toggle (mobile) */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--light);
  cursor: pointer;
}

/* === Hero === */
.hero {
  margin-top: 60px; /* push below fixed header */
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

/* Buttons */
a.btn {
  display: inline-block;
  background: var(--green);
  color: var(--black);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: opacity var(--dur);
}
a.btn:hover {
  opacity: 0.9;
}

/* === Panels === */
.panel {
  padding: 6rem 2rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.panel h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 3px solid var(--blue);
  display: inline-block;
  padding-bottom: 0.25rem;
}

/* === Projects Grid & Cards === */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 1.5rem;
}
.project-card {
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.project-card img {
  width: 100%;
  border-radius: 4px;
}
.play-btn {
  background: var(--blue);
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity var(--dur);
}
.play-btn:hover {
  opacity: 0.9;
}
.source {
  margin-top: auto;
  color: var(--green);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--dur);
}
.source:hover {
  color: var(--yellow);
}

/* === Overlay === */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.overlay.open {
  display: flex;
}
.overlay-content {
  position: relative;
  width: 90%;
  max-width: 960px;
  height: 80vh;
}
#demo-frame {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 6px;
  background: #000;
}
#overlay-close {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  background: var(--yellow);
  border: none;
  color: var(--black);
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
}

/* === Contact Social Icons === */
.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.social-icons img {
  width: 32px;
  filter: invert(1);
}

/* === Utility === */
section + section {
  margin-top: 2rem;
}

/* === Mobile Nav & Dropdown === */
@media (max-width: 768px) {
  .nav {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: var(--black);
    flex-direction: column;
    display: none;
  }
  .nav.open {
    display: flex;
  }
  .nav ul {
    flex-direction: column;
    gap: 0;
  }
  .nav-toggle {
    display: block;
  }
  .dropdown-content {
    position: static;
    box-shadow: none;
  }
  .dropdown.open > .dropdown-content {
    display: block;
  }
}
