import './App.scss'
import { LeftMenu, RightMenu, MainMenu } from './Containers/index'

function App() {
  return (
    <div className='app'>
      <LeftMenu />
      <MainMenu />
      <RightMenu />
      <div className='background'></div>
    </div>
  )
}

export default App
