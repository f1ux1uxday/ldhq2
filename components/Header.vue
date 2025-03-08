<template>
  <header class="header">
    <div class="header-bar">
      <NuxtLink
        to="/"
        class="header-link-main"
      >
        {{ content.site_title }}
      </NuxtLink>
      <nav class="header-navigation">
        <StoryblokComponent
          v-for="blok in content.body"
          class="nav-item"
          :key="blok._uid"
          :blok="blok"
        />
      </nav>
    </div>
  </header>
</template>

<script setup>
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(
  `cdn/stories/navigation`,
  {
    version: "draft"
  }
);

const content = data.story.content;
console.log(data);
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  padding: 0.5rem 1rem;
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

.header-link {
  font-family: "Belanosima";
  font-size: 1rem;
}
</style>
