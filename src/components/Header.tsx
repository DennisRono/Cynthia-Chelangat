import React from 'react'
import { NavMenuList } from '@/components/NavigationMenu'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="px-[5%] h-14">
      <div className="flex items-center justify-between gap-4 h-full container">
        <div className="flex items-center justify-start gap-4">
          <div className="">
            <Link href="/" className="font-extrabold text-4xl font-apercu">
              Cynthia
            </Link>
          </div>
          <div className="">
            <NavMenuList />
          </div>
        </div>
        <div className="">
          <Link
            href="/auth"
            className="py-2 px-4 border border-slate-900 rounded-[7px] cursor-pointer"
          >
            Sign in / Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
