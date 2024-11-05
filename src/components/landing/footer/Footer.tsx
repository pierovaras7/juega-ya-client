import { rubik_mono_one } from "@/app/layout";
import Link from "next/link";
import SocialLinks from "./partials/SocialLinks";
import * as Icons from 'react-icons/fa'; // Importar todos los íconos de FontAwesome
import { useLanding } from "@/context/LandingContext";


const Footer = () => {
    const footer = useLanding().dataLanding?.footerData;
    
    const lastTwoLetters = footer?.title.slice(-2); 
    const mainText = footer?.title.slice(0, -2);
    return (
        <footer className="text-center p-8 bg-gray-900 text-white xs:text-left">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
                    {/* Information */}
                    <div className="flex flex-col items-start w-full gap-2 py-4">
                        <h1 className={`${rubik_mono_one.className} text-3xl px-4 `}>
                            {mainText}<b className="text-green-600">{lastTwoLetters}</b>
                        </h1>
                        <p className="text-justify text-xs px-4 w-full">{footer?.description}</p>
                    </div>
                    {/* Links */}
                    {footer?.col_links.map((item, index) => (
                        <div key={index} className="flex flex-col items-start w-full gap-2 p-4">
                            <h3 className={`${rubik_mono_one.className} text-sm text-green-600`}>{item.title}</h3>
                            {item.links.map((link, linkIndex) => (  // Cambié 'item' por 'link' para mayor claridad
                                <Link key={linkIndex} href={link.path} className="text-xs"> {/* Aquí también agregué 'key' */}
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}

                    {/* Contacto */}
                    <div className="flex flex-col items-start gap-2 m-4">
                        <h3 className={`${rubik_mono_one.className} text-sm text-right text-green-600`}>Contacto</h3>
                        <div className="flex gap-2 mb-1 w-full justify-start">
                            <Icons.FaPhoneAlt/>
                            <p className="text-sm">{footer?.contacto.telefono.descripcion}</p>
                        </div> 
                        <SocialLinks/>
                    </div>
                </div>
            </div>
            <hr className="border-gray-400-500 my-6 w-15/16 mx-auto"/>
            <div className="flex items-center justify-center text-xs">
                © 2024 JuegaYa
                <p className="ml-3">x</p>
                <img src="/imgs/brHX.png" alt="" className="w-16 h-8" />
                | All rights reserved
            </div>

        </footer>
    );
};

export default Footer;
