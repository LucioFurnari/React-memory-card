export default function Card(props) {
  const {number, handleClick, id} = props
  return (
    <div className="card" onClick={handleClick} id={id}>
      <p>{number}</p>
    </div>
  )
}