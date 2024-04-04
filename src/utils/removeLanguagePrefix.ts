const removeLanguagePrefix = (slug) => {
  const regex = /^(\/?[a-z]{2}\/)?(.+)$/;
  const match = slug.match(regex);

  return match ? match[2] : slug;
};

export default removeLanguagePrefix;
