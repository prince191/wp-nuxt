import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const categorysQuery = gql`
  query {
  getCustomHtml
  categories {
    nodes {
      name
      slug
    }
  }
}
`
const categorysQuery_no_footer = gql`
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
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
}
`
const seoQuery = gql`
  query {
  seo {
    meta {
      homepage {
        description
        title
      }
    }
    openGraph {
      frontPage {
        description
        title
      }
    }
    webmaster {
      googleVerify
    }
    schema {
      siteName
    }
  }
}
`

const GET_PAGINATED_POSTS_BY_CATEGORY = gql`
  fragment pageInfoData on WPPageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}


query GetPostsByCategory(
  $category: [String]
  $categorySlug: String
  $after: String
  $before: String
  $first: Int
  $last: Int
) {
	categories(where: {slug: $category}) {
    nodes {
      name
      seo {
        fullHead
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphDescription
        opengraphTitle
        opengraphType
        opengraphUrl
        title
        opengraphSiteName
      }
    }
  }
  posts(
    where: {
      categoryName: $categorySlug
      status: PUBLISH
    }
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    pageInfo {
      ...pageInfoData
    }
    nodes {
          title
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
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
  }
}
`

const GET_DETAIL_POST = gql`
 query GetPosts($slug: String, $first: Int, $categorySlug: String , $firstNotCate: Int) {
  singlePost: postBy(slug: $slug) {
    id
    title
    date
    content
    author {
      node {
        avatar {
          url
        }
        name
      }
    }
    seo {
      fullHead
      metaDesc
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphDescription
      opengraphTitle
      opengraphType
      opengraphUrl
      title
      opengraphSiteName
    }
  }

  postsWithCategory: posts(
    where: { categoryName: $categorySlug, orderby: { field: DATE, order: DESC }}
    first: $first
  ) {
    nodes {
      ...PostFields
    }
  }

  postsWithoutCategory: posts(
    where: { orderby: { field: DATE, order: DESC }}
    first: $firstNotCate
  ) {
    nodes {
      ...PostFields
      categories {
        nodes {
          slug
        }
      }
    }
  }
}

fragment PostFields on Post {
  id
  title
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
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
}
`


const GET_DETAIL_POST_NO_CATE = gql`
 query GetPosts($slug: String, $first: Int,  $firstNotCate: Int) {
  singlePost: postBy(slug: $slug) {
    id
    title
    date
    content
    author {
      node {
        avatar {
          url
        }
        name
      }
    }
    seo {
      fullHead
      metaDesc
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphDescription
      opengraphTitle
      opengraphType
      opengraphUrl
      title
      opengraphSiteName
    }
  }

  postsWithCategory: posts(
    where: { orderby: { field: DATE, order: DESC }}
    first: $first
  ) {
    nodes {
      ...PostFields
    }
  }

  postsWithoutCategory: posts(
    where: { orderby: { field: DATE, order: DESC }}
    first: $firstNotCate
  ) {
    nodes {
      ...PostFields
      categories {
        nodes {
          slug
        }
      }
    }
  }
}

fragment PostFields on Post {
  id
  title
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
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
}
`


export {
  ApolloClient, categorysQuery, categorysQuery_no_footer, categorysAndFirstPostQuery, GET_PAGINATED_POSTS_BY_CATEGORY, GET_DETAIL_POST, GET_DETAIL_POST_NO_CATE, seoQuery
}
