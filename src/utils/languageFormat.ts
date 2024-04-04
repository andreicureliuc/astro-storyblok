const languageFormat = (lang) => {
  const languageMap = {
    "en": "International",
    "fr": "France",
    "de": "Deutschland"
  };

  return languageMap[lang] || lang;
};

export default languageFormat;