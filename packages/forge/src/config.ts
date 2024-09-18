export type Config = {
	/** Directory for the sites */
	directory?: string,
	/** Collection of all the sites */
	sites: Site[],
	/** Platform in Production */
	platform: 'cloudflare' | 'bun',
};

type Site = {
	name: string,
	/* Match with i.e. example.com, blog.example.com or *.example.com */
	hostname: string | string[],
	surreal?: SurrealConfig;
};

type SurrealConfig = {
	endpoint: string;
	namespace: string;
	database: string;
}
