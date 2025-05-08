# playwright-webauto

Playwright - web auto
https://github.com/ngocbich88/playwright-webauto.git

Install nodes, cucumber, allure cucumber report, playwright

If you're using Cucumber only
npm install -D playwright
-> import { Page } from 'playwright';

NPM run test
npm run allure:report

allure generate allure-results --clean -o allure-report
allure serve allure-results

Config cucumber.js	 format: ["allure-cucumberjs/reporter"],
      formatOptions: {
        resultsDir: "allure-results",
      },
Run cucumber test	npx cucumber-js
https://allurereport.org/docs/cucumberjs/ 	
Generate report	

Docker - Jenkin - playwright

Cai jenkin + plugin
Cai jenkin	docker pull jenkins/jenkins:lts		
run Jenkins as a container:	docker run -d -p 8080:8080 -p 50000:50000 --name jenkins jenkins/jenkins:lts
	7bbe12615adf49a3bc914ca44a09b80bf987975b67101075270ad63c7ded589e	
Get pwd	docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
		docker restart 08e132c450e5
Normal vs root permission to run command inside container	 docker exec -it 08e132c450e5 bash
	docker exec -u root -it 08e132c450e5 bash
	(This is separate installation, not from docker file)
Intall nodejs: 
apt-get update
apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
node -v
npm -v

Install playwright:
apt-get update
apt-get install -y wget curl ca-certificates libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libxss1 libgdk-pixbuf2.0-0 libgbm-dev
Install allure cucumber	npm cache verify
npm cache clean --force
Cd ~/workspace/playwright-webauto

npm install --save-dev allure-cucumberjs allure-js-commons

npm install -g allure-commandline --save-dev
		
	Inside docker container 
chown -R jenkins:jenkins allure-report
chmod -R 755 allure-report
		
	ssh-keyscan github.com >> ~/.ssh/known_hosts
		
	Install plugin
 Step 1: Install the SSH Agent Plugin
Go to Jenkins Dashboard → Manage Jenkins

Click Manage Plugins

Under the Available tab (or Installed, if already there), look for:

SSH Agent Plugin

Install it and restart Jenkins afterward (very important for plugins to load properly).
jenkins-plugin-cli --plugins ssh-agent:384.ve275343791a_6		
	Go to Manage Jenkins > Manage Plugins > Available and search for "Allure" to install the Allure Jenkins Plugin.		



 "requireModule": ["ts-node/register"] (cucumber.json)


Backup cucumber.js
module.exports = {
    default: {
      require: [
        "features/step-definitions/*.ts",
        "features/support/*.ts"
      ],
      requireModule: ["ts-node/register"],
      format: ["allure-cucumberjs/reporter"],
      formatOptions: {
        resultsDir: "allure-results",
      },
      paths: ["features/**/*.feature"],
      parallel: 0
    }
  };
  



