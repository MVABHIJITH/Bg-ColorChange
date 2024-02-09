import { useState } from 'react'
import './App.css'

function App() {
  const [bagcolor, setBgColor] = useState("rgb(0, 0, 0)")

  const changeColor = (color) => {
    setBgColor(color)

  }
  return (
    <>
      <div style={{ width: "100%", height: "100vh", backgroundColor: bagcolor }}>

        <h1 className='text-center text-white p-5'>BACKGROUND COLOR CHANGE</h1>

        <div className='d-flex justify-content-center align-items-center mt-5'>
          <button onClick={() => changeColor('blue')} type="button" class="btn btn-primary ">BLUE</button>
          <button onClick={() => changeColor('green')} type="button" class="btn btn-success ms-3">GREEN</button>
          <button onClick={() => changeColor('red')} type="button" class="btn btn-danger ms-3">RED</button>
          <button onClick={() => changeColor('yellow')} type="button" class="btn btn-warning ms-3">YELLOW</button>

        </div>
      </div>

    </>
  )
}

export default App
