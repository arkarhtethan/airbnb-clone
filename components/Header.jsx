import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  GlobeIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* left */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center justify-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-lg">
        <input
          type="text"
          placeholder="Start your search."
          className="flex-grow bg-transparent pl-5 text-gray-600 placeholder-gray-400 outline-none"
        />
        <SearchIcon className="mx-auto hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 border-gray-400 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
