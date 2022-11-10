function Partner() {
  return (
    <>
      <div className="bg-primary ">
        <div className="py-12 px-32 max-w-screen-2xl m-auto">
          <h4 className="text-secondary opacity-80 text-[1.875rem] font-super font-normal text-center italic">
            More than 150 happy clients
          </h4>
          <div className="space-y-8 flex flex-col lg:flex-row items-center pt-8 pb-4">
            <picture>
              <img
                className="w-4/5 lg:w-3/5"
                src={"/assets/img/p1.svg"}
                alt="logo"
              />
            </picture>
            <picture>
              <img
                className=" w-4/5 lg:w-3/5"
                src={"/assets/img/p2.svg"}
                alt="logo"
              />
            </picture>
            <picture>
              <img
                className=" w-4/5 lg:w-3/5"
                src={"/assets/img/p3.svg"}
                alt="logo"
              />
            </picture>
            <picture>
              <img
                className=" w-4/5 lg:w-3/5"
                src={"/assets/img/p4.svg"}
                alt="logo"
              />
            </picture>
            <picture>
              <img
                className="w-4/5 lg:w-3/5"
                src={"/assets/img/p5.svg"}
                alt="logo"
              />
            </picture>
            <picture>
              <img
                className="  w-4/5 lg:w-3/5"
                src={"/assets/img/p6.svg"}
                alt="logo"
              />
            </picture>
            <picture>
              <img
                className=" w-1/2 lg:w-3/5"
                src={"/assets/img/p7.svg"}
                alt="logo"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
export default Partner;
