import Button from "../../ui/Button";
function Us() {
  return (
    <>
      <div className="background">
        <div className=" grid grid-cols-2 max-w-screen-2xl mx-auto space-x-32 py-32">
          <div className="pl-[18.75rem] space-y-8 py-32">
            <p className="text-[1.875rem] text-primary font-Geomanist leading-[1em] font-500">
              {" "}
              🌴 🐻 us
            </p>
            <h2 className="text-primary text-[4.375rem] font-super font-semibold leading-[1.1em]">
              Get Cozy
            </h2>
            <h3 className="text-lightbrown leading-[3.375rem] text-[2.3125rem] font-normal font-super max-w-lg">
              Design & digital marketing in San Diego, California
            </h3>
            <p className="text-[1.375rem] text-primary leading-[1.6em] font-super font-normal max-w-3xl">
              We’re an award-winning design shop based in South Park, San Diego.
              We efficiently combine the best parts of user experience (UX) with
              creative design and execution to create effective collateral that
              connects with the human beings who interact with them. 🤯
            </p>
            <p className="text-[1.375rem] text-primary leading-[1.6em] font-normal font-super max-w-3xl">
              No epic quests for inspiration. Just pragmatic collaboration and
              efficient results from big-agency graduates with decades of
              experience.
            </p>
            <Button btn={"WHY WE DO WHAT WE DO"} />
          </div>
          <div className="flex space-x-14 py-32">
            <div className="flex flex-col space-y-8 py-12">
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo1.webp"
                  alt="logo"
                />
              </picture>
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo2.webp"
                  alt="logo"
                />
              </picture>
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo3.webp"
                  alt="logo"
                />
              </picture>
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo4.webp"
                  alt="logo"
                />
              </picture>
            </div>
            <div className="flex flex-col  space-y-8">
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo5.svg"
                  alt="logo"
                />
              </picture>
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo6.webp"
                  alt="logo"
                />
              </picture>
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo7.png"
                  alt="logo"
                />
              </picture>
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo8.png"
                  alt="logo"
                />
              </picture>
              <picture>
                <img
                  className="w-[9.375rem]"
                  src="/assets/img/logo 9.webp"
                  alt="logo"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Us;
