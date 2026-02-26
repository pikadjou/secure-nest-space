const BOT_AGENTS = /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|applebot|pinterestbot/i

const SITE = 'https://www.bailo.fr'
const SITE_NAME = 'Bailo'
const OG_IMAGE = `${SITE}/og-default.jpg`

const PAGES = {
  '/': {
    title: null,
    description: 'Bailo simplifie la relation locative grâce à des profils vérifiés, des avis certifiés et une gestion centralisée des documents. Louez en confiance.',
  },
  '/how-it-works': {
    title: 'Comment ça marche',
    description: 'Comment fonctionne Bailo ? Vérification itsme®, gestion des biens, relation locative, documents centralisés et avis à double aveugle expliqués.',
  },
  '/blog': {
    title: 'Blog - Conseils et actualités',
    description: 'Découvrez nos articles et conseils pratiques pour propriétaires et locataires. Actualités, guides et bonnes pratiques de la location immobilière.',
  },
  '/faq': {
    title: 'Questions fréquentes',
    description: 'Trouvez rapidement les réponses à vos questions sur Bailo : inscription, vérification d\'identité, avis locatifs, abonnements et fonctionnalités.',
  },
  '/support': {
    title: 'Contacter le support',
    description: 'Besoin d\'aide ? Contactez l\'équipe Bailo via notre formulaire de support. Nous répondons sous 24h.',
  },
  '/about': {
    title: 'À propos de Bailo',
    description: 'Découvrez la mission de Bailo : rétablir la confiance entre propriétaires et locataires grâce à la transparence, la vérification et les avis mutuels.',
  },
  '/terms': {
    title: 'Conditions générales',
    description: 'Consultez les conditions générales d\'utilisation de Bailo. Droits, obligations et règles encadrant l\'utilisation de notre plateforme locative.',
  },
  '/privacy': {
    title: 'Politique de confidentialité',
    description: 'Découvrez comment Bailo protège vos données personnelles. Collecte, usage et sécurité de vos informations.',
  },
  '/legal-notice': {
    title: 'Mentions légales',
    description: 'Mentions légales de Bailo : informations sur l\'éditeur, l\'hébergement et les responsabilités liées à l\'utilisation de la plateforme.',
  },
  '/cookies': {
    title: 'Gestion des cookies',
    description: 'Gérez vos préférences de cookies sur Bailo. Découvrez quels cookies nous utilisons et comment ils améliorent votre expérience.',
  },
}

const ARTICLES = {
  'pourquoi-choisir-bailo': {
    title: 'Pourquoi choisir Bailo ?',
    description: 'Découvrez comment Bailo révolutionne la relation locataire-propriétaire en Belgique avec un système d\'évaluation mutuelle unique.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
  },
  'bailo-marche-locatif-belge': {
    title: 'Ce qu\'apporte Bailo au marché locatif belge',
    description: 'Analyse de l\'impact de Bailo sur le marché immobilier locatif en Belgique : plus de confiance, moins de litiges.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop',
  },
  'proposition-bouchez-avenir-locatif': {
    title: 'La proposition Bouchez et l\'avenir du marché locatif',
    description: 'Décryptage de la proposition de Georges-Louis Bouchez sur les locataires mauvais payeurs et son impact potentiel sur le secteur.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
  },
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildHtml({ title, description, image, url, type = 'website' }) {
  const fullTitle = title ? `${escapeHtml(title)} - ${SITE_NAME}` : `${SITE_NAME} - La plateforme de confiance pour vos locations`
  const desc = escapeHtml(description || 'Bailo simplifie la relation locative grâce à des profils vérifiés, des avis certifiés et une gestion centralisée des documents.')
  const canonical = url || SITE
  const ogImage = image || OG_IMAGE
  const imageTag = ogImage ? `<meta property="og:image" content="${ogImage}" /><meta name="twitter:image" content="${ogImage}" />` : ''

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${fullTitle}</title>
  <meta name="description" content="${desc}" />
  <link rel="canonical" href="${canonical}" />
  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="${type}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:locale" content="fr_BE" />
  ${imageTag}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${desc}" />
</head>
<body>
  <h1>${fullTitle}</h1>
  <p>${desc}</p>
</body>
</html>`
}

export async function onRequest(context) {
  const { request } = context
  const ua = request.headers.get('user-agent') || ''
  const url = new URL(request.url)
  const path = url.pathname

  // Only intercept bots for pre-rendering
  if (!BOT_AGENTS.test(ua)) {
    return context.next()
  }

  let seo = null

  // Blog article pages
  const blogMatch = path.match(/^\/blog\/(.+)$/)
  if (blogMatch) {
    const slug = blogMatch[1]
    const article = ARTICLES[slug]
    if (article) {
      seo = {
        title: article.title,
        description: article.description,
        image: article.image,
        url: `${SITE}/blog/${slug}`,
        type: 'article',
      }
    }
  }

  // Static pages
  if (!seo && PAGES[path]) {
    const page = PAGES[path]
    seo = {
      title: page.title,
      description: page.description,
      url: path === '/' ? SITE : `${SITE}${path}`,
    }
  }

  if (seo) {
    const html = buildHtml(seo)
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }

  // Default: let Cloudflare Pages serve the SPA
  return context.next()
}
