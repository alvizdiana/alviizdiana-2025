import React, { useEffect } from 'react'
import assets from '../../public/assets/asset.js'

const ThemeTogleBtn = ({theme, setTheme}) => {

    useEffect(() => {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (darkMode ? 'dark' : 'light'));
    })

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme])
  return (
    <>
        <button>
            {theme === 'dark' ? (
                <img onClick={()=>setTheme('light')} className='size-8.5 p-1.5 border border-gray-100 rounded-full cursor-pointer' src={assets.sun} alt="" />
            ):(
                <img onClick={()=>setTheme('dark')} className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer' src={assets.moon} alt="" />
            )} 
        </button>
    </>
  )
}

export default ThemeTogleBtn