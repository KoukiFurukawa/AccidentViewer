import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import coordinateDate from './coordinate-date.json';
const width = 1000
const height = 400
const smallRects = 10

function App() {
  console.log(coordinateDate);

  const json = coordinateDate;
  let px = json.px
  let py = json.ly
  let lx = json.lx
  let ly = json.ly

  const [png, setPng] = useState<string | null>(null)

  useEffect(() => {
    const canvasElem = document.createElement('canvas')
    canvasElem.width = width
    canvasElem.height = height
    const ctx = canvasElem.getContext('2d')

    if (!ctx) {
      throw new Error('2D context could not be obtained. Your browser might not support it.');
    }

    // draw
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#f7f7f7'
    ctx.fillRect(0, 0, width, height)

    for (let i = 0; i < smallRects; i++) {
      const rectWidth = 75
      const rectHeight = 300
      const x = 150 * i
      const y = 50

      ctx.fillStyle = '#40c25c'
      ctx.fillRect(x, y, rectWidth, rectHeight)
    }

    const radius = 10
    const peplex = px //取得値入力予定地
    const pepley = py //取得値入力予定地

    ctx.beginPath()
    ctx.arc(peplex, pepley, radius, 0, Math.PI * 2)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.closePath()

    const lrWidth = 30
    const lrHeight =30
    const liftx = lx //取得値入力予定地
    const lifty = ly //取得値入力予定地

    ctx.fillStyle = '#0067C0'
    ctx.fillRect(liftx, lifty, lrWidth, lrHeight)

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
