import React from 'react';

import { snapshot, subscribe, type INTERNAL_Snapshot } from 'valtio';
import { createReactSignals } from 'create-react-signals';

type Unsubscribe = () => void;
type Subscribe = (callback: () => void) => Unsubscribe;
type GetValue = () => unknown;
type SetValue = (path: unknown[], value: unknown) => void;

type AttachValue<T> = T & { value: T } & {
	readonly [K in keyof T]: AttachValue<T[K]>;
};

const createSignal = <T extends object>(proxyObject: T): [Subscribe, GetValue, SetValue] => {
	const sub: Subscribe = (callback) => subscribe(proxyObject, callback);
	const get: GetValue = () => snapshot(proxyObject);
	const set: SetValue = (path, value) => {
		let current: any = proxyObject;

		for (let i = 0; i < path.length - 1; i++) {
			current = current[path[i] as string | symbol];
		}

		current[path[path.length - 1] as string | symbol] = value;
	};

	return [sub, get, set];
};

const VALUE_PROP = Symbol();

export const getValueProp = <T extends { value: unknown }>(x: AttachValue<T>): AttachValue<T['value']> =>
	(x as any)[VALUE_PROP];

const { getSignal, inject } = createReactSignals(
	createSignal,
	true,
	'value',
	VALUE_PROP
);

export const createElement = inject(React.createElement);

export function useSignal<T extends object>(proxyObject: T): AttachValue<INTERNAL_Snapshot<T>>;

export function useSignal<T extends object>(proxyObject: T) {
	return getSignal(proxyObject);
}
