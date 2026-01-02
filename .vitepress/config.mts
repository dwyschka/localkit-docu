import {defineConfig} from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "localkit",
    markdown: {
        config: (md) => {
            md.use(footnote)
        }
    },
    title: "Localkit",
    description: "Localkit Documentation",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Overview', link: '/overview'},
        ],

        sidebar: [
            {
                text: 'Overview',
                items: [
                    {text: 'Requirements', link: '/overview/requirements'},
                    {text: 'Installation', link: '/overview/installation'},
                    {text: 'DNS', link: '/overview/dns'},
                    {text: 'Home Assistant', link: '/overview/homeassistant'},

                ]
            }, {
                text: 'Supported Devices',
                items: [
                    {text: 'Overview', link: '/supported-devices'},
                    {text: 'Pura Max', link: '/supported-devices/pura-max'},
                    {text: 'Elements Solo', link: '/supported-devices/elements-solo'},
                    {text: 'Yumshare Solo', link: '/supported-devices/yumshare-solo'},

                ]
            }, {
                text: 'Links',
                items: [
                    {text: 'Localkit', link: 'https://github.com/dwyschka/localkit'},
                    {text: 'Localkit-Broker', link: 'https://github.com/dwyschka/localkit.broker'},
                    {text: 'Discord', link: 'https://discord.gg/pprJVBsESd'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/dwyschka/localkit'}
        ]
    }
})
