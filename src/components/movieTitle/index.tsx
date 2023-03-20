import './styles.css'

const MovieTitle = ({title, description, image} : {title: string, description: string, image: string}) => {
  return (
    <div className="movieTitle">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default MovieTitle