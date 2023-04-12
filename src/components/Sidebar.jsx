import Avatar from '../img/Smoke.jpeg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import '../styles/components/sidebar.sass'



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Smoke Shakur" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer/>
      <a href=""className='btn'>Download Curriculo</a>
    </aside>
  )
}

export default Sidebar