<template>
  <main class="card-list">
    <Card
      v-for="event in events"
      :key="event._id"
      :title="event.title"
      :endDate="formatDate(event.endDate)"
    />
  </main>
</template>

<script>
import Card from "@/components/Card.vue";

import DatabaseBureau from "@/data model/DatabaseBureau.js";

export default {
  name: "CardList",
  components: {
    Card
  },
  computed: {
    events() {
      return this.db.getEvents();
    }
  },
  data() {
    return {
      db: new DatabaseBureau()
    };
  },
  methods: {
    formatDate(date) {
      const [year, month, day] = date.split("-");
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