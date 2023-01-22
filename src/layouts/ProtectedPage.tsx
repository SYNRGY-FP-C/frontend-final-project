import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

const ProtectedPage = ({
  children,
  allowed = [],
  redirect = "/",
  skip = process.env.NODE_ENV === "production" ? false : true,
}) => {
  const router = useRouter();
  const { isLoading, isAuthenticated, user } = useAuth();

  if (!skip) {
    if (isLoading) return <LoadingScreen />;
    if (!isAuthenticated) {
      setTimeout(() => router.push("/"), 2500);
      return <LoadingScreen redirect page="home" />;
    }
    if (!allowed.includes(user?.role?.name)) {
      setTimeout(() => router.push(redirect), 2500);
      return <LoadingScreen />;
    }
  }

  return children;
};

export default ProtectedPage;
