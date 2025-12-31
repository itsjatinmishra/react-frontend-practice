// Profile.jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <h2>
      Hello {user.name}, {user.role}
    </h2>
  );
}

export default Profile;
