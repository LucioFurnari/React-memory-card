export default function Card(props) {
  const {number, handleClick, id, src} = props
  return (
    <div className="card" onClick={handleClick} id={id}>
      <p>{number}</p>
      <img src={src}></img>
    </div>
  )
}