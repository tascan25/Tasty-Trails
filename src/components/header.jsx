import React from 'react'
import { useContext } from 'react'
import { DarkContext } from '../context/DarkContext'
import moonicon from '../svgs/Moon.svg'
import lighticon from '../svgs/Light.svg'
function Header() {
    const {dark,handelLight,handelDark} = useContext(DarkContext)
    return (
        <header className={!dark ? 'w-full p-4 bg-[#C3ACD0]  text-center text-[#FFFAFA]  max-[450px]:text-left max-[950px]:text-left max-[1025px]:text-left':'w-full p-4 bg-[#0b0b0b] text-[#FFFAFA] text-center max-[450px]:text-left max-[950px]:text-left max-[1025px]:text-left'}>
        <span  className = 'text-xl font-font-poppins font-semibold max-[450px]:text-sm max-[950px]:text-lg max-[1025px]:text-lg' >TastyTrails</span >
            <div className="w-12 bg-white h-4 rounded-full absolute top-0 right-0 mt-4 mr-2">
                {dark ? <span className='absolute top-0 left-0 transform -translate-x-1 text-2xl -translate-y-1
                cursor-pointer transition-all duration-500 ease-linear hover:transform hover:scale-110'
                    onClick={handelLight}>
                        <img src={moonicon} alt={'moon'} className='w-6' />
                    </span> :
                    <span className='absolute top-0 right-0 transform -translate-x-[0.001em] text-2xl -translate-y-[0.3em]
                cursor-pointer transition-all duration-500 ease-linear hover:transform hover:scale-110'
                        onClick={handelDark}>
                            <img src={lighticon} alt="light-icon" className='w-7' />
                            </span>}
            </div>
        </header >
    )
}

export default Header
