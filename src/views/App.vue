<template>
  <div class="wrapper">
    <Header :active-tab="activeTab" @setActiveTab="setActiveTab"/>
    <Aside @refresh-note-list="onClickRefreshNoteList"
           @clear-favorites-list="onClickClearFavoritesList"
           :is-favorites="isFavorites"
    />
    <Main v-if="!isFavorites"
          :note-list="noteList"
          :title="'Список заметок'"
          @onClickFilterByAuthor="onClickFilterByAuthor"
          @on-click-add-to-favorites="onClickAddToFavorites"
          @on-click-remove-from-favorites="onClickRemoveFromFavorites"
    />
    <Main v-else
          :title="'Избранные заметки'"
          :note-list="favoritesList"
          @onClickFilterByAuthor="onClickFilterByAuthor"
          @on-click-remove-from-favorites="onClickRemoveFromFavorites"
          :is-favorite-list="true"
    />
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/common/Header.vue";
import Aside from "@/components/common/Aside.vue";
import Main from "@/components/common/Main.vue";
import Footer from "@/components/common/Footer.vue";
import { getNotes } from "@/api/helpers";
import type { Note } from '@/api/interfaces'

const noteList = ref<Note[]>([]);
const favoritesList = ref<Note[]>([]);
const savedNoteList = ref<Note[]>([]);
const isFilterActive = ref(false);
const isFavorites = ref(false);
const activeTab = ref<string>('noteList');

const onClickRefreshNoteList = async () => {
  noteList.value = await getNotes('random');
  isFilterActive.value = false;
};

const onClickClearFavoritesList = () => {
  favoritesList.value = [];
  noteList.value.forEach(el => {
    el.isFavorite = false;
  });
};

const setActiveTab = (tab: string) => {
  activeTab.value = tab;
  isFavorites.value = tab === 'favorites';
  favoritesList.value = JSON.parse(localStorage.getItem('favorites') || '[]');
};

const onClickFilterByAuthor = (authorSlug: string) => {
  if (!isFilterActive.value) {
    noteList.value = noteList.value.filter(el => el.authorSlug === authorSlug);
    isFilterActive.value = true;
  } else {
    noteList.value = savedNoteList.value;
    isFilterActive.value = false;
  }
};

const onClickAddToFavorites = (note: Note) => {
  if (!favoritesList.value) {
    note.isFavorite = true;
    favoritesList.value.push(note);
  } else {
    const existingIndex = favoritesList.value.findIndex(item => item._id === note._id);
    if (existingIndex === -1) {
      note.isFavorite = true;
      favoritesList.value.push(note);
    }
  }
};

const onClickRemoveFromFavorites = (id: string) => {
  favoritesList.value = favoritesList.value.filter(el => el._id !== id);
  const favoritesIdList = favoritesList.value.map(el => el._id);

  noteList.value.forEach(el => {
    el.isFavorite = favoritesIdList.includes(el._id);
  });
};

onMounted(async () => {
  noteList.value = await getNotes('random');
  savedNoteList.value = JSON.parse(JSON.stringify(noteList.value));
});

watch(favoritesList, () => {
  localStorage.setItem('favorites', JSON.stringify(favoritesList.value));
}, { deep: true });

</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: 100vh;
  grid-template-areas: "header header"
                        "aside main"
                        "footer footer";
  grid-template-columns: 150px 1fr;
  grid-template-rows: 100px auto minmax(200px, 250px);
}
</style>
