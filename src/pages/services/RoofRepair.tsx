import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function RoofRepair() {
  return (
    <ServicePageTemplate
      serviceName="Roof Repair"
      slug="roof-repair"
      subheadline="Honest diagnostics by hands-on experts."
      metaDescription="Honest roof repair by hands-on experts in Columbus. 86+ five-star reviews. Book a free inspection today."
      keywords="roof repair Columbus OH, Columbus roofing company, roof repair near me, emergency roof repair Columbus, leak repair Columbus, storm damage repair, shingle replacement Columbus, roofing contractor Columbus"
      problemPromise={`Every homeowner dreads finding a water stain on their ceiling or discovering missing shingles after a storm. Too many Columbus roofers will try to sell you a full replacement when a targeted repair would solve the problem—or worse, slap on a quick patch that fails in six months.

At DTE Roofing, we take a different approach. Founded by two brothers, Donovan and Mitchell, who were both raised in Hilliard Ohio and graduated from Hilliard Davidson High School. They built DTE Roofing to deliver honest diagnostics and precision repairs.

We personally inspect every roof, identify the root cause of your problem (not just the symptoms), and fix only what's needed. Whether it's damaged flashing, worn shingles, or a stubborn leak, we use premium materials and proven techniques to restore your roof's integrity. Our repairs blend seamlessly with your existing roof and come with comprehensive workmanship warranties.`}
      whatWeDo={[
        'Emergency leak detection and repair',
        'Damaged or missing shingle replacement',
        'Flashing repairs around chimneys, vents, and skylights',
        'Storm and wind damage restoration',
        'Valley and ridge cap repairs',
        'Professional Decking',
        'Ice dam damage remediation',
        'Gutter and downspout repairs'
      ]}
      processSteps={[
        {
          number: '1',
          title: 'Inspect',
          description: 'We conduct a hands-on inspection to identify all issues—not just surface symptoms. You receive photos and a detailed written report explaining exactly what needs repair.'
        },
        {
          number: '2',
          title: 'Explain',
          description: 'We walk you through our findings in plain language, showing you the damaged areas and explaining your options. No pressure, no upselling—just honest recommendations.'
        },
        {
          number: '3',
          title: 'Repair',
          description: 'Our skilled crew uses premium materials and proven techniques to fix the root cause. We match your existing shingles and ensure repairs blend seamlessly.'
        },
        {
          number: '4',
          title: 'Final Review & Warranty',
          description: 'We perform a final inspection to verify quality, clean up the job site completely, and provide you with workmanship warranty documentation.'
        }
      ]}
      faqs={[
        {
          question: 'How much does roof repair cost in Columbus?',
          answer: 'Roof repair costs vary based on the extent of damage, materials needed, and accessibility. Minor repairs like replacing a few shingles typically range from $300-$800, while more extensive repairs involving flashing or decking can range from $1,000-$3,000. We provide detailed written estimates before starting any work so you know exactly what to expect. Call us at 614-971-6028 for a free inspection and accurate quote.'
        },
        {
          question: 'How quickly can you repair my roof?',
          answer: 'For emergency situations like active leaks, we offer same-day or next-day service to prevent further damage. Most standard repairs are completed within 1-3 days, depending on weather conditions and the scope of work. We prioritize quick response times while never sacrificing quality.'
        },
        {
          question: 'Do you offer warranties on repairs?',
          answer: 'Yes! All our repairs come with comprehensive workmanship warranties. The specific warranty length depends on the type of repair, but typically ranges from 2-5 years. We also use materials backed by manufacturer warranties. We stand behind our work completely.'
        },
        {
          question: 'Should I repair or replace my roof?',
          answer: 'This depends on several factors: the age of your roof, extent of damage, and overall condition. If your roof is under 15 years old and damage is localized, repair is usually the best option. For roofs over 20 years old with widespread issues, replacement may be more cost-effective long-term. We always provide honest recommendations—we will never sell you a replacement if repairs will solve the problem.'
        },
        {
          question: 'Will you help with insurance claims?',
          answer: 'Absolutely. For storm damage, we work directly with your insurance company, providing detailed documentation, photos, and estimates to support your claim. We have extensive experience with the claims process and can help ensure you receive fair coverage for necessary repairs.'
        },
        {
          question: 'Can you match my existing shingles?',
          answer: 'In most cases, yes. We carry a wide range of shingles from leading manufacturers and can usually find an exact or very close match to your existing roof. For older roofs where exact matches are no longer available, we source the closest possible match to ensure repairs blend seamlessly.'
        }
      ]}
      relatedServices={[
        { name: 'Roof Inspection', link: '/services/roof-inspection' },
        { name: 'Roof Replacement', link: '/services/roof-replacement' },
        { name: 'Emergency Services', link: '/services/emergency-services' },
        { name: 'Storm Damage Repair', link: '/services/storm-damage' }
      ]}
    />
  );
}
