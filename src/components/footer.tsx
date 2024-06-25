"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <Link href={"/"}>
            <Image
              src={"/assets/Group.png"}
              height={45}
              width={65}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
