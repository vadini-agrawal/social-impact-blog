module.exports = {
    title: 'Impact and Intention',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        logo: '/bloglogo.png'
    },
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