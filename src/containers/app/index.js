import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import { Button, Layout, Row, Col } from 'antd';
import allPost from '../allPost';
import editPost from '../editPost';

const {Header} = Layout;

const App = () => (
  <div>
    <Layout>
      <Header>
        <Link to="/">Home </Link>
        {/* <Link to="/Edit-Post">Edit</Link> */}
        <Link to="/All-Post"> All Post</Link>
      </Header>
    </Layout>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/Edit-Post" component={editPost} />
      <Route exact path="/All-Post" component={allPost} />
    </main>
  </div>
)

export default App
