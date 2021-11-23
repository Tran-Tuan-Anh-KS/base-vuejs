<template>
     <div class="wrapper">
        <Header/>
        <Sidebar/>
        <div class="content-wrapper">
            <section class="content">
                <div class="container-fluid">
                    <router-view />
                </div>
            </section>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from './header.vue';
    import Sidebar from './sidebar.vue';
    import Footer from './footer.vue';
    export default {
        name: 'App',
        components: {
            Header,
            Sidebar,
            Footer,
        }
    }
</script>

<style lang="scss">
</style>
