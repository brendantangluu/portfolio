import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import { ThemeProvider } from './DarkModeContext.jsx/ThemeContext'

function App() {
  const restBase = 'https://btech.codes/portfolio/wp-json/wp/v2/'
  return (
    <ThemeProvider>
      <Router>
        <main className='font-inter bg-[#18181b] h-dvh' id="main">
          <Routes>
              <Route path='/' element={<Home restBase={restBase} />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
