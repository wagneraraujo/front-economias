import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import List from '../pages/List'
import Layout from '../components/Layout'
const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/list/:type" element={<List />} />
        </Routes>
      </BrowserRouter>

    </Layout>
  )
}
export default AppRoutes
