import type { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/rinse2.png";

const Header: FunctionComponent = () => (
  <header className="space-y-4 mx-auto px-6 mt-12">
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image src={logo} alt="Rinse" width={120} height={30} />
        </Link>
      </div>
      <div className="flex-none pr-2 mr-2 text-sm border-r border-gray-500">
        <Link href="/about">About</Link>
      </div>
      <div className="flex-none mr-4 text-sm">
        <p className="text-neutral font-medium">Data by </p>
        <Link
          className="text-black"
          href="https://originprotocol.com"
          title="Origin Protocol"
        >
          <Image
            className="ml-2"
            src="/origin-logo.svg"
            alt="Origin Protocol"
            width={80}
            height={20}
            style={{ width: "80px", height: "20px" }}
          />
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export { Header };
