import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import mkcert from 'vite-plugin-mkcert';
import { imageService } from "@unpic/astro/service";
import netlify from "@astrojs/netlify/functions";
// import { lifecycleLogs } from 'src/integrations/lifecycle-logs'

const env = loadEnv('', process.cwd(), 'STORYBLOK')


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: 'eu',
      },
      bridge: {
        customParent: 'https://app.storyblok.com',
      },
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        // hero: 'storyblok/Hero',
        // manual: 'storyblok/Manual',
        // reference: 'storyblok/Reference',
        // config: 'storyblok/Config',
        // button: 'storyblok/Button',
        // card: 'storyblok/Card',
        // 'grid-section': 'storyblok/GridSection',
        // 'grid-card': 'storyblok/GridCard',
        // 'tech-section': 'storyblok/TechSection',
        // 'tech-chapter': 'storyblok/TechChapter',
        // 'generic-text': 'storyblok/GenericText',
        // 'text-media': 'storyblok/TextMedia',
        // 'generic-table': 'storyblok/GenericTable',
        // 'tech-icon-callout': 'storyblok/TechIconCallout',
        // 'tech-image': 'storyblok/TechImage',
        // 'tech-link-reference': 'storyblok/TechLinkReference',
        // 'featured-links': 'storyblok/FeaturedLinks',
        // 'logo-container': 'storyblok/LogoContainer',
        // 'teaser-with-image': 'storyblok/TeaserWithImage',
        // 'tab-section': 'storyblok/TabSection',
        // 'tabs': 'storyblok/Tab',
        // 'teaser-without-image': 'storyblok/TeaserWithoutImage',
        // 'teaser-section': 'storyblok/TeaserSection',
        // 'tab-container': 'storyblok/TabContainer',
        // 'tab-container-item': 'storyblok/TabContainerItem',
        // 'text-image': 'storyblok/TextImage',
        // 'contact-banner': 'storyblok/ContactBanner',
        // 'generic_link': 'storyblok/GenericLink',
        // 'counter-item': 'storyblok/CounterItem',
        // 'counter-module': 'storyblok/CounterModule',
        // 'text-callout': 'storyblok/TextCallout',
        // 'downloads-section': 'storyblok/DownloadsSection',
        // 'downloads-item': 'storyblok/DownloadsItem',
        // 'text-slider': 'storyblok/TextSlider',
        // 'quote-container': 'storyblok/QuoteContainer',
        // 'quote-container-item': 'storyblok/QuoteContainerItem',
        // 'step-container': 'storyblok/StepContainer',
        // 'step-container-block': 'storyblok/StepContainerBlock',
        // 'bullet-callout': 'storyblok/BulletCallout',
        // 'page-navigation': 'storyblok/PageNavigation',
        // 'press-release-card': 'storyblok/PressReleaseCard',
        // 'generic-section': 'storyblok/GenericSection',
        // 'event-banner': 'storyblok/EventBanner',
      },
    }),
    tailwind(),
    // lifecycleLogs()
  ],
  vite: {
    plugins: [mkcert()],
    server: {
      https: true,
    },
  },
  // image: {
  //   service: imageService(),
  // },
  // prefetch: {
  //   prefetchAll: true
  // },
  // devToolbar: {
  //   enabled: false,
  // },
})
