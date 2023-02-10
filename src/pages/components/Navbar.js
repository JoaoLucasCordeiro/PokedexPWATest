import Link from "next/link";
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/images/pokeball.png' width='30' height='30' alt='Pokedex' />
                <h1>Pokedex</h1>
            </div>

            <ul className={styles.links_items}>
                <li>
                    <Link href='/'> Home </Link>
                </li>

                <li>
                    <Link href='/about'> Sobre </Link>
                </li>
            </ul>
        </nav>
    )
}