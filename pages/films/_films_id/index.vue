<template>

  <div class="uk-card uk-card-body uk-card-primary">
    <h3 class="uk-card-title">Ghibli Films Details</h3>

      <div class="uk-flex uk-flex-center">
          <pulse-loader v-if="$store.state.isLoading" loading="loading" color="#455555"></pulse-loader>
      </div>
    <ul v-if="!$store.state.isLoading" class="uk-list uk-list-striped">
        <li v-for="value in getDataDetail">
            {{value}}
        </li>
    </ul>
    <button class="uk-button uk-button-secondary"
            @click="back"> Back </button>
  </div>

</template>


<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name:'Films_id',
  components:{
    PulseLoader
  },
  layout:'header',
  fetch(context){
    console.log(context.route.params)
    context.store.dispatch('getFilmsDetail', {...context.route.params});
  },
  created(){
    console.log("created", this.$route.params)
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  },
  computed:{
    getDataDetail(){
      return this.$store.getters.getDataDetail;
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
