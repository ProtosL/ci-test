pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        warnError(message: '123')
        warnError(catchInterruptions: true, message: 'test')
      }
    }

    stage('fail') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS', catchInterruptions: true)
      }
    }

  }
}