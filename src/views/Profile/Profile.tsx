import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { StateProps } from "@/shared/types";
import ProfileDetail from "@/components/Profile/ProfileDetail";

const Profile: NextPage = () => {
  const { userInfo } = useSelector((state: StateProps) => state.next);
  return (
    <>
      <div>
        {userInfo && (
          <div>
            <ProfileDetail />
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
