<template>
  <div class="bg-white font-family-karla">
    <Header :categorys="categorys" />
    <section class="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div class="container">


        <nav class="flex pb-10" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </NuxtLink>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <NuxtLink :to="'/' + categorySlug" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{categoryName}}</NuxtLink>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{post.title}}</span>
              </div>
            </li>
          </ol>
        </nav>


        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full px-4">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full px-4 lg:w-8/12">
                <div>
                  <h1 class="fadeInUp mb-2 text-2xl font-bold text-dark dark:text-white sm:text-3xl md:text-[35px] md:leading-[1.28]">
                    {{post.title}}
                  </h1>

                  <div class="flex flex-wrap items-center mb-2">
                    <div class="flex items-center mb-4 mr-5 md:mr-10">
                      <div class="w-10 h-10 mr-4 overflow-hidden rounded-full">
                        <img :src="post.author?.node?.avatar.url"
                             alt="image"
                             class="w-full" />
                      </div>
                      <p class="text-base font-medium text-dark dark:text-white">
                        By
                        <a href="javascript:void(0)"
                           class="hover:opacity-70">
                          {{post.author?.node?.name}}
                        </a>
                      </p>
                    </div>
                    <div class="flex items-center mb-4">
                      <p class="flex items-center mr-5 text-sm font-medium md:mr-6 text-dark dark:text-white">
                        <span class="mr-3">
                          <svg width="16"
                               height="16"
                               viewBox="0 0 16 16"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                               class="fill-current">
                            <path d="M13.9998 2.6499H12.6998V2.0999C12.6998 1.7999 12.4498 1.5249 12.1248 1.5249C11.7998 1.5249 11.5498 1.7749 11.5498 2.0999V2.6499H4.4248V2.0999C4.4248 1.7999 4.1748 1.5249 3.8498 1.5249C3.5248 1.5249 3.2748 1.7749 3.2748 2.0999V2.6499H1.9998C1.1498 2.6499 0.424805 3.3499 0.424805 4.2249V12.9249C0.424805 13.7749 1.1248 14.4999 1.9998 14.4999H13.9998C14.8498 14.4999 15.5748 13.7999 15.5748 12.9249V4.1999C15.5748 3.3499 14.8498 2.6499 13.9998 2.6499ZM1.5748 7.2999H3.6998V9.7749H1.5748V7.2999ZM4.8248 7.2999H7.4498V9.7749H4.8248V7.2999ZM7.4498 10.8999V13.3499H4.8248V10.8999H7.4498V10.8999ZM8.5748 10.8999H11.1998V13.3499H8.5748V10.8999ZM8.5748 9.7749V7.2999H11.1998V9.7749H8.5748ZM12.2998 7.2999H14.4248V9.7749H12.2998V7.2999ZM1.9998 3.7749H3.2998V4.2999C3.2998 4.5999 3.5498 4.8749 3.8748 4.8749C4.1998 4.8749 4.4498 4.6249 4.4498 4.2999V3.7749H11.5998V4.2999C11.5998 4.5999 11.8498 4.8749 12.1748 4.8749C12.4998 4.8749 12.7498 4.6249 12.7498 4.2999V3.7749H13.9998C14.2498 3.7749 14.4498 3.9749 14.4498 4.2249V6.1749H1.5748V4.2249C1.5748 3.9749 1.7498 3.7749 1.9998 3.7749ZM1.5748 12.8999V10.8749H3.6998V13.3249H1.9998C1.7498 13.3499 1.5748 13.1499 1.5748 12.8999ZM13.9998 13.3499H12.2998V10.8999H14.4248V12.9249C14.4498 13.1499 14.2498 13.3499 13.9998 13.3499Z" />
                          </svg>
                        </span>
                        {{convertDate(post.date)}}
                      </p>

                      <p class="flex items-center mr-5 text-sm font-medium md:mr-6 text-dark dark:text-white">
                        <span class="mr-3">
                          <svg width="16"
                               height="16"
                               viewBox="0 0 16 16"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                               class="fill-current">
                            <path d="M11.1002 4.875H4.6502C4.3502 4.875 4.0752 5.125 4.0752 5.45C4.0752 5.775 4.3252 6.025 4.6502 6.025H11.1252C11.4252 6.025 11.7002 5.775 11.7002 5.45C11.7002 5.125 11.4252 4.875 11.1002 4.875Z" />
                            <path d="M9.8002 7.92505H4.6502C4.3502 7.92505 4.0752 8.17505 4.0752 8.50005C4.0752 8.82505 4.3252 9.07505 4.6502 9.07505H9.8002C10.1002 9.07505 10.3752 8.82505 10.3752 8.50005C10.3752 8.17505 10.1002 7.92505 9.8002 7.92505Z" />
                            <path d="M13.9998 1.9751H1.9998C1.1498 1.9751 0.424805 2.6751 0.424805 3.5501V12.9751C0.424805 13.3751 0.649805 13.7501 1.0248 13.9251C1.1748 14.0001 1.3248 14.0251 1.4748 14.0251C1.7248 14.0251 1.9498 13.9501 2.1498 13.7751L4.2748 12.0251H13.9998C14.8498 12.0251 15.5748 11.3251 15.5748 10.4501V3.5501C15.5748 2.6751 14.8498 1.9751 13.9998 1.9751ZM14.4498 10.4501C14.4498 10.7001 14.2498 10.9001 13.9998 10.9001H4.0748C3.9498 10.9001 3.8248 10.9501 3.7248 11.0251L1.5748 12.8001V3.5501C1.5748 3.3001 1.7748 3.1001 2.0248 3.1001H14.0248C14.2748 3.1001 14.4748 3.3001 14.4748 3.5501V10.4501H14.4498Z" />
                          </svg>
                        </span>
                        09
                      </p>
                      <p class="flex items-center text-sm font-medium text-dark dark:text-white">
                        <span class="mr-3">
                          <svg width="16"
                               height="16"
                               viewBox="0 0 16 16"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                               class="fill-current">
                            <path d="M7.9998 5.92505C6.8498 5.92505 5.9248 6.85005 5.9248 8.00005C5.9248 9.15005 6.8498 10.075 7.9998 10.075C9.1498 10.075 10.0748 9.15005 10.0748 8.00005C10.0748 6.85005 9.1498 5.92505 7.9998 5.92505ZM7.9998 8.95005C7.4748 8.95005 7.0498 8.52505 7.0498 8.00005C7.0498 7.47505 7.4748 7.05005 7.9998 7.05005C8.5248 7.05005 8.9498 7.47505 8.9498 8.00005C8.9498 8.52505 8.5248 8.95005 7.9998 8.95005Z" />
                            <path d="M15.3 7.1251C13.875 5.0001 11.9 2.8501 8 2.8501C4.1 2.8501 2.125 5.0001 0.7 7.1251C0.35 7.6501 0.35 8.3501 0.7 8.8751C2.125 10.9751 4.1 13.1501 8 13.1501C11.9 13.1501 13.875 10.9751 15.3 8.8751C15.65 8.3251 15.65 7.6501 15.3 7.1251ZM14.375 8.2501C12.55 10.9251 10.725 12.0251 8 12.0251C5.275 12.0251 3.45 10.9251 1.625 8.2501C1.525 8.1001 1.525 7.9001 1.625 7.7501C3.45 5.0751 5.275 3.9751 8 3.9751C10.725 3.9751 12.55 5.0751 14.375 7.7501C14.45 7.9001 14.45 8.1001 14.375 8.2501Z" />
                          </svg>
                        </span>
                        35
                      </p>
                    </div>
                  </div>
                  <!--content-->
                  <div class="mb-8 text-base wow fadeInUp text-body-color dark:text-dark-6 content" v-html="post.content">

                  </div>
                </div>
              </div>
              <div class="w-full px-4 lg:w-4/12">
                <div>


                  <div class="flex flex-wrap mb-8 -mx-4">
                    <div class="w-full px-4">
                      <h2 class="fadeInUp relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
                        Popular Articles
                      </h2>
                      <span class="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                    </div>

                    <div class="w-full px-4 md:w-1/2 lg:w-full" v-for="item in relatedPostNotCate" :key="item.slug">
                      <div class="flex items-center w-full pb-5 mb-5 border-b fadeInUp border-stroke dark:border-dark-3">
                        <div class="w-full">
                          <h4>
                            <NuxtLink :to="'/' + (item.categories.nodes ? item.categories.nodes[0].slug : categorySlug) + '/' + item.slug"
                                      class="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg">
                              {{item.title}}
                            </NuxtLink>
                          </h4>
                          <p class="text-sm text-body-color dark:text-dark-6 truncate" v-html="item.excerpt">
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="fadeInUp mb-12 overflow-hidden rounded-[5px]">
                    <img src="https://gaucoffee.pages.dev/blog/bannder-ad.png"
                         alt="image"
                         class="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 fadeInUp mt-14">
            <h2 class="relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[36px]">
              Related Articles
            </h2>
            <span class="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="item in relatedPost" :key="item.slug">
            <div class="mb-10 fadeInUp group">
              <div class="mb-8 overflow-hidden rounded-[5px]">
                <NuxtLink :to="item.slug" class="block">
                  <img format="webp" :src="item.featuredImage?.node?.sourceUrl ? item.featuredImage?.node?.sourceUrl : 'https://gaucoffee.pages.dev/no-thumb.webp'"
                       :alt="item.featuredImage?.node?.altText"
                       class="w-full h-[250px] transition group-hover:rotate-6 group-hover:scale-125" />
                </NuxtLink>
              </div>
              <div>
                <span class="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">
                  {{convertDate(item.date)}}
                </span>
                <h3>
                  <NuxtLink :to="item.slug"
                            class="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {{item.title}}
                  </NuxtLink>
                </h3>
                <p class="max-w-[370px] text-base text-body-color dark:text-dark-6" v-html="item.excerpt">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer :footerHtml="footerHtml"/>

  </div>
</template>

<script>
  import Header from "../../components/header.vue"
  import Footer from "../../components/footer.vue"
  import { ApolloClient, GET_DETAIL_POST } from '../../constants/query.js';

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
            property: "og:url", content: process.env.baseUrl + this.categorySlug + "/" + this.slug,
          },
          {
            name: 'robots', content: this.seo?.metaRobotsNofollow + "," + this.seo?.metaRobotsNoindex
          },
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
            href: process.env.baseUrl + this.categorySlug + "/" + this.slug,
          },
        ],
        __dangerouslyDisableSanitizers: ['script'], // Cho phép chèn script vào head
        script: [
          {
            innerHTML: this.fullHead,
            type: 'application/ld+json',
            class: 'yoast-schema-graph'
          },
        ],
      };
    },
    async asyncData(context) {
      let categorys = context.store.state.categorys;
      let footerHtml = context.store.state.footerHtml;

      try {
        const slug = context.params.id; 
        const categorySlug = context.params.category;
        let categoryName = "";
        if (categorys) {
          let fiterCate = categorys.filter(x => x.slug == categorySlug);
          if (fiterCate.length > 0) {
            categoryName = fiterCate[0].name ?? "";
          }
        }
        const first = 3;
        const firstNotCate = 10;
        const res = await apolloClient.query({
          query: GET_DETAIL_POST,
          variables: {
            slug,
            first: first + 1,
            categorySlug: categorySlug,
            firstNotCate: firstNotCate + 1
          },
          fetchPolicy: 'no-cache',
        });

        var post = res.data.singlePost;
        var seo = res.data.singlePost?.seo;
        var fullHead = res.data.singlePost?.seo?.fullHead;
        const scriptRegex = /<script.*?>([\s\S]*?)<\/script>/;
        const match = fullHead.match(scriptRegex);

        if (match) {
          fullHead = match[1];
        } 
        var relatedPost = res.data.postsWithCategory?.nodes;
        var relatedPostNotCate = res.data.postsWithoutCategory?.nodes;
        //Loại bỏ bản ghi thừa
        relatedPost = relatedPost.filter(x => x.id != post.id).slice(0, first)
        relatedPostNotCate = relatedPostNotCate.filter(x => x.id != post.id).slice(0, firstNotCate)

        return {
          post: post,
          slug: slug,
          categorySlug: categorySlug,
          categoryName: categoryName,
          categorys: categorys,
          seo: seo,
          fullHead: fullHead,
          footerHtml: footerHtml,
          relatedPost: relatedPost,
          relatedPostNotCate: relatedPostNotCate
        };
      } catch (error) {
        console.error('Loi xay ra:', error);
        context.redirect("/404");
      }
    },
    created() {
    },
    data() {
      return {
        
      }
    },
    mounted() {
      this.post.content = modifyHtml(this.post.content)
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

  function modifyHtml(htmlString) {
    // Tạo một phần tử div để chứa chuỗi HTML
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    // Lấy tất cả các thẻ h2
    var h2Elements = tempDiv.getElementsByTagName('h2');

    // Duyệt qua từng thẻ h2 và thêm thuộc tính style
    for (var i = 0; i < h2Elements.length; i++) {
      var currentStyleAttribute = h2Elements[i].getAttribute('style');

      // Thêm hoặc bổ sung thuộc tính style
      if (currentStyleAttribute) {
        h2Elements[i].setAttribute('style', currentStyleAttribute + 'padding: 0.75rem 0;');
      } else {
        h2Elements[i].setAttribute('style', 'padding: 0.75rem 0;');
      }
    }

    // Lấy HTML đã được sửa đổi từ phần tử div
    return tempDiv.innerHTML;
    
  }
</script>

<style scoped>
  .content {
    line-height: 1.7rem;
  }
</style>
