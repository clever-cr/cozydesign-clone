import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="bg-primary fixed w-full z-20">
        <div className="flex items-center justify-center space-x-12 lg:justify-between pl-[3.4375rem] pr-[1.5rem]  ">
          <picture>
            <img
              className="w-24  lg:w-1/5 py-[1.25rem]"
              src="/assets/img/clogo.svg "
              alt="logo"
            />
          </picture>

          <div className="hidden lg:block space-x-8 py-[1.75rem] px-[1rem] text-light text-[1.5625rem] font-super font-semibold leading-[1.5625rem] tracking-wide">
            <Link className="hover:text-secondary hover:transition" href="#">
              Get Cozy
            </Link>
            <Link className="hover:text-secondary" href="#">
              What we do
            </Link>
            <Link className="hover:text-secondary" href="#">
              Our Work
            </Link>
            <Link className="hover:text-secondary" href="#">
              The blog
            </Link>
            <Link className="hover:text-secondary" href="#">
              Say hi
            </Link>
          </div>
          <div className=" lg:hidden">
            <picture>
              <img
                className="w-8  invert"
                src="/assets/img/menu.svg"
                alt="icon"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
