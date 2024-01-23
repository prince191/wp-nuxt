<template>
  <div class="bg-white font-family-karla">
    <!--Header-->
    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark  ">
      <div class="container">
        <div class="flex flex-wrap -mx-4">

          <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i"> 
            <div class="mb-10 wow fadeInUp group" data-wow-delay=".2s">
              <div class="mb-8 overflow-hidden rounded-[5px]">
                <a href="blog-details" class="block">
                  <img src="/images/blog/blog-03.jpg" alt="image"
                       class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
                </a>
              </div>
              <div>
                <span class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                  Jan 05, 2023
                </span>
                <h3>
                  <a href="blog-details"
                     class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    The no-fuss guide to upselling and cross selling
                  </a>
                </h3>
                <p class="max-w-[370px] text-base text-body-color dark:text-dark-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center wow fadeInUp" data-wow-delay=".2s">
          <div class="inline-flex p-3 bg-white dark:bg-dark-2 border rounded-[10px] border-stroke dark:border-dark-3">
            <ul class="flex items-center -mx-1">
              <li class="px-1">
                <a href="javascript:void(0)"
                   class="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white">
                  <span>
                    <svg width="8" height="15" viewBox="0 0 8 15" class="fill-current stroke-current">
                      <path d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                            stroke-width="0.3" />
                    </svg>
                  </span>
                </a>
              </li>
              <li class="px-1">
                <a href="javascript:void(0)"
                   class="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white">
                  1
                </a>
              </li>
              <li class="px-1">
                <a href="javascript:void(0)"
                   class="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white">
                  2
                </a>
              </li>
              <li class="px-1">
                <a href="javascript:void(0)"
                   class="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white">
                  3
                </a>
              </li>
              <li class="px-1">
                <a href="javascript:void(0)"
                   class="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white">
                  4
                </a>
              </li>
              <li class="px-1">
                <a href="javascript:void(0)"
                   class="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white">
                  <span>
                    <svg width="8" height="15" viewBox="0 0 8 15" class="fill-current stroke-current">
                      <path d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                            stroke-width="0.3" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

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
    layout: 'default',
    components: {
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            property: "og:url",
            content: process.env.baseUrl + "keyword-manager",
          },
          { name: "title", content: this.title },
          { name: "description", content: this.description },
          { property: "og:title", content: this.title },
          { property: "og:description", content: this.description },
        ],
        link: [
          {
            rel: "canonical",
            href: process.env.baseUrl + "keyword-manager",
          },
        ],
      };
    },
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
        return {
          posts: posts
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        return { posts: [] };
      }
    },
    async created() {

    },
    data() {
      return {
        currentIndex: 0,
        images: [
          'https://source.unsplash.com/collection/1346951/800x800?sig=1',
          'https://source.unsplash.com/collection/1346951/800x800?sig=2',
          'https://source.unsplash.com/collection/1346951/800x800?sig=3',
          'https://source.unsplash.com/collection/1346951/800x800?sig=4',
          'https://source.unsplash.com/collection/1346951/800x800?sig=5',
          'https://source.unsplash.com/collection/1346951/800x800?sig=6',
          'https://source.unsplash.com/collection/1346951/800x800?sig=7',
          'https://source.unsplash.com/collection/1346951/800x800?sig=8',
          'https://source.unsplash.com/collection/1346951/800x800?sig=9',
        ],
        open: false
      }
    },
    mounted() {
    },
    methods: {
      increment() {
        this.currentIndex = this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex + 1;
      },
      decrement() {
        this.currentIndex = this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex - 1;
      },
    }
  };
</script>
