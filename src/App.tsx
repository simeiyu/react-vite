import React, { Suspense, useContext } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.less'
import ConfigProvider from 'antd/lib/config-provider'
import zhCN from 'antd/es/locale/zh_CN'
import '@/assets/styles/common.less'
import CustomEmpty from './components/CustomEmpty'
import Layout from "./layout"
import Router from './routes'

function App() {
  return (
    <ConfigProvider locale={zhCN} renderEmpty={() => <CustomEmpty />} virtual>
      <BrowserRouter>
       <Layout><Router /></Layout>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
