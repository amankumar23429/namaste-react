import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy name",
    email: "dummy email",
  },
});
// for debugging purposes so that we can see the name in components in react dev tools
UserContext.displayName = "UserContext";

export default UserContext;
