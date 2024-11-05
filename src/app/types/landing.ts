interface NavbarLink {
    label: string;
    url: string;
    button: boolean;
}

interface NavbarData {
    logo: string;
    title: string;
    links: NavbarLink[];
}


interface SectionsData {
    homeData: HomeData;
    aboutData: AboutData;
}

interface HomeData {
    searchData?: SearchData;
    advantagesData?: Advantage[];
    howWorkData?: Step[];
    testimonialsData?: Testimonial[];
}

interface SearchData {
    img: string;
    sports: string[];
}

interface Advantage {
    image: string;
    title: string;
    descripcion: string;
}

interface Step {
    title: string;
    description: string;
    icon: JSX.Element | string; 
}

interface Testimonial {
    name: string;       
    feedback: string;   
    image: string;      
    rating: number;     
}

interface FooterLink {
    title: string;
    path: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

interface Contacto {
    telefono: {
        descripcion: string;
        icon: string;
    };
    redes: {
        url: string;
        icon: string;
    }[];
}

interface FooterData{
    title: string;
    description: string;
    logo: string;
    col_links: FooterColumn[];
    contacto: Contacto;
}

interface AboutData {
    header: string;
    mision: string;
    vision: string;
    caracteristicas: Caracteristica[];
}

interface Caracteristica {
    icon: string;
    iconClass: string;
    title: string;
    description: string;
}

