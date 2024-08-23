export type Config = {
	sites: Site[],
	/** Platform in Production */
	platform: 'cloudflare' | 'bun',
};

type Site = {
	name: string,
	hostname: string,
};
