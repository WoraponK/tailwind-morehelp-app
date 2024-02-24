'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border-b border-base-content py-4 flex justify-between sticky top-0 backdrop-blur-sm">
            <ul className="flex space-x-2">
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
            <Link
                href="/favorite"
                className={
                    pathname === "/favorite" ? "btn btn-primary text-white" : "btn"
                }>
                Favorite
            </Link>
        </nav>
    );
}

export default Navbar;
