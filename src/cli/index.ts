function generateTSConfig() {
	return {
		compilerOptions: {
			"target": "ESNext",
			"module": "ESNext",
			"moduleResolution": "Bundler",
			"allowSyntheticDefaultImports": true,
			"esModuleInterop": true,
			"noEmit": true,
			"isolatedModules": true,
			"jsx": "react-jsx",
			"paths": {
				"@/*": ["src/*"]
			}
		}
	}
}
