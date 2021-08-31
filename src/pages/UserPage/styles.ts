import styled from 'styled-components'
import container from '@material-ui/core/Container'
import paper from '@material-ui/core/Paper'

export const Container = styled(container)``

export const PaperHeader = styled(paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ModalDiv = styled.div`
  margin-top: 130px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  background: #fff;
`;

export const ModalTitle = styled.h2`
  background: #fff;
`;

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
padding-right: 30px;
padding-left: 30px;
`