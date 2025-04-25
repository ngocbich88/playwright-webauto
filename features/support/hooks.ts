// hooks.ts
import { Before, After } from '@cucumber/cucumber';
import { world } from './world'; // adjust path as needed

Before({ timeout: 10000 }, async function () {
  console.log('Initializing browser...');
  await world.init();
});

After({ timeout: 10000 }, async function () {
  console.log('Cleaning up browser...');
  await world.cleanup();
});
