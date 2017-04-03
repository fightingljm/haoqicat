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
        dispatch({type:'SIGNIN',userData:res.data})
        browserHistory.push('/');
        localStorage.setItem('user',res.data.user)
        localStorage.setItem('userId',res.data.userId)
      }
    )
  }
}
