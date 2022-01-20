// collect validation messages and join them with ","
// https://github.com/sideway/joi/blob/master/API.md#validationerror
const collectValidationError = (error) =>
  error.details.map((e) => e.message).join(",");

module.exports = {
  collectValidationError,
};
