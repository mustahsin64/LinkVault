import React from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/AuthContext'

function Dashboard() {
  const {currentUser} = useAuth();
  return (
    <Layout>
    {currentUser && currentUser.email}
      Dashboard page
    </Layout>
  )
}

export default Dashboard
