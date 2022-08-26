const path = require('path');
const { createFilePath, createRemoteFileNode } = require('gatsby-source-filesystem');

exports.sourceNodes = ({ actions: { createNode }, createNodeId, createContentDigest }) => {
  const packageJson = require('./package.json');

  createNode({
    ...packageJson,
    id: createNodeId(packageJson.version),
    internal: {
      type: 'packageJson',
      contentDigest: createContentDigest(packageJson)
    }
  });
};

exports.onCreateNode = async ({
  node,
  actions: { createNodeField, createNode },
  getNode,
  store,
  cache,
  createNodeId
}) => {
  if (node.internal.type === 'Mdx') {
    const path = createFilePath({ node, getNode });

    await createNodeField({
      node,
      name: 'slug',
      value: node.frontmatter.type === 'page' ? path : `/${node.frontmatter.type}s${path}`
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage, createRedirect } }) => {
  const {
    data: { allMdx }
  } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            type
          }
        }
      }
    }
  `);

  allMdx.nodes.forEach((node) => {
    const {
      id,
      fields: { slug },
      frontmatter: { type }
    } = node;

    createPage({
      path: slug,
      component: path.join(__dirname, `./src/templates/${type}.js`),
      context: {
        id: id
      }
    });
  });
};
