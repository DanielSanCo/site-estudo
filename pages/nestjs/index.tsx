import { useState } from "react";
import styles from './style.module.css';

const nestjs = () => {

    return (
        <div className={styles.main}>
            <div className={styles.botao}><a href="/nestjs/makeProj">Criando projeto e tabelas - TYPEORM</a></div>
            <div className={styles.botao}><a href="/nestjs/relationTabs">Relacionando tabelas - TYPEORM</a></div>
            <div className={styles.botao}><a href="/nestjs/security">Security</a></div>
            <div className={styles.botao}><a href="/nestjs/jwt">JWT</a></div>
            
        </div>
    )
}

export default nestjs;