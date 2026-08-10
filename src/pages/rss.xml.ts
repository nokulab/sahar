import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '@/data/site';

export async function GET(context: { site?: URL }) {
  const base = import.meta.env.BASE_URL || '/';
  const posts = (await getCollection('insights', ({ data }) => !data.draft)).sort((a,b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
  return rss({
    title: 'Portal Page insights',
    description: 'Ideas for people building, choosing and governing private digital communities.',
    site: context.site || site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: `${base}insights/${post.id}/`,
      categories: [post.data.category, ...post.data.tags]
    })),
    customData: '<language>en-au</language>'
  });
}
