import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/Card.module.css'

export default function Card({ pokemon }) {
    return (
        <div className={styles.card}>
           
            <h3 className={styles.title}>{pokemon.name}</h3>
           
        </div>
    )
}

// `/pokemon/${pokemon.id}`