<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <layout-container>
    <div class="blog-landing">
      <p class="blog-disclaimer">
        {{ story.content.disclaimer }}
      </p>
      <div class="blog-card-container">
        <blog-card
          v-for="entry, index in entries"
          :key="`entry-${index}`"
          :entry="entry"
          :meme="memes[index]"
        />
      </div>
    </div>
  </layout-container>
</template>

<script setup>
const config = useRuntimeConfig();
const storyblokApi = useStoryblokApi();
const story = await useStoryblok(
  'blog',
  {
    version: config.public.docVersion
  }
)

const entries = await storyblokApi.getAll(
  `cdn/stories`,
  {
    version: config.public.docVersion,
    content_type: 'blog',
    sort_by: 'first_published_at:desc'
  }
)

const { data } = await useFetch(`https://meme-api.com/gimme/${entries?.length}`)
const memes = data?.value.memes;

// Add page title to type
// Pull in site name from 'Settings' equivalent?
useHead({
  title: 'Pointless Ramblings? - LDHQ',
  meta: [
    { name: 'description', content: 'Pointless Ramblings - LDHQ' }
  ],
})
</script>

<style scoped>
.blog-landing {
  padding-bottom: 2rem;
}

.blog-disclaimer {
  padding-bottom: 2rem;
  color: var(--coral);
  text-align: left;
  font-size: 12px;

  @media (min-width: 830px) {
    font-size: 0.875rem;
    text-align: right;
  }

  @media (min-width: 1020px) {
    font-size: 1rem;
  }
}

.blog-card-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;

  @media (min-width: 1020px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: var(--content-width);
  }
}
</style>
