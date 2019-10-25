const MIN_LOGIN_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 8;

class ValidationHelpers {
  validateEmail(email) {
    const emailRegex = RegExp(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailRegex.test(email)) {
      return true;
    }
    return false;
  }

  validatePassword(password) {
    const passwordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/);
    if (!passwordRegex.test(password)) {
      return true;
    }
    return false;
  }

  validateLength(value, minLength) {
    if (value.length < minLength) {
      return true;
    }
    return false;
  }
  validateLoginLength(login) {
    return this.validateLength(login, MIN_LOGIN_LENGTH);
  }
  validatePasswordLength(password) {
    return this.validateLength(password, MIN_PASSWORD_LENGTH);
  }
}

const validationHelpers = new ValidationHelpers();
export default validationHelpers;
