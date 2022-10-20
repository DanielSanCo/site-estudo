import { useState } from "react";
import { nestjsList } from "../../utils/nestjs";
import styles from './style.module.css';

const nestjs = () => {
    const [lista, setLista] = useState(nestjsList);

    return (
        <div className={styles.main}>
            <div className={styles.titulo}>Nestjs</div>
            <div>Um passo a passo para ser seguido em como criar um BD/API com Nestjs usando typeorm</div>
            <div className={styles.line}></div>
            {lista.map((item, index) => (
                <div className={styles.eachContent}>
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