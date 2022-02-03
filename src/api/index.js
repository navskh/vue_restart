import axios from 'axios' // 기본적으로 node_modules에 접근해서 가져옴


//1. HTTP Request & Response 와 관련된 기본설정
const config ={
  baseUrl : 'https://api.hnpwa.com/v0/'
};


// 2. API 공통함수들 정리할 것
function fetchNewsList(){
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList(){
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList(){
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo(username){
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemId){
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

function fetchList(pageName){
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
}