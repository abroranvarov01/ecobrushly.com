'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <div className="bg-card border border-border rounded-lg shadow-lg p-4">
        <div className="flex gap-3">
          <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-foreground leading-relaxed mb-3">
              This website uses cookies to enhance your experience and analyze site usage. By continuing, you consent to our use of cookies.
            </p>
            <div className="flex gap-2">
              <Button onClick={acceptCookies} size="sm" className="flex-1">
                Accept
              </Button>
              <Button
                onClick={acceptCookies}
                variant="ghost"
                size="sm"
                className="flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
