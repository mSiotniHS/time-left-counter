<template>
  <header>
    <h1 class="header">Time Left Counter</h1>
    <p class="credits">Made by Artem Abramyan</p>
    <button @click="showModal">Добавить</button>

    <Adder v-show="isModalVisible" @close="closeModal" />
  </header>
</template>

<script>
import Adder from "@/components/Adder.vue";

export default {
  name: "Header",
  components: {
    Adder
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
.header {
  margin: 0;
  font-size: 50px;
}

.credits {
  margin: 0;
}
</style>