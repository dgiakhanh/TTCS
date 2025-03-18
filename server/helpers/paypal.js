const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AbUntXLbAb8xU8FEBfzFvvhBxns1bkFciFiUVOPGNWmMqY7svmZ16Mw5waxGPtUAL9IVzD6vX99j42L2",
  client_secret: "EEpotHeKfOvfX2PVWQrPy8rQzPwsUfqFuufF5Z49PZ_SdJxa4dgRSJwSJ2VnCImRCuz3EJmycgIdYa7M",
});

module.exports = paypal;
