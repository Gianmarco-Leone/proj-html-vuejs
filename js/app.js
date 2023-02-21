const app = Vue.createApp({
  data() {
    return {
      logo: "dark-logo.png",
      listLinks: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
      listClassIcons: [
        "fa-brands fa-twitter",
        "fa-brands fa-facebook-f",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin",
      ],
    };
  },
});

app.mount("#app");
