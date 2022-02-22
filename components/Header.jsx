import Image from 'next/image'
import React, { useState } from 'react'
import {
  SearchIcon,
  GlobeIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setnoOfGuests] = useState(1)
  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate)
    setEndDate(ranges.Selection.endDate)
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }

  const selectionRange = {
    startDate,
    endDate,
    key: 'Selection',
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* left */}
      <div
        onClick={() => router.push('/')}
        className="relative my-auto flex h-10 cursor-pointer items-center justify-center"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || 'Start your search.'}
          className="flex-grow bg-transparent pl-5 text-gray-600 placeholder-gray-400 outline-none"
        />
        <SearchIcon className="mx-auto hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 lg:inline-flex" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer lg:inline">Become a host</p>
        <GlobeIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 border-gray-400 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="col-span-3 mx-auto mt-5 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="bordr-b mb-4 flex items-center">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setnoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-500 outline-none"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-400 outline-none"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
