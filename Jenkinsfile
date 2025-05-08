pipeline {
    agent any

    tools {
            allure 'Allure-2.34.0' // Name from Global Tool Configuration
        }   
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
                sh 'allure generate allure-results --clean -o allure-report'
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
                    results: [[path: 'allure-results']]
                ])

            }
        }   
    }

    post {
        success {
            echo '✅ Tests passed!'

            // Publish Allure HTML report
            publishHTML(target: [
                reportName: 'Allure Report',
                reportDir: 'allure-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: false
            ])
        }
        failure {
            echo '❌ Tests failed!'
        }
        always {
            echo 'Pipeline execution finished.'
        }
    }

}
