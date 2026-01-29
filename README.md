# Animated Portfolio Website

A fully responsive, production-ready portfolio built with React 18, Vite, Bootstrap CSS, and Framer Motion v10. Features smooth animations, dark/light mode toggle, and a modern design.

## Features

### Sections
1. **Hero** - Full-width animated gradient banner with profile photo
2. **About** - Personal story and fun facts with scroll animations
3. **Skills** - Interactive pill grid with hover effects
4. **Projects** - Showcase your best work with featured projects and project cards
5. **Contact** - Connect via email, LinkedIn, and resume download

### Interactive Elements
- Sticky navbar with spring animation
- Smooth scroll navigation
- Dark/light mode toggle with persistent preference
- Mobile-responsive hamburger menu
- Hover animations and micro-interactions throughout
- Scroll-triggered fade-in animations

### Technical Highlights
- React 18 with TypeScript
- Vite for fast development and builds
- Framer Motion v10 for smooth animations
- Bootstrap CSS + Tailwind CSS for styling
- Lucide React for icons
- Fully accessible and SEO-optimized
- Mobile-first responsive design

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization

See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions on personalizing this portfolio with your own content, images, and styling preferences.

### Quick Start Customization

1. Edit `src/data/portfolioData.js` with your information
2. Replace placeholder images in components
3. Update contact links in `src/components/Contact.tsx`
4. Update SEO meta tags in `index.html`

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── context/         # React context (Theme)
│   │   └── ThemeContext.tsx
│   ├── data/            # Portfolio content data
│   │   └── portfolioData.js
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
└── vite.config.ts       # Vite configuration
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion v10** - Animation library
- **Bootstrap CSS** - Base styling framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Animation Details

### Hero Section
- Name slides up on load (0.8s duration)
- Subtitle fades in 300ms after name
- Profile photo scales from 0.8 → 1 on hover
- Animated gradient background loops continuously

### About Section
- Fun facts fade in on scroll
- Each card animates with 25px upward motion
- Staggered animation delay (0.4s duration)

### Skills Section
- Pills fade in and scale on viewport entry
- Hover effect: lifts 3px and changes to sky-600 background

### Projects Section
- Featured project images zoom 1.05× on hover
- Project cards lift -8px and increase shadow on hover
- Smooth transitions on all interactions

### Navigation
- Navbar slides down with spring animation after scroll
- Mobile menu morphs between hamburger and X icon
- Smooth scroll to sections

### Contact Section
- Heading wiggles when entering viewport
- Button hover states with color transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized bundle size with Vite
- Lazy loading animations
- Efficient re-renders with React
- Minimal dependencies

## License

This project is open source and available under the MIT License.

## Credits

- Stock photos from [Pexels](https://www.pexels.com)
- Icons from [Lucide](https://lucide.dev)

---

Built with care for aspiring developers to showcase their work professionally.
# My-portfolio
