"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="container py-2 flex items-center justify-between">
        <Link href={"/"} aria-label="logo">
          <Image src={"/assets/Group.png"} height={45} width={65} alt="Logo" />
        </Link>

        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
