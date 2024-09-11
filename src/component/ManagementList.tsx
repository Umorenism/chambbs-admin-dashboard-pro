import { FaRegUser } from "react-icons/fa6";
import { BiUserCheck } from "react-icons/bi";
import { TbUserCog } from "react-icons/tb";
import { TbUserCancel } from "react-icons/tb";

interface ManagementProps {
  username: string;
  email: string;
  role: string;
  status: string;
  createdat: string;
}
const ManagementList = ({
  username,
  email,
  role,
  status,
  createdat,
}: ManagementProps) => {
  return (
    <div className="flex justify-between gap-4 items-center py-2 mb-4">
      <h1 className="w-full ">{username}</h1>
      <h1 className="w-full">{email}</h1>
      <h1 className="w-full text-center">{role}</h1>
      <h1 className="w-full text-center">{status}</h1>
      <h1 className="w-full text-center ">{createdat}</h1>
      <div className="flex gap-10">
        <BiUserCheck className="text-green-500" />
        <FaRegUser className="text-blue-500" />
        <TbUserCog className="text-orange-500" />
        <TbUserCancel className="text-orange-500" />
      </div>
    </div>
  );
};

export default ManagementList;
