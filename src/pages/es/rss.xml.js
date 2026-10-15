import rss from '@astrojs/rss';
import { SITE_DESCRIPTIONS, SITE_NAMES } from '../../i18n';
import { getPosts, postSlug } from '../../data/posts';

export async function GET(context) {
	const posts = await getPosts('es');
	return rss({
		title: `${SITE_NAMES.es} — Blog`,
		description: SITE_DESCRIPTIONS.es,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/es/blog/${postSlug(post)}/`,
		})),
	});
}