import React, { useState } from "react";
import style from "./loader.module.css";
import { motion } from "framer-motion";

export default function Loader({ isLoading, success }) {
  return (
    <div>
      <div className={isLoading ? style.loader : undefined}></div>
      {success && (
        <motion.span
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileInView={{
            scale: 2,
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className={style.successIcon}
        >
          ✓
        </motion.span>
      )}
      {success === false && (
        <motion.span
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileInView={{
            scale: 2,
            opacity: [0, 0.3, 0.6, 0.9, 1],
          }}
          transition={{
            duration: 0.6,
          }}
          className={style.errorIcon}
        >
          ✕
        </motion.span>
      )}
    </div>
  );
}
