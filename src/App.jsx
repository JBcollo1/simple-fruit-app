import { useEffect, useState } from 'react'
import './App.css'
import FruitsList from './FruitsList'

function App() {
  const [fruits,setFruits] = useState([])
  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)
  useEffect(()=> {
    fetch("http://localhost:3000/fruits")
    .then(res => res.json())
    .then(data => setFruits(data))
  },[])

  function addFruit(e) {
    e.preventDefault()
    let newFruit = {name:name,price:price}
    fetch("http://localhost:3000/fruits",{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body:JSON.stringify(newFruit)
    })
    .then(res => res.json())
    .then(fruit => {
      let newFruits = [...fruits,fruit]
      setFruits(newFruits)
      setName("")
      setPrice(0)
    })
  }

  return (
    <>
      <div>
        <FruitsList fruits = {fruits} setFruits={setFruits}/>
        <form onSubmit={addFruit}>
          <input
            type='text'
            placeholder='Fruit Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type='number'
            placeholder='Fruit Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button>Add Fruit</button>
        </form>
      </div>
    </>
  )
}

export default App
