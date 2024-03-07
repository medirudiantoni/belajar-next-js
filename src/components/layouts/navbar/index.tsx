import Link from 'next/link'
import React from 'react'

interface SubmenuType {
    name: String;
    link: String;
}

interface NavMenusType {
    name: String;
    link: String;
    subMenu?: SubmenuType[];
}

const NavMenus: NavMenusType[] = [
    {name: "Home", link: '/'},
    {name: "About", link: '/about'},
    {name: "Shop", link: '/shop'},
    {name: "Contact", link: '/contact'},
    {name: "Products", link: '/products', subMenu: [
        {name: "Game", link: "/products/game"},
        {name: "Comics", link: "/products/comics"},
    ]}
]

const Navbar = () => {
  return (
    <nav className="relative top-0 left-0 p-5 md:px-10 flex items-center justify-between">
        <div className="logo text-2xl font-semibold"><p>MyNext</p></div>
        <div className="menus flex gap-4 items-center">
            {NavMenus.map((menu, i) => {
                return (
                    <div className="w-fit h-fit hover:text-blue-600 active:text-blue-900" key={i}>
                        <Link href={`${menu.link}`}>{menu.name}</Link>
                    </div>
                )
            })}
        </div>
    </nav>
  )
}

export default Navbar