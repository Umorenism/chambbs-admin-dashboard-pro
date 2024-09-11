import LiveChatGraph from "./LiveChatGraph";

const Card = () => {
  return (
    <div className="flex mt-4 w-full gap-2">
      <div className="w-[30%] bg-white  shadow-lg p-2 rounded-md">
        <p className="text-black font-semibold text-2xl">Users</p>
        <div className="mt-4 text-xl">
          <p>Total Users</p>
          <p className="text-slate-700 font-bold mb-2">2,54,5554</p>
          <hr />
          <p className="text-xl text-green-600 mt-4">online</p>
          <div className="flex justify-between items-center mt-3 text-sm">
            <p>250,342</p>
            <button className="bg-gray-200 text-sm p-2 rounded-lg">
              4325,5.8M
            </button>
          </div>
          <div className="bg-slate-400 h-1 mt-4 rounded-full flex items-center">
            <span className="w-[30%] bg-green-700 h-1 rounded-full"></span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-slate-700">Verified Users</p>
            <p className="text-sm">12,3542</p>
            <div className="bg-slate-400 h-1 mt-4 rounded-full flex items-center mb-4">
              <span className="w-[50%] bg-blue-700 h-1 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-white p-2 min-h-[300px] rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Trade</p>
          <div className="flex items-center gap-2">
            <button className="bg-slate-200 p-1 rounded-lg">24H</button>
            <button className="bg-slate-200 p-1 rounded-lg">70</button>
            <button className="bg-slate-200 p-1 rounded-lg">IM</button>
            <button className="bg-slate-200 p-1 rounded-lg">TV</button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <p className="text-slate-400">Trading Volume</p>
            <p className="font-bold">$2,34,8885423</p>
          </div>
          <div className="flex flex-col">
            <p className="text-slate-400">Currency</p>
            <p className="font-bold">USD</p>
          </div>
        </div>
        <div className="mt-5 h-auto bg-slate-200">
          <LiveChatGraph />
        </div>
      </div>
    </div>
  );
};

export default Card;
