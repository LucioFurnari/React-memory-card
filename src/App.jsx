import { useState } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import './styles/index.css'
function App() {
  const [cards, setCards] = useState([
    {n:1, clicked: false, src: './src/assets/images/Finn_with_bionic_arm-0.webp'},
    {n:2, clicked: false, src: './src/assets/images/BMO.webp'},
    {n:3, clicked: false, src: './src/assets/images/Bronwyn_Current_Design.webp'},
    {n:4, clicked: false, src: './src/assets/images/1ATLadyRainicornLook.webp'},
    {n:5, clicked: false, src: './src/assets/images/Jakesalad.webp'},
    {n:6, clicked: false, src: './src/assets/images/Lumpy_Space.webp'},
    {n:7, clicked: false, src: './src/assets/images/Marceline1.webp'},
    {n:8, clicked: false, src: './src/assets/images/Princess_Bubblegum.webp'},
    {n:9, clicked: false, src: './src/assets/images/Young_Ice_King_without_crown.webp'},
  ])
  const [score, setScore] = useState({score: 0, bestScore: 0})

  function selectCard(id) {
    const newArr = cards.map((item, index) => {
      if(index == id) {
        if(item.clicked) {
          setScore({...score, score: 0,
            bestScore: score.bestScore > score.score ?
              score.bestScore :
              score.score})
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
