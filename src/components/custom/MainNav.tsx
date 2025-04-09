'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAVIGATION } from '@/constants/ui'
import { cn } from '@/lib/utils'

const MainNav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {NAVIGATION.main.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.path
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav 