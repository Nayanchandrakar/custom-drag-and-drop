import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Drag from "./drag/Drag"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Drag />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
