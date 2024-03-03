import React from 'react'
import Link from 'next/link'

function Footer() {

    const BuymeacoffeeButton = () => (
        <a href={'https://www.buymeacoffee.com/tellytawin'} target='_blank'>
            <div className='flex w-fit space-x-2 bg-yellow-400 rounded-full p-2 text-black transition-all hover:bg-yellow-500 group'>
                <span className="material-icons-round group-hover:animate-spin">coffee</span>
                <p>buymeacoffee/tellytawin</p>
            </div>
        </a>
    );

    return (
        <footer className='border-t border-base-content py-8 flex justify-between items-center'>
            <h2>Copyright © 2024 - WoraponK</h2>
            <BuymeacoffeeButton />
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