export default function Nav(props) {
  const { score, bestScore } = props;
  return (
    <nav>
      <h1>Memory Card</h1>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <div className="score-table">
        <span>Score: {score}</span>
        <span>Best score: {bestScore}</span>
      </div>
    </nav>
  )
}