import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../../components/pageTransition/PageTransition";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Seguros.css";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Carbono from "../../assets/img/icones/carbono.svg";
import Sustentavel from "../../assets/img/icones/sustentavel.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";
import Seguro from "../../assets/img/icones/seguro.svg";
import Velocidade from "../../assets/img/icones/velocidade.svg";

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

const answerVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

function Seguros() {
  const [perguntaAberta, setPerguntaAberta] = useState(0);

  const perguntas = [
    {
      question: "Qual forma de pagamento vocês aceitam?",
      answer:
        "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.",
    },
    {
      question: "Como posso entrar em contato?",
      answer:
        "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.",
    },
    {
      question: "Vocês possuem algum desconto?",
      answer:
        "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.",
    },
    {
      question: "Qual a garantia que possuo?",
      answer:
        "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.",
    },
    {
      question: "Posso parcelar no boleto?",
      answer:
        "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.",
    },
    {
      question: "Quantas trocas posso fazer ao ano?",
      answer:
        "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.",
    },
  ];

  return (
    <PageTransition pageName="Seguros">
      <>
        <NavBar />
        <main className="seguros-bg">
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
                Escolha o seguro
              </motion.p>
              <motion.h1
                className="font-1-xxl cor-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                você seguro <span className="cor-p1">.</span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            className="seguros-containerPAGE"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="seguros-item" variants={itemVariants}>
              <h3 className="font-1-xl cor-6">PRATA</h3>
              <span className="font-1-xl cor-0">
                R$ 199 <span className="font-1-xs cor-6">mensal</span>
              </span>
              <ul className="font-2-m cor-0">
                <motion.li variants={itemVariants}>
                  Duas trocas por ano
                </motion.li>
                <motion.li variants={itemVariants}>
                  Assistência técnica
                </motion.li>
                <motion.li variants={itemVariants}>
                  Suporte 08h às 18h
                </motion.li>
                <motion.li variants={itemVariants}>
                  Cobertura estadual
                </motion.li>
              </ul>
              <motion.a
                className="Button secundario"
                href="./orcamento"
                variants={itemVariants}
              >
                Inscreva-se
              </motion.a>
            </motion.div>

            <motion.div className="seguros-item" variants={itemVariants}>
              <h3 className="font-1-xl cor-p1">OURO</h3>
              <span className="font-1-xl cor-0">
                R$ 299 <span className="font-1-xs cor-6">mensal</span>
              </span>
              <ul className="font-2-m cor-0">
                <motion.li variants={itemVariants}>
                  Cinco trocas por ano
                </motion.li>
                <motion.li variants={itemVariants}>
                  Assistência especial
                </motion.li>
                <motion.li variants={itemVariants}>Suporte 24h</motion.li>
                <motion.li variants={itemVariants}>
                  Cobertura nacional
                </motion.li>
                <motion.li variants={itemVariants}>
                  Desconto em parceiros
                </motion.li>
                <motion.li variants={itemVariants}>
                  Acesso ao Clube Bikcraft
                </motion.li>
              </ul>
              <motion.a
                className="Button"
                href="./orcamento"
                variants={itemVariants}
              >
                Inscreva-se
              </motion.a>
            </motion.div>
          </motion.div>
        </main>

        <motion.article
          className="vantagens-bg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="vantagens-container">
            <motion.h2
              className="font-1-xxl cor-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              vantagens <span className="cor-p1">.</span>
            </motion.h2>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Eletrica,
                  title: "Reparo Elétrico",
                  description:
                    "Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.",
                },
                {
                  icon: Carbono,
                  title: "Carbono",
                  description:
                    "Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.",
                },
                {
                  icon: Sustentavel,
                  title: "Sustentável",
                  description:
                    "Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.",
                },
                {
                  icon: Rastreador,
                  title: "Rastreador",
                  description:
                    "Utilizamos o GPS da sua Bikcraft em conjunto com especialistas em segurança para efetuarmos a recuperação.",
                },
                {
                  icon: Seguro,
                  title: "Segurança",
                  description:
                    "Com o seguro Bikcraft você pode ficar tranquilo em saber que o seu dinheiro não será perdido em casos de roubo.",
                },
                {
                  icon: Velocidade,
                  title: "Rapidez",
                  description:
                    "A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.",
                },
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <img src={item.icon} alt="" />
                  <h3 className="font-1-l cor-0">{item.title}</h3>
                  <p className="font-2-s cor-5">{item.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.article>

        <motion.article
          className="perguntas"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-1-xxl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            perguntas frequentes<span className="cor-p1">.</span>
          </motion.h2>

          <motion.dl
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {perguntas.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={perguntaAberta === index ? "ativa" : ""}
              >
                <dt
                  className="font-1-m-b"
                  onClick={() =>
                    setPerguntaAberta(perguntaAberta === index ? -1 : index)
                  }
                >
                  <motion.div
                    className="pergunta-header"
                    initial={false}
                    animate={{
                      backgroundColor:
                        perguntaAberta === index
                          ? "var(--cor-1)"
                          : "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.question}
                    <motion.span
                      className="seta"
                      initial={false}
                      animate={{
                        rotate: perguntaAberta === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </dt>
                <AnimatePresence>
                  {perguntaAberta === index && (
                    <motion.dd
                      className="font-2-s cor-9"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={answerVariants}
                    >
                      {item.answer}
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.dl>
        </motion.article>

        <Footer />
      </>
    </PageTransition>
  );
}

export default Seguros;
