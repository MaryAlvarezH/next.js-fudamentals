This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Summary
Next.js is an open source framework build on top Node.js enabling React based web application functionalities:
- Fast refresh
- File system routing
- Client-side navigation with `<Link></>` tag where page transition is using JS which is faster than the default  navigation donde by the browser
- Code splitting and prefetching (based on file system routing and client-side navigation)

# Next Components
- `<Link></>` 
    - For client-side navigation and code prefetching

- `<Image></>`
    Useful to:
    - Resizing, optimizing and serving images in morder formays like WebP
    - Responsive images
    - Optimization on-demand in order to avoid increase build time
    - Lazy loaded by defeault. Images load as they're scrolled into viewport

- `<Head></Head>`
    - Allows modify metadata of the page


# Styling
Next.js uses a "CSS-in-JS" library called styled-jsx -it lets you write CSS ithin React component (styles scoped where other components won't be affected).

It has build-in support for CSS and Sass

### CSS Modules
It automatically generates unique class names
1. Create a module.scss file and add the styles
2. Import the styles in the React component using `import styles from './file-name.module.css'`
3. Use `className` attribute on the tag

Next.js’s code splitting feature works on CSS Modules as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes.

### Global Styles
Global styles can only be adding in `pages/_app.js` file and the content of this file must be similar to:
```
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```