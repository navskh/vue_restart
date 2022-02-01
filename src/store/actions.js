import {fetchNewsList, fetchJobsList, fetchAskList} from '../api/index.js'

export default{
  FETCH_NEWS(context){
    fetchNewsList()
      .then(response =>  {
        console.log(response);

        // ACTION 에서 COMMIT으로  MUTATION으로 값을 넘길 수 있음
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },

  FETCH_JOBS(context){
    fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, // destructuring 비구조화 위와 아래는 같음!
  
  FETCH_ASK({commit}){
    fetchAskList()
      .then(({data}) => {
        commit('SET_ASK', data);
      })
      .catch(err => {
        console.log(err);
      })  
  }
}