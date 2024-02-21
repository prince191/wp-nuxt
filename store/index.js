import ApolloClient from 'apollo-boost';
import { categorysQuery, categorysQuery_no_footer } from '../constants/query.js';


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
      var response;
      var footerHtml = "";
      try {
        response = await apolloClient.query({
          query: categorysQuery,
          fetchPolicy: 'no-cache',
        });
        footerHtml = response.data?.getCustomHtml;
      } catch (e) {
        response = await apolloClient.query({
          query: categorysQuery_no_footer,
          fetchPolicy: 'no-cache',
        });
      }
      var categorys = response.data?.categories?.nodes;

      commit("setCategory", categorys);
      commit("setFooterHtml", footerHtml);
    } catch (error) {
      //console.error('Error fetching data:', error);
    }
    
  }
}
