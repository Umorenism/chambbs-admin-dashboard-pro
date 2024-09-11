interface CardProps {
  title: string;
  par: string;
  transaction: string;
  description: string;
  contact: string;
  amount: any;
  bal: string;
}

const UsersCard: React.FC<CardProps> = ({
  title,
  description,
  contact,
  bal,
  amount,
  transaction,
  par,
}) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-bold text-sm py-1">{par}</div>
        <div>
          <div className="font-semibold text-sm mb-4 ">${amount}</div>
        </div>

        <hr />
        <p className="text-gray-700 text-base py-2">{description}</p>
        <span className="text-gray-600 mb-5">${contact}</span>
        <hr />
        <p className="text-gray-700 text-base py-2">{transaction}</p>
        <span className="text-gray-600 mb-10">${bal}</span>
        <hr />
      </div>
    </div>
  );
};

export default UsersCard;
