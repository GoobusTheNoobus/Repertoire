<template>
  <main class="not-found">
    <h1 class="error">ERROR 404: Page not found</h1>
    <p>All openings are discovered, not created.</p>
    <RouterLink to="/" class="home-button"
      >Return to starting position</RouterLink
    >
  </main>
</template>

<style lang="css" scoped>
.not-found {
  text-align: center;
}

.error {
  font-size: 4rem;
  margin-top: 2rem;
}

p {
  color: var(--c-muted);
  font-size: 1.3rem;
  font-style: italic;
}

.home-button {
  display: inline-block;
  font-weight: 900;
  color: var(--c-foreground);
  text-decoration: none;
  margin: 4rem auto 1rem;
  font-size: 1.3rem;

  width: 30rem;
  height: 3rem;

  padding: 1rem 0px 1rem;

  border: 1px var(--c-foreground) solid;
  border-radius: 20px;

  overflow: hidden;
  background-color: var(--c-accent);

  transition: 300ms ease;
}

.home-button:hover {
  background-color: var(--c-accent-darker);
}
</style>
