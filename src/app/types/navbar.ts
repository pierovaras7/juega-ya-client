// types/socialLinks.ts
export interface NavbarLink {
    label: string,
    url: string,
    button: boolean
}
  
export interface NavbarLinksProps {
    links: NavbarLink[];
}