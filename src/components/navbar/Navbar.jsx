import { useAppStore } from "../../store/AppStore";

function Navbar() {
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const user = useAppStore((state) => state.user);
  const login = useAppStore((state) => state.login);
  const logout = useAppStore((state) => state.logout);
  return (
    <div
      className={`flex justify-between items-center gap-4  ${
        theme === "dark" ? "bg-white text-black" : "bg-green-300/20 text-white"
      } p-4`}
    >
      <div className="flex items-center gap-4">
        <h3 className="font-semibold text-xl">theme :{theme}</h3>
        <button
          onClick={toggleTheme}
          className={`bg-blue-950 text-white px-4 py-2 rounded-md`}
        >
          Change Theme
        </button>
      </div>
      <div className="flex items-center gap-4">
        {user && <h3>Welcome, {user}</h3>}
        {!user && <h3>Welcome, Guest</h3>}
        <button
          className={`bg-blue-950 text-white px-4 py-2 rounded-md`}
          onClick={() => login("Mohamed")}
        >
          Login
        </button>
        <button
          className={`bg-blue-950 text-white px-4 py-2 rounded-md`}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
