import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className='logo'>
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
                    <p>DevFest</p>
                </Link>

                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/#events">Events</Link>
                    <Link href="/">Create Event</Link>
                    <a
                        href="https://github.com/agnihotripushkar/devfest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        GitHub
                    </a>
                </ul>
            </nav>

        </header>

    )
}

