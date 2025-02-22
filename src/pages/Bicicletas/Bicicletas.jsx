import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../../components/pageTransition/PageTransition";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Bicicletas.css";
import Nimbus from "../../assets/img/bicicletas/nimbus.jpg";
import Magic from "../../assets/img/bicicletas/magic.jpg";
import Nebula from "../../assets/img/bicicletas/nebula.jpg";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Carbono from "../../assets/img/icones/carbono.svg";
import Velocidade from "../../assets/img/icones/velocidade.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Bicicletas() {
  return (
    <PageTransition pageName="Bicicletas">
      <>
        <NavBar />
        <main>
          <motion.div
            className="titulo-bg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="titulo-container">
              <motion.p
                className="font-2-l-b cor-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Escolha a melhor pra você
              </motion.p>
              <motion.h1
                className="font-1-xxl cor-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Nossas Bicicletas <span className="cor-p1">.</span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="bicicletas-container"
            >
              <div className="bicicletas-imagem">
                <motion.img
                  src={Nimbus}
                  alt="Bicicleta Preta"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.span
                  className="font-2-n cor-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  r$4999
                </motion.span>
              </div>
              <div className="bicicletas-conteudo">
                <motion.h2 className="font-1-xl" variants={itemVariants}>
                  Nimbus Stark
                </motion.h2>
                <motion.p className="font-2-s cor-8" variants={itemVariants}>
                  A Nimbus Stark é a melhor Bikcraft já criada pela nossa
                  equipe. Ela vem equipada com os melhores acessórios, o que
                  garante maior velocidade
                </motion.p>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-1-m cor-8"
                >
                  {[
                    { icon: Eletrica, text: "Motor Elétrico" },
                    { icon: Carbono, text: "Fibra de Carbono" },
                    { icon: Velocidade, text: "50 km/h" },
                    { icon: Rastreador, text: "Rastreador" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      custom={index}
                    >
                      <img src={item.icon} alt="" />
                      {item.text}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={itemVariants}>
                  <Link className="Button setaa" to="/nimbus">
                    MAIS SOBRE
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bicicletas-bg">
              <div className="bicicletas-container">
                <div className="bicicletas-imagem">
                  <motion.img
                    src={Magic}
                    alt="Bicicleta Preta"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.span
                    className="font-2-n cor-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    r$2499
                  </motion.span>
                </div>
                <div className="bicicletas-conteudo">
                  <motion.h2
                    className="font-1-xl cor-0"
                    variants={itemVariants}
                  >
                    Magic Might
                  </motion.h2>
                  <motion.p className="font-2-s cor-5" variants={itemVariants}>
                    A Magic Might é a melhor Bikcraft já criada pela nossa
                    equipe. Ela vem equipada com os melhores acessórios, o que
                    garante maior velocidade
                  </motion.p>
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-1-m cor-5"
                  >
                    {[
                      { icon: Eletrica, text: "Motor Elétrico" },
                      { icon: Carbono, text: "Fibra de Carbono" },
                      { icon: Velocidade, text: "45 km/h" },
                      { icon: Rastreador, text: "Rastreador" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        custom={index}
                      >
                        <img src={item.icon} alt="" />
                        {item.text}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div variants={itemVariants}>
                    <Link className="Button setaa" to="/magic">
                      MAIS SOBRE
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bicicletas-container"
            >
              <div className="bicicletas-imagem">
                <motion.img
                  src={Nebula}
                  alt="Bicicleta Preta"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.span
                  className="font-2-n cor-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  r$3999
                </motion.span>
              </div>
              <div className="bicicletas-conteudo">
                <motion.h2 className="font-1-xl" variants={itemVariants}>
                  Nebula Cosmic
                </motion.h2>
                <motion.p className="font-2-s cor-8" variants={itemVariants}>
                  A Nebula é a melhor Bikcraft já criada pela nossa equipe. Ela
                  vem equipada com os melhores acessórios, o que garante maior
                  velocidade
                </motion.p>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-1-m cor-8"
                >
                  {[
                    { icon: Eletrica, text: "Motor Elétrico" },
                    { icon: Carbono, text: "Fibra de Carbono" },
                    { icon: Velocidade, text: "50 km/h" },
                    { icon: Rastreador, text: "Rastreador" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      custom={index}
                    >
                      <img src={item.icon} alt="" />
                      {item.text}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={itemVariants}>
                  <Link className="Button setaa" to="/nebula">
                    MAIS SOBRE
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </main>
        <Footer />
      </>
    </PageTransition>
  );
}

export default Bicicletas;
