import './App.css'
import LoginPage from './pages/Login'
import HeaderBar from './components/organisms/HeaderBar'
import useAppSelector from '@hooks/useAppSelector'
import Home from '@pages/Home'
import { getJwtToken } from '@common/utility/authToken'

function App() {
  const appUser = useAppSelector((state) => state.users)
  const savedToken = appUser.accessToken || getJwtToken()

  return (
    <div className="bg-lightTheme dark:bg-darkTheme bg-cover min-h-screen">
      <HeaderBar></HeaderBar>
      {savedToken ? <Home /> : <LoginPage></LoginPage>}
    </div>
  )
}

export default App
