# Schema Markup Quick Start Guide

Quick reference for implementing JSON-LD schema markup on new pages.

---

## Installation (Already Complete)

The `SchemaMarkup` component is ready to use at:
```
src/components/SchemaMarkup.tsx
```

---

## Usage by Page Type

### 1. Home Page / General Pages

```tsx
import SchemaMarkup from '../components/SchemaMarkup';

export default function YourPage() {
  return (
    <>
      <SchemaMarkup
        type="home"  // or "general"
        pageTitle="Your Page Title"
        pageDescription="Your page description"
        pageUrl="https://www.dteroofingllc.com/your-page"
      />
      {/* Your page content */}
    </>
  );
}
```

**Generates:** LocalBusiness + AggregateRating + WebPage + Breadcrumbs

---

### 2. Service Pages

```tsx
import SchemaMarkup from '../../components/SchemaMarkup';

export default function YourService() {
  return (
    <>
      <SchemaMarkup
        type="service"
        service={{
          name: 'Service Name',
          description: 'Complete description of what this service includes...',
          url: '/services/your-service'
        }}
        pageTitle="Service Name - DTE Roofing LLC"
        pageDescription="Brief service description for meta tags"
        pageUrl="https://www.dteroofingllc.com/services/your-service"
      />
      {/* Your page content */}
    </>
  );
}
```

**Generates:** LocalBusiness + AggregateRating + Service + WebPage + Breadcrumbs

---

### 3. FAQ Pages

```tsx
import SchemaMarkup from '../components/SchemaMarkup';

export default function FAQ() {
  const faqs = [
    {
      question: 'Your question?',
      answer: 'Your detailed answer here...'
    },
    // ... more FAQs
  ];

  return (
    <>
      <SchemaMarkup
        type="faq"
        faqs={faqs}
        pageTitle="Frequently Asked Questions"
        pageDescription="Get answers to common questions..."
        pageUrl="https://www.dteroofingllc.com/faq"
      />
      {/* Your page content */}
    </>
  );
}
```

**Generates:** LocalBusiness + AggregateRating + FAQPage + WebPage + Breadcrumbs

---

### 4. Location Pages

```tsx
import SchemaMarkup from '../../components/SchemaMarkup';

export default function YourLocation() {
  return (
    <>
      <SchemaMarkup
        type="location"
        locationName="City Name"
        pageTitle="Roofing Services in City Name, OH"
        pageDescription="Professional roofing services in City Name..."
        pageUrl="https://www.dteroofingllc.com/locations/city-name"
      />
      {/* Your page content */}
    </>
  );
}
```

**Generates:** LocalBusiness + AggregateRating + WebPage + Breadcrumbs (location-specific)

---

## Common Service Examples

### Roof Inspection
```tsx
service={{
  name: 'Roof Inspection',
  description: 'Professional roof inspection services with detailed reports, photos, and expert recommendations. Identify potential issues before they become costly repairs.',
  url: '/services/roof-inspection'
}}
```

### Gutter Installation
```tsx
service={{
  name: 'Gutter Installation',
  description: 'Expert gutter installation and replacement services. Protect your home foundation with properly installed seamless gutters and downspouts.',
  url: '/services/gutters'
}}
```

### Storm Damage Repair
```tsx
service={{
  name: 'Storm Damage Repair',
  description: 'Emergency storm damage repair services in Columbus, OH. Fast response for wind, hail, and storm damage. Insurance claims assistance available.',
  url: '/services/storm-damage'
}}
```

### Commercial Roofing
```tsx
service={{
  name: 'Commercial Roofing',
  description: 'Commercial roofing services for businesses in Columbus, OH. TPO, EPDM, modified bitumen, and metal roofing systems. Minimal business disruption.',
  url: '/services/commercial-roofing'
}}
```

---

## Props Reference

| Prop | Type | Required | Used For |
|------|------|----------|----------|
| `type` | `'home' \| 'service' \| 'faq' \| 'location' \| 'general'` | ✅ Yes | Determines which schemas to generate |
| `pageTitle` | `string` | ⚠️ Recommended | WebPage name & breadcrumbs |
| `pageDescription` | `string` | ⚠️ Recommended | WebPage description |
| `pageUrl` | `string` | ⚠️ Recommended | Canonical URL, breadcrumbs |
| `service` | `{ name, description, url }` | Only for `type="service"` | Service schema details |
| `faqs` | `Array<{ question, answer }>` | Only for `type="faq"` | FAQ schema questions |
| `locationName` | `string` | Only for `type="location"` | Location-specific breadcrumbs |

---

## Testing Your Implementation

### Step 1: Verify in Browser
1. Visit your page
2. Right-click → View Page Source
3. Search for `<script type="application/ld+json">`
4. Verify JSON structure looks correct

### Step 2: Google Rich Results Test
1. Visit: https://search.google.com/test/rich-results
2. Enter your page URL
3. Click "Test URL"
4. Review detected schemas
5. Fix any errors or warnings

### Step 3: Schema.org Validator
1. Visit: https://validator.schema.org/
2. Paste your page URL or code
3. Check for validation issues
4. Ensure all required properties present

---

## Validation Checklist

✅ **Before Deploying:**
- [ ] SchemaMarkup component imported
- [ ] Correct `type` prop specified
- [ ] `pageUrl` is absolute URL (includes https://)
- [ ] `pageTitle` and `pageDescription` provided
- [ ] Service details complete (if service page)
- [ ] FAQ array populated (if FAQ page)
- [ ] No TypeScript errors
- [ ] Build succeeds (`npm run build`)

✅ **After Deploying:**
- [ ] Schema visible in page source
- [ ] Passes Google Rich Results Test
- [ ] Passes Schema.org Validator
- [ ] No errors in Google Search Console
- [ ] Review data populating correctly

---

## Troubleshooting

### Schema not appearing?
- Check component is rendering (not inside conditional that's false)
- Verify no JavaScript errors in console
- Ensure props are passed correctly

### Review count showing 86 instead of current count?
- Normal! This is the fallback value
- Review data loads asynchronously
- Check `useReviewData` hook in SchemaMarkup component

### Validation errors?
- Read error message carefully
- Check Schema.org documentation for requirements
- Verify all URLs are absolute (include https://)
- Ensure description isn't empty or too short

---

## Need Help?

1. Check full documentation: `SCHEMA-MARKUP-IMPLEMENTATION.md`
2. Review existing implementations in:
   - `src/pages/Home.tsx`
   - `src/pages/FAQ.tsx`
   - `src/pages/services/RoofRepair.tsx`
3. Test with validation tools
4. Review Schema.org documentation

---

**Component Location:** `src/components/SchemaMarkup.tsx`
**Full Documentation:** `SCHEMA-MARKUP-IMPLEMENTATION.md`
**Last Updated:** December 22, 2025
