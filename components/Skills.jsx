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
  { id: 1, img: css3, level: "Principiante" },
  { id: 2, img: express, level: "Intermedio" },
  { id: 3, img: firebase, level: "Avanzado" },
  { id: 4, img: github, level: "Principiante" },
  { id: 5, img: html5, level: "Principiante" },
  { id: 6, img: js, level: "Intermedio" },
  { id: 7, img: mongoDb, level: "Intermedio" },
  { id: 8, img: mongoose, level: "Intermedio" },
  { id: 9, img: mySQL, level: "Intermedio" },
  { id: 10, img: nestJs, level: "Intermedio" },
  { id: 11, img: nextJs, level: "Intermedio" },
  { id: 12, img: node, level: "Intermedio" },
  { id: 13, img: passportJs, level: "Intermedio" },
  { id: 14, img: postgreSQL, level: "Intermedio" },
  { id: 15, img: reactNative, level: "Intermedio" },
  { id: 16, img: react, level: "Intermedio" },
  { id: 17, img: redux, level: "Intermedio" },
  { id: 18, img: sass, level: "Principiante" },
  { id: 19, img: SCRUM, level: "Principiante" },
  { id: 20, img: sequelize, level: "Intermedio" },
  { id: 21, img: sql, level: "Intermedio" },
  { id: 22, img: tailwind, level: "Principiante" },
  { id: 23, img: typescript, level: "Intermedio" },
  ];

import Skill from "./Skill";
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-14 mx-auto items-center justify-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl md:tracking-[20px] ">
        Habilidades
      </h3>

      <h3 className="absolute top-36 xl:top-28 uppercase tracking-[3px] text-gray-500 text-sm ">
        Presiona una habilidad para ver mi nivel:
      </h3>

      <div
        className="grid grid-cols-2 gap-2 p-5 md:gap-5 max-h-[25rem] 
         mt-[10%] md:max-h-[32rem] md:scrollbar md:scrollbar-track-gray-400/20 overflow-y-auto md:scrollbar-thumb-[#F7AB0A]/80 sm:grid-cols-3 md:grid-cols-4 overflow-x-hidden md:w-[50%] border-2"
      >
        {skills.map((skill) => (
          <Skill key={skill.id} imageSkill={skill.img} level={skill.level}/>
        ))}
      </div>
    </motion.div>
  );
}
