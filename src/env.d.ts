/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly STORYBLOK_TOKEN: string;
  readonly STORYBLOK_IS_PREVIEW: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}