import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ThemeProvider } from './DarkModeContext.jsx/ThemeContext'
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home'
import Hero from './pages/Hero';

function App({hero, home}) {
  const restBase = 'https://btech.codes/portfolio/wp-json/wp/v2/'
  return (
    <AnimatePresence>
      <ThemeProvider>
        <Router>
          <main id="main">
            <Routes>
                <Route key = {hero} path='/' element={<Hero restBase = {restBase}/>}/>
                <Route key = {home} path='/home' element={<Home restBase={restBase} />} />
            </Routes>
          </main>
        </Router>
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default App
