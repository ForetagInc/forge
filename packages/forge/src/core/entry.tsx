import { Suspense } from 'react';
import { createAssets } from '@vinxi/react';
import { getManifest } from 'vinxi/manifest';

const Assets = createAssets(
	getManifest('client').handler,
	getManifest('client')
);

export default function App() {
	return <html lang='en'>
		<head>
			<Suspense>
				<Assets />
			</Suspense>
		</head>
		<body>
			<h1>Building a React Metaframework</h1>
		</body>
	</html>
};
