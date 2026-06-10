import { test } from "@playwright/test";

test("check positions", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:8081/");
  await page.waitForTimeout(1000);

  const orbit = await page.locator(".planet-orbit").boundingBox();
  const astronaut = await page.locator(".astronaut-img").boundingBox();

  console.log("=== BOUNDING BOXES ===");
  console.log("Planet Orbit:", orbit);
  console.log("Astronaut:", astronaut);
});
