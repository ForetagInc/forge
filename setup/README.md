# Forge

## Getting Started

Your Forge project has been setup, to start development run `bun run dev` in your Forge directory - this will start the dev server for all your sites.

To run a specific site for development run `bun run dev:blog`, you can also add this manually as a script to your `package.json` as `"dev:blog": "bunx @foretag/forge dev --site=blog"` for a better developer experience.

## Sites

### Adding a site

To add a new site run `bun run forge:add` this will guide you via CLI prompt, and automatically add the site's build & dev scripts to your `package.json` for your site.

### Removing a site

To remove a site run `bun run forge:remove <site_name>` this will delete the site's directory and configuration for you.

### Building

To build a specific site `bun run build:<site_name>` this will build the specified site for production use, ready to be deployed on Bun or Cloudflare Pages.
