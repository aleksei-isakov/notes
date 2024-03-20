<template>
  <main class="main">
    <h2>{{title}}</h2>
    <div class="notes-wrapper">
      <Note v-for="note in noteList"
            :note="note"
            :key="note._id"
            @onClickFilterByAuthor="onClickFilterByAuthor"
            @on-click-add-to-favorites="onClickAddToFavorites"
            @on-click-remove-from-favorites="onClickRemoveFromFavorites"
      />
      <p v-if="!noteList.length && isFavoriteList"> Список избранного пуст! <br> Добавьте понравившиеся заметки из списка.</p>
      <p v-if="!noteList.length && !isFavoriteList"> Ошибка загрузки данных! <br> Пожалуйста, повторите попытку позже...</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import Note from "@/components/common/notes/Note.vue";

const props = defineProps({
  noteList: {
    type: Array,
    default: []
  },
  isFavoriteList: {
    type: Boolean,
    required: false
  },
  title: {
    type: String,
  }
})

const emit = defineEmits(['onClickFilterByAuthor', 'onClickAddToFavorites', 'onClickRemoveFromFavorites'])

const onClickFilterByAuthor = (authorSlug) => {
  emit('onClickFilterByAuthor', authorSlug)
}

const onClickAddToFavorites = (note) => {
  emit('onClickAddToFavorites', note)
}

const onClickRemoveFromFavorites = (id) => {
  emit('onClickRemoveFromFavorites', id)
}
</script>

<style scoped lang="scss">
.main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: $base-flex-gap;
  background-color: green;
  margin: 0 auto;
  min-width: 1080px;
  max-width: 1080px;
  padding: $base-padding;
}
.notes-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: $base-flex-gap;
}
</style>