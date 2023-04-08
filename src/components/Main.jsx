import Card from "./Card"
import { useState } from 'react'

export default function Main() {
  const [cards, setCards] = useState([1,2,3,4,5,6,7,8,9])

  function handleClick(ev) {
    ev.stopPropagation()
    const {id} = ev.currentTarget
    console.log(id)
    
  }

  function shuffle() {
    let currentIndex = cards.length
    let randomize;
    let newArr = cards;
    while (currentIndex != 0) {
      randomize = Math.floor(Math.random() * currentIndex);
      currentIndex = currentIndex - 1;
      [newArr[currentIndex], newArr[randomize]] = [newArr[randomize],newArr[currentIndex]]
    }
    console.log(newArr)
    setCards(newArr)
  }
  
  return (
    <div className="card-grid">
      {cards.map((item,index) => <Card key={index} id={index} number={item} handleClick={shuffle}/>)
      }
    </div>
  )
}