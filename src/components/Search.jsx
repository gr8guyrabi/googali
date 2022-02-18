import React, { useEffect, useState, useRef } from 'react'
import { useDebounce } from 'use-debounce'

import { useResultContext } from '../contexts/ResultContextProvider'

import Links from './Links'

const Search = () => {
    const [text, setText] = useState('')
    const { setSearchTerm } = useResultContext()
    const [debouncedValue] = useDebounce(text, 500)
    const searchRef = useRef(null)

    useEffect(() => {
        console.log(debouncedValue)
        if(debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue])

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
        <input 
            ref={searchRef}
            value={text}
            type="text"
            className="sm:w-96 w-80 h-10 dark:bg:gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg focus:border:"
            placeholder="Search Googali or type URL"
            onChange={(e) => setText(e.target.value)}
        />
        {text && (
            <button 
                type="button" 
                className="absolute top-1.5 right-4 text-2xl text-gray-500"
                onClick={() => { 
                    setText('')
                    searchRef.current.focus()
                }}
            >
            ⊗
            </button>
        )}
        <Links />
    </div>
  )
}

export default Search