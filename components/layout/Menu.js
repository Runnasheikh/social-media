import { usePathname } from 'next/navigation'
import React from 'react'
import { sidebarLinks } from '@contraints';
import Link from 'next/link';

const Menu = () => {
    const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-col gap-2">
     {sidebarLinks.map((link)=>{
        const isActive = pathname === link.route;
        return (
            <Link href={link.route} 
            key={link.route} 
             className={`flex gap-4 justify-start rounded-lg py-2 px-4 
             ${isActive && "bg-purple-1"}`}
             >
             
                {link.icon} <p className='text light-1'>{link.label}</p>

            </Link>
        )
     })}
      </div>
    </div>
  )
}

export default Menu
