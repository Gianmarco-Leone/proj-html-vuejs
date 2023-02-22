const app = Vue.createApp({
  data() {
    return {
      countdownBar: [
        {
          text: "Starts TOMORROW! Our biggest event of the year...",
          class: "my-small-text",
        },
        {
          classIcon: "fa-regular fa-clock",
          class: "ms-3",
        },
        {
          text: "Get ticket",
          class: "my-btn my-primary-btn",
        },
      ],
      logo: "dark-logo.png",
      listLinks: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
      listClassIcons: [
        "fa-brands fa-twitter",
        "fa-brands fa-facebook-f",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin",
      ],
      footerSections: [
        {
          title: "Address",
          specifications: [
            "382 NE 191st St # 87394 Miami, FL 33179-3899",
            "+1(305)547-9909 (9am - 5pm EST, Monday - Friday)",
            "support@maxcoach.com",
          ],
          listIcons: [
            "fa-brands fa-facebook-f",
            "fa-brands fa-twitter",
            "fa-brands fa-instagram",
            "fa-brands fa-linkedin",
          ],
        },
        {
          title: "Explore",
          links: [
            "Start here",
            "Success story",
            "Blog",
            "Courses",
            "Contact us",
          ],
        },
        {
          title: "Information",
          links: [
            "Membership",
            "Purchase guide",
            "Privacy policy",
            "Terms of services",
          ],
        },
        {
          title: "Instagram",
          link: "@maxcoach",
          images: [
            "120012142_177596140500760_8623485824101406058_n.jpg",
            "120084500_197897808368764_8114555493043279565_n.jpg",
            "120099363_364334431619755_7198812647386067017_n.jpg",
          ],
        },
        "2020 Maxcoach. All Rights Reserved",
      ],
      remainingDays: "00",
      remainingHours: "00",
      remainingMinutes: "00",
      remainingSeconds: "00",
    };
  },
  mounted() {
    // Imposto data scadenza countdown
    const countDownDate = new Date("Feb 22, 2023 18:00:00").getTime();

    // Aggiorno countdown ogni secondo
    let countDownTime = setInterval(function () {
      // Recupero momento attuale
      let now = new Date().getTime();

      // Dichiaro distanza tra momento attuale e scadenza countdown
      let remainingTime = countDownDate - now;

      // Calcolo giorni rimanenti
      let calculatedDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      // console.log(calculatedDays);

      // Calcolo ore rimanenti
      let calculatedHours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      // console.log(calculatedHours);

      // Calcolo minuti rimanenti
      let calculatedMinutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      // console.log(calculatedMinutes);

      // Calcolo secondi rimanenti
      let calculatedSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      // console.log(calculatedSeconds);

      // Se il countdown arriva a zero
      if (remainingTime <= 0) {
        // Blocco countdown

        clearInterval(countDownTime);
        // Setto i valori a 0
      }
    }, 1000);

    //   this.seconds = seconds < 10 ? "0" + seconds :
  },
});

app.mount("#app");
