import styled from 'styled-components'
import paper from '@material-ui/core/Paper'

export const PaperProject = styled(paper) <any>`
    background: ${({ index }: any) => Boolean(index % 2) ? '#a08a8a21' : '#EFE9E7'} !important;
    display: flex;
    flex-direction: column;
    margin: 30px 300px;
    padding: 30px;
    width: 100%;
`

export const PaperName = styled.h1`
    align-self: center;
    font-family: Roboto, sans-serif;
`

export const PaperDescription = styled.h2`
    font-family: Roboto, sans-serif;
    font-weight: 400;
`

export const PaperStatus = styled.h2<any>`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    color: ${({ status }: any) => status === 'Active' ? '#6CAE75' : '#E84855'};
`