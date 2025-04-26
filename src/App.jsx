import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react'
// Component
import Header from './features/Header/Header'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import { SettingsHover } from './contexts/SettingsHoverContext'


const App = () => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  
  return (
    <div className="App flex flex-col w-full h-full">
      <SettingsHover>
        <Header />
        <div className="flex flex-col w-full h-full items-center justify-center px-10 py-4">
          { isAuthenticated ? <UserPage /> : <HomePage /> }
        </div>
      </SettingsHover>
    </div>
  )
}

export default App