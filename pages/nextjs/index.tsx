import { useState } from "react";
import styles from './style.module.css';

const nestjs = () => {

    return (
        <div className={styles.main}>
            <div className={styles.botao}><a href="/nextjs/apiConsu">Consumindo API - async await</a></div>
            
        </div>
    )
}

export default nestjs;