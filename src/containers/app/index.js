import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import { Button, Layout, Row, Col } from 'antd';

const {Header, Footer, Sider, Content} = Layout;

const App = () => (
  <div>
    <Layout>
      <Header>
        <Link to="/">Home </Link>
        <Link to="/about-us"> About</Link>
      </Header>
    </Layout>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
