import Content from "../content/content";
import Footer from "../footeer/footer";
import Navbar from "../navbar/navbar";


const AppContent = () => {
  return (
    <div className="app-content">
        <Navbar/>
        <Content/>
        <Footer/>
      
    </div>
  )
}

export default AppContent;
