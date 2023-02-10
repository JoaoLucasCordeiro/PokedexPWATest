import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Card from './components/Card'


// função de chamada para API
export async function getStaticProps() {
  // variável que define o número máximo de pokemons
  const pokemonsLimit = 96
  const api = 'https://pokeapi.co/api/v2/pokemon/'


  // requisição feita com o fetch
  const res = await fetch(`${api}/?limit=${pokemonsLimit}`)
  const data = await res.json()

  // adicionando o index do pokemon
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }

}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Poke<span>dex</span></h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='Pokeball'/>
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id}/>
        ))}
      </div>
    </>
  )
}
