function has_empty_value_in_array(array) {
  for (const value of array) {
    if (!value) {
      return true;
    }
  }
  return false;
}

module.exports = {
  has_empty_value_in_array
}