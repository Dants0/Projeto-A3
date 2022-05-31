class APIError {
  constructor(code, message, reasons) {
    this.code = code
    this.message = message
    this.reasons = [reasons] || []
  }

  static WrongParams(message, reasons) {
    return new APIError(406, message, reasons)
  }

  static Unauthorized(message = 'Unauthorized', reasons) {
    return new APIError(401, message, reasons)
  }

  static BadRequest(message, reasons) {
    return new APIError(400, message, reasons)
  }

  static NotFound(message, reasons) {
    return new APIError(404, message, reasons)
  }

  static Internal() {
    return new APIError(500, 'Internal error')
  }
}

module.exports = APIError