# Sandeep Kumar — Personal Website
## How to put this live on GitHub Pages (free, forever)

---

### STEP 1: Create a GitHub Account
Go to https://github.com and sign up. 
Your username matters — your site URL will be: https://USERNAME.github.io

---

### STEP 2: Create a New Repository
1. Click the "+" icon → "New repository"
2. Name it exactly: `USERNAME.github.io`  
   (replace USERNAME with your actual GitHub username)
3. Set it to "Public"
4. Click "Create repository"

---

### STEP 3: Upload Your Files
1. In the new repo, click "uploading an existing file"
2. Drag ALL the files from this folder into the upload area
   - Keep the folder structure: css/ js/ files go in their folders
3. Click "Commit changes"

---

### STEP 4: Enable GitHub Pages
1. Go to your repository → Settings → Pages (in left sidebar)
2. Under "Source", select: Deploy from a branch
3. Branch: main, Folder: / (root)
4. Click Save
5. Wait 2-3 minutes, then visit: https://USERNAME.github.io

Your site is now LIVE and FREE.

---

### FILE STRUCTURE (what each file does)
```
your-site/
├── index.html        ← Homepage
├── about.html        ← About / personal story page
├── anecdotes.html    ← Your field journal / blog
├── fieldwork.html    ← Your research projects
├── lens.html         ← Photography gallery
├── cv.html           ← Your curriculum vitae
├── css/
│   ├── style.css     ← Main styles (shared across all pages)
│   ├── about.css     ← Styles specific to About page
│   └── anecdotes.css ← Styles specific to Anecdotes page
├── js/
│   └── main.js       ← Interactivity (mobile menu, animations)
└── images/           ← Put your photos here
    ├── hero.jpg      ← Main hero photo (replace the green gradient)
    └── ...
```

---

### HOW TO ADD YOUR OWN PHOTOS

In `css/style.css`, find the hero section and replace:
```css
/* BEFORE (placeholder gradient): */
.hero-bg {
  background: linear-gradient(135deg, #1a2e1b...);
}

/* AFTER (your photo): */
.hero-bg {
  background-image: url('../images/hero.jpg');
  background-size: cover;
  background-position: center;
}
```

Do the same for project card images (.project-img-1, etc.)

---

### HOW TO ADD A NEW BLOG POST (Anecdotes page)

Open `anecdotes.html` and copy this block inside `.post-grid`:
```html
<article class="post-card">
  <div class="post-img" style="background-image: url('images/your-photo.jpg')"></div>
  <div class="post-content">
    <div class="post-meta">
      <span class="post-tag">Your Category</span>
      <span class="post-date">Month Year</span>
    </div>
    <h2><a href="#">Your Post Title</a></h2>
    <p class="post-excerpt">
      First 2-3 lines of your field note...
    </p>
    <a href="#" class="text-link">Read →</a>
  </div>
</article>
```

---

### HOW TO CHANGE COLORS

In `css/style.css`, at the very top, find `:root { }` and change the values:
```css
:root {
  --forest:    #2C3B2D;  ← deep green (change this to any dark color)
  --earth:     #5C4A32;  ← brown accent
  --gold:      #C4922A;  ← highlight color
  --cream:     #F4F0E6;  ← background
}
```

Everything updates automatically across the whole site.

---

### GETTING HELP FROM AI

When asking Claude (or any AI) for help with your site, always say:
- "I have a plain HTML/CSS/JS site hosted on GitHub Pages"
- Paste the relevant section of code
- Describe exactly what you want to change

Example: "I have this CSS for my project cards [paste code]. 
I want to make the hover effect lift the card higher. How do I change it?"
