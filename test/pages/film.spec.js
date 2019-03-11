import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
import Films from '../../pages/films/index.vue';
import { state } from '../../store/state'
import { mutations } from '../../store/mutations'
import { actions } from '../../store/actions'
import { getters } from '../../store/getters'
import { searchTest } from '../search'


const localVue = createLocalVue()

localVue.use(Vuex)
let wrapper = null;


const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})

describe('Films.vue', () => {

  wrapper = shallowMount(Films, {
    localVue,
    store,
    stubs:{
      NuxtLink:RouterLinkStub
    }
  });

  it('render page films successfully', async ()=>{
    await expect(wrapper).toBeTruthy();
  })

  it('Render List Film using a mock store successfully', async () => {
    await wrapper.vm.$store.dispatch('fetchFilms');
    expect(wrapper.vm.$store.state.listFilm.length).toBeGreaterThan(0);

  })

  it('Find render element nuxt link', async () => {
    const links = await wrapper.findAll(RouterLinkStub);
    expect(links.at(0).props().to).toEqual('/films/'+ wrapper.vm.$store.state.listFilm[0].id)
  });

  it('Render List Film and Search Function Data Film Test', async() => {
    await wrapper.vm.$store.dispatch('fetchFilms');
    const data = await searchTest('title',
    'director', 'listFilm', 'Isao Takahata', wrapper.vm);
    expect(data.length).toBeGreaterThan(0);
  })
});