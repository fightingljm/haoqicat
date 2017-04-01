import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render(){
    return(
      <div className='header-root'>
        <Link to='/'>首页</Link>
        <div className='right'>
          <Link to='/signin'>登录</Link>
          <Link to='/signup'>注册</Link>
        </div>
      </div>
    )
  }
}

export default Header;
