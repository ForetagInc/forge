export * from './signal';

import { proxy } from 'valtio';

export function createStore<T extends object>(state: T) {
	return proxy(state);
}
