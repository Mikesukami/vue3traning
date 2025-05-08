<template>
  <p class="test2"> Home Page </p>
  <!-- <v-btn size="small" elevation="10" @click="test">
    <template #append>
      <v-icon>mdi-plus</v-icon>
    </template>
    add
  </v-btn> -->
  <p class="text-h6 ml-2">Left</p>
</template>

<script setup lang="ts">
// function test() {
//   console.log('test')
// }
</script>

<style lang="scss" scoped>
.test {
  @include gradient($primary, $tertiary)
}
</style>