// module.exports = {
//     use: {
//       headless: true,
//     },
//   };
const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});
