# Domain Standardization Complete

## Summary
Successfully standardized all SEO/schema/canonical references to the single canonical domain: **https://www.dteroofingllc.com**

All references to "https://dteroofing.com" have been removed from runtime SEO outputs and JSON-LD schemas.

---

## Files Created

### 1. `/src/seo/constants.ts`
**Purpose:** Single source of truth for domain configuration

```typescript
export const CANONICAL_DOMAIN = "https://www.dteroofingllc.com";
```

This constant is now imported and used across all pages that need canonical URLs or schema references.

---

## Files Modified

### Core Schema Files

#### 1. `/src/seo/schemas.ts`
**Changes:**
- Added import: `import { CANONICAL_DOMAIN } from './constants';`
- Updated `@id`: Changed from `"https://dteroofing.com/#business"` to `` `${CANONICAL_DOMAIN}/#business` ``
- Updated `url`: Changed from `"https://dteroofing.com/"` to `` `${CANONICAL_DOMAIN}/` ``
- Updated `image`: Changed from hardcoded to `` `${CANONICAL_DOMAIN}/DTE-Roofing-Logo-two-Men.png` ``

**Note:** This schema file is currently not used on the homepage (removed SeoSchema component usage). Only SchemaMarkup component outputs the LocalBusiness/RoofingContractor schema on the homepage.

---

### Homepage

#### 2. `/src/pages/Home.tsx`
**Changes:**
- Added import: `import { CANONICAL_DOMAIN } from '../seo/constants';`
- Removed imports: `SeoSchema` and `localBusinessSchema` (no longer used)
- Updated SEO canonical: Changed from hardcoded string to `` `${CANONICAL_DOMAIN}/` ``
- Updated SchemaMarkup pageUrl: Changed from hardcoded string to `` `${CANONICAL_DOMAIN}/` ``
- Removed duplicate schema: Deleted `<SeoSchema>` component (homepage now uses ONLY SchemaMarkup)

**Result:** Homepage has exactly ONE LocalBusiness/RoofingContractor JSON-LD schema output via SchemaMarkup component.

---

### Service Pages (11 files updated)

All service pages now import and use `CANONICAL_DOMAIN` constant:

#### 3. `/src/pages/services/RoofInspection.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/roof-inspection`} ``

#### 4. `/src/pages/services/RoofRepair.tsx`
- Already uses ServicePageTemplate (no direct canonical needed)

#### 5. `/src/pages/services/RoofReplacement.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/roof-replacement`} ``

#### 6. `/src/pages/services/RoofInstallation.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/roof-installation`} ``

#### 7. `/src/pages/services/RoofMaintenance.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/roof-maintenance`} ``

#### 8. `/src/pages/services/EmergencyServices.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/emergency-services`} ``

#### 9. `/src/pages/services/CommercialRoofing.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/commercial-roofing`} ``

#### 10. `/src/pages/services/Siding.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/siding`} ``

#### 11. `/src/pages/services/Gutters.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/gutters`} ``

#### 12. `/src/pages/services/GutterServices.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/gutter-services`} ``

#### 13. `/src/pages/services/StormDamage.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/storm-damage`} ``

#### 14. `/src/pages/services/PreventativeMaintenance.tsx`
- Added import: `import { CANONICAL_DOMAIN } from '../../seo/constants';`
- Updated canonical: `` canonical={`${CANONICAL_DOMAIN}/services/preventative-maintenance`} ``

---

## Files Verified (No Changes Needed)

The following files already use the correct canonical domain:
- All location pages (`/src/pages/locations/*.tsx`) - Already using `https://www.dteroofingllc.com`
- `/src/pages/FAQ.tsx` - Already using `https://www.dteroofingllc.com/faq`
- `/src/pages/About.tsx` - Already using `https://www.dteroofingllc.com/about`
- `/src/pages/Blog.tsx` - Already using `https://www.dteroofingllc.com/blog`
- `/src/pages/Contact.tsx` - Already using `https://www.dteroofingllc.com/contact`
- `/src/pages/Gallery.tsx` - Already using `https://www.dteroofingllc.com/gallery`
- `/src/components/SchemaMarkup.tsx` - Already using `https://www.dteroofingllc.com` in BUSINESS_INFO

---

## Remaining References to "dteroofing.com"

The following references remain and are **CORRECT** (these are actual email addresses, not SEO/domain references):

1. `/src/pages/FAQ.tsx` - Lines 221, 229: `experience@dteroofing.com` (email address)
2. `/src/pages/Contact.tsx` - Lines 398, 401: `experience@dteroofing.com` (email address)
3. `/src/components/ServiceLeadForm.tsx` - Lines 223, 225: `experience@dteroofing.com` (email address)

**Note:** Email addresses should NOT be changed - they are valid contact information, not domain references.

---

## Build Verification

✅ **Build Status:** SUCCESSFUL
- No TypeScript errors
- No lint errors
- No runtime errors
- All imports resolved correctly

```
✓ 1598 modules transformed.
dist/index.html                   2.11 kB │ gzip:   0.86 kB
dist/assets/index-Emhg_OfG.css   37.88 kB │ gzip:   6.38 kB
dist/assets/index-Cbj-bY-O.js   929.58 kB │ gzip: 212.77 kB
✓ built in 9.58s
```

---

## Schema Verification Checklist

### DevTools Inspection Steps

1. **Open Homepage in Browser**
   - Navigate to: `http://localhost:5173/` (dev) or production URL
   - Open DevTools (F12)

2. **Check for Duplicate Schemas**
   - In Elements tab, search for: `<script type="application/ld+json"`
   - Count should be: **1** schema on homepage with `@type: "RoofingContractor"`
   - Verify NO duplicate LocalBusiness schemas

3. **Inspect JSON-LD Content**
   - Click on the `<script type="application/ld+json">` element
   - Verify the JSON contains:
     ```json
     {
       "@context": "https://schema.org",
       "@type": "RoofingContractor",
       "@id": "https://www.dteroofingllc.com#business",
       "url": "https://www.dteroofingllc.com",
       ...
     }
     ```

4. **Check Canonical Link**
   - In Elements tab, search for: `<link rel="canonical"`
   - Verify href: `https://www.dteroofingllc.com/`

5. **Search for Wrong Domain**
   - In Elements tab, press Ctrl+F (or Cmd+F)
   - Search for: `dteroofing.com` (without www)
   - Should find: **0 results** in schema/canonical contexts (only in email addresses)

### Google Rich Results Test

1. Visit: https://search.google.com/test/rich-results
2. Enter homepage URL: `https://www.dteroofingllc.com/`
3. Wait for analysis
4. Verify detection of:
   - **Local Business** (RoofingContractor)
   - Correct `@id`: `https://www.dteroofingllc.com#business`
   - Correct `url`: `https://www.dteroofingllc.com`

### Schema Markup Validator

1. Visit: https://validator.schema.org/
2. Enter homepage URL: `https://www.dteroofingllc.com/`
3. Check for:
   - ✅ No errors
   - ✅ No warnings about duplicate entities
   - ✅ All URLs use correct canonical domain

---

## Key Outcomes

✅ Single canonical domain: `https://www.dteroofingllc.com` (consistent across all SEO outputs)
✅ No duplicate LocalBusiness schemas on homepage
✅ All service pages use canonical domain
✅ All schema @id and url fields use canonical domain
✅ Build passes without errors
✅ TypeScript types correct
✅ No lint issues

---

## Future Maintenance

To maintain domain consistency:

1. **Always import and use `CANONICAL_DOMAIN` constant** from `/src/seo/constants.ts`
2. **Never hardcode URLs** in SEO/schema contexts - use the constant
3. **Homepage schema rule:** Only SchemaMarkup component should output LocalBusiness/RoofingContractor
4. **Email addresses:** Keep `experience@dteroofing.com` unchanged (it's contact info, not a domain reference)

---

## Files Summary

**Created:** 1 file
- `src/seo/constants.ts`

**Modified:** 14 files
- `src/seo/schemas.ts`
- `src/pages/Home.tsx`
- `src/pages/services/RoofInspection.tsx`
- `src/pages/services/RoofReplacement.tsx`
- `src/pages/services/RoofInstallation.tsx`
- `src/pages/services/RoofMaintenance.tsx`
- `src/pages/services/EmergencyServices.tsx`
- `src/pages/services/CommercialRoofing.tsx`
- `src/pages/services/Siding.tsx`
- `src/pages/services/Gutters.tsx`
- `src/pages/services/GutterServices.tsx`
- `src/pages/services/StormDamage.tsx`
- `src/pages/services/PreventativeMaintenance.tsx`

**Total Changes:** 15 files
