const authors = {
  firestorePath: 'authors',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'authors',
  statePropName: 'data',
  namespaced: true, // automatically added

  // this object is your store module (will be added as '/myModule')
  // you can also add state/getters/mutations/actions
  state: {},
  getters: {},
  mutations: {},
  actions: {},
};

export default authors;
