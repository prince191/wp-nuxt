<template>
  <div>
    <div v-html="footerHtml">
    </div>
  </div>
</template>
<script>
  export default {
    name: "Footer",
    props: {
      footerHtml: String,
    },
    mounted() {
      document.querySelector(".back-to-top").onclick = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      };
    },
  }
</script>
