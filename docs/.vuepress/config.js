const path = require('path')

module.exports = {
    title: 'Impact and Intention',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        logo: '/bloglogo.png'
    },
    palette: path.resolve(__dirname, 'palette.styl'),
    plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	]
}