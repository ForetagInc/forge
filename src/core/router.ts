import { BaseFileSystemRouter, cleanPath } from 'vinxi/fs-router';

export class ForgeRouter extends BaseFileSystemRouter {
	toPath(src: string): string {
		const routePath = cleanPath(src, this.config)
			.slice(1)
			.replace(/index$/, '');

		return routePath?.length > 0 ? `/${routePath}` : '/';
	}

	toRoute(src: string) {
		return {
			path: this.toPath(src),
			$component: {
				src,
				pick: ['default']
			}
		}
	}
};
