
import image from "../assets/٢٠٢٤٠١١٤_١١١١٠٦.jpg"
const Home = () => {
  return (
    <div className="home">
      <div className="left-home">
         <span>Mohsen Ahmad</span>
         <span>Front-End Developer</span>
 

      </div>
      <div className="right-home">
        <img src={image} alt="" />
      </div>

    </div>
  )
}

export default Home
