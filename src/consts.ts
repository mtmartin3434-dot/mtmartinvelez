// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Maria Teresa Martin Velez';
export const SITE_DESCRIPTION = 'Customer care and ecommerce operations — beauty and skincare.';

// Add or remove links as needed. `icon` must match a case in Icon.astro.
export const SOCIAL_LINKS = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/maria-t-martin-velez', icon: 'linkedin' },
	{ label: 'Email', href: 'mailto:mtmartinvelez@gmail.com', icon: 'mail' },
] as const;

export const NAV_LINKS = [
	{ label: 'Blog', href: '/blog' },
	{ label: 'CV', href: '/cv' },
] as const;