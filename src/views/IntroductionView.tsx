import { useStore } from '@/store'
import { FC, useState, useEffect} from 'react'
import reactLogo from '@/images/react.svg'
import muiLogo from '@/images/mui.png'
import viteLogo from '/vite.svg'

interface IProps { }

const IntroductionView: FC<IProps> = ({ }) => {
  const { counter, setCounter } = useStore()
  const [timeCounter, setTimeCounter] = useState<number>(0)
  useEffect(() => {
    function tick() {
      setTimeCounter((v) => v + 1)
    }
    const intervalTick = setInterval(tick, 1000)
    return () => {
      clearInterval(intervalTick)
    }
  }, [])
  return <>
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://mui.com/" target="_blank">
          <img src={muiLogo} className="logo react" alt="MUI logo" />
        </a>
      </div>
      <h1>Vite + React + MUI</h1>
      <div className="card">
        <button onClick={() => setCounter(counter + 1)}>
          count is {counter}
        </button>
        <div>Time pass: {timeCounter}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </>
}

export default IntroductionView
