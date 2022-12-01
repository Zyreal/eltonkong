import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
    const [hasScrolled, setHasScrolled] = useState(false)

    const listenScrollEvent = (e) => {
        if (window.scrollY > 0) {
            setHasScrolled(true)
        }
        else {
            setHasScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        return() => window.removeEventListener('scroll', listenScrollEvent)
    })

    return (
        // color-900 is darkest, 100 is lightest
        <nav className={'sticky top-0 backdrop-blur-sm z-20 bg-black transition-opacity ease-out ' + (hasScrolled===false ? '' : 'opacity-50 backdrop-blur-sm ')}>
            <ul className='flex m-auto relative'>
                <li className='text-white flex m-auto justify-center align-middle'>
                    <div className=''>
                        <NavLink to='/'
                            className='inline-flex items-center py-6 px-3 mr-4 text-white hover:text-[#919191] text-3xl font-bold heading-one tracking-widest'>
                            home
                        </NavLink>
                        <NavLink to='/projects'
                            className='inline-flex items-center py-6 px-3 mr-4 text-white hover:text-[#919191] text-3xl font-bold heading-one tracking-widest'>
                            projects
                        </NavLink>
                    </div>
                </li>
                <li className='m-auto'>
                    <div className='inline-flex px-3 my-6 relative'>
                        <SocialIcon url='https://github.com/Zyreal' className='mr-4' target='_blank' fgColor='#fff' bgColor='#363636' style={{height:40, width: 40}}/>
                        <SocialIcon url='mailto:eltonkkong@hotmail.com' className='mr-4' target='_blank' fgColor='#fff' bgColor='#363636' style={{height:40, width: 40}}/>
                    </div>
                </li>
            </ul>
        </nav>
    )
}