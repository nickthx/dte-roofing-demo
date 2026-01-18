import { useEffect } from 'react';

interface SeoSchemaProps {
  schema: Record<string, any>;
  id?: string;
}

export default function SeoSchema({ schema, id }: SeoSchemaProps) {
  useEffect(() => {
    // Validate that schema has required @context and @type
    if (!schema['@context'] || !schema['@type']) {
      console.warn('Schema missing required @context or @type properties');
    }
  }, [schema]);

  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
