import { useState } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import './styles/index.css'
function App() {
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
  const [score, setScore] = useState({score: 0, bestScore: 0})

  function selectCard(id) {
    const newArr = cards.map((item, index) => {
      if(index == id) {
        if(item.clicked) {
          setScore({...score, score: 0, bestScore: score.score })
          setCards(cards.map(item => item.clicked = false))
        } else {
          setScore({...score, score: score.score + 1})
          item.clicked = true;
        }
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
    <>
    <Nav score={score.score} bestScore={score.bestScore}/>
    <Main cards={cards} shuffle={shuffle}/>
    </>
  )
}

export default App
