const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/jake/Sites/budsandblooms.wales/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/jake/Sites/budsandblooms.wales/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/jake/Sites/budsandblooms.wales/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/jake/Sites/budsandblooms.wales/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/jake/Sites/budsandblooms.wales/src/pages/index.js"))),
  "component---src-pages-sessions-js": hot(preferDefault(require("/home/jake/Sites/budsandblooms.wales/src/pages/sessions.js")))
}

