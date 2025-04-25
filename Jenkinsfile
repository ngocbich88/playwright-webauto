pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
       stage('Checkout Code') {
            steps {
                 withCredentials([sshUserPrivateKey(credentialsId: 'github-ssh-pem', keyFileVariable: 'SSH_KEY')]) {
                    // Ensure SSH directory exists and GitHub key is added to known_hosts
                    sh '''
                    mkdir -p ~/.ssh
                    chmod 700 ~/.ssh
                    ssh-keyscan github.com >> ~/.ssh/known_hosts
                    chmod 644 ~/.ssh/known_hosts
                    '''
                    // SSH GitHub access using the added SSH key credential (ID should match)
                    git 'git@github.com:ngocbich88/playwright-webauto.git'
                 }
            }
       }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }   
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                sh 'npx cucumber-js'
            }
        }

        stage('Archive Allure Results') {
            steps {
                archiveArtifacts artifacts: 'allure-results/**/*.*', allowEmptyArchive: true
            }
        }
        stage('Publish Allure Report') {
        steps {
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
                ])
            }
        }

    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo '✅ Tests passed!'
        }
        failure {
            echo '❌ Tests failed!'
        }
    }
}
