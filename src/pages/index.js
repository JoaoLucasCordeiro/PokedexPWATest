import styles from '@/styles/Home.module.css'

// função de chamada para API
export async function getStaticProps() {
  // variável que define o número máximo de pokemons
  const pokemonsLimit = 100
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
    <div>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}
