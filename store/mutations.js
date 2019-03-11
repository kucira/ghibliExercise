

export const mutations = {
  SET_LOADING(state, payload){
    state.isLoading = payload;
  },
  SET_FILM(state, payload){
    state.listFilm = payload;
    state.listDatabaseTemp = payload;
  },
  SET_PEOPLE(state, payload){
    state.listPeople = payload;
    state.listDatabaseTemp = payload;
  },
  SET_LOCATION(state, payload){
    state.listLocation = payload;
    state.listDatabaseTemp = payload;
  },
  SET_VEHICLE(state, payload){
    state.listVehicle = payload;
    state.listDatabaseTemp = payload;
  },
  SET_SPECIES(state, payload){
    state.listSpecies = payload;
    state.listDatabaseTemp = payload;
  },
  SET_FILM_DETAIL(state, payload){
    state.dataDetail = {...payload};
  },
  SET_PEOPLE_DETAIL(state, payload){
    state.dataDetail = {...payload};
  },
  SET_LOCATION_DETAIL(state, payload){
    state.dataDetail = {...payload};
  },
  SET_VEHICLE_DETAIL(state, payload){
    state.dataDetail = {...payload};
  },
  SET_SPECIES_DETAIL(state, payload){
    state.dataDetail = {...payload};
  },


  SEARCH_DATA(state, payload){

    let tempList = [...state.listDatabaseTemp];
    let searchResult = tempList.filter((val) => {
      return (val[payload.key_1].toLowerCase().includes(payload.keyword.toLowerCase()) || val[payload.key_2].toLowerCase().includes(payload.keyword.toLowerCase()))
    });
    state[payload.property] = (payload.keyword !== "" ? searchResult : tempList);
  }
}