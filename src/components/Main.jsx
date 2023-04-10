import Card from "./Card"

export default function Main(props) {
  const { cards, shuffle} = props;
  return (
    <div className="card-grid">
      {
      cards.map((item,index) => <Card 
      key={item.n}
      id={index}
      number={item.n}
      src={item.src}
      handleClick={shuffle}/>)
      }
    </div>
  )
}