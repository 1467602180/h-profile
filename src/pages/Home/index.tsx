const Home = () => {
  return (
    <div className={"flex h-full"}>
      <div className={"w-150 h-full flex flex-col"}>
        <div
          className={
            "flex-1 flex flex-col place-content-end pb-10 pl-10 font-600"
          }
        >
          <div>
            <div className={"text-7"}>+84</div>
            <div className={"text-4"}>
              Clients on work <br />
              worldwide
            </div>
          </div>
          <div className={"flex space-x-25 mt-10"}>
            <div>
              <div className={"text-7"}>572</div>
              <div className={"text-4"}>Project Done</div>
            </div>
            <div>
              <div className={"text-7"}>Contact</div>
              <div className={"text-4"}>1467602180@qq.com</div>
            </div>
          </div>
        </div>
        <div
          className={
            "py-20 bg-black space-x-15 flex place-content-center place-items-center text-white"
          }
        >
          <div className={"text-4.5 font-500"}>
            <div>Project</div>
            <div>Statistics 2022</div>
            <button
              className={
                "w-28 font-600 mt-5 text-black text-3.5 h-10 bg-yellow-500"
              }
            >
              Know More
            </button>
          </div>
          <div className={"w-60 text-3.5"}>
            <div className={"py-2 flex justify-between border-b"}>
              <div>Website Develop</div>
              <div>75</div>
            </div>
            <div className={"py-2 flex justify-between border-b"}>
              <div>Website Develop</div>
              <div>75</div>
            </div>
            <div className={"py-2 flex justify-between border-b"}>
              <div>Website Develop</div>
              <div>75</div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex-1"}>demo</div>
    </div>
  );
};

export default Home;
