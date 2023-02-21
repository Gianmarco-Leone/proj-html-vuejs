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
    };
  },
});

app.mount("#app");
