export const ValidationUtil = {
  requiredValidator: (value) => {
    if (Array.isArray(value) && value.length === 0) return "Required";
    return value ? undefined : "Required";
  },
  confirmPasswordValidator: (confirmPassword, newPassword) => {
    return confirmPassword === newPassword
      ? undefined
      : "Confirm password doesn't match with new password";
  },
  emailValidator: (email) => {
    return /\S+@\S+\.\S+/.test(email)
      ? undefined
      : "Please provide a valid email address";
  },
  mobileNumberValidator: (value) => {
    const mobileOperators = ["017", "013", "019", "014", "018", "015"];
    if (isNaN(value)) return "Only numbers are allowed";
    if (value?.length !== 11) return "Mobile number should be 11 digit";
    const startsWith = value.substring(0, 3);
    if (!mobileOperators.includes(startsWith))
      return "Please provide valid mobile operator number";
  },
  composeValidators:
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      ),
};
