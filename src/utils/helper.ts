export const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

export const phoneNumberFormatter = function (number: string) {
  let formatted = number.replace(/\D/g, "");
  if (formatted.startsWith("0")) {
    formatted = "+62" + formatted.substring(1);
  }
  if (formatted.startsWith("62")) {
    formatted = "+" + formatted;
  }

  return formatted;
};

export const originalDate = (date) => {
  return date.split("-").reverse().join("-");
};

export const RE_DIGIT = new RegExp(/^\d+$/);
