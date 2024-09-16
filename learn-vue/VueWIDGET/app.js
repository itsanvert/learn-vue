const app = Vue.createApp({
  data() {
    return {
      message: "Hello From Vue!",
      article: "Lorem Pisune",
      image: "https://avatars.githubusercontent.com/u/169228584?v=4",
      counter: 0,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
app.mount("#app");
