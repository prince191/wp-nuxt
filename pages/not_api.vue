<template>
  <div class="bg-white font-family-karla">
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

        
      </div>
    </section>

  </div>
</template>

<script>


  export default {
    components: {
    },
    head() {
      
    },
    async asyncData(context) {
      try {
        
        const res = {
          "data": {
            "singlePost": {
              "id": "cG9zdDo3",
              "title": "Khắc phục lỗi “ERR_TOO_MANY_REDIRECTS” cho website WordPress",
              "date": "2024-02-19T14:31:03",
              "content": "<h2 id=\"loi-err_too_many_redirects-la-gi\" class=\"ftwp-heading\">Lỗi “ERR_TOO_MANY_REDIRECTS” là gì?</h2>\n<p>Khi quản trị website WordPress, chắc hẳn không ít lần bạn gặp phải lỗi <strong>ERR_TOO_MANY_REDIRECTS</strong> phải không nào?</p>\n<blockquote class=\"wp-block-quote\"><p><strong>ERR_TOO_MANY_REDIRECTS</strong> hay còn gọi là lỗi <strong>Vòng lặp chuyển hướng</strong>, trong đó trình duyệt không thể tìm ra URL cần tải và bị chuyển hướng liên tục.</p></blockquote>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large is-resized\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29876\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-6-3.png\" sizes=\"(max-width: 944px) 100vw, 944px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-6-3.png 1013w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-6-3-300x202.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-6-3-768x516.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-6-3-150x101.png 150w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"944\" height=\"635\" /></figure>\n</div>\n<p>Có nhiều nguyên nhân gây ra lỗi này, tuy nhiên bạn không cần phải quá lo lắng, bài viết này sẽ giúp hiểu rõ hơn cũng như cung cấp cho bạn giải pháp hữu hiệu nhất để sửa lỗi này.</p>\n<h2 id=\"nguyen-nhan-gay-ra-loi-err_too_many_redirects\" class=\"ftwp-heading\">Nguyên nhân gây ra lỗi “ERR_TOO_MANY_REDIRECTS”.</h2>\n<p>Dưới đây là các nguyên nhân chính gây ra lỗi “ERR_TOO_MANY_REDIRECTS” trong website WordPress:</p>\n<ul>\n<li>Dữ liệu Cookie trên trình duyệt bị lỗi.</li>\n<li>Cài đặt WordPress sai cấu hình.</li>\n<li>Thiết đặt máy chủ không chính xác.</li>\n<li>Xung đột plugin WordPress.</li>\n<li>Chứng chỉ SSL/TLS cấu hình sai hoặc hết hạn.</li>\n<li>Các vấn đề với các dịch vụ của bên thứ ba.</li>\n</ul>\n<h2 id=\"cach-khac-phuc-loi-err_too_many_redirects-cho-website-wordpress\" class=\"ftwp-heading\">Cách khắc phục lỗi “ERR_TOO_MANY_REDIRECTS” cho website WordPress</h2>\n<p>Có các cách khắc phục lỗi “ERR_TOO_MANY_REDIRECTS” như sau:</p>\n<ul>\n<li>Xóa dữ liệu Cookie Trình Duyệt</li>\n<li>Xóa dữ liệu Cache cũ</li>\n<li>Sửa URL Website</li>\n<li>Gia hạn SSL / TLS cấu hình sai hoặc hết hạn</li>\n<li>Kiểm tra xung đột Plugin</li>\n<li>Kiểm tra thiết lập hệ thống</li>\n<li>Kiểm tra các vấn đề máy chủ khác do bên thứ 3</li>\n</ul>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-full\"><img loading=\"lazy\" decoding=\"async\" class=\"alignnone wp-image-46799 size-full\" src=\"https://wiki.matbao.net/wp-content/uploads/2018/06/matbao.png\" sizes=\"(max-width: 1880px) 100vw, 1880px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2018/06/matbao.png 1880w, https://wiki.matbao.net/wp-content/uploads/2018/06/matbao-300x94.png 300w, https://wiki.matbao.net/wp-content/uploads/2018/06/matbao-1024x320.png 1024w, https://wiki.matbao.net/wp-content/uploads/2018/06/matbao-768x240.png 768w, https://wiki.matbao.net/wp-content/uploads/2018/06/matbao-1536x480.png 1536w, https://wiki.matbao.net/wp-content/uploads/2018/06/matbao-150x47.png 150w\" alt=\"\" width=\"1880\" height=\"587\" /></figure>\n</div>\n<h3 id=\"loi-err_too_many_redirects-do-du-lieu-cookie-tren-trinh-duyet-bi-loi\" class=\"ftwp-heading\">Lỗi “ERR_TOO_MANY_REDIRECTS” do dữ liệu Cookie trên trình duyệt bị lỗi.</h3>\n<p>Hầu hết các website đều lưu trữ cookie trong trình duyệt của bạn để nâng cao trải nghiệm người dùng. Đôi khi các cookie này có thể chứa dữ liệu bị lỗi hoặc lỗi thời, có thể dẫn đến lỗi chuyển hướng.</p>\n<p>Việc xóa cookie của trình duyệt sẽ loại bỏ khả năng gây ra lỗi này.</p>\n<h4 id=\"doi-voi-trinh-duyet-chrome\" class=\"ftwp-heading\">Đối với trình duyệt Chrome</h4>\n<p>Bạn có thể truy cập vào mục quản lý Cookie theo đường dẫn sau <strong>chrome://settings/siteData</strong>, lúc này bạn chỉ cần tìm kiếm tên website của mình và xóa bỏ dữ liệu Cookie mà trình duyệt đã lưu trữ trước đó.</p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29832\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-1-1024x491.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-1-1024x491.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-1-300x144.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-1-768x368.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-1-150x72.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-1.png 1366w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"491\" /><figcaption>Xóa cookie trên trình duyệt Chrome.</figcaption></figure>\n</div>\n<h4 id=\"doi-voi-trinh-duyet-firefox\" class=\"ftwp-heading\">Đối với trình duyệt Firefox</h4>\n<p>Bạn truy cập đường dẫn <strong>about:preferences#privacy</strong> hoặc mục <strong>Tùy chọn</strong> (<strong>options</strong>) <strong>→</strong> <strong>Riêng tư và bảo mật</strong> (<strong>Private &amp; Security</strong>), cuộn chuột và tìm đến mục <strong>Cookie và dữ liệu trang</strong> (<strong>Cookies and Site Data</strong>).</p>\n<p>Nhấn trực tiếp vào mục <strong>Quản lý cookie và dữ liệu trang</strong> (<strong>Manage Cookies and Site Data</strong>), Lúc này bạn chỉ cần tìm kiếm website của mình và xóa bỏ dữ liệu <strong>Cookie </strong>đã lưu trữ là được.</p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29833\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-2-1024x483.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-2-1024x483.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-2-300x142.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-2-768x362.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-2-150x71.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err_too_many_redirects-trong-wordpress-2.png 1363w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"483\" /><figcaption>Xóa cookie trên trình duyệt firefox.</figcaption></figure>\n</div>\n<h3 id=\"loi-err_too_many_redirects-do-cache-du-lieu-cu\" class=\"ftwp-heading\">Lỗi “ERR_TOO_MANY_REDIRECTS” do Cache dữ liệu cũ</h3>\n<blockquote class=\"wp-block-quote\"><p>Các vòng lặp chuyển hướng do phản hồi của máy chủ có thể được lưu vào bộ nhớ đệm. Vì vậy, ngay cả khi bạn đã khắc phục sự cố, bạn nên thực hiện xóa cache trình duyệt và cache trên website.</p></blockquote>\n<p>Để xóa cache trình duyệt, bạn có thể làm theo bài hướng dẫn sau: <a href=\"https://wiki.matbao.net/kb/huong-dan-xoa-cache-tren-trinh-duyet-web-va-cache-dns/\" rel=\"nofollow\" data-wpel-link=\"internal\"><strong>Hướng dẫn xóa cache trên trình duyệt web và cache DNS</strong></a></p>\n<p>Nếu website WordPress của bạn có cài các plugin tạo cache như WP Rocket, Swift Performance, W3 Total Cache, WP Fastes Cache, Lite Speed Cache…. thì bạn cần tiến hành xóa cache thông qua chức năng <strong>Delete cache</strong> mà các plugin này hỗ trợ.</p>\n<p>Ngoài ra, các plugin cache thường sẽ tạo ra thư mục <strong>cache </strong>trên hosting để lưu trữ các dữ liệu này.</p>\n<p>Bạn có thể xóa chúng bằng cách truy cập vào trang quản trị hosting, tiếp tục truy cập mục <strong>File Manager</strong> <strong>→</strong> <strong>httpdocs</strong> (hoặc <strong>public_html</strong>) <strong>→</strong> <strong>wp-content</strong> <strong>→</strong> <strong>cache </strong>và xóa toàn bộ nội dung trong thư mục này.</p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29885\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-7-1-1-1024x437.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-7-1-1-1024x437.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-7-1-1-300x128.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-7-1-1-768x328.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-7-1-1-150x64.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-7-1-1.png 1124w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"437\" /><figcaption>Xóa dữ liệu cache trên hosting.</figcaption></figure>\n</div>\n<h3 id=\"duong-dan-website-wordpress-khong-dung\" class=\"ftwp-heading\">Đường dẫn website WordPress không đúng.</h3>\n<p>Nếu bạn vẫn truy cập được trang quản trị website, hãy truy cập lần lượt <strong>Cài đặt(Settings)</strong> <strong>→</strong> <strong>Chung(General Settings)</strong>, bạn cần kiểm tra mục<strong> Địa chỉ WordPress</strong> (<strong>WordPress Address URL)</strong> và <strong>Địa chỉ trang</strong> <strong>web</strong> (<strong>Site Address URL</strong>).</p>\n<blockquote class=\"wp-block-quote\"><p><strong>Lưu ý:</strong> Bạn nên đặt lại 2 giá trị này sao cho giống hệt với nhau, ví dụ: <strong>https://tenmiencuaban.com</strong> hoặc <strong>https://www.tenmiencuaban.com</strong>.</p></blockquote>\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29874\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-5-1-1024x472.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-5-1-1024x472.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-5-1-300x138.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-5-1-768x354.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-5-1-150x69.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-5-1.png 1346w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"472\" /><figcaption>Thiết lập đường dẫn truy cập trong trang quản trị website.</figcaption></figure>\n<p>Trường hợp bạn không thể truy cập được trang quản trị website, bạn sẽ cần truy cập vào trang quản trị hosting và thêm đoạn code sau vào file <strong>wp-config.php</strong>:</p>\n<pre class=\"wp-block-code prettyprinted\"><code class=\" prettyprinted\"><span class=\"pln\">define</span><span class=\"pun\">(</span><span class=\"str\">'WP_HOME'</span><span class=\"pun\">,</span><span class=\"str\">'https://tenmiencuaban.com'</span><span class=\"pun\">);</span><span class=\"pln\"> \r\ndefine</span><span class=\"pun\">(</span><span class=\"str\">'WP_SITEURL'</span><span class=\"pun\">,</span><span class=\"str\">'https://tenmiencuaban.com'</span><span class=\"pun\">);</span></code></pre>\n<div class=\"open_grepper_editor\" title=\"Edit &amp; Save To Grepper\"></div>\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29899\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-11-1-1024x476.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-11-1-1024x476.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-11-1-300x139.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-11-1-768x357.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-11-1-150x70.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-11-1.png 1139w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"476\" /><figcaption>Thiết lập đường dẫn truy cập trong file wp-config.php.</figcaption></figure>\n<h3 id=\"chung-chi-ssl-tls-cau-hinh-sai-hoac-het-han-khien-loi-err_too_many_redirects\" class=\"ftwp-heading\">Chứng chỉ SSL / TLS cấu hình sai hoặc hết hạn khiến Lỗi “ERR_TOO_MANY_REDIRECTS”</h3>\n<blockquote class=\"wp-block-quote\"><p>Chứng chỉ SSL sẽ cho phép bạn truy cập website bằng giao thức <strong>HTTPS </strong>và mã hóa các dữ liệu kết nối giữa người dùng với Website.</p></blockquote>\n<p>Nếu bạn đang thiết lập website của mình được tải qua giao thức <strong>HTTPS </strong>nhưng chưa cài đặt và cấu hình chứng chỉ <strong>SSL / TLS </strong>đúng cách, thì điều đó có thể dẫn đến vòng lặp chuyển hướng vì trình duyệt không thể kết nối <strong>HTTPS </strong>với máy chủ.</p>\n<p>Bạn có thể kiểm tra máy chủ SSL thông qua công cụ <a href=\"https://www.ssllabs.com/ssltest/analyze.html\" rel=\"nofollow external noopener noreferrer\" data-wpel-link=\"external\"><strong>SSL Server </strong></a><strong><a title=\"Test\" href=\"https://wiki.matbao.net/test/\">Test</a></strong>, để phân tích các định cấu hình kết nối qua <strong>HTTPS </strong>đã đúng cách hay chưa.</p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29901\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-3-1-1024x485.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-3-1-1024x485.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-3-1-300x142.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-3-1-768x364.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-3-1-150x71.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-3-1.png 1052w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"485\" /><figcaption>Kiểm tra thiết lập SSL của website.</figcaption></figure>\n</div>\n<p>Ngoài ra, bạn cũng có thể tham khảo hướng dẫn cấu hình SSL / TLS trên hosting:</p>\n<ul>\n<li>Cài đặt chứng chỉ SSL miễn phí <strong>Let’s Encrypt</strong> trên <a href=\"https://wiki.matbao.net/kb/huong-dan-cai-dat-ssl-tren-cloud-wordpress-hosting-v3/\" rel=\"nofollow\" data-wpel-link=\"internal\"><strong>Plesk Panel</strong></a> và <a href=\"https://wiki.matbao.net/kb/cai-dat-ssl-cho-website-mien-phi-tu-cpanel-voi-lets-encrypt/\" rel=\"nofollow\" data-wpel-link=\"internal\"><strong>cPanel</strong></a>.</li>\n<li>Cài đặt chứng chỉ SSL từ các file <strong>Private key, CRT, CA</strong> trên <a href=\"https://wiki.matbao.net/kb/huong-dan-cai-dat-ssl-tren-plesk-panel/\" rel=\"nofollow\" data-wpel-link=\"internal\"><strong>Plesk Panel</strong></a> và <a href=\"https://wiki.matbao.net/kb/huong-dan-cai-dat-ssl-tren-cpanel/\" rel=\"nofollow\" data-wpel-link=\"internal\"><strong>cPanel</strong></a>.</li>\n</ul>\n<h3 id=\"xung-dot-plugin\" class=\"ftwp-heading\">Xung đột plugin.</h3>\n<blockquote class=\"wp-block-quote\"><p>Các plugin WordPress đôi khi có thể can thiệp vào hoạt động của các quy tắc chuyển hướng do WordPress hoặc máy chủ thiết lập.</p></blockquote>\n<p>Bạn nên tiến hành tắt kích hoạt lần lượt các plugin trên <strong><a href=\"https://www.matbao.net/hosting/cloud-wordpress-hosting.html\" rel=\"external noopener noreferrer\" data-type=\"URL\" data-id=\"https://www.matbao.net/hosting/cloud-wordpress-hosting.html\" data-wpel-link=\"external\">Hosting WordPress</a></strong> để xác định plugin nào đang gây lỗi.</p>\n<p>Trường hợp bạn không thể truy cập trang quản trị website, bạn sẽ cần truy cập thẳng vào hosting thông qua <a href=\"https://wiki.matbao.net/kb/huong-dan-truy-cap-vao-control-panel-tren-trang-quan-ly-dich-vu-khach-hang/\" rel=\"nofollow\" data-wpel-link=\"internal\"><strong>tài khoản quản trị hosting</strong></a> hoặc <a href=\"https://wiki.matbao.net/kb/tao-va-thay-doi-tai-khoan-ftp-tren-plesk/\" rel=\"nofollow\" data-wpel-link=\"internal\"><strong>tài khoản FTP</strong></a></p>\n<p>Hãy truy cập lần lượt theo đường dẫn sau: <strong>httpdocs</strong> <strong>→</strong> <strong>wp-content</strong> và tiến hành đổi tên thư mục <strong>plugins </strong>thành <strong>plugins_old</strong>, thao tác này sẽ tắt kích hoạt tất cả các plugins trên website và không hề ảnh hưởng đến bất kỳ dữ liệu nào trên website.</p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29883\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-9-1024x381.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-9-1024x381.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-9-300x112.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-9-768x285.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-9-150x56.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-9.png 1111w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"381\" /><figcaption>Tắt plugins trên hosting.</figcaption></figure>\n</div>\n<p>Lúc này, bạn sẽ cần truy cập lại website để kiểm tra, nếu lỗi chuyển hướng đã biến mất thì có một plugin nào đó đang gây ra lỗi.</p>\n<p>Sau khi đã khoanh vùng được sự cố do plugin gây ra, bạn sẽ cần đổi lại tên thư mục <strong>plugins_old </strong>lại thành <strong>plugins </strong>để kích hoạt lại plugin. Bạn cần truy cập thẳng vào thư mục <strong>plugins </strong>và tiến hành đổi tên lần lượt các thư mục plugins từ trên xuống dưới để xác định rõ plugin nào đang gây ra lỗi.</p>\n<blockquote class=\"wp-block-quote\"><p><strong>Có thể bạn chưa biết</strong>: Hosting WordPress tại Mắt Bão được cài đặt công <strong>WordPress Toolkit</strong> trên trang quản trị hosting, công cụ này sẽ giúp cho bạn có thể bật tắt plugin một cách dễ dàng. Bạn có thể xem hướng dẫn chi tiết <a href=\"https://wiki.matbao.net/kb/huong-dan-su-dung-wordpress-toolkit-plesk/#16-plugins\" rel=\"nofollow\" data-wpel-link=\"internal\"><strong>tại đây</strong></a>.</p></blockquote>\n<h3 id=\"thiet-dat-may-chu-khong-dung\" class=\"ftwp-heading\">Thiết đặt máy chủ không đúng.</h3>\n<p>Các website WordPress chủ yếu chạy trên hai loại máy chủ web: <strong>Apache </strong>hoặc <strong>Nginx</strong>.</p>\n<p>Nếu máy chủ web của bạn là <strong>Nginx</strong>, bạn nên kiểm tra lại và chắc chắn rằng không có bất kỳ chuyển hướng nào đang được thiết lập.</p>\n<p>Nếu máy chủ web là <strong>Apache </strong>thì bạn sẽ cần kiểm tra lại file <strong>.htaccess</strong> trong thư mục gốc của hosting và thay thế toàn bộ nội dung của file này bằng đoạn code sau:</p>\n<pre class=\"wp-block-code prettyprinted\"><code class=\" prettyprinted\"><span class=\"com\"># BEGIN WordPress </span>\r\n<span class=\"typ\">RewriteEngine</span> <span class=\"typ\">On</span>\r\n<span class=\"typ\">RewriteBase</span> <span class=\"pun\">/</span> \r\n<span class=\"typ\">RewriteRule</span> <span class=\"pun\">^</span><span class=\"pln\">index</span><span class=\"pun\">.</span><span class=\"pln\">php$ </span><span class=\"pun\">-</span> <span class=\"pun\">[</span><span class=\"pln\">L</span><span class=\"pun\">]</span> \r\n<span class=\"typ\">RewriteCond</span> <span class=\"pun\">%{</span><span class=\"pln\">REQUEST_FILENAME</span><span class=\"pun\">}</span> <span class=\"pun\">!-</span><span class=\"pln\">f \r\n</span><span class=\"typ\">RewriteCond</span> <span class=\"pun\">%{</span><span class=\"pln\">REQUEST_FILENAME</span><span class=\"pun\">}</span> <span class=\"pun\">!-</span><span class=\"pln\">d \r\n</span><span class=\"typ\">RewriteRule</span> <span class=\"pun\">.</span> <span class=\"pun\">/</span><span class=\"pln\">index</span><span class=\"pun\">.</span><span class=\"pln\">php </span><span class=\"pun\">[</span><span class=\"pln\">L</span><span class=\"pun\">]</span> \r\n<span class=\"com\"># END WordPress</span></code></pre>\n<div class=\"open_grepper_editor\" title=\"Edit &amp; Save To Grepper\"></div>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29884\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-10-1024x493.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-10-1024x493.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-10-300x144.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-10-768x370.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-10-150x72.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-10.png 1142w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"493\" /><figcaption>Thiết lập file .htaccess thành mặc định.</figcaption></figure>\n</div>\n<p>Bạn có thể xem thêm các ví dụ khác về cách thiết lập file <strong>.htaccess</strong> trong <a href=\"https://wordpress.org/support/article/htaccess/\" rel=\"nofollow external noopener noreferrer\" data-wpel-link=\"external\"><strong>WordPress Codex</strong></a>. Việc cấu hình <strong>Nginx </strong>khá phức tạp, bạn nên tham khảo bài viết sau trước khi bắt đầu <a href=\"https://www.digitalocean.com/community/tutorials/how-to-create-temporary-and-permanent-redirects-with-nginx\" rel=\"nofollow external noopener noreferrer\" data-wpel-link=\"external\"><strong>Hướng dẫn chuyển hướng NGINX</strong></a> .</p>\n<h3 id=\"cac-van-de-voi-cac-dich-vu-cua-ben-thu-ba\" class=\"ftwp-heading\">Các vấn đề với các dịch vụ của bên thứ ba.</h3>\n<blockquote class=\"wp-block-quote\"><p>Các dịch vụ của bên thứ ba như <strong>CDN </strong>(ví dụ: Cloudflare) và <strong>WAF </strong>(ví dụ: Sucuri) là các proxy ngược nằm giữa máy chủ của bạn và máy khách. Việc các Proxy ngược cũng cử lý <strong>SSL / TLS</strong> có thể gây tình trạng lặp chuyển hướng vô hạn.</p></blockquote>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29849\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-4-1024x496.jpg\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-4-1024x496.jpg 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-4-300x145.jpg 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-4-768x372.jpg 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-4-150x73.jpg 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-4.jpg 1349w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"496\" /><figcaption>Tắt thiết lập SSL / TLS trên Cloudflare.</figcaption></figure>\n</div>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter size-large\"><img loading=\"lazy\" decoding=\"async\" class=\"wp-image-29879\" src=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-8-1024x257.png\" sizes=\"(max-width: 1024px) 100vw, 1024px\" srcset=\"https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-8-1024x257.png 1024w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-8-300x75.png 300w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-8-768x193.png 768w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-8-150x38.png 150w, https://wiki.matbao.net/wp-content/uploads/2020/10/khac-phuc-loi-err-too-many-redirects-trong-wordpress-8.png 1043w\" alt=\"Khắc phục lỗi &quot;ERR_TOO_MANY_REDIRECTS&quot; cho website WordPress\" width=\"1024\" height=\"257\" /><figcaption>Tắt Proxy DNS trên cloudflare.</figcaption></figure>\n</div>\n<p>Bạn cũng có thể liên hệ nhà phát triển website chuyên nghiệp hoặc đội ngũ hỗ trợ hosting để được hỗ trợ thiết lập đúng cách.</p>\n<h2 id=\"ket-luan\" class=\"ftwp-heading\">Kết luận</h2>\n<p>Do lỗi này có rất nhiều nguyên nhân, vì vậy sau mỗi lần kiểm kiểm tra, bạn nên truy cập lại website để kiểm tra xem website đã hoạt động bình thường hay chưa rồi mới tiếp tục bước tiếp theo.</p>\n<p>Ngoài ra, bạn cũng có thể kiểm tra qua một số công cụ như <a href=\"https://httpstatus.io/\" rel=\"nofollow external noopener noreferrer\" data-wpel-link=\"external\"><strong>HTTP Status Code Checker</strong></a>, <a href=\"https://varvy.com/tools/redirects/\" rel=\"nofollow external noopener noreferrer\" data-wpel-link=\"external\"><strong>Redirect mapper</strong></a>, hoặc <a href=\"http://www.redirect-checker.org/index.php\" rel=\"nofollow external noopener noreferrer\" data-wpel-link=\"external\"><strong>Redirect Checker</strong></a> để có thể nhanh chóng khoanh vùng sự cố.</p>\n<p>Nếu bạn vẫn đang băn khoăn hoặc có cách khắc phục khác, đừng ngần ngại cho chúng tôi biết ở phần bình luận bên dưới nhé, chúc bạn thành công!</p>\n",
              "author": {
                "node": {
                  "avatar": {
                    "url": "https://secure.gravatar.com/avatar/dab40d1629fb785379185355750cd8d5?s=96&d=mm&r=g",
                    "__typename": "Avatar"
                  },
                  "name": "gaucoffee",
                  "__typename": "User"
                },
                "__typename": "NodeWithAuthorToUserConnectionEdge"
              }
            }
          }
        }

        var post = res.data.singlePost;

        return {
          post: post
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
