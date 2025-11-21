import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto text-center">
        <SearchX className="h-24 w-24 text-muted mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {'Product Not Found'}
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {'Sorry, we couldn\'t find the product you\'re looking for. It may have been removed or the link is incorrect.'}
        </p>
        <Button asChild size="lg">
          <Link href="/reviews">
            {'Back to Reviews'}
          </Link>
        </Button>
      </div>
    </div>
  )
}
