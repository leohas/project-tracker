import styled from 'styled-components'
import paper from '@material-ui/core/Paper'

export const PaperLogin = styled(paper)`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #363732 !important;
`

export const PaperHeader = styled(paper)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 0px 0px !important;
  background: #363732 !important;

  > h1 {
    margin-top: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: #FFF;
  }
`

export const PaperContent = styled(paper)`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: 0px 0px 0px 0px !important;
background: #363732 !important;

> p {
    font-size: 27px;
    text-align: center;
    text-justify: inter-word;
    margin: 40px 80px 80px 80px;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
  }
`