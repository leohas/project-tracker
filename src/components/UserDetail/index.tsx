import React from 'react'
import { PaperUser, PaperEmail, PaperProjects, PaperName, PaperDescription, PaperStatus, PaperProject } from './styles'

export interface userDetails {
  email: string,
  projects: any[],
  index: number
}

const UserDetail: React.FC<userDetails> = ({ email, projects, index }: userDetails) => {
  return (
    <PaperUser index={index}>
      <PaperEmail>{email}</PaperEmail>
      <br></br>
      <PaperProjects>{projects.length != 0 ? projects?.map((project: any, indexProject: any) => (
        <PaperProject>
          <PaperName> {project.name}</PaperName>
          <br></br>
          <PaperDescription> {project.description}</PaperDescription>
          <PaperStatus status={project.status}> {project.status}</PaperStatus>
        </PaperProject>
      )) : <h2>This user didn't added any projects.</h2>}</PaperProjects>
    </PaperUser>
  )
}

export default UserDetail