import HoverText from "./HoverText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Information() {
    return (
        <HoverText>
        
        <div className="w-1/2 mx-auto flex flex-col justify-center items-center my-10 bg-purple-300 text-black p-5 rounded-xl shadow-3xl">
        <h1 className="text-3xl">Contact Me </h1>
        <p className="text-lg mt-4">Here are my Links if you want to stay updated: </p>
        <a href="https://github.com/Rizk04" className="text-lg mt-4">Github <FontAwesomeIcon icon={faGithub}/>  </a>
        <a href="https://www.linkedin.com/in/malek-rizk-b08596324/" className="text-lg mt-4">Linked in <FontAwesomeIcon icon={faLinkedin} /></a>

        </div>
        </HoverText>
      
    );
  }
  

