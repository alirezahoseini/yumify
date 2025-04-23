import Image from "next/image"
import Link from "next/link"
import React from "react"
import FavoritesModal from "./favorites-modal/FavoritesModal"

const Header = () => {
  return (
    <header
      className="flex items-center justify-between 
      px-5 py-3 lg:p-3 w-full max-w-xl mx-auto"
    >
      <Link 
        className="flex items-center gap-2"
        href="/"
      >
        <Image 
          src="/logo.svg"
          width={50}
          height={50}
          alt="Yumify"
        />

        <span 
          className="font-bold text-sm"
        >
          Yumify
        </span>
      </Link>

      <FavoritesModal />
    </header>
  )
}

export default Header