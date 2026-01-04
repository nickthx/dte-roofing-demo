import { useEffect } from 'react';
import { useReviewData } from '../hooks/useReviewData';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonical
}: SEOProps) {
  const { reviewData } = useReviewData();
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    const updateOrCreateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    updateOrCreateMetaTag('og:title', ogTitle || title);
    updateOrCreateMetaTag('og:description', ogDescription || description);
    updateOrCreateMetaTag('og:type', 'website');

    if (ogImage) {
      updateOrCreateMetaTag('og:image', ogImage);
    }

    updateOrCreateMetaTag('twitter:card', 'summary_large_image');
    updateOrCreateMetaTag('twitter:title', ogTitle || title);
    updateOrCreateMetaTag('twitter:description', ogDescription || description);

    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (linkCanonical) {
        linkCanonical.href = canonical;
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        linkCanonical.href = canonical;
        document.head.appendChild(linkCanonical);
      }
    }
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": "DTE Roofing",
      "image": "https://www.dteroofingllc.com/DTE-Roofing-Logo-two-Men.png",
      "@id": "https://www.dteroofingllc.com",
      "url": "https://www.dteroofingllc.com",
      "telephone": "614-971-6028",
      "email": "experience@dteroofingllc.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "615 Hilliard Rome Rd",
        "addressLocality": "Columbus",
        "addressRegion": "OH",
        "postalCode": "43228",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.9747532,
        "longitude": -83.1253715
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.google.com/maps/place/DTE+Roofing/@39.9747532,-83.1279464,17z"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(reviewData?.averageRating || 5),
        "reviewCount": String(reviewData?.totalReviews || 89),
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "$$",
      "areaServed": [
        {
          "@type": "City",
          "name": "Columbus",
          "containedInPlace": {
            "@type": "State",
            "name": "Ohio"
          }
        },
        {
          "@type": "City",
          "name": "Dublin"
        },
        {
          "@type": "City",
          "name": "Hilliard"
        }
      ],
      "founders": [
        {
          "@type": "Person",
          "name": "Donovan"
        },
        {
          "@type": "Person",
          "name": "Mitchell"
        }
      ]
    };

    let schemaScript = document.querySelector('script[type="application/ld+json"][data-schema="local-business"]');
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(localBusinessSchema);
    } else {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema', 'local-business');
      schemaScript.textContent = JSON.stringify(localBusinessSchema);
      document.head.appendChild(schemaScript);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, reviewData]);

  return null;
}
