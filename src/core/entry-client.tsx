import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import 'vinxi/client';

import { App } from './entry';

function AppRoot({ url }: { url: string }) {
	return <Suspense>{ }</Suspense>;
}

const root = createRoot(document);
root.render(<AppRoot url={window.location.pathname} />);
