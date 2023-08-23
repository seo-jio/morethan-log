const CONFIG = {
  // profile setting (required)
  profile: {
    name: "SeoJio",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "함께 성장하는 개발자 서지오입니다",
    email: "seojo8625@gmail.com",
    linkedin: "",
    github: "seo-jio",
    instagram: "seojo8625",
  },
  projects: [
    {
      name: `Portfolio`,
      href: "https://north-sandalwood-40f.notion.site/5529a439711045b0948da70d6e44a434?pvs=4",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Jio's Tech Blog",
    description: "welcome to jio's tech blog!",
    theme: "auto"
  },

  // CONFIG configration (required)
  link: "https://seojio-tech.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },
  
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "seo-jio/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {  
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
