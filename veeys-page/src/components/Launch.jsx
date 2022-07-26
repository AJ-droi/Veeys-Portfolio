import React, { useContext } from 'react'
import { Background} from '../styles/Launch'
import { ThemeProvider } from 'styled-components'
import { AppContext, useGlobalContext } from '../context'


const Launch = () => {
 
  return (
    <Background  place="center" display="grid">
      <h1>V</h1>
    </Background>
  )
}

export default Launch