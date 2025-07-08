import React from 'react'
import { BsRocketTakeoff } from 'react-icons/bs'
// エラーの理由: react-iconsライブラリにfsアイコンパッケージが存在しません。
// 正しいパッケージは以下のいずれかを使用する必要があります:
// - react-icons/fi (Feather Icons)
// - react-icons/fa (Font Awesome)
// - react-icons/bs (Bootstrap Icons)など
import { FaRocket } from 'react-icons/fa' // Font Awesomeのロケットアイコンを代替として使用
import NavItem from './NavItem'

interface NavItemType {
    id: number
    label: string
    link: string
    icon: React.ReactNode
}

const NavList = () => {
    const navItems: NavItemType[] = [
        { id: 1, label: 'On Your Data', link: '/', icon: <BsRocketTakeoff /> },
        { id: 2, label: 'About', link: '/about', icon: <FaRocket /> },
    ]

    return (
        <div className="mt-12">
            {
                navItems.map((navItem) => {
                    return (
                        <NavItem
                            key={navItem.id}
                            label={navItem.label} 
                            link={navItem.link}
                            icon={navItem.icon}
                        />
                    )
                })
            }
        </div>
    )
}

export default NavList;
