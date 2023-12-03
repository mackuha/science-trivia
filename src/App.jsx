import { useState, useEffect } from "react"
import StartScreen from "./components/StartScreen"
import GameScreen from "./components/GameScreen"
import Footer from "./components/Footer"
import BackgroundBlobs from "./components/BackgroundBlobs"
import "./App.css"
import { nanoid } from "nanoid"
import { motion } from "framer-motion"

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [allQuestions, setAllQuestions] = useState([])
  const [resultsShown, setResultsShown] = useState(false)

  // Tally the score
  let scoreTally = 0
  allQuestions.forEach((item) => {
    item.chosenAnswer === item.correct_answer ? scoreTally++ : scoreTally
  })

  // Handle the start game function
  function handleGameStart() {
    setGameStarted(true)
  }

  //Transfer all questions into all questions array
  useEffect(() => {
    if (gameStarted) {
      fetch(
        "https://opentdb.com/api.php?amount=5&category=17&difficulty=medium",
      )
        .then((res) => res.json())
        .then((data) =>
          setAllQuestions(
            data.results.map((item) => {
              const wrongAnswers = item.incorrect_answers
              const randomIndex = Math.floor(
                Math.random() * (wrongAnswers.length + 1),
              )

              // Insert correct answer at random index position
              wrongAnswers.splice(randomIndex, 0, item.correct_answer)
              return {
                ...item,
                id: nanoid(),
                allChoices:
                  item.type !== "boolean" ? wrongAnswers : ["True", "False"],
                chosenAnswer: "",
              }
            }),
          ),
        )
    }
  }, [gameStarted])

  //Choose answer
  function chooseAnswer(answer, id) {
    setAllQuestions((prevQuestions) =>
      prevQuestions.map((item) =>
        item.id === id ? { ...item, chosenAnswer: answer } : item,
      ),
    )
  }

  //Show results
  function handleResults() {
    setResultsShown(true)

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 300)
  }

  //Restart Game
  function handleRestartGame() {
    setGameStarted(false)
    setAllQuestions([])
    setResultsShown(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="container mx-auto flex min-h-screen px-6 py-12">
        {!gameStarted ? (
          <StartScreen startGame={handleGameStart} />
        ) : (
          <GameScreen
            questions={allQuestions}
            resultsShown={resultsShown}
            scoreTally={scoreTally}
            handleChooseAnswer={chooseAnswer}
            showResults={handleResults}
            restartGame={handleRestartGame}
          />
        )}
      </main>
      <Footer />
      <BackgroundBlobs />
    </div>
  )
}

export default App
