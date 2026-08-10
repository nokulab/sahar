export const site = {
  name: 'Portal Page',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://portalpage.example',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || '',
  social: {
    linkedin: import.meta.env.PUBLIC_LINKEDIN_URL || '',
    github: import.meta.env.PUBLIC_GITHUB_URL || ''
  },
  address: '',
  defaultImage: '/images/og-default.png',
  tagline: 'Your community. Your platform. Your data.',
  description: 'Privacy-first digital community infrastructure for organisations.'
} as const;

export const nav = [
  { label: 'Platform', href: '/platform/', links: [
    ['Overview', '/platform/'], ['Communication', '/platform/community-communication/'], ['Announcements', '/platform/announcements/'], ['Documents', '/platform/documents/'], ['Events', '/platform/events/'], ['Community support', '/platform/community-support/'], ['Roles & permissions', '/platform/roles-and-permissions/'], ['Integrations', '/platform/integrations/']
  ]},
  { label: 'Solutions', href: '/solutions/', links: [
    ['Overview', '/solutions/'], ['Government', '/solutions/government/'], ['Local government', '/solutions/local-government/'], ['Business', '/solutions/business/'], ['Property & strata', '/solutions/property-and-strata/'], ['Associations', '/solutions/associations/'], ['Education', '/solutions/education/'], ['Not-for-profits', '/solutions/not-for-profits/']
  ]},
  { label: 'Why Portal Page', href: '/principles/', links: [
    ['Principles', '/principles/'], ['Data ownership', '/data-ownership/'], ['Privacy by design', '/privacy-by-design/'], ['Security', '/security/'], ['Accessibility', '/accessibility/'], ['Community governance', '/community-governance/']
  ]},
  { label: 'Resources', href: '/resources/', links: [
    ['Guides', '/resources/'], ['Insights', '/insights/'], ['Community examples', '/community-examples/'], ['Communities', '/communities/']
  ]},
  { label: 'Company', href: '/about/', links: [
    ['About', '/about/'], ['Team', '/team/'], ['Careers', '/careers/'], ['Brand', '/brand/'], ['Contact', '/contact/']
  ]}
] as const;
