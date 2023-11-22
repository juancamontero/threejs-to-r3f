// import { useState } from "react"
import { Materials } from './worlds'

function App() {
  // const [showBanner, setShowBanner] = useState<boolean>(false)
  return (
    <>
      <main className='app'>
        <section className='hero'>
          <p>To implement some react</p>
          {/* <div className='btns-div'>
            <button onClick={() => setShowBanner(!showBanner)}>
              {!showBanner ? 'Hide' : 'Show'}
            </button>
          </div>

          {!showBanner && (
            <div className='btns-div'>
             <h2>Other info</h2>
            </div>
          )}
     
          {currentScene === 2 && <h3>Double click to enter portal</h3>} */}
        </section>
      </main>
      {/* <Geometries/> */}
      <Materials />
    </>
  )
}

export default App
