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
    version: 'draft',
    content_type: 'blog',
    sort_by: 'first_published_at:desc'
  }
)

const { data } = await useFetch(`https://meme-api.com/gimme/${entries?.length}`)
const memes = data?.value.memes;
</script>

<style scoped>
.blog-landing {
  padding-bottom: 2rem;
}

.blog-disclaimer {
  padding-bottom: 2rem;
  color: var(--coral);
  text-align: right;
}

.blog-card-container {
  --width: calc((var(--content-width) / 3));
  display: grid;
  /*grid-template-columns: var(--width) var(--width) var(--width);*/
  grid-template-columns: auto auto auto;
  column-gap: 2rem;
  row-gap: 2rem;
  max-width: var(--content-width);
}
</style>
