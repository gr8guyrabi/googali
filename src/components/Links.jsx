import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { url: '/search', emoji: '🔍 ', text: 'All' },
    { url: '/images', emoji: '📷 ', text: 'Images' },
    { url: '/news', emoji: '📰', text: 'News' },
    { url: '/videos', emoji: '🎬', text: 'Videos' }
]

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map(({ url, text, emoji }, index) => (
            <NavLink key={`${text}_${index}`} to={url} className={({isActive}) => isActive ? "m-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" : "m-2"}>
                <span className="pr-2">{emoji}</span>
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Links