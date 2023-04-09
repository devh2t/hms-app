const config = {
  // Extend the translations
  translations: {
    fr: {
      "Auth.form.email.label": "Votre Email",
      "Auth.form.button.login.strapi":
        "Se connecter avec l'application HMS Maroc",
      "Auth.form.welcome.subtitle":
        "Connectez-vous à votre compte de l'application HMS-Maroc",
      User: "Utilisateurs",
      "Auth.form.email.placeholder": "dev@gmail.com",
      "Auth.form.button.login.strapi":
        "Se connecter avec l'application HMS Maroc",
      "Settings.application.strapi-version": "version de l'application",
      "Settings.application.strapiVersion": "version de l'application",
      "Content Manager": "Manager le contenu",
      "Content Type Builder": "Builder types de contenu",
      "Settings.permissions.users.listview.header.subtitle":
        "Tous les utilisateurs ayant accès au panneau d'administration de l'application",
      "notification.version.update.message":
        "Une nouvelle version de l'application est disponible !",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
  // Override or extend the theme
  theme: {
    // overwrite light theme properties
    light: {
      // colors: {
      //   primary100: "#f6ecfc",
      //   primary200: "#e0c1f4",
      //   primary500: "#ac73e6",
      //   primary600: "#9736e8",
      //   primary700: "#8312d1",
      //   danger700: "#b72b1a",
      // },
    },

    // overwrite dark theme properties
    dark: {
      // ...
    },
  },
  locales: [
    "ar",
    "fr",
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
