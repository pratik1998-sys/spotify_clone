import './App.css'
import { LeftMenu, RightMenu, MainMenu } from './Containers/index'

function App() {
  return (
    <div className='App'>
      <LeftMenu />
      <MainMenu />
      <RightMenu />
      <div className='background'></div>
    </div>
  )
}

export default App
