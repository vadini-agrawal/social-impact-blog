const path = require('path')

module.exports = {
    title: 'Impact and Intentions',
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
				ga: 'UA-144678499-1' // UA-00000000-0
			}
		],
		'vuepress-plugin-reading-time',
        'vuepress-plugin-janitor',
        'dehydrate',
	]
}