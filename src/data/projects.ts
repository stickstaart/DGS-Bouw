export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Woonhuis",
    category: "Nieuwbouw",
    location: "Oud-Beijerland",
    image: "/images/projects/project1.jpg" // Zorg dat deze map bestaat in /public!
  },
  {
    id: 2,
    title: "Bedrijfspand Renovatie",
    category: "Renovatie",
    location: "Rotterdam",
    image: "/images/projects/project2.jpg"
  },
  {
    id: 3,
    title: "Luxe Villa",
    category: "Exclusief",
    location: "Barendrecht",
    image: "/images/projects/project3.jpg"
  }
];
