// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {className, title, description, imgUrl} = cardDetails

  return (
    <li className={`${className} list-container`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
