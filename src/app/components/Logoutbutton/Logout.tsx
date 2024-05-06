// LogoutButton.jsx
import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();

  const onLogout = () => {
    router.push("/Login");
  };

  return (
    <button className="btn-primary" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
