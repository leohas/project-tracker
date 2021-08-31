import styled from 'styled-components'
import paper from '@material-ui/core/Paper'
import button from '@material-ui/core/Button'

export const PaperContainer = styled(paper)`
  background: #363732 !important;
  height: 100vh;
`

export const PaperHeader = styled(paper)`
  background: #363732 !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 0px 0px !important;
  > h1 {
    font-family: 'Roboto', sans-serif;
    color: #FFF;
  }
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
  background: #363732 !important;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-right: 30px;
  padding-left: 30px;
  box-shadow: 0px 0px 0px 0px !important;
  > h2 {
    font-family: 'Roboto', sans-serif;
    color: #FFF;
  }
`

export const LogOutButton = styled(button)`
  margin-bottom: 40px !important;
  margin-top: 40px !important;
`