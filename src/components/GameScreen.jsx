import logo from "../assets/logo-tt.svg"
import { nanoid } from "nanoid"
import { decode } from "html-entities"
import { gifs } from "../gifs"
import { motion } from "framer-motion"

function GameScreen(props) {
  const allQuestionsAnswered = props.questions.every(
    (item) => item.chosenAnswer,
  )

  const questionElements = props.questions.map((item) => {
    return (
      <div key={nanoid()} className="py-8">
        <h3>{decode(item.question)}</h3>
        <ul className="mt-4 flex flex-wrap gap-2 font-bold [&>*]:cursor-pointer [&>*]:rounded-lg  [&>*]:px-4 [&>*]:py-1 [&>*]:shadow-lg [&>*]:transition ">
          {item.allChoices.map((choice) => {
            let styles

            if (props.resultsShown && choice === item.correct_answer) {
              styles = "bg-green-500 text-white pointer-events-none"
            } else if (
              props.resultsShown &&
              choice !== item.correct_answer &&
              choice === item.chosenAnswer
            ) {
              styles = "bg-red-500 text-white opacity-30 pointer-events-none"
            } else if (props.resultsShown) {
              styles = "bg-stone-700 opacity-30 pointer-events-none"
            } else if (choice === item.chosenAnswer) {
              styles = "bg-yellow-100 text-yellow-950"
            } else {
              styles =
                "hover:-translate-y-1 bg-stone-700 hover:bg-yellow-100 hover:text-yellow-950"
            }

            return (
              <li
                key={nanoid()}
                className={styles}
                onClick={() => props.handleChooseAnswer(choice, item.id)}
              >
                {decode(choice)}
              </li>
            )
          })}
        </ul>
      </div>
    )
  })

  //Generate random message based on scores
  const randomMessage = Math.floor(
    Math.random() * gifs[props.scoreTally].length,
  )
  const resultMsgObject = gifs[props.scoreTally][randomMessage]
  const resultMsgText = resultMsgObject.text
  const resultMsgImg = resultMsgObject.img

  return (
    <div className="mx-auto w-full max-w-xl pb-6">
      <motion.img
        className="mx-auto mb-10 w-80"
        src={logo}
        alt="Science Trivia logo"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      />
      {props.resultsShown && (
        <motion.div
          className="flex flex-col items-center gap-6 rounded-2xl bg-stone-950 p-8 shadow-lg shadow-stone-950 md:flex-row"
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            className="h-48 w-full rounded-xl object-cover sm:w-3/4 md:h-44 md:w-1/2"
            src={resultMsgImg}
            alt=""
          />
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="text-3xl font-extrabold">
              You scored{" "}
              <span className="text-yellow-300">{props.scoreTally}/5</span>
            </h3>
            <p className="mt-2">{resultMsgText}</p>
            <button className="btn mt-6 w-full" onClick={props.restartGame}>
              Play again!
            </button>
          </div>
        </motion.div>
      )}
      <motion.div
        className="mt-4 [&>*:not(:last-child)]:border-b-[1px] [&>*:not(:last-child)]:border-b-stone-800"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {questionElements}
      </motion.div>
      {allQuestionsAnswered && !props.resultsShown && (
        <motion.button
          className="btn mt-6 animate-bounce md:ml-auto"
          onClick={props.showResults}
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          Submit answers
        </motion.button>
      )}
    </div>
  )
}

export default GameScreen
