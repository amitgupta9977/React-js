import { useEffect, useState } from "react";
import { GetUserProfile } from "./getRepoData";

const MultiRenderingIssue = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const userProfile = GetUserProfile();
    setProfile(userProfile);
  }, []);

  console.log("Re-render");

  return (
    <>
      <p>Profile Details</p>
      <p>
        {profile.id}-{profile.name}
      </p>
    </>
  );
};
export default MultiRenderingIssue