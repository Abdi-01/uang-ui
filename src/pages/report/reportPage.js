import styled from 'styled-components'

export const MenuWrapper = styled.div`
    background-color: #f5f5f5;
    height: 100vh;
    width: 100vw;
    display: flex;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 1180px;
    padding: 0 30px;
`

export const DateFilter = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;
    width: 100%;
`

export const ContentContainer = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    border: 1px solid grey;
    margin-top: 20px;
`

export const SearchBar = styled.div`
    width: 280px;
    min-width: 280px;
    margin-right: 16px;
    position: absolute;
    display: flex;
    flex-direction: column;
`

export const SearchResult = styled.div`
    width: calc(100% - 296px);
    margin-left: 296px;
    border: 1px solid blue;
`