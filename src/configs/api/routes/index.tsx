import LoginPage from '@pages/Login'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  }
])

export default router