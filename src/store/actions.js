import {
  fetchNewsList,
  // fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
  fetchJobsList,
} from "../api/index.js";

export default {
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       // ACTION 에서 COMMIT으로  MUTATION으로 값을 넘길 수 있음
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // async
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit("SET_NEWS", response.data);
      return response; // promise 가 return 이 됨.
    } catch (error) {
      console.log(error);
    }
  },

  // FETCH_JOBS(context) {
  //   return fetchJobsList()
  //     .then((response) => {
  //       context.commit("SET_JOBS", response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, // destructuring 비구조화 위와 아래는 같음!

  // async
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobsList();
      context.commit("SET_JOBS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASK", data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  // async
  async FETCH_ASK({ commit }) {
    try {
      const response = await fetchAskList();
      commit("SET_ASK", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => {
  //       commit("SET_USER", data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  // async
  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name);
      commit("SET_USER", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // FETCH_ITEM({ commit }, askId) {
  //   return fetchItemInfo(askId)
  //     .then(({ data }) => {
  //       commit("SET_ITEM", data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  async FETCH_ITEM({ commit }, askId) {
    try {
      const response = await fetchItemInfo(askId);
      commit("SET_ITEM", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit("SET_LIST", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => commit("SET_LIST", data))
  //     .catch((error) => console.log(error));
  // },
};
