import { motion } from "framer-motion"

function Footer() {
  return (
    <motion.p
      className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      Designed and coded by{" "}
      <a
        className="font-bold hover:text-yellow-300"
        href="https://github.com/mackuha?tab=repositories"
        target="_blank"
      >
        Marc Fernand Dimacuha
      </a>
    </motion.p>
  )
}

export default Footer
