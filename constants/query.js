import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
const baseUrl = process.env.baseUrl;
const apolloClient = new ApolloClient({
  uri: baseUrl,
  fetch
});
const categorysQuery = gql`
  query {
  categories {
    nodes {
      name
      slug
    }
  }
}
`

const categorysAndFirstPostQuery = gql`
  query {
  categories {
    nodes {
      name
      slug
      posts(first: 1) {
        nodes {
          title
          content
          date
          excerpt
          slug
          author {
            node {
              avatar {
                url
              }
              name
            }
          }
        }
      }
    }
  }
}
`


export { apolloClient, categorysQuery, categorysAndFirstPostQuery }
