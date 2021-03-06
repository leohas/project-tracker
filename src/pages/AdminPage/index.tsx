import React, { useEffect, useState } from 'react'
import { getGlobal } from 'reactn';
import UserDetail from '../../components/UserDetail';
import { FbAuth, FbDb } from '../../services/firebaseConfig';
import GlobalStyles from "../../styles/GlobalStyles";
import { AvatarPhoto, PaperContainer, LogOutButton, PaperContent, PaperHeader } from './styles';

const AdminPage: React.FC = () => {
  const { user }: any = getGlobal()
  const [usersState, setUsersState]: any[] = useState([])

  console.log(usersState)

  const signOutHandler = async () => {
    await FbAuth.signOut()
    window.location.reload()
    return true
  }

  useEffect(() => {
    const getUsers = async () => {
      const users = (await FbDb.child('users').orderByChild('admin').equalTo(false).once('value')).val() || {}

      if (users) {
        const usersData = Object.entries(users).map(user => {
          const id = user[0]
          const value: any = user[1]

          return { id, ...value }
        }
        )
        if (usersData) return setUsersState(usersData)
      }
    }
    getUsers()
  }, [])

  return (
    <PaperContainer>
      <GlobalStyles />
      <PaperHeader>
        <AvatarPhoto src={`${user.photoURL || 'https://pngimg.com/uploads/anonymous_mask/anonymous_mask_PNG2.png'}`} />
        <h1> Hello {`${user.email}`}! </h1>
      </PaperHeader>
      <PaperContent>
        {usersState.length > 0 ? usersState?.map((user: any, indexUser: any) => (
          <UserDetail
            key={user.id}
            index={indexUser}
            email={user.email}
            projects={user.projects ? Object.values(user.projects) : []}
          >
          </UserDetail>
        )) : <h2 style={{ marginTop: '40px' }}>
          These are all the projects from all the users:
        </h2>}
        <LogOutButton
          variant="contained"
          color="secondary"
          style={{ marginTop: '30px' }}
          onClick={signOutHandler}
        >
          Log Out
        </LogOutButton>
      </PaperContent>
    </PaperContainer >
  )
}

export default AdminPage