import axios from 'axios'

export default function allCourse() {
  return dispatch => {
    return axios.get('http://tiger.haoduoshipin.com/cats')
      .then(res =>
        dispatch({type:'LOAD',cats:res.data.cats})
      )
  }
}
