import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="bg-primary fixed w-full z-20">
        <div className="flex items-center justify-between pl-[3.4375rem] pr-[24px]  ">
          <picture>
            <img
              className="w-1/5 py-[1.25rem]"
              src="/assets/img/clogo.svg "
              alt="logo"
            />
          </picture>
          <div className="space-x-8 py-[1.75rem] px-[1rem] text-light text-[1.5625rem] font-super font-semibold leading-[1.5625rem] tracking-wide">
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
        </div>
      </div>
    </>
  );
}
export default NavBar;
