# Forge

Forge is a comprehensive enterprise meta-framework optimized for high-performance web application development on edge platforms like Cloudflare Pages (Workers) or Bun. Tailored for organizations seeking a unified approach to multiple web applications, Forge offers a batteries-included solution built on Vite, SurrealDB, GraphQL, Tailwind, and Valtio for exceptional speed and flexibility.

As the definitive universal platform, the web empowers developers to create web apps (PWAs) that seamlessly deploy across diverse devices, including web, desktop, mobile, TV, XR, and wearables. Given its adaptability, Forge prioritizes the web and PWAs as its primary platforms, eschewing the limitations of platform-specific solutions like Capacitor, Electron, and native development, which may become outdated in the face of evolving ecosystems.

Fullstack fulltime: Forge leverages SurrealDB as a web database, streamlining Auth, CRUD operations, ML Pipelines and API requests. By leveraging Surreal's Events and Functions, you can interact with data in a type-safe manner, with Forge handling the GraphQL integration for seamless DX and zero cost abstractions.

## Features
- [ ] Multisite: Create multisites in one codebase
- [ ] SaaS Templating: Create SaaS apps with ease
- [x] Built for React 18 & 19 with Suspense & RSC
- [x] State management with Proxy states & Signals
- [ ] CSS: Modules & Tailwind (v4) out of the box
- [ ] Markdown: MD and MDX out of the box
- [ ] File based routing: Advanced nested routing patterns with layouts and groups
- [ ] Surreal as backend: Accessible via type-safe GraphQL
- [ ] Rendering with CSR, SSR, SSG and ISR
	- [x] CSR
	- [	] SSR
	- [ ] SSG
	- [ ] ISR
- [x] Deployments for Cloudflare Pages and Bun
- [ ] Automatic ENV Variables

## Installation

Forge can be installed through Bun and JSR:

```bash
bun create forge my-app
```

> Please note Node, Deno and other runtimes are not supported officially

### State Management
You can use component level statement with React `useState`, and `Context` for global scope; Forge also ships its own state management system built on top of valtio offering maximum performance and flexibility.

```tsx
// store.ts
import { createStore } from '@foretag/forge';

// Optional
type Store = {
	count: number
};

const store = createStore<Store>({
  count: 0
});

// App.tsx
import { useSignal } from '@foretag/forge';

import { store } from '@/lib/store';

const App = () => {
  const count = useSignal(store.count);

  return <div>
    Count: {$(state).count} ({Math.random()})
  </div>;
}
```

### FAQ

- What runtimes are supported?

Forge supports Bun (for Development and Deploy) and Cloudflare Workers as an edge runtime. Other runtimes may work but are unsupported. JSR is the preferred package registry.

- How to use Forge in a monorepo?

Unlike other meta frameworks, you only need one Forge project in your monorepo (although you can have more) to service all of your projects. The recommeded setup would be to install Forge under a `sites` directory.

### Limitations

We are aware of these notable limitations in Forge, and working towards resolving them:

- Custom Vite configuration and plugins
- Currently it is not possible to use the React 19 Compiler as it relies on Babel
