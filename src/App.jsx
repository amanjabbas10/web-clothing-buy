import { useEffect, useMemo, useState } from "react";
import Navbar1 from "./navbar1.jsx";
import Navbar2 from "./navbar2.jsx";
import Navbar3 from "./navbar3.jsx";
import Navbar4 from "./navbar4.jsx";
import Navbar5 from "./navbar5.jsx";
import Navbar6 from "./navbar6.jsx";
import Navbar7 from "./navbar7.jsx";
import Navbar8 from "./navbar8.jsx";
import Navbar9 from "./navbar9.jsx";

function getPathname() {
  return window.location.pathname || "/";
}

function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const onPopState = () => setPathname(getPathname());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const routes = useMemo(
    () => ({
      "/": Navbar1,
      "/navbar2": Navbar2,
      "/navbar3": Navbar3,
      "/navbar4": Navbar4,
      "/navbar5": Navbar5,
      "/navbar6": Navbar6,
      "/navbar7": Navbar7,
      "/navbar8": Navbar8,
      "/navbar9": Navbar9,
    }),
    [],
  );

  const Page = routes[pathname] ?? Navbar1;

  return (
    <div>
      <Page />
    </div>
  );
}

export default App;
