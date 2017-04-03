import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import axios from 'axios'
import store from '../store/store.js'

class Header extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  handleLogout(){
    axios.get('http://tiger.haoduoshipin.com/user/logout')
      .then(res => {
        store.dispatch({type:'SIGNIN',userData:res.data})
        localStorage.user = '';
        localStorage.userId = '';
      }
    )
  }
  componentWillMount(){
    let data = {
      msg:"登陆成功",
      user:`${localStorage.getItem('user')}`,
      userId:`${localStorage.getItem('userId')}`
    }
    store.dispatch({type:'SIGNIN',userData:data})
  }
  render(){
    return(
      <div className='header-root'>
        <Link to='/'>首页</Link>
        <div className='right'>
          {this.props.userData.user ? <a>{this.props.userData.user}</a> : <Link to='/signin' activeClassName='cools'>登录</Link>}
          {this.props.userData.user ? <a onClick={this.handleLogout.bind(this)}>退出</a> : <Link to='/signup' activeClassName='cools'>注册</Link>}
        </div>
      </div>
    )
  }
}
let mapStateToProps = (state) => ({
  userData:state.user
})
export default connect(mapStateToProps)(Header);
