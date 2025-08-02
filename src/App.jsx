import { useState } from 'react'
import Todo from './components/Todo'
import Newtodo from './components/Newtodo'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

 return(
  <>
  {/* <h1 className='text-bold text-6xl bg-black px-10 py-28 py-4 text-pink-500'>"helllo good morining how's going "</h1> */}
  <Todo/>
  {/* <Newtodo/> */}
  
  </>
 )
}

export default App
