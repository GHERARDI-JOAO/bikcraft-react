import React from "react";
import { motion } from "framer-motion";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/pageTransition/PageTransition";
import "./Termos.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

function Termos() {
  return (
    <PageTransition pageName="Termos">
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
                transition={{ delay: 0.2 }}
              >
                Termos de Uso
              </motion.p>
              <motion.h1
                className="font-1-xxl cor-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Termos e Condições <span className="cor-p1">.</span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            className="termos-container font-2-s cor-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "1. Política de Estorno",
                paragraphs: [
                  "1.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.",
                  "1.2 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.",
                  "1.3 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.",
                ],
              },
              {
                title: "2. Conta do Usuário",
                paragraphs: [
                  "2.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.",
                ],
              },
              {
                title: "3. Seguro Bikcraft",
                paragraphs: [
                  "3.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.",
                ],
              },
            ].map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.h2 className="font-1-l cor-11" variants={itemVariants}>
                  {section.title}
                </motion.h2>
                {section.paragraphs.map((paragraph, i) => (
                  <motion.p key={i} variants={itemVariants}>
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </main>
        <Footer />
      </>
    </PageTransition>
  );
}

export default Termos;
