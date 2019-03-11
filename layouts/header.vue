<template>
  <div>
    <nav class="uk-navbar-container uk-navbar">
        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">

                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link :to="{name:'films'}">Films</nuxt-link></li>
                <li><nuxt-link to="/people">People</nuxt-link></li>
                <li><nuxt-link to="/locations">Location</nuxt-link></li>
                <li><nuxt-link to="/species">Species</nuxt-link></li>
                <li><nuxt-link to="/vehicle">Vehicle</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
            </ul>

        </div>
    </nav>
    <nuxt />
  </div>
</template>


<style lang="less">
  @import "../assets/style.less";
</style>

<script>
  export default {
    created(){
      console.log(this.$router.currentRoute)
    },
    computed:{
      getCurrentPage(){
        return this.$store.state.currentPage;
      }
    }
  }
</script>