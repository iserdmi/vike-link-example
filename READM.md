# Vike Link Example

Link pages with `+route.ts` file form another package called `shared` to the package called `webapp` (vike) using `ln -s`

## Steps

1. `$ pnpm i`
   It should automatically create links by `prepare` script of `./package.json`: `ln -s $(pwd)/shared/src/pages $(pwd)/webapp/pages/shared-pages-link`
2. `$ cd weabpp`
3. `$ pnpm dev`
4. Visit `http://localhost:3000/usual-withoutroute-2` — it works, becouse it is usual page of vike
5. Visit `http://localhost:3000/linked-withroute-1` — it does not work I do not know why. Please, help me to fix it.
