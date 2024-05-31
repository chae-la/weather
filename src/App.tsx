import { FormEvent } from 'react'
import './App.scss'
import SettingsMenu from './components/SettingsMenu/SettingsMenu'
import Weather from './components/Weather/Weather'

const App = () => {
 

  return (
    <>
    
     <Weather initialLocation='Malaysia' />
    </>
  )
}

export default App
