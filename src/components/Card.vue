<template>
  <div class="card" :style="cssVars">
    <div class="top">
      <h2 class="title">{{ title }}</h2>
      <p class="in">через</p>
    </div>
    <table>
      <tr>
        <th>{{ daysLeft }}</th>
        <th>{{ hoursLeft }}</th>
        <th>{{ minutesLeft }}</th>
        <th>{{ secondsLeft }}</th>
      </tr>
      <tr>
        <th>дней</th>
        <th>часов</th>
        <th>минут</th>
        <th>секунд</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    endDate: Date
  },
  computed: {
    timeLeft() {
      return this.endDate - this.currentTime;
    },
    daysLeft() {
      return Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
    },
    hoursLeft() {
      return Math.floor(this.timeLeft / (1000 * 60 * 60) - this.daysLeft * 24);
    },
    minutesLeft() {
      return Math.floor(
        this.timeLeft / (1000 * 60) -
          (this.daysLeft * 24 * 60 + this.hoursLeft * 60)
      );
    },
    secondsLeft() {
      return Math.floor(
        this.timeLeft / 1000 -
          (this.daysLeft * 24 * 60 * 60 +
            this.hoursLeft * 60 * 60 +
            this.minutesLeft * 60)
      );
    },
    cssVars() {
      const randIdx = Math.floor(Math.random() * this.colors.length);
      return {
        "--begin": this.colors[randIdx].begin,
        "--end": this.colors[randIdx].end,

        "--text-color": this.colors[randIdx].textColor
      };
    }
  },
  data() {
    return {
      currentTime: new Date(),
      colors: [
        {
          begin: "#ff00ef",
          end: "#007fff",
          textColor: "white"
        },
        {
          begin: "#ff00ef",
          end: "#00d4ff",
          textColor: "white"
        },
        {
          begin: "#020024",
          end: "#00d4ff",
          textColor: "white"
        },
        {
          begin: "#0575E6",
          end: "#021B79",
          textColor: "white"
        },
        {
          begin: "#43C6AC",
          end: "#F8FFAE",
          textColor: "black"
        },
        {
          begin: "#F0F2F0",
          end: "#000C40",
          textColor: "white"
        },
        {
          begin: "#E8CBC0",
          end: "#636FA4",
          textColor: "white"
        }
      ]
    };
  },
  methods: {
    update() {
      this.currentTime = new Date();
    }
  },
  created() {
    this.update();
  },
  mounted() {
    this.$options.interval = setInterval(this.update, 1000);
  },
  beforeDestroy() {
    clearInterval(this.$options.interval);
  }
};
</script>

<style scoped>
.card {
  width: 300px;
  border-radius: 20px;
  padding: 20px;

  color: var(--text-color);
  background: linear-gradient(90deg, var(--begin) 0%, var(--end) 100%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  justify-self: center;
}

.title,
.in {
  margin: 0;
}

.top {
  margin: 16px 0 16px;
}
</style>