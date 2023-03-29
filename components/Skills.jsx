import { motion } from "framer-motion";
import css3 from "../public/assets/iconos sin fondo/CSS3-removebg-preview.png";
import express from "../public/assets/iconos sin fondo/expressjs-removebg-preview.png";
import firebase from "../public/assets/iconos sin fondo/firebase-removebg-preview.png";
import github from "../public/assets/iconos sin fondo/github.png";
import html5 from "../public/assets/iconos sin fondo/HTML5-removebg-preview.png";
import js from "../public/assets/iconos sin fondo/JS-removebg-preview.png";
import mongoDb from "../public/assets/iconos sin fondo/mongoDB-removebg-preview.png";
import mongoose from "../public/assets/iconos sin fondo/mongoose-removebg-preview.png";
import mySQL from "../public/assets/iconos sin fondo/mysql-removebg-preview.png";
import nestJs from "../public/assets/iconos sin fondo/nestjs-removebg-preview.png";
import nextJs from "../public/assets/iconos sin fondo/nextjs-removebg-preview.png";
import node from "../public/assets/iconos sin fondo/nodejs-removebg-preview.png";
import passportJs from "../public/assets/iconos sin fondo/passport-removebg-preview.png";
import postgreSQL from "../public/assets/iconos sin fondo/postgreSQL-removebg-preview.png";
import reactNative from "../public/assets/iconos sin fondo/reactNative-removebg-preview.png";
import react from "../public/assets/iconos sin fondo/react-removebg-preview.png";
import redux from "../public/assets/iconos sin fondo/redux-removebg-preview.png";
import sass from "../public/assets/iconos sin fondo/sass-removebg-preview.png";
import SCRUM from "../public/assets/iconos sin fondo/SCRUM-removebg-preview.png";
import sequelize from "../public/assets/iconos sin fondo/sequelize-removebg-preview.png";
import sql from "../public/assets/iconos sin fondo/sql-removebg-preview.png";
import tailwind from "../public/assets/iconos sin fondo/TAILWIND-removebg-preview.png";
import typescript from "../public/assets/iconos sin fondo/typescript-removebg-preview.png";

const skills = [
  { id: 1, img: css3, level: "" },
  { id: 2, img: express, level: "" },
  { id: 3, img: firebase, level: "" },
  { id: 4, img: github, level: "" },
  { id: 5, img: html5, level: "" },
  { id: 6, img: js, level: "" },
  { id: 7, img: mongoDb, level: "" },
  { id: 8, img: mongoose, level: "" },
  { id: 9, img: mySQL, level: "" },
  { id: 10, img: nestJs, level: "" },
  { id: 11, img: nextJs, level: "" },
  { id: 12, img: node, level: "" },
  { id: 13, img: passportJs, level: "" },
  { id: 14, img: postgreSQL, level: "" },
  { id: 15, img: reactNative, level: "" },
  { id: 16, img: react, level: "" },
  { id: 17, img: redux, level: "" },
  { id: 18, img: sass, level: "" },
  { id: 19, img: SCRUM, level: "" },
  { id: 20, img: sequelize, level: "" },
  { id: 21, img: sql, level: "" },
  { id: 22, img: tailwind, level: "" },
  { id: 23, img: typescript, level: "" },
];

import Skill from "./Skill";
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-14 mx-auto items-center justify-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl md:tracking-[20px] ">
        Habilidades    
      </h3>

      <div
        className="grid grid-cols-2 gap-2 p-5 md:gap-5 max-h-[25rem] 
         mt-[6%] md:max-h-[32rem] md:scrollbar md:scrollbar-track-gray-400/20 overflow-y-auto md:scrollbar-thumb-[#F7AB0A]/80 sm:grid-cols-3 overflow-x-hidden md:w-[50%] border border-[#F7AB0A]/80 lg:max-h-[35rem]"
      >
        {skills.map((skill) => (
          <Skill key={skill.id} imageSkill={skill.img} level={skill.level} />
        ))}
      </div>
    </motion.div>
  );
}
