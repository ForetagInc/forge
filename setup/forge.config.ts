import type { Config } from '@foretag/forge';

export const config: Config = {
	directory: 'sites',
	platform: 'cloudflare',
	sites: [
		{
			name: 'landing_site',
			hostname: 'example.com',
		},
		{
			name: 'blog',
			hostname: 'blog.example.com',
		}
	],
};
