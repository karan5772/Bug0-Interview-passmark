import { test, expect } from "@playwright/test";
import { runSteps, configure } from "passmark";

configure({
  ai: {
    mode: "cua",
    gateway: "none", // CUA requires direct OpenAI access
  },
});

// test.use({
//   headless: !!process.env.CI,
// });

// test("Test Case 3: Login User with incorrect email and password", async ({ page }) => {
//   test.setTimeout(90_000); // increase timeout for AI execution and API calls

//   await runSteps({
//     page,
//     userFlow: "Login with incorrect credentials",
//     steps: [
//       { description: "Navigate to http://automationexercise.com" },
//       { description: "Verify that home page is visible successfully" },
//       { description: "Click on 'Signup / Login' button" },
//       { description: "Verify 'Login to your account' is visible" },
//       {
//         description: "Enter incorrect email address and password",
//         data: {
//           email: "incorrect_user@example.com",
//           password: "wrong_password_123"
//         }
//       },
//       { description: "Click 'login' button" }
//     ],
//     assertions: [
//       { assertion: "Verify error 'Your email or password is incorrect!' is visible" }
//     ],
//     test,
//     expect
//   });
// });

test("Shopping cart tests", async ({ page }) => {
  test.setTimeout(11160_000); // increase timeout for AI execution
  await runSteps({
    page,
    userFlow: "Add product to cart",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click Acme Circles T-Shirt" },
      { description: "Select color", data: { value: "White" } },
      { description: "Select size", data: { value: "S" } },
      { description: "Add to cart", waitUntil: "My Cart is visible" },
    ],
    assertions: [{ assertion: "You can see My Cart with Acme Circles T-Shirt" }],
    test,
    expect
  });
});