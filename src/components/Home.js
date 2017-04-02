import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  constructor() {
    super();
    this.state={
      cats:[]
    }
  }
  componentWillMount(){
    axios.get('http://tiger.haoduoshipin.com/cats')
      .then(res => this.setState({cats:res.data.cats}))
  }
  render(){
    return(
      <div className='home'>
        <p>已发布的课程</p>
        <div className='home-root'>
          {this.state.cats.map(item =>
            <div key={Math.random()} className='card'>
              <div className='image'></div>
              <p>{item.name}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home;
