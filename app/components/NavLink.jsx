import Link from "next/link"

export default function NavLink({ href, title, onHandleLinkClick}) {
    console.log(onHandleLinkClick)
    return(
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white"
            onClick={() => onHandleLinkClick(false)}
        >
            {title}
        </Link>
    )
}