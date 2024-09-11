import ProgressBar from "./ProgressBar";

interface CardProps {
  title: string;
  par: string;
  verified: string;
  description: string;
  contact: string;
  amount: any;
  active: any;
  count: string;
}

const UsersMangementCard: React.FC<CardProps> = ({
  title,
  description,
  contact,
  count,
  amount,
  verified,
  par,
}) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-bold text-sm py-1">{par}</div>
        <div>
          <div className="font-semibold text-sm mb-4 ">${amount}</div>
        </div>

        <ProgressBar />
        <div>
          <p className="text-gray-700 text-base py-1">{description}</p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600 ">${contact}</p>
            <button className="bg-slate-500 px-2 py-1 rounded-md text-sm">
              250K/2.5M
            </button>
          </div>
        </div>
        <hr />
        <p className="text-gray-700 text-base py-2">{verified}</p>
        <span className="text-gray-600 mb-10">${count}</span>
        <ProgressBar />
      </div>
    </div>
  );
};

export default UsersMangementCard;
