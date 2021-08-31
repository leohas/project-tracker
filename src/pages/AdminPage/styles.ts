import styled from 'styled-components'
import container from '@material-ui/core/Container'
import paper from '@material-ui/core/Paper'

export const Container = styled(container)``

export const PaperHeader = styled(paper)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 0px 0px !important;
`

export const AvatarPhoto = styled.img`
  margin-left: 30px;
  height: 20%;
  width: 20%;
  border-radius: 50%;
`

export const PaperContent = styled(paper)`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
box-shadow: 0px 0px 0px 0px !important;
`