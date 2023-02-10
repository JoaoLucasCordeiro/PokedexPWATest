import Image from "next/image";
import Link from "next/link";
import styles from '../src/styles/Card.module.css'

export default function Card({ pokemon }) {
    return (
        <div className={styles.card}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width='128'
                height='128'
                alt={pokemon.name} />

        
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href='/' className={styles.btn}>
                Detalhes
            </Link>
        </div>
    )
}

// `/pokemon/${pokemon.id}`