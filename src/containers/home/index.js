import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Layout, Row, Col, Input } from 'antd';


class Home extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing:false
    }
    this.props.dispatch({
      type:'ADD_POST',
      data
    });
  }
  render() {
    return (
      <div>
          <Row type="flex">
            <Col span={24} value={100} style={{background:'rgb(218, 218, 218)'}}>
            <h1>Home</h1>
            <div>
                  <form onSubmit={this.handleSubmit}>
                      <input value="this is title of post" required type="text" ref={(input)=>this.getTitle = input} 
                        placeholder="Enter Post Title"/>
                      <br /><br />
                      <textarea value="this is description of post....." required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
                        placeholder="Enter Post" />
                      <br /><br />
                      <button>Post</button>
                  </form>
            </div>

            </Col>
          </Row>
      </div>
    )
  }
}



export default connect()(Home)
