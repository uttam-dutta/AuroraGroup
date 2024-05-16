import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="max-container padding-container relative z-30 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
    
            <Image src="/ms_logo.svg" alt="logo" width={130} height={30} />
        </Link>
      </div>

      <ul className="flex justify-center gap-12 lg:flex">
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          {link.label}
        </Link>
      ))}
      </ul>

      {/* Empty space on the right */}
      <div></div>
    </nav>
    
  )
}

export default Navbar

