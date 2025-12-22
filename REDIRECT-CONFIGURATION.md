# 301 Redirect Configuration: /team → /services

## ✅ Implementation Status

**Client-side redirect**: ✅ Implemented in `src/App.tsx`
**Server-side redirect**: ⚠️ Requires production server configuration (see below)

---

## 1. Client-Side Redirect (Already Implemented)

The React Router redirect is now active in `src/App.tsx`:

```tsx
<Route path="/team" element={<Navigate to="/services" replace />} />
```

**How it works:**
- Uses React Router's `Navigate` component
- The `replace` prop replaces the current history entry (similar to 301 behavior)
- Automatically preserves query parameters
- Works immediately in development and production

**Limitation:**
- Only works after the JavaScript bundle loads
- Search engines may not recognize this as a true 301 redirect
- First-time visitors will load the full React app before redirecting

---

## 2. Production Server Configuration (Required for True 301)

For optimal SEO and performance, implement a server-side 301 redirect. The configuration depends on your hosting platform:

### Option A: Netlify (Recommended for SPAs)

Create or update `public/_redirects`:

```
# 301 Redirect from /team to /services
/team    /services    301

# SPA fallback (should be last)
/*    /index.html    200
```

**Testing on Netlify:**
```bash
curl -I https://yourdomain.com/team
# Should return: HTTP/2 301
# Location: https://yourdomain.com/services
```

---

### Option B: Vercel

Create or update `vercel.json` in the project root:

```json
{
  "redirects": [
    {
      "source": "/team",
      "destination": "/services",
      "permanent": true
    }
  ]
}
```

**Testing on Vercel:**
```bash
curl -I https://yourdomain.com/team
# Should return: HTTP/2 308 (Vercel uses 308 for permanent redirects)
# Location: https://yourdomain.com/services
```

---

### Option C: Apache (.htaccess)

Add to `public/.htaccess`:

```apache
# Enable RewriteEngine
RewriteEngine On

# 301 Redirect from /team to /services
RewriteRule ^team$ /services [R=301,L]

# SPA fallback
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Testing on Apache:**
```bash
curl -I https://yourdomain.com/team
# Should return: HTTP/1.1 301 Moved Permanently
# Location: https://yourdomain.com/services
```

---

### Option D: Nginx

Add to your Nginx server block configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;

    # 301 Redirect from /team to /services
    location = /team {
        return 301 /services;
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Testing on Nginx:**
```bash
curl -I https://yourdomain.com/team
# Should return: HTTP/1.1 301 Moved Permanently
# Location: /services
```

---

### Option E: Cloudflare Pages

Create `public/_redirects`:

```
/team    /services    301
```

**Testing on Cloudflare Pages:**
```bash
curl -I https://yourdomain.com/team
# Should return: HTTP/2 301
# Location: https://yourdomain.com/services
```

---

### Option F: AWS S3 + CloudFront

In your S3 bucket's static website hosting configuration, add a redirect rule:

```xml
<RoutingRules>
    <RoutingRule>
        <Condition>
            <KeyPrefixEquals>team</KeyPrefixEquals>
        </Condition>
        <Redirect>
            <ReplaceKeyWith>services</ReplaceKeyWith>
            <HttpRedirectCode>301</HttpRedirectCode>
        </Redirect>
    </RoutingRule>
</RoutingRules>
```

---

## 3. Testing Strategy

### A. Local Development Testing

```bash
# Start the dev server
npm run dev

# In another terminal, test the redirect
curl -I http://localhost:5173/team
```

**Expected behavior:**
- Browser navigation to `http://localhost:5173/team` should redirect to `/services`
- URL bar should show `/services`
- No 301 status in dev (client-side redirect only)

### B. Production Build Testing

```bash
# Build the project
npm run build

# Preview the production build
npm run preview

# Test in browser
# Visit: http://localhost:4173/team
# Should redirect to: http://localhost:4173/services
```

### C. Production Server Testing

After deploying to production, test with curl:

```bash
# Test redirect status code
curl -I https://yourdomain.com/team

# Test redirect with query parameters
curl -I https://yourdomain.com/team?ref=homepage

# Test redirect and follow location
curl -L https://yourdomain.com/team
```

**Expected Response:**
```
HTTP/2 301
location: https://yourdomain.com/services
cache-control: public, max-age=0, must-revalidate
```

### D. Browser Testing

1. **Clear browser cache** before testing
2. Open DevTools → Network tab
3. Visit `https://yourdomain.com/team`
4. Check for:
   - ✅ Status: 301 (or 308 for permanent redirect)
   - ✅ Location header pointing to `/services`
   - ✅ Query parameters preserved (if any)

### E. SEO Testing Tools

Use these tools to verify search engines recognize the 301:

1. **Google Search Console**
   - URL Inspection Tool
   - Check if `/team` shows as redirected

2. **Screaming Frog SEO Spider**
   - Crawl your site
   - Filter for "Redirection (3xx)"
   - Verify `/team` → `/services` is listed as 301

3. **Online Redirect Checker**
   - https://httpstatus.io/
   - Enter: `https://yourdomain.com/team`
   - Verify: 301 status code

---

## 4. Potential Issues & Troubleshooting

### Issue 1: Redirect Not Working in Production

**Symptoms:**
- Redirect works locally but not in production
- Page shows 404 or loads incorrectly

**Solutions:**
1. Verify server configuration file is deployed
2. Check hosting platform documentation for redirect syntax
3. Clear CDN cache if using Cloudflare/CloudFront
4. Verify file paths (some hosts require `/public/_redirects`, others require root `_redirects`)

### Issue 2: Query Parameters Not Preserved

**Symptoms:**
- `/team?ref=email` redirects to `/services` (without query params)

**Solutions:**
1. Update server configuration:
   - Netlify: Use `/team /services 301!` (force redirect)
   - Apache: Use `[R=301,L,QSA]` flag (QSA = Query String Append)
   - Nginx: Use `return 301 /services$is_args$args;`

### Issue 3: Redirect Loop

**Symptoms:**
- Browser shows "Too many redirects" error

**Solutions:**
1. Check for conflicting redirect rules
2. Ensure `/services` route exists and doesn't redirect
3. Verify only ONE redirect rule for `/team`

### Issue 4: 302 Instead of 301

**Symptoms:**
- Redirect works but shows 302 (temporary) instead of 301 (permanent)

**Solutions:**
1. Update server configuration to specify permanent redirect
2. Clear browser cache (browsers cache 301s aggressively)
3. Verify configuration syntax matches examples above

### Issue 5: Client-Side Only (No Server 301)

**Symptoms:**
- Redirect works in browser but curl shows 200 with HTML

**Solutions:**
1. This means only the React Router redirect is working
2. Implement server-side configuration from Section 2
3. Deploy the configuration file and test again

---

## 5. Deployment Checklist

Before deploying the redirect to production:

- [ ] Client-side redirect tested locally (`npm run dev`)
- [ ] Production build tested (`npm run build && npm run preview`)
- [ ] Server configuration file created for your hosting platform
- [ ] Configuration file added to version control
- [ ] Deployed to production
- [ ] Verified 301 status code with curl
- [ ] Tested in multiple browsers
- [ ] Query parameter preservation verified
- [ ] Google Search Console updated (if applicable)
- [ ] Analytics tracking verified (ensure /services page tracks visitors from /team)

---

## 6. Expected SEO Outcomes

**After implementing the 301 redirect:**

1. **Link Equity Transfer**
   - Any backlinks pointing to `/team` will pass ~90-99% of their SEO value to `/services`
   - This preserves your search rankings

2. **Search Engine Indexing**
   - Google will eventually deindex `/team`
   - All traffic will be directed to `/services`
   - This process typically takes 2-4 weeks

3. **User Experience**
   - Users with bookmarks to `/team` will automatically reach `/services`
   - No broken links or 404 errors
   - Seamless transition

4. **Analytics**
   - Monitor traffic patterns to ensure visitors from `/team` are properly tracked
   - Set up a custom event in Google Analytics to track redirect hits (optional)

---

## 7. Monitoring & Maintenance

### Week 1-2 After Deployment

- [ ] Check server logs for 301 redirect hits
- [ ] Monitor Google Search Console for crawl errors
- [ ] Verify analytics shows traffic to `/services`
- [ ] Check for any 404 errors related to `/team`

### Week 3-4 After Deployment

- [ ] Verify search engines have updated their index
- [ ] Check if `/team` is deindexed in Google
- [ ] Confirm all backlinks redirect properly
- [ ] Monitor page performance metrics

### Long-term Maintenance

- Keep the redirect in place for at least 12 months
- Monitor for any external sites still linking to `/team`
- Consider reaching out to high-value sites to update links
- Document the redirect for future developers

---

## Need Help?

If you encounter issues:

1. Check the troubleshooting section above
2. Verify your hosting platform's specific redirect syntax
3. Test with curl to isolate client vs. server issues
4. Review server logs for error messages
5. Contact your hosting provider's support if needed

**Current Implementation Status:**
✅ Client-side redirect active
⚠️ Server-side redirect pending (requires hosting platform configuration)
