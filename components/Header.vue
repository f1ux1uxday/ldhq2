<template>
  <header class="header">
    <div class="header-bar">
      <NuxtLink
        to="/"
        class="header-link-main"
      >
        LDHQ
      </NuxtLink>
      <nav class="header-navigation">
        <NuxtLink
          to="/about"
          class="header-link"
        >
          About
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

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
