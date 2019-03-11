<template>

  <div class="uk-card uk-card-body uk-card-primary">
  <form class="uk-search uk-search-large">
      <span uk-search-icon></span>
      <input class="uk-search-input"
            type="search"
            placeholder="Search..."
            v-model="keyword">
  </form>
    <h3 class="uk-card-title">Ghibli Vehicle List</h3>
    <div>
        <div class="uk-flex uk-flex-center">
            <pulse-loader v-if="$store.state.isLoading" loading="loading" color="#455555"></pulse-loader>
        </div>
       <div v-if="!$store.state.isLoading" class="uk-child-small uk-text-center" uk-grid>
        <div v-for="vehicle in getVehicle">
            <nuxt-link :to="`/vehicle/${vehicle.id}`">
                  <div class="uk-card uk-card-default uk-card-body">
                    <p>
                      {{vehicle.name}}
                    </p>
                    <p>
                      {{vehicle.vehicle_class}}
                    </p>
                  </div>
            </nuxt-link>

        </div>
    </div>
    </div>
  </div>

</template>


<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  layout:'header',
  components:{
    PulseLoader
  },

  fetch(context){
      context.store.dispatch('fetchVehicle');
  },
  data(){
    return {
      keyword:''
    }
  },
  watch: {
    keyword(newKeyword, oldKeyword){
      console.log('watching', newKeyword)
      this.$store.dispatch('searchData', {key_1:'name',
                                          key_2:'vehicle_class',
                                          property:'listVehicle',
                                        keyword:newKeyword})
    }
  },
  computed:{
    getVehicle(){
        return this.$store.getters.getVehicle;
      },

    getParams(){
      return this.$route.params;

    }
  },
  // data () {
  //   return {
  //     listFilm: []
  //     }
  // },
  // asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //     store.dispatch('fetchFilms');
  // },
  created(){
    console.log("created")
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
