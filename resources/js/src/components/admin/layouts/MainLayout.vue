<template>
  <div class="wrapper">
    <Header />
    <Sidebar />
    <div class="content-wrapper">
      <section class="content">
        <div class="container-fluid">
          <router-view />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../base/header.vue";
import Sidebar from "../base/sidebar.vue";
import Footer from "../base/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
