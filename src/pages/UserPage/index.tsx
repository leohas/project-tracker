import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import { FbAuth, FbDb } from '../../services/firebaseConfig'
import {
  AvatarPhoto,
  PaperContainer,
  LogOutButton,
  ModalDiv,
  ModalTitle,
  PaperContent,
  PaperHeader
} from './styles'
import Button from '@material-ui/core/Button'
import { getGlobal } from 'reactn'
import { Modal, TextField } from '@material-ui/core'
import ProjectDetail from '../../components/ProjectDetail'

const UserPage: React.FC = () => {
  const { user }: any = getGlobal()

  const [projectsState, setProjectsState]: any[] = useState([])
  const [projectName, setProjectName] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [nameMessage, setNameMessage] = useState('')
  const [descriptionMessage, setDescriptionMessage] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectStatus, setProjectStatus] = useState('')
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    const getUserProjects = async () => {
      const userUid = user.uid || null

      if (userUid) {
        const projects = (await FbDb.child('users').child(userUid).child('projects')
          .once('value')).val() || {}

        if (projects) {
          const projectsUser = Object.entries(projects).map(project => {
            const id = project[0]
            const value: any = project[1]

            return { id, ...value }
          })

          if (projectsUser) return setProjectsState(projectsUser)
        }
      }
    }
    getUserProjects()
  }, [projectsState])

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
    const statusCharacters: string[] = event.target.value.split('')

    if (statusCharacters) {
      const firstLetter = statusCharacters[0].toUpperCase()
      const word = statusCharacters.slice(1, 7).join('')
      const status = firstLetter + word
      setProjectStatus(status)
    }
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
    <PaperContainer>
      <GlobalStyles />
      <PaperHeader>
        <AvatarPhoto src={`${user.photoURL || 'https://img1.gratispng.com/20171220/qve/anonymous-mask-png-5a3a4666911942.7179111615137685505943.jpg'}`} />
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
        {projectsState.length > 0 ? projectsState?.map((project: any, indexProject: any) => (
          <ProjectDetail
            key={project.id}
            index={indexProject}
            name={project.name}
            description={project.description}
            status={project.status}
          >
          </ProjectDetail>
        )) : <h2 style={{ marginTop: '40px' }}>
          It seems you don't have any projects. Click the Add button to add a new one.
        </h2>}
        <Modal
          open={modalState}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalDiv>
            <ModalTitle>Add Project</ModalTitle>
            <h2>{nameMessage}</h2>
            <TextField
              id="outlined-basic"
              label="Type in your project name"
              variant="outlined"
              onChange={handleProjectName}
            />
            <h2>{descriptionMessage}</h2>
            <TextField
              id="outlined-basic"
              label="Type in your project description"
              style={{ marginTop: "10px" }}
              variant="outlined"
              onChange={handleProjectDescription}
            />
            <h2>{statusMessage}</h2>
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
        <LogOutButton
          variant="contained"
          color="secondary"
          onClick={signOutHandler}
        >
          Log Out
        </LogOutButton>
      </PaperContent>
    </PaperContainer >
  )
}

export default UserPage