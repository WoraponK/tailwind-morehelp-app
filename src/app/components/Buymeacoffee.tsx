import React from 'react'

function Buymeacoffee() {
    return (
        <>
            <a href={'https://www.buymeacoffee.com/tellytawin'} target='_blank'>
                <div className='fixed flex w-fit space-x-2 bg-yellow-400 left-0 bottom-0 m-4 rounded-full p-2 text-black transition-all hover:bg-yellow-500 group'>
                    <span className="material-icons-round group-hover:animate-spin">coffee</span>
                    <p className='hidden group-hover:block'>buymeacoffee/tellytawin</p>
                </div>
            </a>
        </>
    )
}

export default Buymeacoffee