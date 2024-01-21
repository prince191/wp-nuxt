<template>
  <div>
    <div v-for="data in posts" :key="data.id">
      <h3>{{data.title}}</h3>
      <p v-html="data.excerpt"></p>
    </div>
  </div>
</template>

<script>
  import ApolloClient from 'apollo-boost';
  import gql from 'graphql-tag';

  const apolloClient = new ApolloClient({
    uri: 'https://admin.gaucoffee.com/graphql',
    fetch
  });
  const postsQuery = gql`
  fragment pageInfoData on WPPageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
  fragment listPostData on Post {
    id
    slug
    title
    content
    excerpt
    uri
    status
  }
  query GetPosts(
    $where: RootQueryToPostConnectionWhereArgs
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    posts(
      where: $where
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        ...pageInfoData
      }
      nodes {
        ...listPostData
      }
    }
  }
`
  export default {
    async asyncData() {
      try {
        const response = await apolloClient.query({
          query: gql`query {
                      posts {
                        nodes {
                          title
                          content
                          excerpt
                        }
                      }
                    }`,
          fetchPolicy: 'no-cache',
        });

        const posts = response.data.posts.nodes;
        console.log("Vẫn vào đây")
        return { posts };
      } catch (error) {
        console.error('Error fetching data:', error);
        return { posts: [] };
      }
    },
    async created() {
     
    }
  };
</script>
