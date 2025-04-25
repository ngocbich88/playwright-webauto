module.exports = {
    default: {
      require: [
        "features/step-definitions/*.ts",
        "features/support/*.ts"
      ],
      requireModule: ["ts-node/register"],
      format: ["allure-cucumberjs/reporter"],
      formatOptions: {
        // resultsDir: "allure-results",
        resultsDir: "/var/jenkins_home/workspace/allure-results",
      },
      paths: ["features/**/*.feature"],
      parallel: 0
    } 
  };
  

