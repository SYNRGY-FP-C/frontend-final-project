import LoadingScreen from "@/components/LoadingScreen";
import { ROLE_ADMIN, ROLE_SUPERADMIN, ROLE_USER } from "@/constants/roles";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

const AuthPage = ({
  children,
  skip = process.env.NODE_ENV === "production" ? false : true,
  otp = false,
}) => {
  const router = useRouter();
  const { isLoading, isAuthenticated, user } = useAuth();

  if (!skip) {
    if (isLoading) return <LoadingScreen />;
    if (!isAuthenticated && otp) {
      setTimeout(() => router.push("/"), 1500);
      return <LoadingScreen redirect page="home" />;
    }

    if (isAuthenticated && !user?.verified && !otp) {
      setTimeout(() => router.push("/verify"), 1500);
      return <LoadingScreen redirect page="verification" />;
    }

    if (user?.verified) {
      if (user?.role === ROLE_USER) setTimeout(() => router.push("/"), 1500);
      if (user?.role === ROLE_ADMIN)
        setTimeout(() => router.push("/dashboard"), 1500);
      if (user?.role === ROLE_SUPERADMIN)
        setTimeout(() => router.push("/cms"), 1500);
      return <LoadingScreen />;
    }
  }

  return children;
};

export default AuthPage;
