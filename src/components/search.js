import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

export const Main = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:right;
  @media(max-width:480px) {
    width:100%;
    justify-content:center
  }
`
export const SearchBtn = styled.button`
  background:purple;
  color:white;
  border:1px solid purple
`

export const SearchInput = styled.input`
  padding:10px;
  border:1px solid dogerblue;
`


export default function Search() {
  const[searchValue, setSearchValue] = useState('');

  const handleOnClick = (e) => {
    
  }

  return(
      <Main>
          <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='text' placeholder='Search Watches...'></SearchInput>
          <SearchBtn onClick={handleOnClick}>Search</SearchBtn>
      </Main>
    )
}

