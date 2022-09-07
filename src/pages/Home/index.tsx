import { formatDistance } from "date-fns";

const Home = () => {
  return (
    <div className={"flex"}>
      <div className={"w-150 h-full flex flex-col"}>
        <div
          className={"flex-1 flex flex-col place-content-end pb-10 font-600"}
        >
          <div className={"text-20 w-135"}>
            <div
              className={
                "float-right ml-2 mt-11 text-3.5 bg-blue-600 text-white p-3 px-4 rounded-5"
              }
            >
              Application Developer
            </div>
            Hi! I Am HeStudy
          </div>
          <div className={"mt-10"}>
            Over{" "}
            <span className={"text-orange-600"}>
              {formatDistance(new Date(2020, 9, 1), new Date())}
            </span>
            <br /> as a development engineer developing user interfaces
          </div>
          <div className={"flex place-items-center space-x-10 mt-10"}>
            <button className={"bg-orange-600 py-4 px-10 text-white text-3.5"}>
              Hire Me
            </button>
            <button className={"text-3.5 flex space-x-2"}>
              <div>Projects</div>
              <div className="i-akar-icons:arrow-up-right text-5" />
            </button>
          </div>
          <div className={"mt-10"}>
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
            "py-20 bg-black space-x-15 ml--10 pl-10 flex place-items-center text-white"
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
      <div className={"flex-1 bg-#ded1c1"}></div>
    </div>
  );
};

export default Home;
