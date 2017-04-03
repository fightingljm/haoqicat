import axios from 'axios'
import {browserHistory} from 'react-router';

export function allCourse() {
  return dispatch => {
    return axios.get('http://tiger.haoduoshipin.com/cats')
      .then(res =>
        dispatch({type:'LOAD',cats:res.data.cats})
      )
  }
}
export function userInfo(username,password) {
  return dispatch => {
    return axios.post('http://tiger.haoduoshipin.com/user/signin',{username,password})
      .then(res => {
        console.log(res)
        dispatch({type:'SIGNIN',currentUser:res.data.user})
        browserHistory.push('/');
        localStorage.setItem('userId',res.data.userId)
      }
    )
  }
}
export function logoOut(username,password) {
  return dispatch => {
    return axios.get('http://tiger.haoduoshipin.com/user/logout')
      .then(res => {
        dispatch({type:'SIGNOUT',user:''})
        localStorage.userId = '';
      })
  }
}
export function fetchUsername() {//刷新页面重新获取用户名
  return dispatch => {
    axios.get(`http://tiger.haoduoshipin.com/user/${localStorage.getItem('userId')}`)
      .then(res => {
        console.log(res)
        dispatch({type:'FETCH_NAME',username:res.data.user.username})
      })
  }
}
