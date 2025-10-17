# Deployment Guide

This is a static React application that can be deployed to any static hosting service.

## Quick Deploy Options

### 1. Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build settings are automatically detected from `netlify.toml`
3. Deploy automatically on every push

**Manual Deploy:**
```bash
npm run build
# Upload the `dist` folder to Netlify
```

### 2. Vercel
1. Connect your GitHub repository to Vercel
2. Build settings are automatically detected from `vercel.json`
3. Deploy automatically on every push

**Manual Deploy:**
```bash
npm run build
# Upload the `dist` folder to Vercel
```

### 3. GitHub Pages
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your GitHub Pages repository
3. Enable GitHub Pages in repository settings

### 4. Any Static Host
The application builds to a `dist` folder containing static files that can be served by any web server:

```bash
npm run build
# Serve the `dist` folder contents
```

## Build Commands
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Deploy**: `npm run deploy` (builds and previews)

## Environment Variables
Copy `.env.example` to `.env.local` and customize if needed.

## Requirements
- Node.js 18+
- npm or yarn

## Features
- ✅ Static site generation
- ✅ Client-side routing with fallback
- ✅ Local storage for data persistence
- ✅ Responsive design
- ✅ No backend required