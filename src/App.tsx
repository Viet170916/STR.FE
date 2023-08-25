import { useState } from 'react'

import './App.css'
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header userImgUrl={"https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"} slogan={"readBook"} placeholderSearchBar={"search"}/>
    </>

  )
}

export default App
