import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerMicroApps, start } from 'qiankun'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css'

registerMicroApps([
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue'
  },
  {
    name: 'reactApp',
    entry: '//localhost:4000',
    container: '#container',
    activeRule: '/app-react'
  }
])

start()


ReactDOM.render(
<Router>
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='app-vue'></Route>
      <Route path='app-react'></Route>
    </Route>
    <Route path='*' element={<App />}></Route>
  </Routes>
</Router>, document.getElementById('root'))


