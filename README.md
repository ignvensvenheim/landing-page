# Svenheim Tools Hub

A minimalistic and highly efficient internal company hub for navigating to daily tools and websites for Svenheim furniture manufacturing company. Built with pure, semantic HTML and modern CSS.

This project was refactored to **eliminate JavaScript entirely**, relying on native browser functionality for linking. This results in maximum performance, simplicity, and maintainability.

## 🚀 Features

- **Minimalistic Design**: Clean, Nordic-themed interface focused on usability.
- **Responsive Grid Layout**: A clean two-column layout on desktop that adapts perfectly to a single column on mobile devices.
- **Zero JavaScript**: Blazing-fast load times and zero client-side processing. Functionality is handled by semantic HTML.
- **Direct Tool Access**: Each card is a direct link, allowing for one-click navigation.
- **Accessible & SEO-Friendly**: Uses proper `<a>` tags for navigation, which is ideal for accessibility and crawlers.
- **Easy to Update**: Adding or changing tools is as simple as editing an HTML link.

## 📁 Project Structure

The project structure is clean and organized:

```
svenheim-tools-hub/
├── index.html          # Main HTML structure and content
├── css/
│   └── styles.css      # All styling, layout, and animations
├── assets/
│   ├── logo.svg        # Company logo
│   └── bg2.jpg         # Background image
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Built with semantic tags like `<header>`, `<main>`, `<section>`, and `<a>` for clarity and accessibility.
- **CSS3**: Modern styling using CSS Grid & Flexbox for layout, custom properties (variables) for easy theming, and smooth hover animations.
- **Font Awesome**: Provides the icons for each tool card.
- **Google Fonts**: Uses the "Poppins" font family for clean typography.

## 🚀 Getting Started

1.  **Clone or Download** the project files.
2.  **Open `index.html`** in your web browser.
3.  **Customize** the tool URLs by editing the `href` attribute of the `<a>` tags directly in `index.html`.

## 🎨 Customization

Customizing the look and feel is straightforward thanks to CSS variables.

### Colors & Theme

Open `css/styles.css` and modify the variables at the top of the file under the `:root` selector:

```css
:root {
  --color-primary: rgb(62, 79, 92);
  --color-header-bg: #2c3e50;
  --color-text-light: #8a9ba8;
  --color-card-bg: rgba(254, 254, 254, 0.8);
  --color-card-bg-hover: white;
  --border-color: #5c5c5c25;
  --border-radius: 8px;
}
```

### Icons

Icons are from [Font Awesome](https://fontawesome.com/). To change an icon, find a new one on their site and replace the class in the `<i>` tag. For example: `<i class="fas fa-tools"></i>`.

## 📱 Responsive Breakpoints

- **Desktop**: A two-column grid for screens wider than `480px`.
- **Mobile**: A single-column layout for screens `480px` and narrower for easy readability.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Modern mobile browsers

## 📝 License

This project is for internal company use at Svenheim.

---

**Svenheim Tools Hub - Internal Company Resource 🪑**
