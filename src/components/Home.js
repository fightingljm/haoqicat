import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import allCourse from '../action/actions.js'

class Home extends React.Component {
  componentWillMount(){
    this.props.allCourse()
  }
  render(){
    console.log(this.props.cats);
    return(
      <div className='home'>
        <p>已发布的课程</p>
        <div className='home-root'>
          {this.props.cats.map(item =>
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
let mapStateToProps = (state) => ({
  cats:state.cats
})
export default connect(mapStateToProps,{allCourse})(Home);
