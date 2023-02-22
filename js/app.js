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
      // Valori countdown header
      remainingDays: "00",
      remainingHours: "00",
      remainingMinutes: "00",
      remainingSeconds: "00",
    };
  },
  computed: {
    // Ritorno i valori in formato normale e non in millisecondi
    formatSeconds: () => 1000,
    formatMinutes() {
      return this.formatSeconds * 60;
    },
    formatHours() {
      return this.formatMinutes * 60;
    },
    formatDays() {
      return this.formatHours * 24;
    },
  },
  methods: {
    // Funzione che crea il countdown
    showRemaining() {
      const timer = setInterval(() => {
        // Recupero momento attuale
        const now = new Date().getTime();

        // Fisso data scadenza countdown
        const end = new Date("Feb 22, 2023 18:00:00").getTime();

        // Creo distanza tra data scadenza e momento attuale
        const distance = end - now;

        // Se la distanza si azzera annullo countdown
        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        // Calcolo giorni
        const days = Math.floor(distance / this.formatDays);

        // Calcolo ore
        const hours = Math.floor(
          (distance % this.formatDays) / this.formatHours
        );

        // Calcolo minuti
        const minutes = Math.floor(
          (distance % this.formatHours) / this.formatMinutes
        );

        // Calcolo secondi
        const seconds = Math.floor(
          (distance % this.formatMinutes) / this.formatSeconds
        );

        // Condizioni per stmpare sempre i valori con due cifre
        this.remainingSeconds = seconds < 10 ? "0" + seconds : seconds;

        this.remainingMinutes = minutes < 10 ? "0" + minutes : minutes;

        this.remainingHours = hours < 10 ? "0" + hours : hours;

        this.remainingDays = days < 10 ? "0" + days : days;
      }, 1000);
    },
  },
  mounted() {
    // Richiamo funzione che genera il countdown al caricamento della pagina
    this.showRemaining();
  },
});

app.mount("#app");
