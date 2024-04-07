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
    -   prod build: n
    
#### useState:


#### useEffect:
1. If no dependency array is given, useEffect is called on every render
2. If dependency array is empty, useEffect is called on initial render, just once
3. If dependency is given, useEffect will be called whenever any of the dependencies are updated

### React Router DOM:-
1. **createBrowserRouter**:
   - Creates routing configuration.
   - It takes a list of paths
   - This is how routes are configured:
     ```js
       const appRouter = createBrowserRouter([
          {
              path: "/",
              element: <App />,
              errorElement: <Error />
          },
          {
              path: "/about",
              element: <About />
          }
      ])
     ```
    > errorElement is defined to specify an error page, to be shown if path is not found <br>
    > React router dom provides the `useRouteError` hook to return error information

2. **RouterProvider**: <br>
   Normally, this is how we render our main component:
   ```js
   root.render(<App />);
   ```

   But now, we need to tell our app to use the route configuration that we've provided. This can be achieved using RouterProvider.
   ```js
   root.render(<RouterProvider router={appRouter} />);
   ```
   
4. **Creating children routes**:
   
6. Outlet: 
