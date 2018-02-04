var MailerService = require("sails-service-mailer");

module.exports = MailerService("sendmail", {
  from: "no-reply@cv-haval.org",
  subject: "Новая заявка на участие в летнем лагере Хавал!",
  provider: {
    path: "/usr/sbin/sendmail"
  }
});
