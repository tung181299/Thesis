/*eslint-disable */
export function isRequired(str) {
  if (str !== null && str !== undefined) {
    return !(str.trim().length === 0);
  }
  return false;
}

export function isEmail(str = '') {
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(str);
}

export function isNumeric(num) {
  return !isNaN(parseInt(num, 10)) && isFinite(num);
}

export function isZipCode(value = '') {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
}

export function isPhoneNum(num) {
  let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return regex.test(num);
}

export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}

function isAcceptedCard(card_no) {
  let regex = null;

  // American Express :- Starting with 34 or 37, length 15 digits.
  regex = /^(?:3[47][0-9]{13})$/;
  if (card_no.match(regex)) return true;

  // Visa :- Starting with 4, length 13 or 16 digits.
  regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (card_no.match(regex)) return true;

  // MasterCard :- Starting with 51 through 55, length 16 digits.
  regex = /^(?:5[1-5][0-9]{14})$/;
  if (card_no.match(regex)) return true;

  // Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
  regex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  if (card_no.match(regex)) return true;
}

export function isCreditCard(card_no) {
  return !!card_no && isAcceptedCard(card_no);
}

export function isPassword(str) {
  if (str.length < 6) return false;
  return true;
}

export function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
}

export function userNameIsValid(str) {
  var error = '';
  var illegalChars = /\W/; // allow letters, numbers, and underscores

  if (str == '') {
    error = 'Enter your user name';
  } else if (str.length < 5 || str.length > 15) {
    error = 'Username must have 5-15 characters';
  } else if (illegalChars.test(str)) {
    error = 'Invalid username. Use only numbers and alphabets';
  } else {
    error = '';
  }
  return error;
}

export function emailIsValid(str) {
  var error = '';
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // allow letters, numbers, and underscores

  if (str == '') {
    error = 'Enter your email';
  } else if (!regex.test(str)) {
    error = 'Invalid email';
  } else {
    error = '';
  }
  return error;
}
