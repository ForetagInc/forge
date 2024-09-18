import { BaseFileSystemRouter, cleanPath, analyzeModule } from 'vinxi/fs-router';

export class ForgeRouter extends BaseFileSystemRouter {
	toPath(src: string): string {
		const routePath = cleanPath(src, this.config)
			.slice(1)
			.replace(/index$/, '')
			.replace(/\[([^\/]+)\]/g, (_, m) => {
				if (m.length > 3 && m.startsWith("...")) return `*${m.slice(3)}`;
				if (m.length > 2 && m.startsWith("[") && m.endsWith("]")) return `:${m.slice(1, -1)}?`;
				return `:${m}`;
			});

		return routePath?.length > 0 ? `/${routePath}` : '/';
	}

	toRoute(src: string) {
		return {
			$component: {
				src,
				pick: src.endsWith('.mdx') ? [] : ['default', '$css']
			},
			path: this.toPath(src),
			filePath: src,
		}
	}
};
