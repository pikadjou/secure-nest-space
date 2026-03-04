const BOT_AGENTS = /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|applebot|pinterestbot/i

const SITE = 'https://www.bailo.be'
const SITE_NAME = 'Bailo'
const OG_IMAGE = `${SITE}/og-default.jpg`

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

function buildHtml({ title, description, image, url, type = 'website' }) {
  const fullTitle = title ? `${title} - ${SITE_NAME}` : `${SITE_NAME} - La plateforme de confiance pour vos locations`
  const desc = description || 'Bailo simplifie la relation locative grâce à des profils vérifiés, des avis certifiés et une gestion centralisée des documents.'
  const canonical = url || SITE
  const ogImage = image ? `<meta property="og:image" content="${image}" />` : `<meta property="og:image" content="${OG_IMAGE}" />`

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
  ${ogImage}


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

  // Sitemap - serve to everyone
  if (path === '/sitemap.xml') {
    return context.next()
  }

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
      seo = { title: article.title, description: article.description, image: article.image, url: `${SITE}/blog/${slug}`, type: 'article' }
    }
  }

  // Static pages
  if (path === '/') {
    seo = { title: null, description: 'Bailo simplifie la relation locative grâce à des profils vérifiés, des avis certifiés et une gestion centralisée des documents. Louez en confiance.', url: SITE }
  }
  if (path === '/how-it-works') {
    seo = { title: 'Comment ça marche', description: 'Comment fonctionne Bailo ? Vérification itsme®, gestion des biens, relation locative, documents centralisés et avis à double aveugle expliqués.', url: `${SITE}/how-it-works` }
  }
  if (path === '/blog' && !seo) {
    seo = { title: 'Blog - Conseils et actualités', description: 'Découvrez nos articles et conseils pratiques pour propriétaires et locataires. Actualités, guides et bonnes pratiques de la location immobilière.', url: `${SITE}/blog` }
  }
  if (path === '/faq') {
    seo = { title: 'Questions fréquentes', description: 'Trouvez rapidement les réponses à vos questions sur Bailo : inscription, vérification d\'identité, avis locatifs, abonnements et fonctionnalités.', url: `${SITE}/faq` }
  }
  if (path === '/support') {
    seo = { title: 'Contacter le support', description: 'Besoin d\'aide ? Contactez l\'équipe Bailo via notre formulaire de support. Nous répondons sous 24h.', url: `${SITE}/support` }
  }
  if (path === '/about') {
    seo = { title: 'À propos de Bailo', description: 'Découvrez la mission de Bailo : rétablir la confiance entre propriétaires et locataires grâce à la transparence, la vérification et les avis mutuels.', url: `${SITE}/about` }
  }
  if (path === '/terms') {
    seo = { title: 'Conditions générales', description: 'Consultez les conditions générales d\'utilisation de Bailo. Droits, obligations et règles encadrant l\'utilisation de notre plateforme locative.', url: `${SITE}/terms` }
  }
  if (path === '/privacy') {
    seo = { title: 'Politique de confidentialité', description: 'Découvrez comment Bailo protège vos données personnelles. Collecte, usage et sécurité de vos informations.', url: `${SITE}/privacy` }
  }
  if (path === '/legal-notice') {
    seo = { title: 'Mentions légales', description: 'Mentions légales de Bailo : informations sur l\'éditeur, l\'hébergement et les responsabilités liées à l\'utilisation de la plateforme.', url: `${SITE}/legal-notice` }
  }
  if (path === '/cookies') {
    seo = { title: 'Gestion des cookies', description: 'Gérez vos préférences de cookies sur Bailo. Découvrez quels cookies nous utilisons et comment ils améliorent votre expérience.', url: `${SITE}/cookies` }
  }

  if (seo) {
    const html = buildHtml(seo)
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=3600' }
    })
  }

  // Default: let Cloudflare Pages serve the SPA
  return context.next()
}
