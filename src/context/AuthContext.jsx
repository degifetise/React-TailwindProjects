import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("savedUser");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [userDB, setUserDB] = useState(() => {
    const savedUserInDb = localStorage.getItem("users_in_db");

    return savedUserInDb ? JSON.parse(savedUserInDb) : [];
  });
  useEffect(() => {
    localStorage.setItem("users_in_db", JSON.stringify(userDB));
  }, [userDB]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("savedUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("savedUser");
    }
  }, [user]);

  const register = (name, email, password) => {
    const activeUser = userDB.some((u) => u.email === email);
    if (activeUser) {
      return { success: false, message: "This email is already in..." };
    }
    const newUser = { id: `user_${Date.now()} `, name, email, password };

    setUserDB((prev) => [...prev, newUser]);

    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    });
    return { success: true, message: "Registered successfully" };
  };

  const login = (email, password) => {
    const loggedInUser = userDB.find(
      (u) => u.email === email && u.password === password,
    );
    if (!loggedInUser) {
      return { success: false, message: "Invalid email or password" };
    } else {
      setUser({
        id: loggedInUser.id,
        email: loggedInUser.email,
        password: loggedInUser.password,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem(user);
    setUser(null);
  };

  <AuthContext.Provider value={{ register, login, logout }}>
    {children}
  </AuthContext.Provider>;
}

export function useAuth() {
  const userContext = useContext(AuthContext);
  if (!userContext) {
    throw new Error("useAuth must used within an AuthProvider");
  }
  return userContext;
}
