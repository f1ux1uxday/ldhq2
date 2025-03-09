<template>
  <footer class="footer">
    <layout-container class="footer-container">
      <div class="footer-heading heading-3">
        Lucas Dayton
      </div>
      <div class="footer-links">
        <a href="mailto:self@lucasdayton.com">
          self@lucasdayton.com
        </a>
      </div>
    </layout-container>
  </footer>
</template>

<script setup>
/*
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
*/
</script>

<style scoped>
.footer {
  padding: 2rem 0;
  background-color: var(--gray-200);

  .footer-container {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .footer-heading {
    color: var(--gray-700);
  }
}
</style>
