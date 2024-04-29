import { useState } from "react"


function Fruit({name,id,price,fruits,setFruits}) {
    const [newName,setNewName] = useState("")
    function deleteFruit(){
        fetch(`http://localhost:3000/fruits/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            let remainings = fruits.filter(fruit => fruit.id !== id)
            setFruits(remainings)
        })
    }

    function updateFruit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/fruits/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name:newName})
        })
        .then(res => res.json())
        .then((data) => {
            let updatedFruits = fruits.map(fruit => {
                if(fruit.id === id) {
                    fruit.name = data.name
                }
                return fruit
            })
            setFruits(updatedFruits)
            setNewName("")
        })

    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Price: {price}</h2>
            <h4>Id: {id}</h4>
            <form onSubmit={updateFruit}>
                <input 
                    placeholder="New Name" 
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <button>Update Fruit</button>
            </form>
            <button onClick={deleteFruit}>Delete</button>
        </div>
    )
}

export default Fruit