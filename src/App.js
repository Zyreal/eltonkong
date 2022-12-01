import { BrowserRouter} from 'react-router-dom'

import ScrollToTop from './ScrollToTop'

import NavBar from './components/NavBar'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App;
