# Netlify Deployment Guide - Hari Automobiles

This guide provides step-by-step instructions for deploying the Hari Automobiles website to Netlify.

## Prerequisites

- A Netlify account (free at https://www.netlify.com)
- Git installed on your machine
- GitHub, GitLab, or Bitbucket account for repository hosting

## Deployment Methods

### Method 1: Deploy with Git (Recommended)

This method automatically deploys your site whenever you push changes to your repository.

#### Step 1: Push to Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Hari Automobiles website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hari-automobiles.git
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select the **hari-automobiles** repository
6. Click **"Deploy site"**

Netlify will automatically:
- Detect the `netlify.toml` configuration
- Install dependencies (`npm install`)
- Build the project (`npm run build`)
- Deploy the `dist/` folder

### Method 2: Manual Deployment (Drag & Drop)

For quick testing without Git:

1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```

2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Drag and drop the `dist/` folder onto the Netlify dashboard
4. Your site will be deployed instantly

### Method 3: Netlify CLI

For advanced users:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

## Configuration Details

The `netlify.toml` file includes:

- **Build Command**: `npm run build` - Compiles React + Vite
- **Publish Directory**: `dist/` - Output folder
- **Node Version**: 22.13.0
- **Client-Side Routing**: Redirects all requests to `index.html` for React Router
- **Cache Headers**: Optimizes performance with proper cache control
- **Security Headers**: Includes X-Content-Type-Options, X-Frame-Options, etc.

## Environment Variables

If your site uses environment variables (like API keys):

1. Go to **Site Settings** → **Build & Deploy** → **Environment**
2. Add your variables (e.g., `VITE_API_KEY`)
3. Redeploy your site

Example variables to add:
```
VITE_GOOGLE_GENAI_API_KEY=your_api_key_here
```

## Troubleshooting

### Build Fails

- Check the **Deploy log** in Netlify Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### Routes Not Working

- The `netlify.toml` includes a redirect rule for client-side routing
- This should handle all React Router paths automatically

### Images Not Loading

- Ensure image paths are relative (e.g., `/src/assets/images/...`)
- Check that images are included in the build output

### Slow Performance

- Enable Netlify's built-in optimizations
- Use the **Analytics** tab to identify bottlenecks
- Consider enabling Netlify Edge Functions for dynamic content

## Custom Domain

1. Go to **Site Settings** → **Domain Management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `hari-automobiles.com`)
4. Update your domain's DNS records to point to Netlify
5. Netlify will automatically provision an SSL certificate

## Monitoring & Analytics

- **Deploy Logs**: Check build status and errors
- **Analytics**: Track visitor statistics
- **Performance**: Monitor Core Web Vitals
- **Functions**: Monitor serverless function usage

## Support

For issues or questions:
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Support](https://support.netlify.com)
- [Community Forums](https://community.netlify.com)

---

**Last Updated**: June 2026
**Project**: Hari Automobiles
**Framework**: React + Vite + Tailwind CSS
