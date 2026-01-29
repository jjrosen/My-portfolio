# Portfolio Customization Guide

This portfolio is ready to use, but you'll want to personalize it with your own information and images. Follow these steps to make it yours.

## Step 1: Update Portfolio Data

Edit `src/data/portfolioData.js` to customize your content:

### Site Meta Information

- Update `siteMeta.title` with your name
- Update `siteMeta.description` with your personal description

### About Section

- Replace `aboutMe` with your own story
- Update `funFacts` array with your personal fun facts

### Skills Section

- Update the `skills` array with your technical skills

### Projects Section

For each project (capstone, miniCapstone, and projects array):

1. Update `title` with your project name
2. Update `description` with what you built
3. Update `techStack` array with technologies used
4. Update `repoUrl` with your GitHub repository URL
5. If deployed, add the URL to `liveUrl` (leave empty if not deployed)
6. Update `imageAlt` with a description of your project screenshot

### Resume Link

- Update `resumeURL` with a link to your resume (Google Drive, Dropbox, etc.)

## Step 2: Replace Images

### Hero Section Profile Photo

File: `src/components/Hero.tsx`

- Line 54: Replace the Pexels URL with your profile photo URL or import a local image
- Upload your photo to `public/` folder and use: `src="/your-photo.jpg"`

### Project Screenshots

File: `src/components/Projects.tsx`

**Featured Projects (Capstone & Mini-Capstone):**

- Line 33: Replace with your capstone project screenshot
- Add your images to `public/` folder and update the src

**Other Projects:**

- Line 119: Replace with your project screenshots
- You can use different images for each project by conditionally rendering based on the project index or title

### Example: Using Local Images

```javascript
import profilePhoto from '../assets/profile.jpg';
import capstoneImage from '../assets/capstone-screenshot.png';

<img src={profilePhoto} alt="/Users/joshrosen/Pictures/Smiling man in a navy suit.png" />
<img src={capstoneImage} alt="..." />
```

## Step 3: Update Contact Information

Edit `src/components/Contact.tsx`:

- Line 35: Update email address
- Line 42: Update LinkedIn profile URL

## Step 4: Update SEO Meta Tags

Edit `index.html` to match your personal information:

- Line 5: Update meta description
- Line 6: Update author name
- Lines 9-11: Update Open Graph tags
- Lines 13-16: Update Twitter card tags

## Step 5: Optional Color Customization

The portfolio uses a blue/sky color scheme. To change colors:

### Tailwind Colors

Edit components and replace color classes:

- `bg-sky-600` → `bg-green-600` (or any Tailwind color)
- `text-sky-600` → `text-green-600`
- `hover:bg-sky-700` → `hover:bg-green-700`

### Hero Gradient Background

File: `src/components/Hero.tsx`, Line 10:

```javascript
className = "... from-sky-400 via-blue-500 to-indigo-600";
```

Change to your preferred gradient colors.

## Step 6: Add More Projects

To add more projects to the "Other Projects" section:

Edit `src/data/portfolioData.js` and add objects to the `projects` array:

```javascript
export const projects = [
  {
    title: "CLI Budget Tracker",
    description: "A command-line app that helps users track monthly expenses.",
    techStack: ["Ruby"],
    image: "budget-cli.png",
    imageAlt: "Screenshot of Budget Tracker CLI",
    liveUrl: "",
    repoUrl: "https://github.com/yourname/budget-cli",
  },
  // Add more projects here
  {
    title: "Your New Project",
    description: "Description of what it does.",
    techStack: ["React", "Node"],
    image: "new-project.png",
    imageAlt: "Screenshot of new project",
    liveUrl: "https://your-project.com",
    repoUrl: "https://github.com/yourname/new-project",
  },
];
```

## Step 7: Test Your Changes

1. Make sure all images load correctly
2. Test all links (GitHub, LinkedIn, Resume)
3. Verify responsive design on mobile
4. Test dark/light mode toggle
5. Check that smooth scroll navigation works

## Deployment Tips

Before deploying:

1. Update all placeholder text
2. Replace all placeholder images
3. Test all external links
4. Run `npm run build` to verify no errors
5. Test the production build with `npm run preview`

## Common Customizations

### Remove a Project Section

If you don't have a mini-capstone project, edit `src/components/Projects.tsx` and remove:

```jsx
<FeaturedProject {...miniCapstone} imageLeft={false} />
```

### Change Animation Speed

In any component with Framer Motion animations, adjust the `duration` values:

```javascript
transition={{ duration: 0.8 }} // Slower: increase number; Faster: decrease number
```

### Modify Navbar Links

Edit `src/components/Navbar.tsx`, Line 22-28 to add or remove navigation links.

---

For additional help, refer to the official documentation:

- [React](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Bootstrap](https://getbootstrap.com)
