<template>
  <header class="header">
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

        <!-- <nav-item -->
        <!--   v-for="link in links" -->
        <!--   class="nav-item" -->
        <!--   :key="link._uid" -->
        <!--   :link="link" -->
        <!-- /> -->
      </nav>
    </div>
  </header>
</template>

<script setup>
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(
  `cdn/stories/navigation`,
  {
    version: "draft",
  }
);

const siteTitle = data.story.content.site_title;
const blocks = data.story.content.body;
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  padding: 0.5rem 2rem;
  background-color: var(--gray-200);
  z-index: 4;
}

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-link-main {
  font-family: "Belanosima";
  font-size: 2rem;
}

.header-navigation {
  display: flex;
  gap: 1.5rem;
}
</style>
