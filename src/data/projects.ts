export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  // Je huidige projecten
  { id: 1, title: "Modern Appartement", category: "Renovatie", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Luxe Badkamer", category: "Interieurbouw", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Dakkapel & Zolder", category: "Bouw", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },

  // Nieuwe 9 dummy projecten
  { id: 4, title: "Woonkamer Transformatie", category: "Renovatie", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Maatwerk Keuken", category: "Interieurbouw", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Nieuwbouw Garage", category: "Bouw", image: "https://images.unsplash.com/photo-1585994424789-105a305206c1?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "Zolder Renovatie", category: "Renovatie", image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop" },
  { id: 8, title: "Terrasoverkapping", category: "Exterieur", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: 9, title: "Vloer & Afwerking", category: "Afwerking", image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop" },
  { id: 10, title: "Schilderwerk Buiten", category: "Onderhoud", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop" },
  { id: 11, title: "Trap Renovatie", category: "Interieurbouw", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop" },
  { id: 12, title: "Totaalrenovatie Villa", category: "Bouw", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop" },
];
