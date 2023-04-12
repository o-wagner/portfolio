import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import Background from "./img/background-gradient.jpg"
import "./styles/components/app.sass"

function App() {

  return (
    <div id="portfolio" style={{backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <h1>Wagner Oliveira</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App