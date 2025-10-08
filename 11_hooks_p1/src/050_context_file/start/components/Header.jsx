import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const THEMES = ["light", "dark", "red"];
  const [theme, setTheme] = useTheme();

  const changeTheme = (e) => setTheme(e.target.value);

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={theme === value}
              onChange={changeTheme}
            />
            {value}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
