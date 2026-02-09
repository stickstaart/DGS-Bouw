export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
}

export const projects: Project[] = [
  // Je huidige projecten
  { id: 1, location: "Oud-Beijerland", title: "Modern Appartement", category: "Renovatie", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, location: "Zoetermeer", title: "Luxe Badkamer", category: "Interieurbouw", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop" },
  { id: 3, location: "Breda", title: "Dakkapel & Zolder", category: "Bouw", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },

  // Nieuwe 9 dummy projecten
  { id: 4, location: "Utrecht", title: "Woonkamer Transformatie", category: "Renovatie", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop" },
  { id: 5, location: "Eindhoven", title: "Maatwerk Keuken", category: "Interieurbouw", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" },
  { id: 6, location: "Amsterdam", title: "Nieuwbouw Garage", category: "Bouw", image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800" },
  { id: 7, location: "Nijmegen", title: "Zolder Renovatie", category: "Renovatie", image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=800" },
  { id: 8, location: "Den Haag", title: "Terrasoverkapping", category: "Exterieur", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: 9, location: "Rotterdam", title: "Vloer & Afwerking", category: "Afwerking", image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop" },
  { id: 10, location: "Aalsmeer", title: "Schilderwerk Buiten", category: "Onderhoud", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop" },
  { id: 11, location: "Arnhem", title: "Trap Renovatie", category: "Interieurbouw", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop" },
  { id: 12, location: "Sneek", title: "Totaalrenovatie Villa", category: "Bouw", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop" },
];
