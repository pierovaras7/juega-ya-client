// components/SocialLinks.js
import Link from 'next/link';
import React from 'react';
import * as Icons from 'react-icons/fa'; // Importar todos los íconos de FontAwesome
import { SocialLinksProps } from '@/app/types/footer';
import { useLanding } from '@/context/LandingContext';
import { SiTiktok } from 'react-icons/si';

type IconName = 'FaFacebook' | 'FaTwitter' | 'FaInstagram' | 'FaTikTok';

// Agrega SiTiktok en el mapeo de íconos
const iconMap: Record<IconName, React.ElementType> = {
  FaFacebook: Icons.FaFacebook,
  FaTwitter: Icons.FaTwitter,
  FaInstagram: Icons.FaInstagram,
  FaTikTok: SiTiktok, // Aquí se utiliza el ícono de TikTok de `react-icons/si`
};

const SocialLinks = () => {
  const links = useLanding().dataLanding?.footerData.contacto.redes
  return (
    <div className="flex space-x-4 w-full justify-start">
      {links?.map((link, id) => {
        const IconComponent = iconMap[link.icon as IconName] || SiTiktok;

        return (
          <Link key={id} href={link.url} target="_blank" rel="noopener noreferrer">
            <div className="group flex items-center justify-center h-8 w-8 px-2 lg:w-10 lg:h-10 rounded-full bg-black border border-white hover:bg-gray-300 transition duration-300 ">
              {IconComponent ? <IconComponent size={24}  className="group-hover:text-black"/> : null} {/* Renderizar el ícono */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
 