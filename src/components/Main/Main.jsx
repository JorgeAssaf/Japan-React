import { Routes, Route } from 'react-router'
import { Japan, Historia, Clima, Gobierno, Quehacer } from '../../pages/'
import './Main.scss'

function Main() {
  return (
    <main className="conteiner">
      <Routes>
        <Route path="/" element={<Japan />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/clima" element={<Clima />} />
        <Route path="/quehacer" element={<Quehacer />} />
        <Route path="/gobierno" element={<Gobierno />} />
      </Routes>
    </main>
  )
}

export default Main
