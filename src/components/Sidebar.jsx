import Avatar from '../img/Smoke.jpeg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Smoke Shakur" />
      <p className="title">Web Developer</p>
      <SocialNetworks />
      <InformationContainer/>
    </aside>
  )
}

export default Sidebar