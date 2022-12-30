import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <img
              src="https://i.ibb.co/bHSPPGS/logo.png"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Task Hero
            </span>
          </Link>
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-grey-700  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/mytask"
                  className="block py-2 pl-3 pr-4 text-grey-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  My Task
                </Link>
              </li>
              <li>
                <Link
                  href="/addtask"
                  className="block py-2 pl-3 pr-4 text-grey-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  href="/completed_task"
                  className="block py-2 pl-3 pr-4 text-grey-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Completed Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
