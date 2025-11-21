// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://412d64b48c2ae2283d517480a5e371dc@o4510403196289024.ingest.us.sentry.io/4510403207430144",

  integrations:[
      Sentry.vercelAIIntegration({
        recordInputs:true,
        recordOutputs:true
      }),
      Sentry.consoleLoggingIntegration({levels: ["log","warn","error"]})
  ],
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
