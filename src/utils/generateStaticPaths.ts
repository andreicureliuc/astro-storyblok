import { useStoryblokApi } from "@storyblok/astro";
import { isPreview } from '@/utils'
import { languages } from "./langs";

export default async function generateStaticPaths() {
  const storyblokApi = useStoryblokApi();
  let pages = 1;
  const per_page = 1000;
  const { data, total } = await storyblokApi.get("cdn/links", {
    version: isPreview() ? "draft" : "published",
    per_page: per_page,
  });
  
  if(total > per_page){
    pages = Math.ceil(total / per_page);
  
    //TODO: set up queue to load paginated links

  }
  
  
  
  
  let links = data.links;

  links = Object.values(links);

  let paths = [];

  links.forEach((link) => {
    // Add original slug
    languages.forEach((language) => {
      let slug = link.slug === "home" ? undefined : link.slug;

      let full_url = language === "en" ? slug : `${language}/${slug ?? ""}`;

      let langSwitch = {};
      languages.forEach((lang) => {
        langSwitch = {
          ...langSwitch,
          [lang]: lang === "en" ? `/${slug ?? ""}` : `/${lang}/${slug ?? ""}`,
        };
      });

      paths.push({
        props: { language, slug, langSwitch },
        params: {
          slug: full_url,
          path: link.slug.endsWith("/") ? link.slug.slice(0, -1) : link.slug,
        },
      });
    });

    // Add translated slugs
    if (link.alternates && link.alternates.length > 0) {
      link.alternates.forEach((alternate) => {
        if (alternate.published) {
          const language = alternate.lang; // Get the language of the alternate page

          // Construct the full URL for the alternate page
          const full_url =
            language === "en"
              ? alternate.path
              : `${language}/${alternate.path}`;

          // Construct the language switch object
          const langSwitch = {};
          languages.forEach((lang) => {
            langSwitch[lang] =
              lang === "en"
                ? `/${alternate.path}`
                : `/${lang}/${alternate.path}`;
          });

          // Push the path object to the paths array
          paths.push({
            props: { language, slug: alternate.path, langSwitch },
            params: {
              slug: full_url,
              path: link.slug.endsWith("/")
                ? link.slug.slice(0, -1)
                : link.slug,
            },
          });
        }
      });
    }
  });

  return paths;
}
