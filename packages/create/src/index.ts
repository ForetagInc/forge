import * as CLI from '@clack/prompts';
import { createForge } from '../core';

async function handleCLI() {
	const app = createForge();

	if (process.argv.includes('--dev')) {
		await app.dev();
		return;
	}

	if (process.argv.includes('--build')) {
		await app.build();
		return;
	}

	await CLI.group({
		name: () => CLI.text({
			message: 'Name of your app',
			placeholder: 'my-app'
		}),
		plugins: ({ results }) => CLI.multiselect({
			message: 'Select your plugins',
			options: [
				{ value: 'tailwind', label: 'Tailwind', hint: 'v4' },
				{ value: 'biome', label: 'BiomeJS', hint: 'For linting and formatting' },
			],
			initialValues: ['tailwind', 'biome'],
			required: false,
		})
	});
};

handleCLI();

type CreateOptions = {
	name?: string
};

async function createForgeApp({
	name = 'app'
}: CreateOptions) {
	await Bun.write('package.json', JSON.stringify({
		name,
		version: "0.1.0",
		dependencies: {
			"@foretag/forge": "latest",
			"react": "rc",
			"react-dom": "rc"
		},
		devDependencies: {
			"@types/react": "^18",
			"@types/react-dom": "^18"
		}
	}));

	await Bun.write('tsconfig.json', JSON.stringify(generateTSConfig()));
};

function generateTSConfig() {
	return {
		compilerOptions: {
			"target": "ESNext",
			"module": "ESNext",
			"moduleResolution": "Bundler",
			"allowSyntheticDefaultImports": true,
			"esModuleInterop": true,
			"allowJs": true,
			"checkJs": true,
			"noEmit": true,
			"isolatedModules": true,
			"jsx": "react-jsx",
			"paths": {
				"@/*": ["./src/*"]
			}
		}
	}
};
