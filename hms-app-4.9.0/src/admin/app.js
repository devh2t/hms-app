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
      "content-manager.apiError.This attribute must be unique":
        "Le champ {field} doit être unique",
      "global.plugins.i18n": "Langues",
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
      colors: {
        primary100: "#D6E4FF",
        primary200: "#ADC8FF",
        primary500: "#3366FF",
        primary600: "#254EDB",
        primary700: "#1939B7",
        danger700: "#B71611",
      },
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
