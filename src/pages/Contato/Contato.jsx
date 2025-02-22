import React from "react";
import { motion } from "framer-motion";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/pageTransition/PageTransition";
import instagramP from "../../assets/img/redes/instagram-p.svg";
import facebookP from "../../assets/img/redes/facebook-p.svg";
import youtubeP from "../../assets/img/redes/youtube-p.svg";
import mapa from "../../assets/img/lojas/rj.jpg";
import mapaSP from "../../assets/img/lojas/sp.jpg";
import horario from "../../assets/img/icones/horario.svg";
import "./Contato.css";

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

function Contato() {
  return (
    <PageTransition pageName="Contato">
      <>
        <NavBar />
        <main className="contatin">
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
                Respostas em até 24h
              </motion.p>
              <motion.h1
                className="font-1-xxl cor-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                nosso contato <span className="cor-p1">.</span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            className="contato-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.section
              className="contato-dados"
              aria-label="Endereço"
              variants={itemVariants}
            >
              <motion.h2 className="font-1-m cor-0" variants={itemVariants}>
                Loja Online
              </motion.h2>
              <motion.div
                className="contato-endereco font-2-s cor-4"
                variants={itemVariants}
              >
                <p>Rua Ali Perto, 35</p>
                <p>Belo Horizonte - MG</p>
                <p>Brasil - Terra - Vita Láctea</p>
              </motion.div>
              <motion.address
                className="contato-meios font-2-s cor-4"
                variants={itemVariants}
              >
                <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
                <a href="mailto:assistencia@bikcraft.com">
                  assistencia@bikcraft.com
                </a>
                <a href="tel:+55219999999">+55 21 9999-9999</a>
              </motion.address>

              <motion.div
                className="contato-redes"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: instagramP, link: "./" },
                  { icon: facebookP, link: "./" },
                  { icon: youtubeP, link: "./" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    variants={itemVariants}
                  >
                    <img src={social.icon} alt="" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              className="contato-formulario"
              aria-label="Formulário"
              variants={itemVariants}
            >
              <motion.form
                className="form"
                action="./contato"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  {
                    label: "Nome",
                    type: "text",
                    id: "nome",
                    placeholder: "Seu nome",
                  },
                  {
                    label: "Telefone",
                    type: "text",
                    id: "telefone",
                    placeholder: "(21) 9999-9999",
                  },
                  {
                    label: "Email",
                    type: "email",
                    id: "email",
                    placeholder: "contato@email.com",
                    className: "col-2",
                  },
                  {
                    label: "Mensagem",
                    type: "textarea",
                    id: "mensagem",
                    placeholder: "o que você precisa?",
                    className: "col-2",
                    rows: 5,
                  },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    className={field.className}
                    variants={itemVariants}
                  >
                    <label htmlFor={field.id}>{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        rows={field.rows}
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        placeholder={field.placeholder}
                      />
                    )}
                  </motion.div>
                ))}
                <motion.button className="Button col-2" variants={itemVariants}>
                  Enviar Mensagem
                </motion.button>
              </motion.form>
            </motion.section>
          </motion.div>
        </main>

        <article className="lojas-container">
          <h2 className="font-1-xxl">
            lojas locais <span className="cor-p1">.</span>
          </h2>

          <div className="lojas-items-container">
            {[
              {
                image: mapa,
                alt: "Mapa marcando o endereço em Rua Ali Perto 25 Rio de Janeiro RJ",
                city: "Rio de Janeiro",
                address: ["Rua Ali Perto, 25", "Rio de Janeiro"],
                email: "rj@bikcraft.com",
                phone: "+55 21 9999-9999",
              },
              {
                image: mapaSP,
                alt: "Mapa marcando o endereço em Rua Ali Perto 25 São Paulo - SP",
                city: "São Paulo",
                address: ["Rua Ali Perto, 25", "São Paulo"],
                email: "sp@bikcraft.com",
                phone: "+55 11 9999-9999",
              },
            ].map((store, index) => (
              <div key={index} className="lojas-item">
                <img src={store.image} alt={store.alt} />
                <div className="lojas-conteudo">
                  <h3 className="font-1-xl">{store.city}</h3>
                  <div className="lojas-dados font-2-s cor-8">
                    {store.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="lojas-dados font-2-s cor-8">
                    <a href={`mailto:${store.email}`}>{store.email}</a>
                    <a href={`tel:${store.phone}`}>{store.phone}</a>
                  </div>
                  <p className="lojas-tempo font-1-s">
                    <img src={horario} alt="" /> 08-18h de seg à dom
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <Footer />
      </>
    </PageTransition>
  );
}

export default Contato;
