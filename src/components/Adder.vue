<script>
import DatabaseBureau from "@/data model/DatabaseBureau.js";

export default {
  name: "Adder",
  data() {
    return {
      title: null,
      endDate: null
    };
  },
  computed: {
    today() {
      const formatNum = num => (num < 10 ? `0${num}` : num);

      const today = new Date();
      const year = today.getFullYear();
      const month = formatNum(today.getMonth() + 1);
      const day = formatNum(today.getDate());

      const todayString = `${year}-${month}-${day}`;
      return todayString;
    }
  },
  methods: {
    submit() {
      const db = new DatabaseBureau();
      const event = {
        title: this.title,
        endDate: this.endDate
      };
      db.addEvent(event);

      this.close();
    },
    close() {
      this.$emit("close");
    }
  },
  mounted() {
    console.log(this.today);
  }
};
</script>

<template>
  <transition name="modal-fade">
    <div class="background">
      <div class="modal">
        <div class="header">
          <h3 class="title">Добавить событие</h3>
          <button @click="close">Закрыть</button>
        </div>

        <div class="content">
          <form ref="form">
            <label for="title">Название:</label>
            <input
              type="text"
              name="title"
              v-model="title"
              autocomplete="off"
            /><br />

            <label for="endDate">Дата события:</label>
            <input type="date" name="endDate" v-model="endDate" :min="today" />
          </form>
        </div>

        <button @click="submit">Добавить</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;

  padding: 20px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 15px;
}

.title {
  margin: 0;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>