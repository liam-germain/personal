"use client"

import React from 'react';
import { useTheme } from "next-themes";
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';

export function Navbar(): JSX.Element {
    const { theme } = useTheme();

    return (
        <nav className="py-4 bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <ul className="flex space-x-4 sm:space-x-6">
                        <NavItem href="/" label="Home" />
                        <NavItem href="/about" label="About" />
                        <NavItem href="/projects" label="Projects" />
                        <NavItem href="/contact" label="Contact" />
                    </ul>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}

interface NavItemProps {
    href: string;
    label: string;
}

function NavItem({ href, label }: NavItemProps): JSX.Element {
    return (
        <li>
            <Link href={href} className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                {label}
            </Link>
        </li>
    );
}