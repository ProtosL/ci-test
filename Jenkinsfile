pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        warnError(message: '123')
        warnError(catchInterruptions: true, message: 'test')
      }
    }

  }
}