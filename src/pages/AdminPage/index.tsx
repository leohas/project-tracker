import React, { useEffect } from 'react'
import { FbAuth } from '../../services/firebaseConfig';
import GlobalStyles from "../../styles/GlobalStyles";
import { Container, Paper } from './styles';

const AdminPage: React.FC = () => {
  const signOutHandler = async () => {
    await FbAuth.signOut()
    window.location.reload()
    return true
  }

  return (
    <Container>
      <GlobalStyles />
      <h1> AdminPage </h1>
      <button onClick={signOutHandler}>Log Out</button> {/* Log Out Button */}
      <Paper>

      </Paper>
    </Container>
  )
}

export default AdminPage