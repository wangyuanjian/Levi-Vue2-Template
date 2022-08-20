import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  },
  mutations: {
    CHANGE_THEME(state, newTheme) {
      state.theme = newTheme;
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  },
  actions: {
    changeTheme(context, newTheme) {
      context.commit('CHANGE_THEME', newTheme)
    }
  },
  modules: {
  },
});
