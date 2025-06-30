'use client'
import ModeToggle from "./mode-toggle"
import { ShoppingCart, UserIcon, EllipsisVertical } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menu = () => {
  return (
    <div>
        <div className='space-x-2 md:flex hidden'>
            <ModeToggle />
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                <ShoppingCart />
                Cart
                </Link>
            </Button>
            <Button asChild>
                <Link href='/sign-in'>
                <UserIcon />
                Sign In
                </Link>
            </Button>
        </div>
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className='flex flex-col items-start'>
                    <SheetTitle>Menu</SheetTitle>
                <ModeToggle />
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                    <ShoppingCart />
                    Cart
                    </Link>
                </Button>
                <Button asChild>
                    <Link href='/sign-in'>
                    <UserIcon />
                    Sign In
                    </Link>
                </Button>
                <SheetDescription></SheetDescription>
                </SheetContent>
            </Sheet> 
        </nav>
    </div>
  )
}

export default menu