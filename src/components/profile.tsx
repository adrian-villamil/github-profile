import type { User } from "@/interfaces/user.interface";
import { RepositoriesGrid } from "./repositories-grid";

interface Props {
  user: User | null;
}

export const Profile = ({ user }: Props) => {

  return (
    <div className="w-[494px] pb-20 lg:w-[874px] xl:w-[970px] mx-auto">
      <div className="relative mt-3 mb-6">
        <div
          style={{
            "--img-user": `url('${user?.avatar_url}')`
          } as React.CSSProperties}
          className="w-[118px] h-[118px] absolute left-0 -top-14 border-8 border-[#20293A] rounded-[20px] bg-white bg-[image:var(--img-user)] bg-center bg-no-repeat bg-[length:116%]">
        </div>
        <div className="flex flex-col items-start lg:flex-row gap-x-5 gap-y-3 ml-[150px] xl:ml-[155px]">
          <div className="py-2 flex divide-x divide-[#4A5567] rounded-xl overflow-hidden bg-[#111729]">
            <span className="px-5 py-[7px] text-sm font-medium text-[#4A5567]">Followers</span>
            <span className="px-5 py-[7px] text-sm text-[#CDD5E0]">{user ? user.followers : 0}</span>
          </div>
          <div className="py-2 flex divide-x divide-[#4A5567] rounded-xl overflow-hidden bg-[#111729]">
            <span className="px-5 py-[7px] text-sm font-medium text-[#4A5567]">Following</span>
            <span className="px-5 py-[7px] text-sm text-[#CDD5E0]">{user ? user.following : 0}</span>
          </div>
          <div className="py-2 flex divide-x divide-[#4A5567] rounded-xl overflow-hidden bg-[#111729]">
            <span className="px-5 py-[7px] text-sm font-medium text-[#4A5567]">Location</span>
            <span className="px-5 py-[7px] text-sm text-[#CDD5E0]">{user ? user.location : 'No location'}</span>
          </div>
        </div>
      </div>
      <h1 className="text-[32px] text-[#CDD5E0]">{user ? user.name : 'User not found'}</h1>
      <p className="text-[#CDD5E0]/60">{user ? user.bio : 'No bio'}</p>
      {user && <RepositoriesGrid username={user.login} type={user.type} />}
    </div>
  );
};