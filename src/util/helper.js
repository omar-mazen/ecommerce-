import { decodeJwt, jwtVerify } from "jose";

export function setCookie(key, value) {
  document.cookie = `${key}=${value};`;
}
export function getCookie(key) {
  const cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.startsWith(key + "=")) {
      return cookie.substring(key.length + 1);
    }
  }
  return null;
}
export function deleteCookie(key) {
  document.cookie = `${key}=;`;
}
export function isValidToken(token) {
  const { exp } = decodeJwt(token);
  if (Date.now() >= exp * 1000) {
    return false;
  } else {
    return true;
  }
}
export function getCardType(number) {
  // visa
  var re = new RegExp("^4");
  if (number.match(re) != null)
    return { type: "Visa", icon: "/PaymentMethod/visa.svg" };

  // Mastercard
  if (
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      number
    )
  )
    return {
      type: "Mastercard",
      icon: "/PaymentMethod/mastercard.svg",
    };

  // Maestro
  if (/^(5[06-8]|6\d)\d{14,17}$/.test(number))
    return {
      type: "Maestro",
      icon: "/PaymentMethod/maestro.svg",
    };
  // UnionPay
  if (/^(62|88)\d{14,17}$/.test(number))
    return {
      type: "UnionPay",
      icon: "/PaymentMethod/unionpay.svg",
    };
  //ELO
  if (
    /^((((50670[7-8])|(50671[2-9])|(50672[0-1])|(50672[4-9])|(50673[0-9])|(50674[0-8])|(50675[0-3])|(50675[5-8])|(50676[0-9])|(50677[0-3])|(50677[5-8])|(50678[0-9])|(50679[0-8]))\d{10})|(5067[0-6]\d{13}))$/.test(
      number
    )
  )
    return {
      type: "ELO",
      icon: "/PaymentMethod/elo.svg",
    };

  // AMEX
  re = new RegExp("^3[47]");
  if (number.match(re) != null)
    return {
      type: "american-express",
      icon: "/PaymentMethod/american-express.svg",
    };

  // Discover
  re = new RegExp(
    "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
  );
  if (number.match(re) != null)
    return {
      type: "Discover",
      icon: "/PaymentMethod/discover.svg",
    };

  // Diners - Carte Blanche
  re = new RegExp("^30[0-5]");
  if (number.match(re) != null)
    return { type: "Diners-club", icon: "/PaymentMethod/diners.svg" };

  // JCB
  re = new RegExp("^35(2[89]|[3-8][0-9])");
  if (number.match(re) != null)
    return { type: "JCB", icon: "/PaymentMethod/jcb.svg" };

  // Visa Electron
  re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
  if (number.match(re) != null)
    return {
      type: "Visa Electron",
      icon: "/PaymentMethod/visa.svg",
    };

  // Visa Electron
  re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
  if (number.match(re) != null)
    return {
      type: "Visa Electron",
      icon: "/PaymentMethod/visa.svg",
    };

  return "";
}
