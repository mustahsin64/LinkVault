import React from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const {currentUser} = useAuth();
  return (
    <Layout>
    
    </Layout>
  )
}

export default Dashboard
