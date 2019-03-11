import axios from 'axios'
import {BASEURL, ENDPOINT} from '../utils/Config';

export const getFilms = () =>{
  return axios.get(BASEURL+ENDPOINT.FILMS);
}

export const getFilmsDetail = (id) =>{
  console.log(id, "get films detail id");
  return axios.get(BASEURL+ENDPOINT.FILMS+"/"+id);
}

export const getPeople = () => {
  return axios.get(BASEURL+ENDPOINT.PEOPLE);
}

export const getPeopleDetail = (id) =>{
  return axios.get(BASEURL+ENDPOINT.PEOPLE+"/"+id);
}

export const getLocation = () => {
  return axios.get(BASEURL+ENDPOINT.LOCATIONS);
}

export const getLocationDetail = (id) =>{
  return axios.get(BASEURL+ENDPOINT.LOCATIONS+"/"+id);
}

export const getVehicle = () => {
  return axios.get(BASEURL+ENDPOINT.VEHICLES);
}

export const getVehicleDetail = (id) =>{
  return axios.get(BASEURL+ENDPOINT.VEHICLES+"/"+id);
}

export const getSpecies = () => {
  return axios.get(BASEURL+ENDPOINT.SPECIES);
}

export const getSpeciesDetail = (id) =>{
  return axios.get(BASEURL+ENDPOINT.SPECIES+"/"+id);
}