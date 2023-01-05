import './App.css'
import LoginPage from './pages/Login'
import HeaderBar from './components/organisms/HeaderBar'

function App() {
  return (
    <div className="bg-lightTheme dark:bg-darkTheme bg-cover">
      <HeaderBar></HeaderBar>
      <LoginPage></LoginPage>
    </div>
  )
}

export default App
