import { getFilms,
        getPeople,
        getLocation,
        getVehicle,
        getSpecies,
        getFilmsDetail,
        getLocationDetail,
        getPeopleDetail,
        getSpeciesDetail,
        getVehicleDetail } from '../api/index';

export const actions = {
  async fetchFilms(context, id){
    context.commit('SET_LOADING', true);
    const {data} = await getFilms();
    context.commit('SET_LOADING', false);
    context.commit('SET_FILM', data);
  },

  async fetchPeople(context, id){
    context.commit('SET_LOADING', true);
    const {data} = await getPeople();
    context.commit('SET_LOADING', false);
    context.commit('SET_PEOPLE', data);
  },

  async fetchLocation(context, id){
    context.commit('SET_LOADING', true);
    const {data} = await getLocation();
    context.commit('SET_LOADING', false);
    context.commit('SET_LOCATION', data);
  },

  async fetchSpecies(context, id){
    context.commit('SET_LOADING', true);
    const {data} = await getSpecies();
    context.commit('SET_LOADING', false);
    context.commit('SET_SPECIES', data);
  },

  async fetchVehicle(context, id){
    context.commit('SET_LOADING', true);
    const {data} = await getVehicle();
    context.commit('SET_LOADING', false);
    context.commit('SET_VEHICLE', data);
  },

  async getFilmsDetail(context, params){
    context.commit('SET_LOADING', true);
    const {data} = await getFilmsDetail(params.films_id);
    context.commit('SET_LOADING', false);
    context.commit('SET_FILM_DETAIL', data);
  },

  async getPeopleDetail(context, params){
    context.commit('SET_LOADING', true);
    const {data} = await getPeopleDetail(params.people_id);
    context.commit('SET_LOADING', false);
    context.commit('SET_FILM_DETAIL', data);
  },

  async getLocationDetail(context, params){
    context.commit('SET_LOADING', true);
    const {data} = await getLocationDetail(params.locations_id);
    context.commit('SET_LOADING', false);
    context.commit('SET_FILM_DETAIL', data);
  },

  async getSpeciesDetail(context, params){
    context.commit('SET_LOADING', true);
    const {data} = await getSpeciesDetail(params.species_id);
    context.commit('SET_LOADING', false);
    context.commit('SET_FILM_DETAIL', data);
  },

  async getVehicleDetail(context, params){
    context.commit('SET_LOADING', true);
    const {data} = await getVehicleDetail(params.vehicle_id);
    context.commit('SET_LOADING', false);
    context.commit('SET_FILM_DETAIL', data);
  },

  async searchData(context, params){
      context.commit('SEARCH_DATA', params);
  },

}