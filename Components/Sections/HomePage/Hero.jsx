import Button from "../../ui/Button";

function Hero() {
  return (
    <>
      <div className=" bg-primary overflow-hidden">
        <div className="max-w-screen-2xl mx-auto  px-9 lg:h-fit lg:px-[2.5rem ]  grid lg:grid-cols-2 lg:pl-[3.75rem] pt-44 lg:pb-20 ">
          <div className="space-y-10">
            <h1 className="text-secondary text-[3.75rem] lg:text-[5rem] leading-[1.1em] max-w-2xl font-extrabold font-fraunc">
              Your design team for the cost of a salary.
            </h1>
            <h4 className="text-light text-[1.875rem] lg:text-[2.5rem]  leading-[1.3em] font-super font-semibold opacity-70 max-w-2xl">
              Full-service design support that growing B2B and non-profit
              organizations need. Are you strained because you should have a
              design team but you dont?
            </h4>
            <Button btn={"SEE HOW WE WORK & WHAT WE CAN DO"} />
          </div>
          <div className="relative z-10">
            <div className="-right-32 pt-[60px] mb-[-70px]  lg:absolute z-0">
              <picture>
                <img src="/assets/img/bg.png" alt="background" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
