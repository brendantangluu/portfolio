import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import { ThemeProvider } from './DarkModeContext.jsx/ThemeContext'
import Hero from './pages/Hero';
import { AnimatePresence } from 'framer-motion';

function App({hero, home}) {
  const restBase = 'https://btech.codes/portfolio/wp-json/wp/v2/'
  return (
    <AnimatePresence>
      <ThemeProvider>
        <Router basename="/">
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
