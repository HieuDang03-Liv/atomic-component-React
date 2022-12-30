import { Fragment } from 'react'
import './App.css'
import LoginPage from './pages/Login'
import DropDown from './components/molecules/DropDown'

function App() {
  return (
    <Fragment>
      <LoginPage></LoginPage>
      <DropDown></DropDown>
    </Fragment>
  )
}

export default App
