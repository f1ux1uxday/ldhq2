<template>
  <header class="header">
    <layout-container>
      <div class="header-bar">
        <NuxtLink
          to="/"
          class="header-link-main"
        >
          {{ siteTitle }}
        </NuxtLink>
        <nav class="header-navigation">
          <StoryblokComponent
            v-for="blok in blocks"
            class="nav-item"
            :key="blok._uid"
            :blok="blok"
          />
        </nav>
      </div>
    </layout-container>
  </header>
</template>

<script setup>
const config = useRuntimeConfig();
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(
  `cdn/stories/navigation`,
  {
    version: config.public.docVersion,
  }
);

const siteTitle = data.story.content.site_title;
const blocks = data.story.content.body;
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  padding: 0.5rem 0;
  background-color: transparent;
  backdrop-filter: blur(8px);
  border-bottom: 2px solid var(--gray-200);
  z-index: 4;
}

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-link-main {
  padding: 2px 6px;
  background-color: var(--sea);
  border-radius: 0.25rem;
  color: var(--paper);
  font-family: "Belanosima";
  font-size: 2rem;
}

.header-navigation {
  display: flex;
  gap: 1.5rem;
  padding: 0.25rem 1.5rem;
  background-color: var(--paper);
  border: 2px solid var(--gray-200);
  border-radius: 0.75rem;
}
</style>
