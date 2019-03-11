<template>
  <div class="uk-card uk-card-body uk-card-primary">
  <form class="uk-search uk-search-large">
      <span uk-search-icon></span>
      <input class="uk-search-input"
            type="search"
            placeholder="Search..."
            v-model="keyword">
  </form>
    <h3 class="uk-card-title">Ghibli Films List</h3>
    <div>
        <div class="uk-flex uk-flex-center">
            <PulseLoader v-if="$store.state.isLoading" loading="loading" color="#455555" />
        </div>
        <div v-if="!$store.state.isLoading" class="uk-child-small uk-text-center" uk-grid>
            <div v-for="film in getFilms">
                <nuxt-link :to="`/films/${film.id}`">
                      <div class="uk-card uk-card-default uk-card-body">
                        <p>
                          {{film.title}}
                        </p>
                        <p>
                          {{film.director}}
                        </p>
                      </div>
                </nuxt-link>

            </div>
        </div>
    </div>
  </div>
</template>


<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'Films',
  layout:'header',
  components:{
    PulseLoader
  },
  fetch(context){
      context.store.dispatch('fetchFilms');
  },
  data(){
    return {
      keyword:''
    }
  },
  watch: {
    keyword(newKeyword, oldKeyword){
      console.log('watching', newKeyword)
      this.$store.dispatch('searchData', {key_1:'title',
                                          key_2:'director',
                                          property:'listFilm',
                                        keyword:newKeyword})
    }
  },
  computed:{
    getFilms(){
        return this.$store.getters.getFilms;
      },

    getParams(){
      return this.$route.params;

    }
  },

  created(){
    console.log("created")
  }
}
</script>
