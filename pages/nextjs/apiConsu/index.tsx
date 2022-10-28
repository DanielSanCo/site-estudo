import { useState } from "react";
import { apiConsu } from "../../../utils/nextjs/apiConsu";
import styles from './style.module.css';

const nestjs = () => {
    const [lista, setLista] = useState(apiConsu);

    return (
        <div className={styles.main}>
            <div className={styles.botao}><a href="/nestjs/makeProj">Criando projeto e tabelas - TYPEORM</a></div>
            <div className={styles.botao}>Relacionando tabelas - TYPEORM</div>
            <div className={styles.titulo}>Nextjs</div>
            <div>Um passo a passo para ser seguido em como criar um BD/API com Nestjs usando typeorm</div>
            <div className={styles.line}></div>
            {lista.map((item, index) => (
                <div className={styles.eachContent} key={index}>
                    <div style={{fontWeight: 'bold', color: 'rgba(0,0,0,.5)'}}>{item.seq}</div>
                    <div style={{fontSize: '20px', fontWeight: 'bold'}}>{item.passo}</div>
                    <div style={{fontSize: '15px', margin: '10px'}}>{item.desc}</div>
                    <img className={styles.img} src={item.img} alt={item.passo} />
                    <div className={styles.line}></div>
                </div>
            ))}
        </div>
    )
}

export default nestjs;