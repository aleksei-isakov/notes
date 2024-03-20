<template>
  <footer class="footer">
    <div class="footer-link-container">
      <div>
        <a href="/">Ссылка футера 1</a>
      </div>
      <div>
        <a href="/">Ссылка футера 2</a>
      </div>
      <div>
        <a href="/">Ссылка футера 3</a>
      </div>
      <div>
        <a href="/">Ссылка футера 4</a>
      </div>
    </div>
    <div class="footer-link-container">
      <div>
        <a href="/">Ссылка футера 5</a>
      </div>
      <div>
        <a href="/">Ссылка футера 6</a>
      </div>
      <div>
        <a href="/">Ссылка футера 7</a>
      </div>
      <div>
        <a href="/">Ссылка футера 8</a>
      </div>
    </div>
    <div class="footer-link-container">
      <div>
        <a href="/">Ссылка футера 9</a>
      </div>
      <div>
        <a href="/">Ссылка футера 10</a>
      </div>
      <div>
        <a href="/">Ссылка футера 11</a>
      </div>
      <div>
        <a href="/">Ссылка футера 12</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  grid-area: footer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: yellow;
  padding: $base-padding;
}
.footer-link-container {
  display: flex;
  flex-direction: column;
  gap: $base-flex-gap;
}
</style>