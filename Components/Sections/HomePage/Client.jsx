import ClientInfo from "../../Cards/ClientInfo";

function Client() {
  return (
    <>
      <div className="bg-light ">
        <div className="pt-44 max-w-screen-2xl m-auto">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-[3.8125rem] text-primary leading-[4.0625rem] font-super font-semibold">
              ❤️ from our clients
            </h2>
            <div className="h-1 w-10 bg-lightbrown opacity-50 "></div>
          </div>
          <div className="py-20  px-32 space-y-6 relative">
            <div className="flex  space-x-6 max-w-6xl">
              <div className="w-full flex items-end justify-end relative">
                <div className="absolute -right-20 border-[1px] border-white border-opacity-50px p-2 -bottom-20 w-fit h-fit justify-center rounded-full m-auto items-center">
                  <div className="border border-white p-2 rounded-full border-opacity-60">
                    <div className="bg-white w-[5.5rem] h-[5.5rem] flex justify-center rounded-full items-center border border-white p-2">
                      <picture>
                        <img src="/assets/img/message.svg" alt="img" />
                      </picture>
                    </div>
                  </div>
                </div>
                <ClientInfo
                  style={
                    "bg-primary shadow-2xl shadow-primary py-[5rem] pr-[2.5rem] pl-[3.75rem] w-[80%] rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[100%] text-left bg-[url(/assets/img/blur.webp)] h-fit mt-auto flex flex-col justify-end items-end text-left"
                  }
                  imgstyle={1}
                  img={"/assets/img/c1.webp"}
                  title={"“One of the top design professionals…”"}
                  description={
                    "I connect with hundreds of talented folks on a regular basis, and I can say with complete confidence that Lee is one of the best UX designers in Aquent/Vitamin T's global network."
                  }
                  name={"SUSIE POLLASKY"}
                  position={
                    "Now: Leadership Recruiting @ Product Design at Facebook"
                  }
                />
              </div>
              <div className="w-full ">
                <ClientInfo
                  style={
                    "bg-darkgreen shadow-2xl shadow-darkgreen bg-[url(/assets/img/blur.webp)] py-[5rem] pr-[2.5rem] pl-[3.75rem] w-[65%] rounded-tr-[100%] rounded-tl-[100%] rounded-br-[50%] "
                  }
                  imgstyle={2}
                  img={"/assets/img/c1.webp"}
                  title={"“They’re a very well-rounded organization…”"}
                  description={
                    "Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased."
                  }
                  name={"MARTIN SPRITZER"}
                  position={"General Manager @ iQuoteXpress"}
                />
              </div>
            </div>
            <div className="flex space-x-6 max-w-6xl">
              <div className=" w-full flex items-start justify-end ">
                <ClientInfo
                  style={
                    "bg-[url(/assets/img/blur.webp)] bg-lightbrown shadow-2xl shadow-lightbrown  py-[5rem] pr-[2.5rem] pl-[3.75rem] w-[70%] rounded-tl-[100%] rounded-bl-[60%] rounded-br-[60%]"
                  }
                  imgstyle={3}
                  img={"/assets/img/c1.webp"}
                  title={"“They're just good people.”"}
                  description={
                    "They were a pleasure to work with and I'm really happy with the results. They pretty much nailed it."
                  }
                  name={"ERIC WEISS"}
                  position={"Founder @ Full Cycle Product Development"}
                />
              </div>
              <div className=" w-full">
                <ClientInfo
                  style={
                    "bg-[url(/assets/img/blur.webp)] bg-brown  shadow-2xl shadow-brown  py-[5rem] pr-[2.5rem] pl-[3.75rem] w-[80%] rounded-tr-[100%] rounded-bl-[60%] rounded-br-[60%]"
                  }
                  imgstyle={4}
                  img={"/assets/img/c1.webp"}
                  title={"“The project was successful”"}
                  description={
                    "They strive to come up with good design, and they focus on all the right things. The quality of their work is high, and all the deliverables are very well-organized and professional."
                  }
                  name={"MICHAEL WEISFELD"}
                  position={"Director of Digital Marketing @ National Funding"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Client;
