import { Fragment } from 'react'
import './App.css'
import LoginPage from './pages/Login'
import HeaderBar from './components/organisms/HeaderBar'

function App() {
  return (
    <Fragment>
      <HeaderBar></HeaderBar>
      <LoginPage></LoginPage>
    </Fragment>
  )
}

export default App
