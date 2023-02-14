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

export const imageToBase64 = (file: File) => {
  if (!file) return null;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const urlToObject = async (url) => {
  if (!url || url === "undefined") return null;
  if (url.startsWith("http://")) {
    url = url.replace(/http:\/\//g, "https://");
  }
  try {
    const response = await fetch(url);
    const blob = await response?.blob();
    const name = url?.split("/")?.pop();
    return new File([blob], name, { type: blob?.type });
  } catch (error) {
    const response = await fetch("/images/Kosthub.png");
    const blob = await response?.blob();
    const name = url?.split("/")?.pop();
    return new File([blob], name, { type: blob?.type });
  }
};

export const urlToBase64 = (url) => {
  if (!url || url === "undefined") return null;
  if (url.startsWith("http://")) {
    url = url.replace(/http:\/\//g, "https://");
  }
  return fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
};

export const toHTTPS = (url) => {
  if (!url || url === "undefined") return null;
  if (url.startsWith("http://")) {
    url = url.replace(/http:\/\//g, "https://");
  }
  return url;
};

export const RE_DIGIT = new RegExp(/^\d+$/);
