<template>
  <div id="app">
    <h1 class="header">Time Left Counter</h1>
    <div class="cards">
      <Card
        v-for="(date, idx) in dates"
        :key="idx"
        :title="date.title"
        :endDate="formatDate(date.endDate)"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "App",
  components: {
    Card
  },

  data() {
    return {
      dates: [
        {
          title: "День рождения",
          endDate: "07.08.2020"
        },
        {
          title: "Новый год",
          endDate: "01.01.2021"
        },
        {
          title: "Конец лета",
          endDate: "01.09.2020"
        },
        {
          title: "ЕГЭ по информатике",
          endDate: "03.07.2020"
        },
        {
          title: "ЕГЭ по русскому языку",
          endDate: "06.07.2020"
        },
        {
          title: "ЕГЭ по математике",
          endDate: "10.07.2020"
        }
      ]
    };
  },
  methods: {
    formatDate(date) {
      const [day, month, year] = date.split(".");
      return new Date(year, month - 1, day);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  font-size: 50px;
}

.cards {
  display: inline-grid;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  width: auto;
}

@media (max-width: 1280px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 767px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 480px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
