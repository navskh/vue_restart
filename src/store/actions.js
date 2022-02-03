import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then((response) => {
        // ACTION 에서 COMMIT으로  MUTATION으로 값을 넘길 수 있음
        context.commit("SET_NEWS", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  FETCH_JOBS(context) {
    return fetchJobsList()
      .then((response) => {
        context.commit("SET_JOBS", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, // destructuring 비구조화 위와 아래는 같음!

  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  FETCH_ITEM({ commit }, askId) {
    return fetchItemInfo(askId)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
      .catch((error) => console.log(error));
  },
};
