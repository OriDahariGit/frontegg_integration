import React, { createContext, useEffect, useState } from 'react'
import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react'
// Component
import Header from './features/Header/Header'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'


const SettingsHoverContext = createContext(false)


const App = () => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const [isSettingsHover, setIsSettingHover] = useState(false)
  
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  
  return (
    <div className="App flex flex-col w-full h-full">
      <SettingsHoverContext.Provider value={{isSettingsHover, setIsSettingHover}} >
        <Header />
        <div className="flex flex-col w-full h-full items-center justify-center px-10 py-4">
          { isAuthenticated ? <UserPage /> : <HomePage /> }
        </div>
      </SettingsHoverContext.Provider>
    </div>
  )
}

export default App