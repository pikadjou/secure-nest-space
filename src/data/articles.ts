export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
  readTime: string;
  publishedAt: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "guide-complet-dossier-locataire",
    title: "Le guide complet pour constituer un dossier locataire parfait",
    excerpt: "Découvrez toutes les pièces nécessaires et nos conseils pour maximiser vos chances d'obtenir le logement de vos rêves.",
    content: `
## Introduction

La constitution d'un dossier locataire est une étape cruciale dans votre recherche de logement. Un dossier bien préparé peut faire la différence entre obtenir l'appartement de vos rêves ou passer à côté.

## Les pièces indispensables

### 1. Pièce d'identité
Une copie recto-verso de votre carte d'identité ou passeport en cours de validité.

### 2. Justificatifs de revenus
- Les 3 derniers bulletins de salaire
- Votre dernier avis d'imposition
- Votre contrat de travail

### 3. Justificatif de domicile
- Quittances de loyer des 3 derniers mois
- Ou attestation d'hébergement avec pièce d'identité de l'hébergeant

## Nos conseils pour se démarquer

1. **Soignez la présentation** : Un dossier bien organisé montre votre sérieux
2. **Anticipez** : Préparez votre dossier avant même de visiter
3. **Soyez transparent** : Ne cachez aucune information importante

## Conclusion

Avec Bailo, la constitution de votre dossier devient un jeu d'enfant. Notre plateforme vous guide pas à pas et vérifie automatiquement vos documents.
    `,
    author: {
      name: "Marie Dupont",
      avatar: "M",
    },
    category: "Guide",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
    readTime: "5 min",
    publishedAt: "2024-01-15",
  },
  {
    id: "2",
    slug: "droits-obligations-locataires",
    title: "Droits et obligations des locataires : tout ce que vous devez savoir",
    excerpt: "Un tour d'horizon complet de vos droits en tant que locataire et des obligations à respecter pour une location sereine.",
    content: `
## Vos droits en tant que locataire

### Le droit à un logement décent
Tout locataire a droit à un logement répondant aux critères de décence définis par la loi.

### Le droit à la vie privée
Le propriétaire ne peut pas entrer dans le logement sans votre accord, sauf en cas d'urgence.

### Le droit au maintien dans les lieux
Vous ne pouvez être expulsé que dans des conditions strictement encadrées par la loi.

## Vos obligations

### Payer le loyer
Le paiement du loyer et des charges à la date convenue est votre obligation principale.

### Entretenir le logement
Vous devez assurer l'entretien courant et les petites réparations.

### Respecter le voisinage
L'usage paisible du logement implique de respecter la tranquillité de vos voisins.

## En cas de litige

N'hésitez pas à contacter une association de locataires ou un conciliateur de justice pour résoudre les conflits à l'amiable.
    `,
    author: {
      name: "Thomas Martin",
      avatar: "T",
    },
    category: "Juridique",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
    readTime: "7 min",
    publishedAt: "2024-01-10",
  },
  {
    id: "3",
    slug: "tendances-marche-immobilier-2024",
    title: "Les tendances du marché immobilier locatif en 2024",
    excerpt: "Analyse des évolutions du marché, des prix et des nouvelles attentes des locataires et propriétaires.",
    content: `
## État des lieux du marché

L'année 2024 marque un tournant pour le marché immobilier locatif français. Entre nouvelles réglementations et évolutions des modes de vie, le secteur se transforme.

## Les grandes tendances

### 1. La digitalisation des processus
Les visites virtuelles et les dossiers numériques deviennent la norme.

### 2. L'importance de la performance énergétique
Le DPE devient un critère déterminant pour les locataires.

### 3. La flexibilité des baux
Les locations de moyenne durée gagnent en popularité.

## Évolution des prix

Les loyers continuent leur progression modérée dans les grandes métropoles, tandis que les villes moyennes attirent de plus en plus.

## Perspectives

La tendance est à la professionnalisation du secteur, avec des plateformes comme Bailo qui simplifient les relations locatives.
    `,
    author: {
      name: "Sophie Bernard",
      avatar: "S",
    },
    category: "Marché",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    readTime: "6 min",
    publishedAt: "2024-01-05",
  },
  {
    id: "4",
    slug: "optimiser-profil-bailo",
    title: "Comment optimiser votre profil Bailo pour attirer les propriétaires",
    excerpt: "Nos astuces pour créer un profil attractif et multiplier vos chances de trouver rapidement un logement.",
    content: `
## L'importance d'un bon profil

Sur Bailo, votre profil est votre vitrine. Un profil complet et soigné augmente significativement vos chances d'être sélectionné.

## Les éléments clés

### Photo de profil
Choisissez une photo professionnelle et souriante.

### Description personnelle
Présentez-vous en quelques lignes : profession, situation, motivations.

### Vérifications
Complétez toutes les vérifications KYC pour obtenir le badge "Profil vérifié".

## Les bonnes pratiques

1. Répondez rapidement aux messages
2. Soyez transparent sur votre situation
3. Collectez des évaluations positives

## Le badge Premium

Le badge Premium augmente votre visibilité de 40% et montre votre sérieux aux propriétaires.
    `,
    author: {
      name: "Lucas Petit",
      avatar: "L",
    },
    category: "Conseils",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop",
    readTime: "4 min",
    publishedAt: "2024-01-02",
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): Article[] => {
  return articles.filter((article) => article.id !== currentId).slice(0, limit);
};
