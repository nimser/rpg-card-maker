import { defineConfig } from "cypress"
import "dotenv/config"

export default defineConfig({
  env: {
    host: process.env.FRONTEND_URL,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
