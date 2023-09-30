# React from scratch 

## Parcel
- created dev build
- created local server
- enabled hmr (hot module replacement)
    -   uses file watching algorithm (written in c++)
- caches stuff, so enables faster builds
- image optimization
- minification and compression of files for prod build
- bundling
- consistent hashing
- code splitting
- differential bundling (to support older browsers)
- tree shaking (remove unused code)
- creates different dev and prod bundles
    -   dev build: npx parcel build index.html
    -   prod build: npx parcel build index.html