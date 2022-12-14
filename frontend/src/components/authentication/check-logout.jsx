import { Navigate } from "@tanstack/react-location";
import { useAtom } from "jotai";

import { userAtom } from "/src/stores/auth.store";

export default function CheckLogout({ children }) {
  // atom
  const [user] = useAtom(userAtom);

  return user?.token ? <Navigate to="/" replace /> : children;
}
