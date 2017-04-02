import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'

class Header extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render(){
    console.log(this.props.userData);
    return(
      <div className='header-root'>
        <Link to='/'>首页</Link>
        <div className='right'>
          <Link to='/signin'>{this.props.userData.msg==='登陆成功' ? `${this.props.userData.user}` : '登录' }</Link>
          <Link to='/signup'>{this.props.userData.msg==='登陆成功' ? '退出' : '注册' }</Link>
        </div>
      </div>
    )
  }
}
let mapStateToProps = (state) => ({
  userData:state.user
})
export default connect(mapStateToProps)(Header);
