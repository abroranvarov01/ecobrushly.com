import Link from 'next/link'
import { ArrowRight, Sparkles, ShieldCheck, Leaf, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getTopRatedProducts } from '@/lib/products'

export default function HomePage() {
  const topProducts = getTopRatedProducts(3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" />
              <span>{'Sustainable Cleaning Solutions'}</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
              {'Clean Your Home, '}
              <span className="text-primary">{'Naturally'}</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
              {'Discover eco-friendly cleaning gadgets that are gentle on the planet and powerful on dirt. Expert reviews, sustainable recommendations, and the best deals from Amazon.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/reviews">
                  {'Browse Reviews'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">{'Learn More'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
              {'Why Choose Eco-Friendly Cleaning?'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {'Make a positive impact on your health, home, and the environment with sustainable cleaning solutions.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{'Planet-Friendly'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'Reduce your carbon footprint with biodegradable, sustainable cleaning tools that protect our environment.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{'Safe & Non-Toxic'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'No harsh chemicals or toxins. Perfect for families, pets, and anyone with sensitivities.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{'Highly Effective'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'Natural doesn\'t mean weak. These tools deliver professional cleaning results without compromise.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{'Top Rated Products'}</h2>
              <p className="text-muted-foreground">{'Our expert-reviewed eco-friendly cleaning essentials'}</p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex gap-2">
              <Link href="/reviews">
                {'View All'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product) => (
              <Link key={product.id} href={`/reviews/${product.slug}`}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/reviews">
                {'View All Reviews'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{'Shop by Category'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'Find the perfect eco-friendly cleaning solution for every area of your home'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Kitchen', icon: '🍽️', count: '24 products' },
              { name: 'Bathroom', icon: '🚿', count: '18 products' },
              { name: 'Floors', icon: '🧹', count: '15 products' },
              { name: 'Windows', icon: '🪟', count: '12 products' },
              { name: 'Laundry', icon: '👕', count: '20 products' },
              { name: 'Outdoor', icon: '🌳', count: '10 products' },
              { name: 'All-Purpose', icon: '✨', count: '32 products' },
              { name: 'Accessories', icon: '🧺', count: '16 products' }
            ].map((category) => (
              <Link key={category.name} href={`/reviews?category=${category.name.toLowerCase()}`}>
                <Card className="group text-center transition-all hover:shadow-md hover:border-primary/50 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
                {'Why Trust EcoBrushly Reviews?'}
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Expert Testing', description: 'We personally test every product before recommending it to you.' },
                  { title: 'Honest Reviews', description: 'No paid placements. We only recommend products we truly believe in.' },
                  { title: 'Sustainability Focus', description: 'Every product meets our strict environmental standards.' },
                  { title: 'Amazon Verified', description: 'All products available with trusted Amazon shipping and returns.' }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src="/eco-friendly-cleaning-products-lifestyle.jpg"
                alt="Eco-friendly cleaning products"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">
            {'Ready to Make the Switch?'}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
            {'Join thousands of families making their homes cleaner and greener. Browse our expert reviews and find your perfect eco-friendly cleaning solution today.'}
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link href="/reviews">
              {'Explore All Reviews'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
