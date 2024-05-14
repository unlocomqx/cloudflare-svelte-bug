# Cloudflare / Svelte / Postgres bug

This is a minimal reproduction of a bug I'm experiencing with Cloudflare Workers, SvelteKit, and Postgres.

## Steps to reproduce
```shell
pnpm install
pnpm run build
wrangler pages dev 
```

Refresh the page and you should see the error in the server console.

```text
✘ [ERROR] Error: Cannot perform I/O on behalf of a different request. I/O objects (such as streams, request/response bodies, and others) created in the context of one request handler cannot be accessed from a different request's handler. This is a limitation of Cloudflare Workers which allows us to improve overall performance. (I/O type: WritableStreamSink)

      at EventEmitter.write
  (file:///Users/USER/code/tests/cloudflare/my-svelte-app/node_modules/.pnpm/postgres@3.4.4/node_modules/postgres/cf/polyfills.js:182:16)
      at nextWrite
  (file:///Users/USER/code/tests/cloudflare/my-svelte-app/node_modules/.pnpm/postgres@3.4.4/node_modules/postgres/cf/src/connection.js:252:22)
      at null.<anonymous>
  (file:///Users/USER/code/tests/cloudflare/my-svelte-app/node_modules/.pnpm/postgres@3.4.4/node_modules/postgres/cf/polyfills.js:224:7)
      at new Query
  (file:///Users/USER/code/tests/cloudflare/my-svelte-app/node_modules/.pnpm/postgres@3.4.4/node_modules/postgres/cf/src/query.js:35:9)
      at sql2
  (file:///Users/USER/code/tests/cloudflare/my-svelte-app/node_modules/.pnpm/postgres@3.4.4/node_modules/postgres/cf/src/index.js:113:11)
      at load
  (file:///Users/USER/code/tests/cloudflare/my-svelte-app/.svelte-kit/output/server/entries/pages/_page.server.js:7:23)
      at load_server_data
  (file:///Users/USER/code/tests/cloudflare/my-svelte-app/.svelte-kit/output/server/index.js:1008:42)
      at null.<anonymous>
  (file:///Users/USER/code/tests/cloudflare/my-svelte-app/.svelte-kit/output/server/index.js:2538:24)
  {
    query: 'SELECT * FROM users',
    parameters: [],
    args: [],
    types: []
  }
```