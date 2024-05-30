import './App.scss'
import SettingsMenu from './components/SettingsMenu/SettingsMenu'

const App = () => {
 

  return (
    <>
    <SettingsMenu onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />
    </>
  )
}

export default App
