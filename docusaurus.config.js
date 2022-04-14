// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SigNoz",
  tagline: "Open source Observability platform",
  url: "https://signoz.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  trailingSlash: true,
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "SigNoz", // Usually your GitHub org/user name.
  projectName: "signoz", // Usually your repo name.
  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    // googleAnalytics: {
    //   trackingID: 'UA-152867655-1',
    //   // Optional fields.
    //   // anonymizeIP: true, // Should IPs be anonymized?
    // },

    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        'We tweet about DevOps, DevTools and fun stuff. Let\'s be friends on <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3H7bXwd">Twitter</a> 🙋🏼‍♀️ ',
      backgroundColor: "#CF2E09", // #151515, #dddddd Defaults to `#fff`.
      textColor: "#eeeeee", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    // posthog: {
    //   apiKey: "H-htDCae7CR3RV57gUzmol6IAKtm5IMCvbcm_fwnL-w",
    //   appUrl: "https://app.posthog.com", // optional
    //   enableInDevelopment: false, // optional
    // },
    image: "/img/signoz_website_hero_image.webp",
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",
    },
    navbar: {
      title: "SigNoz",
      logo: {
        alt: "My Site Logo",
        src: "img/SigNozLogo-orange.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        //docusaurus expects href elements to be full links
        //https://stackoverflow.com/questions/63268853/how-do-i-link-to-non-docusaurus-defined-routes-from-a-docusuarus-footer
        //{href: 'https://signoz.io/blog/', label: 'Blog', position: 'left'}
        {
          to: "blog/",
          activeBasePath: "blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "opentelemetry/",
          activeBasePath: "opentelemetry",
          label: "OpenTelemetry",
          position: "left",
        },
        {
          href: "https://github.com/SigNoz/signoz",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://join.slack.com/t/signoz-community/shared_invite/zt-lrjknbbp-J_mI13rlw8pGF4EWBnorJA",
          label: "Slack",
          position: "right",
        },
        // {
        //   to: 'pricing/',
        //   activeBasePath: 'pricing',
        //   label: 'Cloud',
        //   position: 'right',
        // },
        // {
        //   to: "about-us/",
        //   label: "About",
        //   position: "right",
        // },
        {
          href: "https://www.ycombinator.com/companies/signoz",
          label: "Careers",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
            {
              label: "Contributing",
              to: "docs/contributing",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/signoz',
            // },
            {
              label: "Slack",
              href: "https://join.slack.com/t/signoz-community/shared_invite/zt-lrjknbbp-J_mI13rlw8pGF4EWBnorJA",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/SigNozHQ",
            },
            {
              label: "Support",
              to: "support/",
            },
            {
              label: "Learn",
              to: "learn/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "About",
              to: "about-us/",
            },
            {
              label: "Terms",
              to: "terms-of-service/",
            },
            {
              label: "Privacy",
              to: "privacy/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SigNoz, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: ({ docPath }) => {
            // We want users to submit doc updates to the upstream/next version!
            // Otherwise we risk losing the update on the next release.
            const nextVersionDocsDirPath = "docs";
            return `https://github.com/SigNoz/signoz.io/edit/main/${nextVersionDocsDirPath}/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: "UA-152867655-1",
          // Optional fields.
          // anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
  // plugins: ["posthog-docusaurus"],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',
    [
      "@signoz/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "opentelemetry",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "opentelemetry",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./opentelemetry",
        blogTitle: "OpenTelemetry",
      },
    ],
    [
      "@signoz/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "blog",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "blog",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blog",
        blogTitle: "Blog",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "learn",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "learn",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./learn",
        blogTitle: "Learn with SigNoz",
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/icons/icon-512x512.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(95, 34, 20)",
          },
        ],
      },
    ],
  ].filter(Boolean),

  // plugins: ['@docusaurus/plugin-google-gtag'],

  // plugins: ['@docusaurus/plugin-google-analytics'],
  // plugins: [
  //   [
  //     '@docusaurus/plugin-sitemap',
  //     {
  //       cacheTime: 600 * 1000, // 600 sec - cache purge period
  //       changefreq: 'weekly',
  //       priority: 0.5,
  //       trailingSlash: false,
  //     },
  //   ],
  // ],
};

module.exports = config;
