export const searchTest =  (_key_1, _key_2, _property, _keyword, vm) => {

  vm.$store.dispatch('searchData', {key_1:_key_1,
                                  key_2:_key_2,
                                  property:_property,
                                keyword:_keyword});

    return vm.$store.state[_property];
}
