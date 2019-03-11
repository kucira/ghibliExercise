export const getters = {
  getFilms(state){
    return state.listFilm;
  },
  getLocations(state){
    return state.listLocation;
  },
  getVehicle(state){
    return state.listVehicle;
  },
  getPeople(state){
    return state.listPeople;
  },
  getSpecies(state){
    return state.listSpecies;
  },
  getDataDetail(state){
    return state.dataDetail;
  },
}