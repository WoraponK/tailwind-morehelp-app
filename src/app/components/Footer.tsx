import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='border-t border-base-content py-8 flex justify-between'>
            <h2>Copyright © 2024 - WoraponK</h2>
            <ul className='flex space-x-3'>
                <li>
                    <Link href={'/about'} className='text-base-content underline-offset-2 hover:text-secondary hover:underline'>
                        About
                    </Link>
                </li>
                <li>
                    <a href='https://github.com/WoraponK' target='_blank' className='text-base-content underline-offset-2 hover:text-secondary hover:underline'>
                        GitHub
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer