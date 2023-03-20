import axios from 'axios'

const getTitles = async (title: string) => {
  const result = await axios.get(`https://imdb-api.com/en/API/Search/k_tsjw42gj/${title}`)
  return result.data.results
}

export default getTitles