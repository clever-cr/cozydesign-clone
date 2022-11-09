import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-light">
        <div className="max-w-screen-2xl py-16 mx-auto pl-52 pr-32 space-y-12">
          <div className=" flex items-center justify-between">
            <div className="flex items-center justify-between gap-x-14">
              <picture>
                <img
                  className="w-[80px]"
                  src="/assets/img/sblue.svg"
                  alt="logo"
                />
              </picture>
              <div className="text-lightbrown font-super font-normal text-[.8125rem] flex  gap-x-10">
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Work</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Contact</Link>
              </div>
            </div>

            <div className="flex items-center justify-between gap-x-10">
              <div className="flex gap-1">
                <picture>
                  <img
                    className="w-6"
                    src="/assets/img/smlogo.webp"
                    alt="logo"
                  />
                </picture>
                <Link href="#">
                  <p
                    className="text-pink font-super  font-normal text-[.8125rem]
            "
                  >
                    San Diego Digital Designers
                  </p>
                </Link>
              </div>

              <div className="flex gap-2">
                <div className="bg-lightblue w-6 h-6 rounded-[.1875rem] flex  items-center justify-center">
                  <picture>
                    <img src="/assets/img/twitter.svg" alt="icon" />
                  </picture>
                </div>
                <div className="bg-darkblue w-6 h-6 rounded-[.1875rem] flex  items-center justify-center">
                  <picture>
                    <img src="/assets/img/linkedin.svg" alt="icon" />
                  </picture>
                </div>
                <div className="bg-darkestblue w-6 h-6 rounded-[.1875rem] flex  items-center justify-center">
                  <picture>
                    <img src="/assets/img/fb.svg" alt="icon" />
                  </picture>
                </div>
                <div className="bg-darkpink w-6 h-6 rounded-[.1875rem] flex  items-center justify-center">
                  <picture>
                    <img src="/assets/img/ig.svg" alt="icon" />
                  </picture>
                </div>
                <div className="bg-red w-6 h-6 rounded-[.1875rem] flex  items-center justify-center">
                  <picture>
                    <img src="/assets/img/youtube.svg" alt="icon" />
                  </picture>
                </div>
                <div className="bg-dark w-6 h-6 rounded-[.1875rem] flex  items-center justify-center">
                  <picture>
                    <img src="/assets/img/clutch.svg" alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[.125rem] opacity-40 bg-brown"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-10">
              <picture>
                <img className="w-36" src="/assets/img/logo5.svg" alt="logo" />
              </picture>
              <picture>
                <img className="w-36" src="/assets/img/f1.png" alt="logo" />
              </picture>
              <picture>
                <img className="w-44" src="/assets/img/f2.png" alt="logo" />
              </picture>
            </div>

            <div className="flex items-center gap-x-12">
              <p className="text-primary font-super font-normal text-xs opacity-90">
                Made with ❤️ in beautiful, sunny San Diego. ©2021
              </p>
              <div className="flex font-super font-normal text-brown text-xs gap-x-8">
                <Link href="#">
                  <p> Privacy </p>
                </Link>
                <Link href="#">
                  <p> Photo creditS </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
