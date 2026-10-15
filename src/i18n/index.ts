export const LOCALES = ['en', 'es'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NAMES: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
};

/** The name as it should be spelled in each language. */
export const SITE_NAMES: Record<Locale, string> = {
	en: 'Maria Teresa Martin Velez',
	es: 'María Teresa Martín Velez',
};

/** The one-line description shown under the name, and used for meta tags. */
export const SITE_DESCRIPTIONS: Record<Locale, string> = {
	en: 'Customer care and ecommerce operations — beauty and skincare.',
	es: 'Atención al cliente y operaciones de comercio electrónico — belleza y cuidado de la piel.',
};

/** UI strings, keyed by locale. */
export const UI: Record<
	Locale,
	{ blog: string; cv: string; home: string; readIn: string; latestPosts: string; noPosts: string }
> = {
	en: {
		blog: 'Blog',
		cv: 'CV',
		home: 'Home',
		readIn: 'Leer en español',
		latestPosts: 'Latest posts',
		noPosts: 'No posts in English yet.',
	},
	es: {
		blog: 'Blog',
		cv: 'CV',
		home: 'Inicio',
		readIn: 'Read in English',
		latestPosts: 'Últimas entradas',
		noPosts: 'Todavía no hay entradas en español.',
	},
};

/** Which locale is this URL in? */
export function localeFromPath(pathname: string): Locale {
	const segment = pathname.split('/').filter(Boolean)[0];
	return (LOCALES as readonly string[]).includes(segment ?? '')
		? (segment as Locale)
		: DEFAULT_LOCALE;
}

/** The path without its locale prefix, e.g. /es/blog → ['blog']. */
export function pathSegments(pathname: string): string[] {
	const segments = pathname.split('/').filter(Boolean);
	return (LOCALES as readonly string[]).includes(segments[0] ?? '')
		? segments.slice(1)
		: segments;
}

/** Build a path in a given locale: localizedPath('es') → '/es', localizedPath('en', '/cv') → '/cv' */
export function localizedPath(locale: Locale, path = '/'): string {
	const clean = path.replace(/^\/+|\/+$/g, '');
	if (!clean) return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
	return locale === DEFAULT_LOCALE ? `/${clean}` : `/${locale}/${clean}`;
}

export function otherLocale(locale: Locale): Locale {
	return locale === 'en' ? 'es' : 'en';
}