import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './Components/Common'
import { DefaultLayout } from './Components/Layout/Index'
import Login from './features/Auth/Login/Login'
import GlobalStyle from "./GlobalStyle/GlobalStyle"

const App = () => {
 
  return (
    <GlobalStyle>
      <Routes>
        <Route path='login' element={<Login />}/>
        <Route path='/' exact element={<DefaultLayout />}/>
      </Routes>
    </GlobalStyle>

  )
}

export default App