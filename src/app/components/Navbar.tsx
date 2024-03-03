'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border-r border-base-content flex justify-between backdrop-blur-sm pb-8">
            <ul className="flex flex-col space-y-2 w-full pr-4">
                <Link
                    href="/"
                    className={
                        pathname === "/" ? "btn btn-primary text-white" : "btn"
                    }
                >
                    Font
                </Link>
                <Link
                    href="/layout"
                    className={
                        pathname === "/layout" ? "btn btn-primary text-white" : "btn"
                    }>
                    Layout
                </Link>
                <Link
                    href="/position"
                    className={
                        pathname === "/position" ? "btn btn-primary text-white" : "btn"
                    }>
                    Position
                </Link>
                <Link
                    href="/grid"
                    className={
                        pathname === "/grid" ? "btn btn-primary text-white" : "btn"
                    }>
                    Grid
                </Link>
                <Link
                    href="/image"
                    className={
                        pathname === "/image" ? "btn btn-primary text-white" : "btn"
                    }>
                    Image
                </Link>
                <Link
                    href="/colors"
                    className={
                        pathname === "/colors" ? "btn btn-primary text-white" : "btn"
                    }>
                    Colors
                </Link>
            </ul>

        </nav>
    );
}

export default Navbar;
