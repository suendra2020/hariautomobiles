# Netlify Setup & Configuration Guide

This document provides detailed setup instructions for deploying Hari Automobiles on Netlify.

## 📋 Pre-Deployment Checklist

- [ ] All code is committed to Git
- [ ] `netlify.toml` is present in root directory
- [ ] `public/_redirects` file exists
- [ ] `public/_headers` file exists
- [ ] `.env.example` is configured
- [ ] `package.json` has correct build scripts
- [ ] All dependencies are listed in `package.json`
- [ ] Local build works: `npm run build`

## 🔗 Step 1: Connect Git Repository

### Option A: GitHub

1. Push code to GitHub repository
2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **GitHub**
5. Authorize Netlify to access your GitHub account
6. Select the **hari-automobiles** repository
7. Click **"Deploy site"**

### Option B: GitLab

1. Push code to GitLab repository
2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **GitLab**
5. Authorize Netlify to access your GitLab account
6. Select the repository
7. Click **"Deploy site"**

### Option C: Bitbucket

1. Push code to Bitbucket repository
2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **Bitbucket**
5. Authorize Netlify to access your Bitbucket account
6. Select the repository
7. Click **"Deploy site"**

## ⚙️ Step 2: Configure Build Settings

Netlify will automatically detect `netlify.toml` and use these settings:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  node_version = "22.13.0"
```

### Manual Configuration (if needed)

If Netlify doesn't auto-detect:

1. Go to **Site Settings** → **Build & Deploy** → **Build Settings**
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `dist`
4. Set **Node version**: `22.13.0`

## 🔐 Step 3: Add Environment Variables

1. Go to **Site Settings** → **Build & Deploy** → **Environment**
2. Click **"Add environment variables"**
3. Add each variable:

```
VITE_GOOGLE_GENAI_API_KEY = your_api_key_here
NODE_ENV = production
VITE_API_BASE_URL = https://api.example.com
```

**Important**: Never commit `.env` files to Git. Use Netlify's environment variable UI.

## 🌍 Step 4: Configure Custom Domain

1. Go to **Site Settings** → **Domain Management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `hari-automobiles.com`)
4. Follow DNS configuration instructions
5. Netlify will auto-provision SSL certificate (HTTPS)

### DNS Configuration

For most registrars:

1. Point your domain to Netlify's nameservers:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - `dns3.p01.nsone.net`
   - `dns4.p01.nsone.net`

Or use CNAME record:
- Create CNAME: `your-domain.com` → `your-site.netlify.app`

## 📱 Step 5: Configure Redirects & Headers

These are already configured in:
- `netlify.toml` - Primary configuration
- `public/_redirects` - Backup redirect rules
- `public/_headers` - Security and cache headers

### What They Do

**Redirects** (`netlify.toml` + `public/_redirects`):
- Route all requests to `index.html` for React Router
- Ensure single-page app routing works correctly

**Headers** (`public/_headers`):
- Set cache control for different file types
- Add security headers (X-Frame-Options, etc.)
- Optimize performance

## 🚀 Step 6: Deploy

### Automatic Deployment

Once connected to Git, Netlify automatically deploys when you:
- Push to the main branch
- Create pull requests (preview deployments)

### Manual Deployment

```bash
# Using Netlify CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Drag & Drop Deployment

1. Build locally: `npm run build`
2. Drag `dist/` folder to Netlify Dashboard
3. Site deploys instantly

## 📊 Step 7: Monitor & Optimize

### Deploy Logs
- Go to **Deploys** tab
- Click on any deployment to see build logs
- Check for errors or warnings

### Performance
- Go to **Analytics** tab
- Monitor page load times
- Check Core Web Vitals
- Review traffic patterns

### Functions (Optional)
- If using serverless functions
- Monitor execution time and errors
- Check function logs

## 🔍 Troubleshooting

### Build Fails with "npm not found"

**Solution**: Ensure Node version is set to 22.13.0 in build settings

### Routes Return 404

**Solution**: Verify `netlify.toml` has redirect rule:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Images Not Loading

**Solution**: 
- Ensure images are in `src/assets/images/`
- Check image paths use forward slashes: `/src/assets/images/image.jpg`
- Verify images are included in build output

### Environment Variables Not Working

**Solution**:
- Prefix variables with `VITE_` for client-side access
- Redeploy after adding variables
- Check browser console for undefined variables

### Slow Build Times

**Solution**:
- Clear Netlify cache: **Site Settings** → **Build & Deploy** → **Clear cache and deploy**
- Optimize dependencies in `package.json`
- Remove unused packages

### SSL Certificate Issues

**Solution**:
- Wait 24-48 hours for DNS propagation
- Check domain is correctly configured
- Use Netlify's DNS for faster setup

## 🔒 Security Best Practices

1. **Never commit secrets** - Use environment variables
2. **Enable HTTPS** - Automatic with Netlify
3. **Use security headers** - Already configured in `public/_headers`
4. **Validate user input** - Implement on client and server
5. **Keep dependencies updated** - Run `npm audit` regularly

## 📈 Performance Tips

1. **Optimize images** - Use appropriate formats (WebP, JPEG)
2. **Code splitting** - Vite handles this automatically
3. **Lazy loading** - Implement for non-critical components
4. **Caching** - Configured in `public/_headers`
5. **CDN** - Netlify provides global CDN automatically

## 🆘 Getting Help

- [Netlify Docs](https://docs.netlify.com)
- [Netlify Community](https://community.netlify.com)
- [Netlify Support](https://support.netlify.com)
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)

## 📝 Post-Deployment

After successful deployment:

1. Test all routes and features
2. Check mobile responsiveness
3. Verify images load correctly
4. Test booking functionality
5. Check WhatsApp/phone links
6. Monitor performance metrics
7. Set up analytics (if applicable)
8. Configure email notifications

## 🎯 Next Steps

1. Set up custom domain
2. Configure email notifications
3. Enable analytics
4. Set up monitoring alerts
5. Create CI/CD pipeline for staging
6. Document deployment process for team

---

**Last Updated**: June 2026  
**Status**: Production Ready ✅
