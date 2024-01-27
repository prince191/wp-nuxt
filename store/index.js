import ApolloClient from 'apollo-boost';
import { categorysQuery } from '../constants/query.js';


export const state = () => ({
  categorys: [],
  footerHtml: ""
})

export const mutations = {
  setCategory(state, payload) {
    state.categorys = payload;
  },
  setFooterHtml(state, payload) {
    state.footerHtml = payload;
  },
  
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    try {
      const graphUrl = process.env.graphUrl;
      const apolloClient = new ApolloClient({
        uri: graphUrl,
        fetch
      });
      const response = await apolloClient.query({
        query: categorysQuery,
        fetchPolicy: 'no-cache',
      });

      const categorys = response.data?.categories?.nodes;
      const footerHtml = response.data?.getCustomHtml;
      commit("setCategory", categorys);
      commit("setFooterHtml", footerHtml);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  }
}
