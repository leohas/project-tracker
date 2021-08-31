import React from 'react'
import { PaperDescription, PaperName, PaperProject, PaperStatus } from './styles'

export interface projectDetails {
  name: string,
  description: string,
  status: string,
  index: number
}

const ProjectDetail: React.FC<projectDetails> = ({ name, description, status, index }: projectDetails) => {
  return (
    <PaperProject index={index}>
      <PaperName> {name}</PaperName>
      <br></br>
      <PaperDescription> {description}</PaperDescription>
      <PaperStatus status={status}> {status}</PaperStatus>
    </PaperProject>
  )
}

export default ProjectDetail