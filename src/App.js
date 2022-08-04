import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router'
import styled from 'styled-components'
import Home from './pages/Home'
import KnowNow from './pages/Know_Now'
import ONas from './pages/O_Nas'
import Kontakt from './pages/Kontakt'
import Blog from './pages/Blog'

const navLinks = [
  { id: '1', label: 'KNOW-HOW', path: 'know-now' },
  { id: '2', label: 'O NAS', path: 'o-nas' },
  { id: '3', label: 'BLOG', path: 'blog' },
  { id: '4', label: 'KONTAKT', path: 'kontact' },
]

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`

function App() {
  return (
    <PageWrapper>
      <Header links={navLinks} />
      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="know-now" element={<KnowNow />} />
          <Route path="o-nas" element={<ONas />} />
          <Route path="blog" element={<Blog />} />
          <Route path="kontact" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </PageWrapper>
  )
}

export default App
