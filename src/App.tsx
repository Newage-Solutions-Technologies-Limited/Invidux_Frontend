import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TokenHolders from './pages/tokenHolders/index'
import PageNotFound from './pages/home/PageNotFound'


function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Modules */}
        <Route path="/token-holders/*" element={<TokenHolders/>} />
        {/* Not Found Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
