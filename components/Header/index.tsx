import styles from './style.module.css';

export const Cabecalho = () => {
    return (
        <header className={styles.header}>
            <div>Logo</div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Reactjs</li>
                <li><a href="/nextjs">Nextjs</a></li>
                <li><a href='/nestjs'>Nestjs</a></li>
            </ul>
        </header>
    )
    
}