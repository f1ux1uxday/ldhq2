<template>
  <header class="header" :class="{portrait: isPortrait}">
    <layout-container class="nav-container">
      <div class="header-bar">
        <div class="header-main">
          <NuxtLink
            to="/"
            class="header-link-main"
            @click="closeNav"
          >
            {{ siteTitle }}
          </NuxtLink>
          <button
            v-if="isPortrait"
            class="header-navigation-toggle"
            @click="toggleNav"
          >
            <i
              class="pi pi-caret-down"
              :class="{'nav-open': isNavOpen}"
            />
          </button>
        </div>
        <nav
          v-if="!isPortrait"
          class="header-navigation"
        >
          <StoryblokComponent
            v-for="blok in blocks"
            class="nav-item"
            :key="blok._uid"
            :blok="blok"
          />
        </nav>
      </div>
    </layout-container>
      <nav
        v-if="isPortrait"
        class="header-navigation-mobile"
        :class="{'open': isNavOpen}"
      >
        <StoryblokComponent
          v-for="blok in blocks"
          class="nav-item"
          :key="blok._uid"
          :blok="blok"
          @click="closeNav"
        />
      </nav>
  </header>
</template>

<script setup>
const config = useRuntimeConfig();
const storyblokApi = useStoryblokApi();
const route = useRoute();

const { data } = await storyblokApi.get(
  `cdn/stories/navigation`,
  {
    version: config.public.docVersion,
  }
);

const siteTitle = data.story.content.site_title;
const blocks = data.story.content.body;

const isPortrait = useMediaQuery('(max-width: 720px)', {
  ssrWidth: 500
});

const isNavOpen = ref(!isPortrait);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
}

const closeNav = () => {
  if (isPortrait) {
    isNavOpen.value = false;
  }
}

watch(route, () => {
  closeNav();
})
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
  transition: border-color 0.15s ease-in;
}

.nav-container {
  position: relative;
  z-index: 4;
}

.header-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  z-index: 4;

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.header-main {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  z-index: 4;
}

.header-link-main {
  padding: 2px 6px;
  background-color: var(--sea);
  border-radius: 0.25rem;
  color: var(--paper);
  font-family: "Belanosima";
  font-size: 2rem;
  z-index: 4;
}

.header-navigation-toggle {
  border: none;
  background: transparent;
  font-size: 1.5rem;
  z-index: 4;

  i {
    color: var(--coral);
    transform: rotate(0);
    transition: all 0.15s ease-in;
  }

  i.nav-open {
    transform: rotate(180deg);
  }
}

.header-navigation-mobile {
  position: absolute;
  top: 60px;
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  width: calc(100% - (2rem));
  padding: 1.5rem 1rem;
  background-color: transparent;
  backdrop-filter: blur(8px);
  border-bottom: 2px solid var(--gray-200);
  opacity: 0;
  transition: opacity 0.2s ease-in;

  &.open {
    opacity: 1;
  }
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
