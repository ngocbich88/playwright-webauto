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

        // stage('Install Playwright Browsers') {
        //     steps {
        //         sh 'npx playwright install --with-deps'
        //     }
        // }

        stage('Run Cucumber Tests') {
            steps {
                script {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        // Run Cucumber tests
                        sh 'npx cucumber-js'
                    }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    // Generate the Allure report from the results folder
                    sh 'allure generate /var/jenkins_home/workspace/playwrightwebauto/allure-results --clean -o /var/jenkins_home/workspace/playwrightwebauto/allure-report'
                    
                    // Debugging: Check if the report was generated
                    sh 'ls -al /var/jenkins_home/workspace/playwrightwebauto/allure-report'  // Ensure the report was generated
                }
            }
        }

        stage('Archive Allure Results') {
            steps {
                // Archive Allure results (Ensure that the path matches your Docker container's filesystem)
                archiveArtifacts artifacts: 'allure-results/**/*.*', allowEmptyArchive: true
            }
        }

        stage('Publish Allure Report') {
            steps {
                // Use Allure Jenkins plugin to publish the results
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: '/var/jenkins_home/workspace/playwrightwebauto/allure-results']]
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
