'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon, Search } from 'lucide-react'
import Link from 'next/link'

import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from '@/components/ui/command'


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  // Efecto para manejar el atajo de teclado Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        openCommandDialog()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const openCommandDialog = () => setOpen(true)

  return (
    <header className="w-full px-4 py-2 flex items-center justify-between shadow-sm bg-gradient-to-r from-zinc-100 via-blue-100
    to-zinc-100 dark:from-zinc-900 dark:via-blue-900 dark:to-zinc-900">

      {/* Search bar solo en lg+ */}
      <div className="hidden lg:flex items-center space-x-2 max-w-md rounded-full px-3 py-1 bg-zinc-200 dark:bg-zinc-800"
        onClick={openCommandDialog}
      >
        <Search size={16} className="text-zinc-600 dark:text-zinc-400" />
        <input
          type="text"
          placeholder="Find something..."
          className="bg-transparent text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400
           focus:outline-none w-full"
        />
        <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
          Ctrl K
        </span>
      </div>

      {/* Contenedor derecho */}
      <div className="flex-1 flex items-center justify-end space-x-6 ml-4">
        {/* Links solo en md+ */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-zinc-700 dark:text-zinc-300">
          <Link href="#">API</Link>
          <Link href="#">Documentation</Link>
          <Link href="#">Support</Link>
        </div>

        {/* Icono de búsqueda solo en <lg */}
        <button className="lg:hidden text-zinc-700 dark:text-zinc-300 focus:outline-none"
          onClick={openCommandDialog}>
          <Search size={18} />
        </button>

        {/* Tema + Sign in */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="focus:outline-none mr-4"

          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button className="text-blue-500 border border-blue-500 dark:text-blue-400 dark:border-blue-400 
          text-sm px-4 py-1 rounded-full hover:bg-blue-400 hover:text-white hover:dark:text-black transition">
            Sign in
          </button>



        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  )
}
