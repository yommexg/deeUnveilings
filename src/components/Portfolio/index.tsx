import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div id="portfolio" className="md:px-8 px-4 pr-20 min-h-screen pt-[100px]">
      <div className="flex items-center gap-4 md:gap-10">
        <motion.h2
          className="font-[500] text-[20px] md:text-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.1 }}
        >
          Portfolio
        </motion.h2>
        <div className="flex-1 h-[3px] bg-[#D13D1F]" />
      </div>
    </div>
  );
};

export default Portfolio;
