# Hari Automobiles - Netlify Ready Website

This is a production-ready React + Vite + Tailwind CSS website for Hari Automobiles, fully optimized for Netlify deployment.

## 📋 Project Overview

**Hari Automobiles** is a premium multi-brand car service and repair workshop in Bangalore, India. This website showcases:

- Professional car service and repair services
- Fiat and Jeep specialist expertise
- Booking and inquiry management
- Service testimonials and portfolio
- Contact and location information
- WhatsApp and phone integration

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Netlify Deployment

### Automatic Deployment (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy on every push

### Manual Deployment

```bash
# Using Netlify CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Drag & Drop Deployment

1. Build locally: `npm run build`
2. Drag the `dist/` folder to Netlify Dashboard
3. Your site goes live instantly

## 📁 Project Structure

```
hari-netlify/
├── src/
│   ├── components/          # Reusable React components
│   ├── views/               # Page views (Home, About, Services, etc.)
│   ├── assets/
│   │   └── images/          # Car images and logos
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles
│   ├── data.ts              # Service and content data
│   └── types.ts             # TypeScript type definitions
├── public/
│   ├── _redirects           # Netlify routing rules
│   └── _headers             # Security and cache headers
├── netlify.toml             # Netlify build configuration
├── vite.config.ts           # Vite build configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
├── index.html               # HTML entry point
├── DEPLOYMENT.md            # Detailed deployment guide
└── README-NETLIFY.md        # This file
```

## ⚙️ Configuration Files

### netlify.toml
- Build command: `npm run build`
- Publish directory: `dist/`
- Node version: 22.13.0
- Client-side routing redirects
- Cache control headers
- Security headers

### public/_redirects
- Handles client-side routing for React
- Redirects all routes to `index.html`
- Security rules for sensitive files

### public/_headers
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Cache control for different file types
- Performance optimization headers

## 🔐 Environment Variables

For Netlify deployment, add these in **Site Settings → Build & Deploy → Environment**:

```
VITE_GOOGLE_GENAI_API_KEY=your_api_key
VITE_API_BASE_URL=https://api.example.com
VITE_ANALYTICS_ID=your_analytics_id
```

See `.env.example` for all available variables.

## 📊 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fast performance with Vite
- ✅ Tailwind CSS for styling
- ✅ React components for modularity
- ✅ Client-side routing
- ✅ Booking modal system
- ✅ WhatsApp and phone integration
- ✅ Instagram reels section
- ✅ Testimonials showcase
- ✅ Service portfolio
- ✅ SEO-friendly structure

## 🔧 Build System

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **UI Components**: Lucide React
- **Animation**: Motion
- **Video Streaming**: HLS.js

## 📈 Performance Optimization

The site includes:

- Code splitting with Vite
- Optimized image loading
- CSS minification
- JavaScript minification
- Gzip compression
- Browser caching with proper headers
- Lazy loading for images

## 🛡️ Security Features

- Content Security Policy headers
- X-Frame-Options to prevent clickjacking
- X-XSS-Protection for browser protection
- Referrer-Policy for privacy
- No sensitive files exposed

## 🐛 Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 22.x)
- Clear cache: `rm -rf node_modules dist && npm install`
- Check Netlify build logs

### Routes Not Working
- Verify `netlify.toml` redirect rules are present
- Check `public/_redirects` file exists
- Ensure `dist/` folder is the publish directory

### Images Not Loading
- Verify image paths are correct
- Check images are in `src/assets/images/`
- Ensure images are included in build output

### Slow Performance
- Check Netlify Analytics
- Enable Netlify Edge Functions if needed
- Optimize image sizes
- Use browser DevTools to identify bottlenecks

## 📞 Support & Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Netlify Support](https://support.netlify.com)

## 📝 Deployment Checklist

- [ ] Update `metadata.json` with correct site info
- [ ] Add environment variables in Netlify
- [ ] Test locally with `npm run build && npm run preview`
- [ ] Connect Git repository to Netlify
- [ ] Configure custom domain (if applicable)
- [ ] Enable auto-deploy on push
- [ ] Set up SSL certificate (automatic with Netlify)
- [ ] Monitor build logs and performance
- [ ] Test all routes and features on production

## 🎨 Customization

### Update Site Metadata
Edit `metadata.json`:
```json
{
  "name": "Your Business Name",
  "description": "Your business description"
}
```

### Update Content
Edit files in `src/data.ts` and individual view components in `src/views/`

### Update Styling
Modify Tailwind CSS classes in component files or update `src/index.css`

## 📄 License

Apache License 2.0 - See LICENSE file for details

---

**Last Updated**: June 2026  
**Maintained by**: Hari Automobiles Team  
**Netlify Ready**: ✅ Yes
