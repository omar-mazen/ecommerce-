import PersonalInformation from "../../features/client/profile/PersonalInformation";
import ChangePassword from "../../features/client/profile/ChangePassword";
import Header from "../../ui/Header";
import UpdateProfilePic from "../../features/client/profile/UpdateProfilePic";

export default function EditProfile() {
  return (
    <>
      <Header>Edit Profile</Header>
      <div className="mx-auto max-w-[500px] space-y-5">
        <UpdateProfilePic />
        <PersonalInformation />
        <ChangePassword />
      </div>
    </>
  );
}
