<template>
  <div class="bg-white font-family-karla">
    <Header :categorys="categorys"/>
    <section class="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div class="container">
        <div class="container mx-auto flex flex-wrap py-6">
          <!-- Posts Section -->
          <section class="w-full md:w-2/3 flex flex-col items-center px-3">

            <div class="flex flex-col shadow my-4" v-for="item in cateItems" :key="item.slug" v-show="item.posts.nodes[0]">
              <!-- Article Image -->
              <NuxtLink :to="item.slug" class="hover:opacity-75" v-if="item.posts.nodes[0]?.featuredImage?.node?.sourceUrl">
                <nuxt-img preload loading="lazy" :src="item.posts.nodes[0]?.featuredImage?.node?.sourceUrl" quality="20" class="h-[400px] w-full" alt="item.posts.nodes[0]?.featuredImage?.node?.altText"/>
              </NuxtLink>
              <div class="bg-white flex flex-col justify-start p-6">
                <NuxtLink :to="item.slug" class="text-blue-700 text-sm font-bold uppercase pb-4">{{item.name}}</NuxtLink>
                <NuxtLink :to="item.slug + '/' + item.posts.nodes[0]?.slug" v-show="item.posts.nodes[0]" class="text-3xl font-bold hover:text-gray-700 pb-4">{{item.posts.nodes[0]?.title}}</NuxtLink>
                <p v-show="item.posts.nodes[0]" class="text-sm pb-3">
                  By <a class="font-semibold hover:text-gray-800">{{item.posts.nodes[0]?.author?.node?.name}}</a>, Published on {{convertDate(item.posts.nodes[0]?.date)}}
                </p>
                <NuxtLink :to="item.slug + '/' + item.posts.nodes[0]?.slug" v-show="item.posts.nodes[0]" class="pb-6" v-html="item.posts.nodes[0]?.excerpt"></NuxtLink>
                <NuxtLink :to="item.slug + '/' + item.posts.nodes[0]?.slug" v-show="item.posts.nodes[0]" class="uppercase text-gray-800 hover:text-black inline-flex items-center space-x-4">
                  Continue Reading
                  <span class="ml-2 inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-4 w-4" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </span>
                </NuxtLink>
              </div>
            </div>

          </section>

          <!-- Sidebar Section -->
          <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
              <p class="text-xl font-semibold pb-5">About Us</p>
              <p class="pb-2">{{seo?.meta?.homepage?.description}}</p>
              <!--<a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                Get to know us
              </a>-->
            </div>

            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
              <p class="text-xl font-semibold pb-5">Instagram</p>
              <div class="grid grid-cols-3 gap-3">
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1"/>
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
                <nuxt-img preload loading="lazy" class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
              </div>
              <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                <i class="fab fa-instagram mr-2"></i> Follow me
              </a>
            </div>

          </aside>

        </div>
      </div>
    </section>
    <Footer :footerHtml="footerHtml"/>
  </div>
</template>

<script>
  import Header from "../components/header.vue"
  import Footer from "../components/footer.vue"
  import { ApolloClient, categorysAndFirstPostQuery, seoQuery } from '../constants/query.js';

  const graphUrl = process.env.graphUrl;
  const apolloClient = new ApolloClient({
    uri: graphUrl,
    fetch
  });
  

  export default {
    //layout: 'default',
    components: {
      Header,
      Footer
    },
    head() {
      return {
        title: this.seo?.meta?.homepage?.title ? this.seo?.meta?.homepage?.title : "My Blog",
        meta: [
          {
            property: "og:url", content: process.env.baseUrl,
          },
          {
            name: 'robots', content: "index,follow" 
          },
          { name: "title", content: this.seo?.meta?.homepage?.title ? this.seo?.meta?.homepage?.title : "My Blog" },
          { name: "description", content: this.seo?.meta?.homepage?.description ? this.seo?.meta?.homepage?.description : ""},
          { property: "og:title", content: this.seo?.meta?.openGraph?.frontPage?.title ? this.seo?.meta?.openGraph?.frontPage?.title : ""},
          { property: "og:description", content: this.seo?.meta?.openGraph?.frontPage?.description ? this.seo?.meta?.openGraph?.frontPage?.description : "" },
          { property: 'og:site_name', content: this.seo?.schema?.siteName ? this.seo?.schema?.siteName : "" },
        ],
        link: [
          {
            rel: "canonical",
            href: process.env.baseUrl,
          },
        ],
      };
    },
    async asyncData(context) {
      let categorys = context.store.state.categorys;
      let footerHtml = context.store.state.footerHtml;
      try {
        const response = await apolloClient.query({
          query: categorysAndFirstPostQuery,
          fetchPolicy: 'no-cache',
        });

        const cateItems = response.data?.categories?.nodes.map(function (e) {
          e.post = e.posts?.nodes[0]
          return e
        });

        const resSeo = await apolloClient.query({
          query: seoQuery
        });
        const seo = resSeo.data?.seo
        return {
          cateItems: cateItems,
          categorys: categorys,
          seo: seo,
          footerHtml: footerHtml
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
        
      }
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
      },
    }
  };
</script>
