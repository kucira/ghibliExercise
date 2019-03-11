import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import FilmsDetail from '../../pages/films/_films_id/index.vue';
import { state } from '../../store/state'
import { mutations } from '../../store/mutations'
import { actions } from '../../store/actions'
import { getters } from '../../store/getters'


const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
let wrapper = null;

const router = new VueRouter({routes: [
  {path: '/films/:films_id', name: 'films-films_id', component: FilmsDetail},
]})
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})
router.push({name: 'films-films_id', params: {films_id: "2baf70d1-42bb-4437-b551-e5fed5a87abe"}})
describe('Films_id.vue', () => {

  wrapper = shallowMount(FilmsDetail, {
    localVue,
    store,
    router,
    stubs:{
      FilmsDetail:true
    }
  });

  expect(wrapper.find(FilmsDetail).exists()).toBe(true)

  it('fetch api and render page films detail successfully', async ()=>{
    await expect(wrapper).toBeTruthy();
  })

  it('Get films Detail property', async () => {
    const vm = wrapper.vm;
    await vm.$store.dispatch('getFilmsDetail', vm.$route.params);
    console.log(wrapper.vm.$store.state.dataDetail);
    expect(wrapper.vm.$store.state.dataDetail).toMatchObject({title:'Castle in the Sky'});

  })
});