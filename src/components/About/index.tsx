import { motion } from "framer-motion";

const about1 = new URL("../../assets/about1.png", import.meta.url).href;
const about2 = new URL("../../assets/about2.png", import.meta.url).href;

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex justify-ceter items-end flex-col md:px-8 px-4 pr-20  md:pt-[350px] md:pb-[150px]"
    >
      <div className="w-full flex flex-row items-center justify-between gap-4 md:gap-10 relative">
        {/* Animated Image 1 */}
        <motion.img
          src={about1}
          className="hidden md:w-[300px] md:block absolute md:left-[100px] top-[-120px]"
          initial={{ opacity: 0, y: -50 }} // Animation starts here
          animate={{ opacity: 1, y: 0 }} // Animation ends here
          transition={{ duration: 1.6, delay: 0.2 }} // Control duration and delay
        />

        {/* Animated Image 2 */}
        <motion.img
          src={about2}
          className="hidden md:block md:w-[450px] absolute bottom-[-17px] md:left-[300px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        />

        {/* Horizontal Line */}
        <div className="flex-1 h-[3px] bg-[#D13D1F]" />

        {/* About Us Heading */}
        <motion.h2
          className="font-[500] text-[20px] md:text-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.6 }}
        >
          About Us
        </motion.h2>
      </div>

      {/* Animated Paragraph */}
      <motion.p
        className="max-w-[500px] mt-5 text-[#FFFFFFB2] text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.8 }}
      >
        Lorem ipsum dolor sit amet consectetur. Elementum quis vitae ornare
        neque eu lobortis. Maecenas pellentesque risus sit dui turpis lacus
        aliquet viverra lectus. Porta ultricies enim proin justo ultrices ut
        ipsum sit. Lectus elementum malesuada cras tristique habitant hac in. Ac
        et vitae sed cursus cras. Lorem ipsum dolor sit amet consectetur.
        Elementum quis vitae ornare neque eu lobortis. Maecenas pellentesque
        risus sit dui turpis lacus aliquet viverra lectus. Porta ultricies enim
        proin justo ultrices ut ipsum.
      </motion.p>
    </div>
  );
};

export default About;
