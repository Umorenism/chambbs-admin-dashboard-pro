import BaseCoin from "./BaseCoin";

const Coin = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col p-4">
      <p className="text-xl mt-4">Tokens</p>
      <div className="bg-white min-h-screen p-4 mt-4">
        <p className="text-xl mt-4">Cion List(3,354)</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-5 mt-6">
            <div className="border w-28 text-center rounded-full py-1">
              <p>Filter</p>
            </div>

            <input
              type="text"
              placeholder="search here.."
              className="w-[100%] pl-2 h-full py-2 rounded-full outline-none border placeholder:pl-2"
            />
          </div>
          <button className="px-4 bg-orange-600 py-2 rounded-md">
            Add New Token
          </button>
        </div>
        <div className="flex justify-between items-center mt-10">
          <p className="text-sm w-full p-2 border-r-2 text-start ">
            CURRENCY NAME
          </p>
          <p className="text-sm text-start w-full p-2 border-r-2 ">TYPE</p>
          <p className="text-sm text-start w-full p-2 border-r-2 ">BALANCE</p>
          <p className="text-sm text-start w-full p-2 border-r-2 ">STATUS</p>
          <p className="text-sm w-full text-start p-2 border-r-2 ">UPDATE</p>
          <p className="text-sm w-full text-start p-2 border-r-2 "></p>
        </div>
        <hr />
        <BaseCoin />
        <hr />
        <BaseCoin />
        <hr />
        <BaseCoin />
        <hr />
        <BaseCoin />
        <hr />
      </div>
    </div>
  );
};

export default Coin;
