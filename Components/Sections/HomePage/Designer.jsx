function Designer() {
  return (
    <>
      <div className="  overflow-hidden  py-32- relative z-10">
        <div className="absolute w-full h-full block bg-black opacity-80 -z-10"></div>
        <video
          className="absolute -z-20 w-full"
          src="/assets/video/video.mp4"
          loop
          muted
          autoPlay
          controls=""
        ></video>
        <div className=" flex justify-center space-x-20 items-center h-full py-32">
          <picture>
            <img
              className="w-[130px]"
              src="/assets/img/sndiego.svg"
              alt="logo"
            />
          </picture>
          <div className="space-y-8">
            <h3 className="text-light text-5xl font-super font-bold ">
              <span className="italic"> Psst… </span> <br /> are you a designer?{" "}
            </h3>
            <p className="text-light text-xl max-w-2xl font-super  font-normal">
              Consider joining our{" "}
              <span className="text-pink">San Diego Design Designers</span>{" "}
              group. More than 700 people, we meet online via Slack and in
              person at social events around the city. It’s a great opportunity
              to share ideas, get inspired, find support, and celebrate great
              design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Designer;
