<template>
  <div class="full_height_wrap pdf_wrap">
    <div ref='viewer'></div>
  </div>
</template>

<script>
/* eslint-disable */
// import WebViewer from '@pdftron/pdfjs-express'

export default {
  name: 'kbPdfViewer',
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  props: {
    path: String,
    url: String
  },
  
  mounted: function () {
    // WebViewer({
    //   path: `${this.publicPath}pdfjs`,
    //   initialDoc: this.url, // replace with your own PDF file
    // }, this.$refs.viewer).then((instance) => {
    //   // call apis here
    // });
  }
}
</script>
