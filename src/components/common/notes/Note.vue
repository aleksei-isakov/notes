<template>
  <div class="note-container">
    <blockquote class="note-content-container">
      <q class="note-post">{{note.content}}</q>
        <footer class="note-footer">
          <div class="favorites-button-container">
            <button v-if="!note.isFavorite"
                    class="favorites-button borderless-button"
                    @click="onClickAddToFavorites"
                    title="В избранные"
            >
              <img class="favorites-icon"
                   src="@/assets/icons/add_to_favs.svg"
                   alt="Add to Favorites"
              >
            </button>
            <button v-else
                    class="favorites-button borderless-button"
                    @click="onClickRemoveFromFavorites"
                    title="Удалить из избранных"
            >
              <img class="favorites-icon"
                   src="@/assets/icons/remove_from_favs.svg"
                   alt="Add to Favorites"
              >
            </button>
          </div>
          <div class="note-author">
            <button class="note-author-button borderless-button"
                    @click="onCLickFilterByAuthor(note.authorSlug)"
            >
              —{{note.author}}
            </button>
            <p class="note-date">{{note.dateAdded}}</p>
          </div>
        </footer>
    </blockquote>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  note: {
    type: Object,
    default: () => {}
  }
})

const emit = defineEmits(['onClickFilterByAuthor', 'onClickAddToFavorites', 'onClickRemoveFromFavorites'])

const onClickAddToFavorites = () => {
  emit('onClickAddToFavorites', props.note)
}

const onClickRemoveFromFavorites = () => {
  emit('onClickRemoveFromFavorites', props.note._id)
}
const onCLickFilterByAuthor = (authorSlug) => {
  emit('onClickFilterByAuthor', authorSlug)
}


</script>

<style scoped lang="scss">
.note-container {
  border: 1px solid blue;
  display: flex;
  height: auto;
  width: 200px;
  flex-grow: 1;
  flex-basis: 20%;
  max-width: 23%;
  padding: $base-padding;
}

.favorites-button {
  position: relative;
  bottom: -10px;
}

.favorites-icon {
  width: 25px;
}

.note-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: $note-flex-gap
}

.note-post {
  min-height: 115px;
}
.note-author, .note-date {
  align-self: flex-end;
}
.note-footer {
  display: flex;
  justify-content: space-between;
}
</style>