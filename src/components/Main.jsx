import Card from "./Card"
import { useEffect, useState } from 'react'

export default function Main() {
  const [cards, setCards] = useState([
    {n:1, clicked: false},
    {n:2, clicked: false},
    {n:3, clicked: false},
    {n:4, clicked: false},
    {n:5, clicked: false},
    {n:6, clicked: false},
    {n:7, clicked: false},
    {n:8, clicked: false},
    {n:9, clicked: false},
  ])

  function selectCard(id) {
    const newArr = cards.map((item, index) => {
      if(index == id) {
        item.clicked = true;
      }
      return item
    })
    setCards(newArr)
  }

  function shuffle(ev) {
    ev.stopPropagation()
    const { id } = ev.currentTarget
    console.log(ev.currentTarget)
    selectCard(id)
    let currentIndex = cards.length
    let randomize;
    let newArr = cards.slice();
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
      {
      cards.map((item,index) => <Card key={item.n} id={index} number={item.n} handleClick={shuffle}/>)
      }
    </div>
  )
}