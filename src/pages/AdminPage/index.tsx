import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { getGlobal } from 'reactn';
import { FbAuth, FbDb } from '../../services/firebaseConfig';
import GlobalStyles from "../../styles/GlobalStyles";
import { AvatarPhoto, Container, PaperContent, PaperHeader } from './styles';

const AdminPage: React.FC = () => {
  const { user }: any = getGlobal()

  const signOutHandler = async () => {
    await FbAuth.signOut()
    window.location.reload()
    return true
  }

  useEffect(() => {
    const getUsers = async () => {
      const userUid = user.uid
      const users = (await FbDb.child('users').once('value')).val() || {}
    }
    getUsers()
  }, [])

  return (
    <Container>
      <GlobalStyles />
      <PaperHeader>
        <AvatarPhoto src={`${user.photoURL}`} />
        <h1> Hello {`${user.email}`}! </h1>
      </PaperHeader>
      <PaperContent>
        <h2>These are all the projects from all the users: </h2>
      </PaperContent>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: '30px' }}
          onClick={signOutHandler}
        >
          Log Out
        </Button>
      </div>
    </Container>
  )
}

export default AdminPage