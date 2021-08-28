import React from 'react'
import { getGlobal } from 'reactn'
import AdminPage from '../AdminPage'
import UserPage from '../UserPage'

const Panel: React.FC = () => {
  const { user }: any = getGlobal()

  return (
    <>
      {user.admin ? <AdminPage /> : <UserPage />}
    </>
  )
}

export default Panel