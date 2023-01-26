/* eslint-disable @next/next/no-img-element */ import Alert from "@/components/Alert";
import BackButton from "@/components/buttons/BackButton";
import Button from "@/components/buttons/Button";
<<<<<<< HEAD
import InputPassword from "@/components/forms/InputPassword";
import { ROLE_ADMIN, ROLE_USER } from "@/constants/roles";
import { useAuth } from "@/contexts/AuthContext";
import useCheckPassword from "@/hooks/useCheckPassword";
=======
import InputWithLabel from "@/components/forms/InputWithLabel";
import { ROLE_USER } from "@/constants/roles";
>>>>>>> 19119df51d0cebb1bad81ddd29eb86386bea3e43
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import { useState } from "react";

export default function Settings() {
  const { changePassword } = useAuth();
  const [form, setForm] = useState({
    password: "",
    newpassword: "",
    renewpassword: "",
  });

  const [show, setShow] = useState({
    password: false,
    newpassword: false,
    renewpassword: false,
  });

  const [isNewPasswordValid, newPasswordMessage] = useCheckPassword(
    form.newpassword
  );

  const [isNewRepasswordValid, newRepasswordMessage] = useCheckPassword(
    form.renewpassword
  );

  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    if (!isNewPasswordValid || !isNewRepasswordValid) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Password baru tidak aman",
      });
      return;
    }
    if (form.newpassword !== form.renewpassword) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Konfirmasi password tidak sama",
      });
      return;
    }
    try {
      await changePassword({
        password: form.password,
        new_password: form.newpassword,
      });
      setResponse({
        isLoading: false,
        isError: false,
        message: "Password berhasil diubah",
      });
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Password gagal diubah",
      });
    }
  };
  return (
    <ProtectedPage allowed={[ROLE_USER, ROLE_ADMIN]} redirect="/403">
      <Defaultlayout title="Pengaturan">
        <Section>
          <div className="flex flex-col pt-16 lg:pt-24">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12 gap-y-3">
              <div className="grid w-full lg:col-span-3 place-items-start">
                <div className="flex flex-col">
                  <BackButton />
                  <h2 className="text-[40px] font-bold text-primary-1">
                    Pengaturan
                  </h2>
                </div>
              </div>
              <div className="grid lg:col-span-8 gap-y-3">
                <h2 className="text-[28px] font-bold">Ganti password</h2>
                <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
                  {response.message && (
                    <Alert type={response.isError ? "error" : "success"}>
                      {response.message}
                    </Alert>
                  )}
                  <InputPassword
                    labelName="Password lama"
                    value={form.password}
                    show={show.password}
                    setShow={() =>
                      setShow({
                        ...show,
                        password: !show.password,
                      })
                    }
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                  />
                  <InputPassword
                    labelName="Password baru"
                    value={form.newpassword}
                    show={show.newpassword}
                    errorMessage={newPasswordMessage}
                    setShow={() =>
                      setShow({
                        ...show,
                        newpassword: !show.newpassword,
                      })
                    }
                    onChange={(e) =>
                      setForm({ ...form, newpassword: e.target.value })
                    }
                    required
                  />
                  <InputPassword
                    labelName="Ulangi password baru"
                    value={form.renewpassword}
                    show={show.renewpassword}
                    errorMessage={newRepasswordMessage}
                    setShow={() =>
                      setShow({
                        ...show,
                        renewpassword: !show.renewpassword,
                      })
                    }
                    onChange={(e) =>
                      setForm({ ...form, renewpassword: e.target.value })
                    }
                    required
                  />

                  <div className="block md:w-64">
                    <Button>Simpan</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
