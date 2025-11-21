import Link from 'next/link'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getAllProducts } from '@/lib/products'

export default function ReviewsPage() {
  const products = getAllProducts()

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {'Product Reviews'}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {'Explore our comprehensive reviews of eco-friendly cleaning gadgets. Each product is tested and rated for effectiveness, sustainability, and value.'}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{products.length}</div>
              <div className="text-sm text-muted-foreground">{'Products Reviewed'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{'4.7'}</div>
              <div className="text-sm text-muted-foreground">{'Average Rating'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{'2.1K+'}</div>
              <div className="text-sm text-muted-foreground">{'Customer Reviews'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{'93%'}</div>
              <div className="text-sm text-muted-foreground">{'Eco Score Avg'}</div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
              <Link href={`/reviews/${product.slug}`}>
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded">
                    <span className="text-xs font-semibold text-accent">{product.ecoScore}</span>
                    <span className="text-xs text-muted-foreground">{'eco'}</span>
                  </div>
                </div>

                <Link href={`/reviews/${product.slug}`}>
                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between gap-2">
                  
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/reviews/${product.slug}`}>
                        {'Details'}
                      </Link>
                    </Button>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            {'Showing all 45 products'}
          </p>
        </div>
      </div>
    </div>
  )
}
