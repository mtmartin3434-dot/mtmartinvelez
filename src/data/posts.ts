import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

/** The URL slug, shared by all translations of a post. */
export function postSlug(post: CollectionEntry<'blog'>): string {
	return post.data.url ?? post.id;
}

/** All posts in a language, newest first. */
export async function getPosts(locale: Locale) {
	const posts = await getCollection('blog', ({ data }) => data.lang === locale);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}