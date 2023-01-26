import { useEffect, useState } from "react";

export default function useCheckPassword(password) {
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setMessage("");
    if (password.length > 0) {
      const checkMinLength = 8;
      const checkCapital = /[A-Z]/;
      // eslint-disable-next-line no-useless-escape
      const checkSpecialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      // Minimum 8 characters
      if (password.length < checkMinLength) {
        setMessage(`Minimal ${checkMinLength} karakter`);
        setValid(false);
        return;
      }

      // Must contain at least one capital letter
      if (!checkCapital.test(password)) {
        setMessage("Minimal 1 huruf kapital");
        setValid(false);
        return;
      }

      // Must contain at least one symbol
      if (!checkSpecialCharacters.test(password)) {
        setMessage("Minimal 1 karakter special");
        setValid(false);
        return;
      }
      setValid(true);
    }
  }, [password]);

  return [valid, message];
}
