export interface PageSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
}

export interface SitePage {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  tone?: 'paper' | 'ink' | 'blue' | 'lime';
  sections: PageSection[];
  related?: { label: string; href: string }[];
}

const feature = (slug: string, title: string, description: string, focus: string, outcomes: string[], considerations: string[]): SitePage => ({
  slug: `platform/${slug}`,
  title,
  eyebrow: 'Platform capability',
  description,
  intro: `${description} Portal Page approaches ${title.toLowerCase()} as part of a governed community environment, not an isolated feature competing for attention.`,
  sections: [
    {
      id: 'purpose',
      title: 'Designed around community purpose',
      paragraphs: [
        `${focus} In a Portal Page community, the aim is to help the right people find, understand and act on information within a space operated by their organisation.`,
        `That changes the design question. Instead of asking how to maximise clicks or time spent, an organisation can ask whether people received what mattered, whether responsibilities were clear and whether members could participate on reasonable terms.`,
        `The capability is intended to work alongside membership, groups, permissions, moderation and governance. Exact behaviour should be confirmed during implementation so the portal reflects the organisation's operating model.`
      ],
      callout: 'A useful community tool should make the important thing easier to do—and make the boundary around it easier to understand.'
    },
    {
      id: 'outcomes',
      title: 'What it could make possible',
      paragraphs: [
        `Different communities will configure this area differently. A council program, a residential building and a professional association have different vocabulary, obligations and rhythms. Portal Page is intended to give administrators a coherent foundation without treating every community as interchangeable.`,
        `During discovery, Portal Page would map the information flow, member roles, approval points, retention needs and accessibility requirements before confirming the final capability.`
      ],
      bullets: outcomes
    },
    {
      id: 'governance',
      title: 'Governance belongs in the design',
      paragraphs: [
        `A feature is only trustworthy when people can understand who can use it, who can see the result and what happens next. Roles and permissions, community standards, administrator responsibilities and clear language all matter here.`,
        `Portal Page's product direction is privacy-first: collect only what is needed for the stated purpose, avoid behavioural advertising, provide meaningful organisational control and plan for appropriate export and deletion pathways. Those principles still need to be expressed in the final service configuration and customer agreement.`
      ],
      bullets: considerations
    },
    {
      id: 'questions',
      title: 'Questions to resolve before launch',
      paragraphs: [
        `A responsible implementation starts with decisions, not defaults. Who owns the workflow? Which members need access? What records should be retained? How will people receive help? What happens when someone leaves? Which accessibility needs must be tested with real users?`,
        `Portal Page would use those answers to shape configuration and governance. Where legal, records-management or regulatory obligations apply, the organisation should obtain appropriate professional advice rather than relying on general website information.`
      ]
    }
  ],
  related: [
    { label: 'Platform overview', href: '/platform/' },
    { label: 'Roles and permissions', href: '/platform/roles-and-permissions/' },
    { label: 'Read our principles', href: '/principles/' }
  ]
});

const solution = (slug: string, title: string, description: string, communities: string[], needs: string[], caveat?: string): SitePage => ({
  slug: `solutions/${slug}`,
  title,
  eyebrow: 'Solution',
  description,
  intro: `${description} The goal is a digital place with recognisable boundaries, clear administration and a purpose that members can understand.`,
  tone: slug.includes('government') ? 'blue' : 'paper',
  sections: [
    {
      id: 'place',
      title: 'A place, not another channel',
      paragraphs: [
        `${title} communities are often asked to follow conversations across email chains, websites, messaging apps, social feeds and document systems. Each tool may solve a narrow problem, but the combined experience becomes difficult to navigate and govern.`,
        `A dedicated portal can give members a stable starting point: one recognisable environment for official information, community discussion, useful documents, events and requests. It should complement the organisation's broader service and communications ecosystem, with responsibilities and authoritative sources made explicit.`,
        `Portal Page is designed as organisation-owned community infrastructure. The organisation pays for the service; member activity should not become the raw material for an advertising marketplace.`
      ],
      bullets: communities
    },
    {
      id: 'needs',
      title: 'Start with operating needs',
      paragraphs: [
        `Technology cannot substitute for governance. Before a community opens, its operator needs to decide who belongs, which spaces are available, who publishes official information, how moderation works and how members receive support.`,
        `Portal Page's intended discovery process brings communications, service, privacy, accessibility, information-management and technology perspectives into the same conversation. That creates a practical blueprint for configuration and launch.`
      ],
      bullets: needs,
      callout: caveat || 'Portal Page would confirm scope, configuration and responsibilities with each organisation before making specific capability commitments.'
    },
    {
      id: 'trust',
      title: 'Trust is operational',
      paragraphs: [
        `Trust does not arrive through a privacy slogan. Members need plain explanations of why information is requested, who can access it, how long it is needed and how to raise a concern. Administrators need roles that reflect real responsibilities rather than shared, overpowered accounts.`,
        `A well-run community also needs understandable standards, consistent moderation, accessible content and a clear route out. Portal Page treats those needs as part of the product and implementation, while recognising that the customer remains responsible for its community policies and lawful use.`
      ]
    },
    {
      id: 'possibilities',
      title: 'What a portal could bring together',
      paragraphs: [
        `Depending on confirmed requirements, a community portal could bring together targeted announcements, structured discussions, documents, events, member information, requests, support content and searchable guidance. Groups and roles could shape which areas are available to different participants.`,
        `These examples describe the direction and potential use of Portal Page. They are not a representation that every capability is already deployed in every configuration.`
      ]
    }
  ],
  related: [
    { label: 'Explore the platform', href: '/platform/' },
    { label: 'Community governance', href: '/community-governance/' },
    { label: 'Talk to Portal Page', href: '/contact/' }
  ]
});

export const pages: SitePage[] = [
  feature('community-communication', 'Community communication', 'Bring official information and community participation into one coherent place.', 'Communication should reduce ambiguity: members should be able to distinguish organisation updates from member discussion and understand where to go next.', ['A consistent home for important information', 'Targeted communication for relevant groups', 'Clear separation between official and community-authored content', 'Links back to enduring documents and services'], ['Publishing roles and approval paths', 'Notification expectations and quiet periods', 'Accessible language and alternative formats', 'Retention and correction responsibilities']),
  feature('announcements', 'Announcements', 'Publish timely, authoritative updates without relying on an algorithmic feed.', 'Announcements should help an organisation say what happened, who is affected and what action—if any—members need to take.', ['Whole-community and group-specific updates', 'Prominence for time-sensitive information', 'A durable archive of past notices', 'Clear authorship and publication dates'], ['Authority to publish urgent information', 'Review and correction workflows', 'Expiry or archival rules', 'Alternative channels for critical notices']),
  feature('discussions', 'Discussions', 'Create bounded spaces for considered conversation among community members.', 'A private discussion space can support practical exchange without making a community conversation globally searchable or commercially profiled.', ['Topic-based conversations', 'Spaces for defined groups', 'Visible community expectations', 'Moderation and reporting pathways'], ['Participation rules', 'Moderator scope and escalation', 'Sensitive topics and privacy', 'When a discussion becomes an official record']),
  feature('documents', 'Documents', 'Give community information a stable home that members can find again.', 'Documents work best when they have context: what the item is, who published it, whether it is current and what members should do with it.', ['Shared guides, forms and reference material', 'Topic and group organisation', 'Searchable titles and descriptions', 'Clear version and publication information'], ['Authoritative source and version control', 'Access permissions', 'Retention and disposal', 'Accessible document formats']),
  feature('events', 'Events', 'Help members discover what is happening and understand how to take part.', 'Community events are more useful when time, location, audience, accessibility and participation details are presented together.', ['Community calendars', 'Group-specific events', 'Participation instructions', 'Links to supporting information'], ['Time zones and changes', 'Capacity and registration dependencies', 'Accessibility information', 'Privacy of attendance information']),
  feature('member-directory', 'Member directory', 'Help people recognise who is part of the community without exposing more than is necessary.', 'A member directory should be purpose-limited. People need to understand which details are visible, to whom and why.', ['Role-aware profiles', 'Useful, limited identity information', 'Group and organisational context', 'Member-controlled visibility where appropriate'], ['Data minimisation', 'Visibility defaults', 'Consent and expectations', 'Departure and account lifecycle']),
  feature('roles-and-permissions', 'Roles and permissions', 'Reflect real responsibilities with clear, least-privilege access.', 'Permissions are the practical expression of community boundaries. A useful role model should be understandable to administrators and defensible to members.', ['Administrative and moderation roles', 'Group-specific access', 'Publishing responsibilities', 'Member lifecycle controls'], ['Least privilege', 'Regular access review', 'Joiner, mover and leaver processes', 'Avoidance of shared administrator accounts']),
  feature('community-support', 'Community support', 'Create clear pathways for questions, requests and practical help.', 'Support should make ownership visible. Members need to know whether they are asking the organisation, a moderator or the wider community—and what response to expect.', ['Help content in context', 'Structured request pathways', 'Clear service expectations', 'Escalation to the right team'], ['Scope and service levels', 'Sensitive information handling', 'Record and deletion needs', 'Accessible alternatives']),
  feature('search', 'Search', 'Make useful community knowledge findable without turning behaviour into an advertising profile.', 'Search should help members recover information across announcements, discussions, documents and guidance while respecting access boundaries.', ['One route to relevant community content', 'Clear result labels and content types', 'Permission-aware results', 'Useful titles and descriptions'], ['Index only what a member can access', 'Search-log minimisation', 'Synonyms and community language', 'No public indexing of private content']),
  feature('moderation', 'Moderation', 'Support fair, transparent community stewardship.', 'Moderation is a relationship between people, rules and context. Tools can support that work, but they cannot replace sound judgement or accountable policies.', ['Published community standards', 'Member reporting pathways', 'Consistent review processes', 'Appropriate moderator roles'], ['Procedural fairness', 'Escalation and urgent risk', 'Moderator wellbeing', 'Decision records and privacy']),
  feature('integrations', 'Integrations', 'Connect a portal deliberately, without creating an uncontrolled data web.', 'Integrations should have a defined purpose, clear data flows and an accountable owner. Portal Page does not claim specific integrations until they are scoped and implemented.', ['Potential links to identity and business systems', 'Reduced duplicate administration', 'Purpose-specific data exchange', 'A documented system boundary'], ['Vendor assessment', 'Authentication and authorisation', 'Data minimisation and error handling', 'Exit planning and portability']),
  feature('accessibility', 'Platform accessibility', 'Design participation so more people can perceive, understand and operate the community.', 'Accessibility is an ongoing practice involving design, code, content and support—not a one-time automated score.', ['Keyboard-operable experiences', 'Clear structure and language', 'Visible focus and strong contrast', 'Support for assistive technology'], ['Testing with disabled people', 'Accessible authoring guidance', 'Alternative formats and support', 'Continuous regression review']),

  solution('government', 'Government communities', 'Private digital community infrastructure for defined public-purpose groups.', ['Program and project communities', 'Advisory and reference groups', 'Professional and inter-agency networks', 'Grant and volunteer communities', 'Stakeholder communities'], ['Clear public-purpose statement', 'Accessibility and inclusive participation', 'Information and records-management decisions', 'Role-based administration', 'Procurement, privacy and security assessment'], 'A portal may support engagement, but it does not replace statutory consultation, formal records obligations or another legally required channel.'),
  solution('local-government', 'Local government communities', 'A governed digital place for councils and the communities connected to their programs, places and services.', ['Place-based groups', 'Community reference panels', 'Volunteer networks', 'Local program communities', 'Project and precinct communities'], ['Clarity about council and member content', 'Inclusive access beyond the portal', 'Moderation and councillor or staff roles', 'Emergency communication boundaries', 'Records and privacy assessment'], 'Portal Page should complement—not be represented as replacing—formal council channels, emergency warnings or statutory engagement processes.'),
  solution('business', 'Business communities', 'Bring customers, partners, employees or project participants together around a shared purpose.', ['Customer communities', 'Partner networks', 'Project groups', 'Professional communities', 'Distributed internal communities'], ['A defined business owner', 'Separation between audiences', 'Commercial confidentiality', 'Support and escalation paths', 'Identity lifecycle management']),
  solution('property-and-strata', 'Property and strata communities', 'A private digital home for the people connected to a physical place.', ['Residential buildings', 'Owners corporations and bodies corporate', 'Mixed-use properties', 'Building committees', 'Managed residential communities'], ['Resident onboarding and departure', 'Committee and management responsibilities', 'Urgent versus routine communication', 'Privacy of resident details', 'Local legal and record-keeping advice'], 'Property and strata obligations vary by jurisdiction. Portal Page information is general and should not be treated as legal or records-management advice.'),
  solution('associations', 'Associations', 'Give members an enduring place for knowledge, participation and professional connection.', ['Industry associations', 'Professional bodies', 'Clubs and societies', 'Alumni networks', 'Special-interest communities'], ['Membership source of truth', 'Committee and staff roles', 'Member directory choices', 'Branch or chapter structure', 'Election and governance boundaries']),
  solution('not-for-profits', 'Not-for-profit communities', 'Coordinate members, volunteers, supporters and program participants without monetising their attention.', ['Volunteer communities', 'Peer networks', 'Program cohorts', 'Member organisations', 'Campaign communities'], ['Safeguarding and sensitive information', 'Volunteer administration', 'Accessible participation', 'Clear separation of fundraising and community data', 'Sustainable moderation']),
  solution('education', 'Education communities', 'Create bounded places for institutional, cohort and professional connection.', ['University communities', 'Alumni networks', 'Professional learning groups', 'Course-adjacent communities', 'Research and project networks'], ['Safeguarding and age considerations', 'Institutional identity lifecycle', 'Academic and student roles', 'Accessibility', 'Information classification']),
  solution('employee-communities', 'Employee communities', 'Support internal connection without turning staff participation into behavioural monitoring.', ['Employee networks', 'Communities of practice', 'Project communities', 'Location-based groups', 'Onboarding cohorts'], ['Voluntary participation', 'Employment and HR boundaries', 'Psychological safety', 'Role changes and departure', 'Appropriate measurement']),
  solution('stakeholder-engagement', 'Stakeholder engagement', 'Maintain a trusted, ongoing environment for defined stakeholder groups.', ['Advisory groups', 'Project stakeholders', 'Community panels', 'Industry working groups', 'Program participants'], ['Purpose and duration', 'Representation and invitations', 'Feedback pathways', 'Decision transparency', 'Formal consultation boundaries']),
  {
    slug: 'privacy-by-design', title: 'Privacy by design', eyebrow: 'Trust by architecture', tone: 'blue',
    description: 'How Portal Page intends to make privacy part of product architecture, governance and business decisions.',
    intro: 'Privacy should influence what is collected, how a feature works, which business model supports it and what happens when the community changes—not sit behind a preference toggle.',
    sections: [
      { id: 'before-interface', title: 'Privacy begins before the interface', paragraphs: ['A privacy setting can only govern choices the system has already made possible. Earlier decisions determine which information exists, whether it is centralised, how it moves and which suppliers can touch it.', 'Portal Page intends to make privacy questions part of product discovery and technical design. Each information type should have a stated purpose, an accountable owner, an audience and a lifecycle. Where a less identifying approach meets the purpose, it should be preferred.', 'This is a direction that must be carried into engineering practice, customer configuration and contracts. A public principle is useful because it creates a standard; evidence comes from the implemented system.'], callout: 'The first privacy control is deciding not to collect something.' },
      { id: 'minimise', title: 'Make the smallest useful system', paragraphs: ['Data minimisation is not a demand for a featureless product. It is a demand for relevance. A portal may need identity, membership and activity information to operate a private community, but each field should earn its place.', 'Purpose limitation prevents a reasonable collection from becoming a blank cheque for unrelated use. Information supplied to join a community should not quietly become advertising material. Content contributed to a private group should not automatically become artificial intelligence training data.', 'Retention closes the loop. Portal Page and its customers should distinguish operational history, required records, dormant information and material that no longer serves the community purpose.'], bullets: ['Ask only for necessary profile information', 'Use role-based access rather than broad administrator visibility', 'Set retention according to purpose and obligation', 'Challenge new integrations and secondary uses'] },
      { id: 'choices', title: 'Make choices legible', paragraphs: ['People cannot exercise meaningful choice when language is vague, options are hidden or declining causes unexplained disadvantage. Privacy controls, profile visibility, notifications and community departure should use direct language.', 'Administrators also make privacy decisions. Configuration should show the practical effect of audience, role and integration changes. Good defaults reduce risk, but important choices still need context and review.', 'Accessibility matters here: a privacy control that cannot be used with a keyboard, assistive technology or plain language is not a meaningful control for everyone.'] },
      { id: 'practice', title: 'Review privacy as the community evolves', paragraphs: ['Communities change. New groups form, integrations are proposed and old purposes fade. Privacy review should accompany material change rather than rely forever on the launch assessment.', 'Organisations should provide routes for questions and complaints, record consequential decisions and test assumptions with the people affected. Portal Page should communicate material service changes clearly and maintain accurate information about processors and data practices.', 'Read the full Portal Page principles, data ownership approach and draft privacy notice for the surrounding framework. Professional privacy and legal review is required before production launch.'] }
    ], related: [{ label: 'Data ownership', href: '/data-ownership/' }, { label: 'Principles', href: '/principles/' }, { label: 'Draft privacy notice', href: '/privacy/' }]
  },
  {
    slug: 'accessibility', title: 'Accessibility', eyebrow: 'Inclusive participation', tone: 'lime',
    description: 'Portal Page treats accessibility as a continuing responsibility across design, engineering, content and community operations.',
    intro: 'A community platform only works when people can participate. Portal Page aims for WCAG 2.2 AA and recognises that conformance is a starting point, not the whole experience.',
    sections: [
      { id: 'whole-system', title: 'Accessibility is the whole system', paragraphs: ['A component can pass an automated check while the overall task remains confusing or impossible. Accessibility depends on structure, language, keyboard operation, focus, contrast, error handling, assistive-technology support, media alternatives and the content organisations publish.', 'This website uses semantic landmarks, a skip link, visible focus, keyboard-operable navigation, labelled forms and reduced-motion support. It has been designed towards WCAG 2.2 AA; no independent audit or formal conformance claim is made.', 'The Portal Page product should apply the same discipline and be tested with disabled people whose real tasks reveal issues that tools miss.'] },
      { id: 'product', title: 'Design for different ways of participating', paragraphs: ['People may navigate by keyboard, switch, touch, voice or screen reader. They may enlarge text, reduce motion, use high contrast, require captions, prefer plain language or need more time to complete a task.', 'An accessible portal should keep headings logical, controls predictable, status messages perceivable and touch targets generous. Important meaning should not depend on colour alone. Motion should respect system preferences and avoid obstructing the task.', 'Authentication and support also matter. A perfectly accessible content page cannot compensate for an inaccessible sign-in flow or a help route that only works by phone.'], bullets: ['Keyboard and focus testing', 'Screen-reader task testing', 'Zoom and reflow from 320 pixels', 'Contrast and non-colour cues', 'Captions, transcripts and document alternatives', 'Clear errors and recovery'] },
      { id: 'authors', title: 'Community authors shape access', paragraphs: ['Portal Page can provide accessible foundations, but administrators and members create the living content. Poor headings, unexplained links, image-only notices and inaccessible PDF files can exclude people even when the platform interface is sound.', 'Organisations need authoring guidance, templates, review practices and a route to request an alternative format. Accessibility should be part of moderator and administrator training, not delegated entirely to a technical team.'] },
      { id: 'improve', title: 'Publish, listen and improve', paragraphs: ['A production accessibility statement should describe tested scope, known limitations, contact routes and response expectations. Issues should enter a prioritised remediation process and be checked for regression.', 'Procurement teams should ask for current evidence rather than accept a generic claim. Portal Page should share the testing approach and be transparent about gaps as the product matures.'] }
    ], related: [{ label: 'Platform accessibility', href: '/platform/accessibility/' }, { label: 'Contact Portal Page', href: '/contact/' }, { label: 'Principles', href: '/principles/' }]
  },
  {
    slug: 'community-governance', title: 'Community governance', eyebrow: 'Community operations', tone: 'paper',
    description: 'A practical framework for purpose, membership, roles, standards, moderation and accountable operation of a private digital community.',
    intro: 'Healthy communities are not configured once and left to run themselves. Governance makes purpose, responsibility and fair participation visible.',
    sections: [
      { id: 'charter', title: 'Begin with a community charter', paragraphs: ['A charter can answer the questions a feature list cannot. Why does the community exist? Who is it for? What can members expect? What does not belong there? Who makes decisions and how can those decisions be questioned?', 'The charter should be proportionate. A local interest group may need a short, friendly statement; a government or professional community may need a more formal operating model. In both cases, the language should be available before participation begins.', 'Purpose is a boundary. It prevents the portal from becoming an unexplained collection point for any information the organisation might one day find useful.'] },
      { id: 'roles', title: 'Give every responsibility an owner', paragraphs: ['The community operator should identify who manages membership, publishes official information, maintains documents, moderates discussion, answers support requests and approves policy changes.', 'Roles in the software should reflect those responsibilities using least privilege. Roles in the organisation should also cover absence, escalation and conflicts of interest. A capable moderator needs policy authority and support, not simply a button to remove content.'], bullets: ['Community sponsor', 'Operational owner', 'Membership administrator', 'Publisher or editor', 'Moderator and escalation lead', 'Privacy, security and accessibility contacts'] },
      { id: 'standards', title: 'Write standards for real situations', paragraphs: ['Community standards should be specific enough to guide action and human enough to be read. They should address respectful participation, privacy, confidentiality, harmful content, commercial activity, intellectual property and any sector-specific needs.', 'Enforcement needs consistency without becoming mechanical. Context matters. Members should understand how to report a concern, what process follows and which urgent risks require a different pathway.'] },
      { id: 'review', title: 'Governance is maintained', paragraphs: ['Review membership, administrator access, inactive spaces, recurring reports, content quality and emerging risks. Use privacy-respecting measures connected to a decision rather than collecting activity because a dashboard exists.', 'Changes to standards, purpose or data use should be communicated clearly. Significant changes may require renewed assessment, member consultation or professional advice. The portal is infrastructure; governance is how the community keeps it legitimate.'] }
    ], related: [{ label: 'Governance guide', href: '/resources/community-governance-guide/' }, { label: 'Moderation', href: '/platform/moderation/' }, { label: 'Principles', href: '/principles/' }]
  }
];

export const pageBySlug = new Map(pages.map((page) => [page.slug, page]));
