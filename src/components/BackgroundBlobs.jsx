import blob1 from "../assets/blob-1.svg"
import blob2 from "../assets/blob-2.svg"
import blob3 from "../assets/blob-3.svg"
import blob4 from "../assets/blob-4.svg"
import { motion } from "framer-motion"

function BackgroundBlobs() {
  return (
    <>
      <motion.img
        src={blob1}
        alt="Background blob image"
        className="absolute left-0 top-0 -z-50 -translate-x-1/2 -translate-y-1/2 opacity-5 lg:left-32 lg:w-[550px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={blob2}
        alt="Background blob image"
        className="absolute bottom-0 right-0 -z-50 translate-x-1/2 translate-y-1/2 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.img
        src={blob3}
        alt="Background blob image"
        className="absolute bottom-64 left-0 -z-50 w-40 -translate-x-1/2 opacity-5 lg:bottom-48 lg:w-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.img
        src={blob4}
        alt="Background blob image"
        className="absolute right-8 top-0 -z-50 w-24 translate-y-24 opacity-5 lg:w-40 lg:-translate-x-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      />
    </>
  )
}

export default BackgroundBlobs
