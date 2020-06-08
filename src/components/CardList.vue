<template>
  <main class="card-list">
    <Card
      v-for="(date, idx) in dates"
      :key="idx"
      :title="date.title"
      :endDate="formatDate(date.endDate)"
    />
  </main>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CardList",
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

<style scoped>
.card-list {
  display: inline-grid;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  width: auto;
}

@media (max-width: 1280px) {
  .card-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1024px) {
  .card-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 767px) {
  .card-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 480px) {
  .card-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>