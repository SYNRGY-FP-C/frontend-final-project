import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const { registerUser, isLoading } = useAuth();
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
  })
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false });
    try {
      await registerUser(form);
      setResponse({ isLoading: false, isError: false });
    } catch (error) {
      setResponse({ isLoading: false, isError: true });
    }
    console.log(form);
  };

  return (
    <div >
      <form title="Register" className="flex flex-col" onSubmit={handleSubmit}>
      {response.isError && (
            <alert>Something went wrong. Please try again.</alert>
          )}
        <input type="text" placeholder="Nama" label="FullName" value={form.fullname} onChange={(e) => setForm({ ...form, fullname: e.target.value })}/>
        <input type="email" placeholder="email" label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="password" label="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
