# Vike Link Example

Link pages with `+route.ts` file form another package called `shared` to the package called `webapp` (vike) using `ln -s`

## Steps

1. `$ pnpm install`
2. `$ cd weabpp`
3. `$ pnpm dev`
4. Visit `http://localhost:3000/usual-withoutroute-2` — it works, becouse it is usual page of vike: `./webapp/pages/withroute/usual-withroute-2`
5. Visit `http://localhost:3000/linked-withroute-1` — it works, becouse it is linked page `./shared/src/pages/withroute/linked-withroute-1` of vike by directory link `./webapp/pages/shared-pages-link` → `./shared/src/pages`
6. Visit `http://localhost:3000/linked-withroute-3` — it works, becouse it is linked page `./shared/src/linked-withroute-3` of vike by files linking

## Recomendation

To create relative link use command like this:
`$ ln -sf ../../shared/src/pages ./webapp/pages/shared-pages-link`
Notice that the source path "../../shared/src/pages" is relative to dest path "./webapp/pages/shared-pages-link". But dest path "./webapp/pages/shared-pages-link" is relative to current working dir.
