// types/socialLinks.ts

export interface SocialLink {
    url: string;
    icon: string; // Asumiendo que el icono es un elemento JSX
}
  
export interface SocialLinksProps {
    links: SocialLink[];
}