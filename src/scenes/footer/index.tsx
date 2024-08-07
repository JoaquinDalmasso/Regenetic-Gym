import Logo from "@/assets/Prueba2.webp"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className=" mt-10 basis-1/2 md:mt-0">
                <img alt="Logo" src={Logo} />
            </div>
            <div className="text-gray-20 mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold flex">Instagram</h4>
                <a href="https://www.instagram.com/regenetic_/">
                <FontAwesomeIcon className="my-2" icon={faInstagram} size="2xl" />
                </a>
            </div>
            <div className="text-gray-20 mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Nos encontramos en:</h4>
                <p className="my-5">Corrientes 71, Rio Cuarto</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer