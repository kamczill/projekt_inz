const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
  allWpPost(sort: {date: ASC}) {
    nodes {
      title
      date
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      excerpt
      content
      slug
    }
  }
}
  `).then(result => {
    //highlight-start
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`./src/pages/blog/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
    //highlight-end
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}