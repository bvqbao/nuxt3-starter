// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
	content: {
		// https://content.nuxtjs.org/api/configuration
		highlight: {
			theme: 'nord',
			preload: [
				'ts',
				'js',
				'json',
				'css',
				'vue',
				'html',
				'vue-html',
				'bash',
				'dart',
				'php',
			],
		},
	},
	experimental: { watcher: 'parcel' },
});
