'use client';  //this help us to use react hooks and any react UI stuff from client side.

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/UI/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div
        className={cn("fixed top-10 inset-x-20 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active}
                item= "Home"></MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="New IOS">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/New IOS">Whats new</HoveredLink>
                <HoveredLink href="/New IOS">About</HoveredLink>
                <HoveredLink href="/New IOS">Details & Compatible Devices</HoveredLink>
                </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active}
                item= "Products">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                title="iPhone"
                href="https://www.apple.com/in/iphone/"
                src="https://www.overclockers.ge/uploads/monthly_2022_09/image.png.cfa18dada4a8f2aa7d05805b1e490901.png"
                description=" Check out the new iPhone 15 Pro, iPhone 15 Pro Max, iPhone 15, and iPhone 15 Plus."
                />
                <ProductItem
                title="Mac"
                href="https://www.apple.com/in/mac/"
                src="https://images.news18.com/ibnlive/uploads/2021/08/1628673744_macbook-air-16288434214x3.jpg"
                description="The most powerful Mac laptops and desktops ever. Supercharged by Apple silicon. MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio and Mac Pro."
                />
                <ProductItem
                title="iPad"
                href="https://www.apple.com/in/ipad/"
                src="https://www.apple.com/newsroom/images/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/tile/Apple-iPad-Pro-hero-240507.jpg.og.jpg?202408191830"
                description="New. iPad Pro · (13″ or 11″) Ultra Retina XDR display · ProMotion technology · P3 wide colour · Nano-texture display glass option on 1TB and 2TB models."
                />
                <ProductItem
                title="Accessiores"
                href="https://www.apple.com/in/shop/accessories/all"
                src="https://i.pinimg.com/736x/06/9f/86/069f868aaa836141e8841414071d9e03.jpg"
                description="Shop Apple accessories for Apple Watch, iPhone, iPad and Mac. Search by product line or browse by category. Buy online and get free shipping, ..."
                />
                </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Support">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/Support">Contact Us</HoveredLink>
                <HoveredLink href="/Support">Community</HoveredLink>
                </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar;