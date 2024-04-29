import Fruit from "./Fruit";

function FruitsList({fruits,setFruits}) {

    return (
        <>
            {fruits.map(fruit => (
                <Fruit 
                key={fruit.id} 
                id={fruit.id} 
                name={fruit.name} 
                price={fruit.price} 
                fruits={fruits} 
                setFruits={setFruits}/>
            ))}
        </>
    )
}

export default FruitsList;