
import './App.scss'
import SettingsMenu from './components/SettingsMenu/SettingsMenu'
import StockCard from './components/StockCard/StockCard'
import Todo from './components/Todo/Todo'
import Weather from './components/Weather/Weather'

const App = () => {
 

  return (
    <>
    <StockCard ticker='TSCO.LON' high='100' low={'50'} last_refresh='2024/02/24' change='-0.64' />
    <SettingsMenu/>
     <Weather initialLocation='Kuala Lumpur' />
     <Todo />
    </>
  )
}

export default App
