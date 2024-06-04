
import './App.scss'
import SettingsMenu from './components/SettingsMenu/SettingsMenu'
import Todo from './components/Todo/Todo'
import Weather from './components/Weather/Weather'

const App = () => {
 

  return (
    <>
    
     <Weather initialLocation='Kuala Lumpur' />
     <Todo />
    </>
  )
}

export default App
