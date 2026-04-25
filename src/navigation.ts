import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '公告',
      href: '/posts?tag=announcement',
    },
    {
      text: '教程',
      href: '/posts?tag=guide',
    },
    {
      text: '存档展示',
      href: '/posts?tag=archive',
    },
    {
      text: '动态地图',
      href: 'https://blog.540881.xyz',// actural link
      target: '_blank',
    },
    {
      text: '监控',
      href: 'https://blog.540881.xyz',// actural link
      target: '_blank',
    },
  ],
  actions: [{ text: '加入我们', href: '#join',variant: 'primary',}],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/re01redstone/createCraftWeb' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/re01redstone"> Potpot123</a> · Driven by <a class="text-blue-600 hover:underline dark:text-muted" href="https://astro.build/">Astro</a> and <a class="text-blue-600 hover:underline dark:text-muted" href="https://astrowind.vercel.app/">Astrowind</a>
  `,
};
