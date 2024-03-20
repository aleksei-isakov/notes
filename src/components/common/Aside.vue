<template>
  <aside class="aside">
    <button v-if="!isFavorites"
            class="aside-button"
            @click="onClickRefreshList"
    >
      Обновить список
    </button>
    <button v-else
            class="aside-button"
            @click="onClickClearFavoritesList"
    >
      Очистить список
    </button>
  </aside>
</template>

<script setup lang="ts">
defineProps({
  isFavorites: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['refreshNoteList', 'clearFavoritesList'])
const onClickRefreshList = () => {
  emit('refreshNoteList')
}

const onClickClearFavoritesList = () => {
  emit('clearFavoritesList')
}
</script>

<style scoped lang="scss">
.aside {
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: $base-flex-gap;
  background-color: red;
  padding: $base-padding;
}
</style>