import { test, expect } from "@playwright/test";
import { runSteps, configure } from "passmark";

configure({
  ai: {
    gateway: "openrouter",
  },
});

test.use({
  headless: !!process.env.CI,
});

test("Test Case 3: Login User with incorrect email and password", async ({
  page,
}) => {
  test.setTimeout(90_000);

  await runSteps({
    page,
    userFlow: "Login with incorrect credentials",
    steps: [
      { description: "Navigate to http://automationexercise.com" },
      { description: "Verify that home page is visible successfully" },
      { description: "Click on 'Signup / Login' button" },
      { description: "Verify 'Login to your account' is visible" },
      {
        description: "Enter incorrect email address and password",
        data: {
          email: "incorrect_user@example.com",
          password: "wrong_password_123",
        },
      },
      { description: "Click 'login' button" },
    ],
    assertions: [
      {
        assertion:
          "Verify error 'Your email or password is incorrect!' is visible",
      },
    ],
    test,
    expect,
  });
});