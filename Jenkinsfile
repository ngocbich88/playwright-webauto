pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
       stage('Checkout Code') {
            steps {
                sshagent(['github-ssh-pem']) {
                    script {
                        // Ensure Git uses the correct private key
                        sh '''
                            # Ensure ssh-agent is running
                            # Fetch repository from GitHub
                        '''
                    }
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
