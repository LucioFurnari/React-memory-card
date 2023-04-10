export default function Nav(props) {
  const { score, bestScore } = props;
  return (
    <nav>
      <div>
      <h1>Memory Card</h1>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>
      <div className="score-table">
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
      </div>
    </nav>
  )
}