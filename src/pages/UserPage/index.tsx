import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import { FbAuth, FbDb } from '../../services/firebaseConfig'
import {
  AvatarPhoto,
  Container,
  ModalDiv,
  ModalTitle,
  PaperContent,
  PaperHeader,
} from './styles'
import Button from '@material-ui/core/Button'
import { getGlobal } from 'reactn'
import { Modal, TextField } from '@material-ui/core'

const UserPage: React.FC = () => {
  const { user }: any = getGlobal()

  const [projectsState, setProjectsState] = useState([])
  const [message, setMessage] = useState('It seems you don\'t have any projects. Click the Add button to add a new one.')
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectStatus, setProjectStatus] = useState('')
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    const getUserProjects = async () => {
      const userUid = user.uid
      const projects = (await FbDb.child('users').child(userUid).child('projects')
        .once('value')).val() || {}

      /*
      if (projects) {
        const projectsUser: any = []
        projects.forEach((project: any) => {
          projectsUser.push(project)
        })
        console.log(projectsState)
        setProjectsState(projectsUser)
      }
      */
    }
    getUserProjects()
  }, [])

  const signOutHandler = async () => {
    await FbAuth.signOut()
    window.location.reload()
    return true
  }

  const handleOpenModal = () => {
    setProjectName('')
    setProjectDescription('')
    setProjectStatus('')
    setModalState(true)
  }

  const handleCloseModal = () => {
    setModalState(false)
  }

  const handleProjectName = (event: any) => {
    setProjectName(event.target.value)
  }

  const handleProjectDescription = (event: any) => {
    setProjectDescription(event.target.value)
  }

  const handleProjectStatus = (event: any) => {
    setProjectStatus(event.target.value)
  }

  const handleAddButton = async () => {
    const newProject = {
      name: projectName,
      description: projectDescription,
      status: projectStatus
    }

    await FbDb.child('users').child(user.uid).child('projects')
      .push().set(newProject)

    handleCloseModal()
  }

  return (
    <Container>
      <GlobalStyles />
      <PaperHeader>
        <AvatarPhoto src={`${user.photoURL}`} />
        <h1> Hello {`${user.email}`}! </h1>
        <Button variant="contained"
          color="primary"
          style={{ marginRight: '30px', width: '100px', height: '50px' }}
          onClick={handleOpenModal}
        >
          Add
        </Button>
      </PaperHeader>
      <PaperContent>
        <h2>{message}</h2>
        <Modal
          open={modalState}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalDiv>
            <ModalTitle>Add Project</ModalTitle>
            <TextField
              id="outlined-basic"
              label="Type in your project name"
              variant="outlined"
              onChange={handleProjectName}
            />
            <TextField
              id="outlined-basic"
              label="Type in your project description"
              style={{ marginTop: "10px" }}
              variant="outlined"
              onChange={handleProjectDescription}
            />
            <TextField
              id="outlined-basic"
              label="Type in your project status (active or inactive)"
              style={{ marginTop: "10px" }}
              onChange={handleProjectStatus}
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={handleAddButton}
              style={{ marginTop: "40px" }}
            >
              Add Project
            </Button>
          </ModalDiv>
        </Modal>
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

export default UserPage