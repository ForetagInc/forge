import path from 'node:path';

import { createApp } from 'vinxi';
import { serverComponents } from '@vinxi/server-components';

import vitePluginTSPaths from 'vite-tsconfig-paths';

import { ForgeRouter } from './router';

export const createForge = () => {
	return createApp({
		routers: [
			{ name: 'public', type: 'static', dir: './public' },
			{
				name: 'client',
				type: 'client',
				base: '/_build',
				target: 'browser',
				handler: './src/entry-client.tsx',
				routes: (router, app) => {
					return new ForgeRouter(
						{
							dir: path.join(__dirname, 'src/routes'),
							extensions: ['ts', 'tsx'],
						},
						router,
						app,
					);
				},
				plugins: () => [vitePluginTSPaths()],
			},
			{
				name: 'rsc',
				worker: true,
				type: 'http',
				base: '/_rsc',
				handler: './src/rsc.tsx',
				target: 'server',
				plugins: () => [serverComponents.server(), vitePluginTSPaths()],
			},
		],
	});
};
