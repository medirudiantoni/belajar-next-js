import React from 'react'
import Navbar from '../navbar'

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({children}) => {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}

export default AppShell