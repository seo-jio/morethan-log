const CONFIG = {
  // profile setting (required)
  profile: {
    name: "SeoJio",
    image: "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxMSwibm9zZSI6MTIsIm1vdXRoIjoxNCwiZXllcyI6MTAsImV5ZWJyb3dzIjoxMywiZ2xhc3NlcyI6MTMsImhhaXIiOjM0LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "I want to be a backend engineer",
    email: "seojo8625@gmail.com",
    linkedin: "seojio",
    github: "seo-jio",
    instagram: "seojo8625",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/morethanmin/morethan-log",
      theme: "auto",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Jio's Tech Blog",
    description: "welcome to jio's tech blog!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

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
    enable: false,
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
