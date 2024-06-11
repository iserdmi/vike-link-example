# Vike Link Example

Link pages with `+route.ts` file form another package called `shared` to the package called `webapp` (vike) using `ln -s`

## Steps

1. `$ pnpm install`
2. `$ ln -sf ../../shared/src/pages ./webapp/pages/shared-pages-link` create relative link to the shared pages. Notice that the source path "../../shared/src/pages" is relative to dest path "./webapp/pages/shared-pages-link". But dest path "./webapp/pages/shared-pages-link" is relative to current working dir.
3. `$ cd weabpp`
4. `$ pnpm dev`
5. Visit `http://localhost:3000/usual-withoutroute-2` — it works, becouse it is usual page of vike: `./webapp/pages/withroute/usual-withroute-2`
6. Visit `http://localhost:3000/linked-withroute-1` — it works, becouse it is linked page of vike: `./shared/src/pages/withroute/linked-withroute-1`
