<template>
  <div class="bg-white font-family-karla">
    <!--Header-->
    <Header :categorys="categorys" />

    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark  ">
      <div class="container">
        <nav class="flex pb-10 " aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </NuxtLink>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{name}}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="item in posts" :key="item.slug">
            <div class="mb-10 fadeInUp group">
              <div class="mb-8 overflow-hidden rounded-[5px]">
                <NuxtLink :to="categorySlug + '/' + item.slug" class="block">
                  <img format="webp" :src="item.featuredImage?.node?.sourceUrl ? item.featuredImage?.node?.sourceUrl : '/images/no-thumb.webp'" :alt="item.featuredImage?.node?.altText"
                       class="w-full h-[250px] transition group-hover:rotate-6 group-hover:scale-125" />
                </NuxtLink>
              </div>
              <div>
                <span class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                  {{convertDate(item.date)}}
                </span>
                <h3>
                  <NuxtLink :to="categorySlug + '/' + item.slug"
                            class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    {{item.title}}
                  </NuxtLink>
                </h3>
                <p class="max-w-[370px] text-base text-body-color dark:text-dark-6" v-html="item.excerpt">
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center fadeInUp">
          <div class="inline-flex p-3 bg-white dark:bg-dark-2 border rounded-[10px] border-stroke dark:border-dark-3">
            <ul class="flex items-center -mx-1">
              <li class="px-1">
                <NuxtLink :to="{ query: { before: pageInfo.startCursor }}" :disabled="!pageInfo.hasPreviousPage" :event="!pageInfo.hasPreviousPage ? '' : 'click'"
                          :class="pageInfo.hasPreviousPage ? 'flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[100px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white' :
                          'flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[100px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:bg-transparent hover:border-transparent opacity-50 pointer-events-none'">
                  <span>
                    <svg width="8" height="15" viewBox="0 0 8 15" class="mr-2.5 fill-current stroke-current">
                      <path d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                            stroke-width="0.3" />
                    </svg>
                  </span>
                  Preview
                </NuxtLink>
              </li>
              <li class="px-1">
                <NuxtLink :to="{ query: { after: pageInfo.endCursor } }" :disabled="!pageInfo.hasNextPage" :event="!pageInfo.hasNextPage ? '' : 'click'"
                          :class="pageInfo.hasNextPage ? 'flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[100px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white' :
                          'flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[100px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:bg-transparent hover:border-transparent opacity-50 pointer-events-none'">
                  Next
                  <span>
                    <svg width="8" height="15" viewBox="0 0 8 15" class="ml-2.5 fill-current stroke-current">
                      <path d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                            stroke-width="0.3" />
                    </svg>
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer :footerHtml="footerHtml"/>
  </div>
</template>

<script>
  import Header from "../components/header.vue"
  import Footer from "../components/footer.vue"
  import { ApolloClient, GET_PAGINATED_POSTS_BY_CATEGORY } from '../constants/query.js';
  const graphUrl = process.env.graphUrl;
  const apolloClient = new ApolloClient({
    uri: graphUrl,
    fetch
  });
  
  export default {
    components: {
      Header,
      Footer
    },
    head() {
      return {
        title: this.seo?.title,
        meta: [
          {
            property: "og:url", content: process.env.baseUrl + this.categorySlug,
          },
          {
            name: 'robots', content: this.seo?.metaRobotsNofollow + "," + this.seo?.metaRobotsNoindex },
          { name: "title", content: this.seo?.title },
          { name: "description", content: this.seo?.metaDesc },
          { property: "og:title", content: this.seo?.opengraphTitle },
          { property: "og:description", content: this.seo?.opengraphDescription },
          { property: 'og:type', content: this.seo?.opengraphType },
          { property: 'og:site_name', content: this.seo?.opengraphSiteName },
        ],
        link: [
          {
            rel: "canonical",
            href: process.env.baseUrl + this.categorySlug,
          },
        ],
        __dangerouslyDisableSanitizers: ['script'], // Cho phép chèn script vào head
        script: [
          {
            innerHTML: this.fullHead,
            type: 'application/ld+json',
            class: 'yoast-schema-graph',
          },
        ],
      };
    },
    async asyncData(context) {
      let categorys = context.store.state.categorys;
      let footerHtml = context.store.state.footerHtml;
      try {
        const pageCount = 12
        const categorySlug = context.params.id; 
        const response = await apolloClient.query({
          query: GET_PAGINATED_POSTS_BY_CATEGORY,
          variables: {
            categorySlug: categorySlug,
            category: categorySlug,
            after: context.query.after,
            before: context.query.before,
            first: context.query.before ? undefined : pageCount,
            last: context.query.before ? pageCount : undefined
          },
          fetchPolicy: 'no-cache',
        });
        var posts = response.data.posts?.nodes;
        var pageInfo = response.data.posts?.pageInfo;
        var name = response.data.categories?.nodes[0].name;
        var seo = response.data.categories?.nodes[0].seo;
        var fullHead = response.data.categories?.nodes[0].seo?.fullHead;
        const scriptRegex = /<script.*?>([\s\S]*?)<\/script>/;
        const match = fullHead.match(scriptRegex);

        if (match) {
          fullHead = match[1];
        } 
        var isDisabled = false
        if (!pageInfo.hasNextPage) {
          isDisabled = true;
        }
        return {
          posts: posts,
          categorySlug: categorySlug,
          categorys: categorys,
          footerHtml: footerHtml,
          pageInfo: pageInfo,
          isDisabled: isDisabled,
          seo: seo,
          name: name,
          fullHead: fullHead
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        context.redirect("/404");
      }
    },
    async created() {

    },
    data() {
      return {
        isLoading : false
      }
    },
    watch: {
      async $route() {
        await this.$nuxt.refresh()
        window.scrollTo(0, 0)
      },
    },
    mounted() {
     
    },
    methods: {
      convertDate(date) {
        if (!date) return ""
        var d = new Date(date); // Epoch
        return (
          [
            d.getDate().toString().padStart(2, 0),
            (d.getMonth() + 1).toString().padStart(2, 0),
            d.getFullYear(),
          ].join("/")
        );
      }
    }
  };
</script>
