'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavItemProps {
    label: string
    link: string
    icon: React.ReactNode
}

const NavItem = ({ label, link, icon }: NavItemProps) => {
    const pathname = usePathname()
    return (
        <Link href={link} className={`flex p-4 items-center w-full hover:bg-gray-600 font-medium ${pathname === link ? 'bg-gray-600 border-l-4 border-r-gray-100' : ''}`}>
            <div className='mr-3'>{icon}</div>
            <div>{label}</div>
        </Link>
    )
}

export default NavItem