import React, { useEffect } from 'react'
import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react'

// Component
import Header from './components/header/Header'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

const App = () => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  
  // Use as below to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  
  return (
    <div className="App">
      <Header />
      { isAuthenticated ? <UserPage user={user} /> : <HomePage /> }
    </div>
  )
}

export default App