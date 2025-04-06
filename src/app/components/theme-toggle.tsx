"use client"

import { useEffect, useState } from "react"

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Al cargar, inicializamos el tema según localStorage o preferencia del sistema.
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle("dark", storedTheme === "dark")
    } else {
      // Si no hay valor guardado, se puede optar por la preferencia del sistema:
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const initialTheme = prefersDark ? "dark" : "light"
      setTheme(initialTheme)
      document.documentElement.classList.toggle("dark", prefersDark)
      localStorage.setItem("theme", initialTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
    >
      {theme === "light" ? "Cambiar a Dark" : "Cambiar a Light"}
    </button>
  )
}
