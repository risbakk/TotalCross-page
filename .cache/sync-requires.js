const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---docs-accordion-container-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/accordion-container.md"))),
  "component---docs-aligned-labels-container-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/aligned-labels-container.md"))),
  "component---docs-assets-components-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/assets/components.md"))),
  "component---docs-button-mdx": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/button.mdx"))),
  "component---docs-checkbox-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/checkbox.md"))),
  "component---docs-combobox-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/combobox.md"))),
  "component---docs-dynamic-scroll-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/dynamic-scroll.md"))),
  "component---docs-edit-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/edit.md"))),
  "component---docs-floating-button-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/floating-button.md"))),
  "component---docs-grid-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/grid.md"))),
  "component---docs-gridcontainer-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/gridcontainer.md"))),
  "component---docs-image-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/image.md"))),
  "component---docs-index-mdx": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/docs/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/src/pages/404.js"))),
  "component---src-pages-community-js": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/src/pages/community.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/src/pages/index.js"))),
  "component---src-pages-test-md": hot(preferDefault(require("/Users/nrisbakk/Projects/newTC/totalcross-page/src/pages/Test.md")))
}

