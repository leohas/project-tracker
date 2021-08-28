import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background: #363732;
`

export const HeaderDiv = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: #FFF;
  }
`

export const ContentDiv = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > p {
    font-size: 27px;
    text-align: center;
    text-justify: inter-word;
    margin: 40px 80px 80px 80px;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
  }
`