import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {fetchUsername,logoOut} from '../action/actions.js'
import axios from 'axios'
import store from '../store/store.js'

class Header extends React.Component {
  handleLogout(){
    this.props.logoOut()
  }
  componentWillMount(){
    if(localStorage.getItem('userId')){
      this.props.fetchUsername()
    }
  }
  render(){
    console.log('header',this.props.currentUser);
    return(
      <div className='header-root'>
        <Link to='/'>首页</Link>
        <div className='right'>
          {this.props.currentUser!='' ? <a>{this.props.currentUser}</a> : <Link to='/signin' activeClassName='cools'>登录</Link>}
          {this.props.currentUser!='' ? <a onClick={this.handleLogout.bind(this)}>退出</a> : <Link to='/signup' activeClassName='cools'>注册</Link>}
        </div>
      </div>
    )
  }
}
let mapStateToProps = (state) => ({
  currentUser:state.user
})
export default connect(mapStateToProps,{fetchUsername,logoOut})(Header);
