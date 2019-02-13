import React, { Component } from 'react';
import './App.scss';
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import {Switch, Route, NavLink } from 'react-router-dom'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Patients from './components/patients/Patients'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      actualRouter: null
    }
  }

  componentDidMount = () =>{
    let path = window.location.pathname
    let path_only=path.replace("/", "")
    if(path_only==="") path_only='home'
    this.setState({actualRouter: path_only})

}

  render() {const { Header, Content, Footer } = Layout
  const { Item } = Menu
  return (
    <Layout className="layout">
      <Header className='header'>
      {this.state.actualRouter ?
        <Menu
        className='menu'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[this.state.actualRouter]}
        style={{lineHeight:"64px"}}
        >
          <Item key="home"><NavLink to="/">Inicio</NavLink></Item>
          <Item key="products"><NavLink to="/products">Productos</NavLink></Item>
          <Item key="patients"><NavLink to="/patients">Pacientes</NavLink></Item>
        </Menu>
     :null }
      </Header>
      <Content className='content'>
        <div className='main-container'>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/patients" component={Patients} />
        </Switch>

        </div>
        
      </Content>

      <Footer className='footer'>
        <p>Derechos reservado Actosoft 2019 ©</p>
      </Footer>
    </Layout>
    );
  }
}

export default App;
