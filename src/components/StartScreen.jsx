import logo from "../assets/logo-tt.svg"
import { motion } from "framer-motion"

function StartScreen(props) {
  return (
    <div className="flex w-full flex-col items-center justify-center self-center justify-self-center text-center">
      <motion.img
        className="mx-auto w-96 lg:w-[500px]"
        src={logo}
        alt="Science Trivia logo"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="mt-4 max-w-2xl md:text-lg"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Dive into a world of trivia fun with our app that's designed to tickle
        your brain cells and keep you entertained.
      </motion.p>
      <motion.button
        className="btn mt-8 animate-bounce"
        onClick={props.startGame}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Start quiz!
      </motion.button>
    </div>
  )
}

export default StartScreen
