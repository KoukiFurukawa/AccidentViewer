import { useEffect, useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const width =1000
const height =400
const smallRects = 10
const smallCircles = 15

function App() {
  const [png, setPng] = useState<string | null>(null)

  useEffect(() => {
    const canvasElem = document.createElement('canvas')
    canvasElem.width = width
    canvasElem.height = height
    const ctx = canvasElem.getContext('2d')

    // draw

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#f7f7f7'
    ctx.fillRect(0, 0, width, height)

    for (let i = 0; i < smallRects; i++ ) {
      const rectWidth = 75
      const rectHeight = 300
      const x = 150 * i
      const y = 50

      ctx.fillStyle = '#40c25c'
      ctx.fillRect(x, y, rectWidth, rectHeight)
    }

    const radius = 10
    const peplex = 30
    const pepley = 30

    ctx.beginPath()
    ctx.arc(peplex, pepley, radius, 0, Math.PI * 2)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.closePath()

    setPng(canvasElem.toDataURL())
  }, [])

  return (
    <div>
      <h1>全体マップ</h1>
      <h4>生成</h4>
      {png && (
        <div className="comp" style={{ display: 'flex' }}>
          <img alt="icon" src={png} />
        </div>
      )}
    </div>
  )
}

export default App
