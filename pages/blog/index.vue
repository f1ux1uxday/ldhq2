<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <layout-container>
    <div class="blog-landing">
      <p class="blog-disclaimer">
        {{ story.content.disclaimer }}
      </p>
      <div class="blog-card-container">
        <NuxtLink
          v-for="entry, index in entries"
          :key="`entry-${index}`"
          :to="entry.full_slug"
          class="blog-card"
        >
          <NuxtImg
            v-if="memes"
            :src="memes[index].preview[2]"
            class="blog-thumbnail"
          />
          <div class="blog-details">
            <h3 class="blog-title heading-5">
              {{ entry.content.title }}
            </h3>
            <span class="blog-publish-date">
              {{ blogDate(entry.first_published_at) }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </layout-container>
</template>

<script setup>
import {NuxtImg} from '#components';

const config = useRuntimeConfig();
const storyblokApi = useStoryblokApi();
const story = await useStoryblok(
  'blog-landing',
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

const blogDate = date => {
  const rawDate = new Date(date);

  const dateString = rawDate.toLocaleDateString('en-US', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return dateString;
}

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

.blog-card {
  display: flex;
  width: calc(var(--width) - 1.5rem);
  flex-direction: column;
  background-color: var(--gray-200);
  border: 2px solid var(--gray-300);
  border-radius: 0.25rem;
  box-shadow: 0px 0px 0px var(--gray-300);
  transition: all 0.3s ease-out;

  &:hover {
    background-color: var(--gray-700);
    box-shadow: 4px 4px 4px var(--gray-300);

    .blog-title {
      color: var(--gray-300);
    }

    .blog-publish-date {
      color: var(--gray-200);
    }
  }

  .blog-thumbnail {
    height: 300px;
    object-fit: cover;
    filter: sepia(0.6) blur(3px) brightness(75%);
    border-radius: 0.25rem 0.25rem 0 0;
  }

  .blog-details {
    padding: 1rem 2rem;
  }

  .blog-title {
    margin-bottom: 0.5rem;
    color: var(--gray-800);
  }

  .blog-publish-date {
    font-family: "Belanosima";
    font-size: 14px;
    color: var(--gray-600);
  }
}
</style>
