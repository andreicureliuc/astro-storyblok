const languages = ['en', 'fr', 'de']

function getTransLink(language, slug) {
  return language === 'en' ? slug : `/${language}${slug}`
}

export { getTransLink, languages }