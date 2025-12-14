import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "markdown",
  
  title: "Localkit",
  description: "Localkit Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Supported Devices', link: '/supported-devices' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Supported Devices', link: '/supported-devices' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dwyschka/localkit' }
    ]
  }
})
