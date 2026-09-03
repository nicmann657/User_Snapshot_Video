import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./test",
    use: {
        video: "on",
        screenshot: "only-on-failure",
    },
});