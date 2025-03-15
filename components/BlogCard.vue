<template>
  <NuxtLink
    :to="`/blog/${props.entry.slug}`"
    class="blog-card"
  >
    <NuxtImg
      v-if="props.meme"
      :src="props.meme.preview[2] || props.meme.preview[1]"
      class="blog-thumbnail"
    />
    <div class="blog-details">
      <h3 class="blog-title heading-5">
        {{ props.entry.content.title }}
      </h3>
      <span class="blog-publish-date">
        {{ blogDate }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  entry: Object,
  meme: Object
})

const blogDate = computed(() => {
  const rawDate = new Date(props.entry.first_published_at);

  const dateString = rawDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return dateString;
})
</script>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  width: 100%;
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
