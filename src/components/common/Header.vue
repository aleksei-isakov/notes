<template>
  <header class="header">
    <div class="header-navigation-wrapper">
      <ul class="header-navigation">
        <li :class="{'active' : activeTab === 'noteList'}" @click="onClickSetActiveTab('noteList')">Список заметок</li>
        <li :class="{'active' : activeTab === 'favorites'}" @click="onClickSetActiveTab('favorites')">Избранные</li>
      </ul>
    </div>
    <h3 class="header-title">Random notes application</h3>
  </header>
</template>

<script setup lang="ts">

defineProps({
  activeTab: {
    type: String,
    default: 'noteList'
  }
})
const emit = defineEmits(['setActiveTab'])

const onClickSetActiveTab = (tab: string): void => {
  emit('setActiveTab', tab);
};
</script>

<style scoped lang="scss">
.header {
  grid-area: header;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  align-items: center;
  justify-content: space-between;
  background-color: $header-color;
  padding: $base-padding;
}

.header-navigation {
  display: flex;
  gap: $base-flex-gap;
}
.active {
  text-decoration: underline;
}
</style>