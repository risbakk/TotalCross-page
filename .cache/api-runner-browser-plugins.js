module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"remarkPlugins":[[null,{"type":"yaml","marker":"-"}],null],"rehypePlugins":[null,null],"gatsbyRemarkPlugins":[],"defaultLayouts":{"default":"/Users/nrisbakk/Projects/newTC/totalcross-page/node_modules/gatsby-theme-docz/src/base/Layout.js"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-helmet-async/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-docz/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-hubspot/gatsby-browser.js'),
      options: {"plugins":[],"trackingCode":"1234567","respectDNT":true,"productionOnly":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Pacifico","Poppins:300,500,700,800"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
