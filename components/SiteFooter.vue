<template>
  <footer class="footer">
    <layout-container class="footer-container">
      <div class="footer-heading heading-3">
        Lucas Dayton
      </div>
      <div class="footer-links">
        <a
          class="footer-link"
          href="mailto:self@lucasdayton.com"
        >
          self@lucasdayton.com
        </a>
      </div>
    </layout-container>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  padding: 1rem 0;
  background-color: var(--gray-100);

  @media (min-width: 720px) {
    padding: 2rem 0;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    @media (min-width: 720px) {
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      row-gap: 0.5rem;
    }
  }

  .footer-heading {
    color: var(--coral);
  }

  .footer-links {
    padding-bottom: 0.5rem;

    @media (min-width: 720px) {
      padding-bottom: 0;
    }
  }

  .footer-link {
    font-family: "Fraunces";
    color: var(--sea);
    padding: 0.25rem 1.5rem 6px;
    background-color: var(--paper);
    border: 2px solid var(--sea);
    border-radius: 0.75rem;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: var(--sea);
      color: var(--paper);
    }
  }
}
</style>
