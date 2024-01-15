import {Routes, Route} from 'react-router-dom'
import CreateAccount from './auth/CreateAccount'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<CreateAccount/>} />

    </Routes>
  )
}

export default index