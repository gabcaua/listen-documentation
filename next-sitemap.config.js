/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.guide.listen.cgsilva.com.br',
    generateRobotsTxt: true, // (optional)
    autoLastmod: true,
    generateIndexSitemap: false
    // ...other options
  }