import Image from 'next/image'
import styles from '../styles/About.module.css'


export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre este projeto:</h1>
            <Image src='/images/charizard.png' width='300' height='300' alt='Charizard' />
            <p>Este é um simples projeto NextJS, uma Pokedex. Onde temos as informações de alguns pokemons.</p>
        </div>
    )
}