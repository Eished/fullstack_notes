class BaseModel {
  constructor(data, message) {
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(key, statusCode = 200, data, message) {
    super(message)
    if (key && statusCode) {
      this[key] = {
        StatusCode: statusCode,
      }
    }
    if (data) {
      this[key] = { ...this[key], ...data }
    }
  }
}

class ErrorModel extends BaseModel {
  constructor(statusCode, message) {
    super()
    this.details = [
      {
        code: statusCode,
        message,
      },
    ]
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
}
