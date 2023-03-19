pipeline {
    agent {
        docker { image 'node:alpine'}
    }
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