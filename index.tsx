// eslint-disable-next-line jsx-a11y/alt-text
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function page() {
  return (
    <>
      <nav className="bg-yellow-600 h-56">
        <div className="grid place-items-center align-items-center">
          <h1 className="bg-red-600 text-9xl text-yellow-300">RanaVerse</h1>
        </div>
        <br />
        <br />
        <center>
          <button className="bg-sky-700 px-4 sm:px-8 py-2 sm:py-3 hover:bg-red-600">
            <Link
              target="_adeema"
              className="bg-sky-700 text-white hover:bg-red-600 sm:px-8 sm:py-3"
              href="/about"
            >
              About
            </Link>
          </button>
          <button className="bg-sky-700 px-4 sm:px-8 py-2 sm:py-3 hover:bg-purple-600">
            <Link
              target="_adeema"
              className="text-white  px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-purple-600"
              href="/contact"
            >
              contact
            </Link>
          </button>
          <button className="bg-sky-700 px-4 sm:px-5 py-2 sm:py-3 hover:bg-green-600">
            <Link
              target="_adeema"
              className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-green-600"
              href="/certificate"
            >
              certificate
            </Link>
          </button>
          <button className="bg-sky-700 px-4 sm:px-8 py-2 sm:py-3 hover:bg-pink-400">
            <Link
              target="_adeema"
              className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-pink-400"
              href="/home"
            >
              home
            </Link>
          </button>
          <button className="bg-sky-700 px-4 sm:px-8 py-2 sm:py-3 hover:bg-yellow-500">
            <Link
              target="_adeema"
              className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-yellow-500"
              href="/chakraui"
            >
              Chakra Ui
            </Link>
          </button>

          <button className="bg-sky-700 px-4 sm:px-8 py-2 sm:py-3 hover:bg-cyan-400">
            <Link
              target="_adeema"
              className="bg-sky-700 px-4 py-2 text-white hover:bg-cyan-400 sm:px-8 sm:py-3"
              href="/mixchakraandtailwind"
            >
              Mix Chakra Ui
            </Link>
          </button>
       
        </center>
      </nav>
    </>
  );
}

export default page;
