pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('Build') {
            steps {
                sh 'docker images'
            }
        }
    }
}