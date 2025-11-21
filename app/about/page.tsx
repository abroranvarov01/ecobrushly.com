import { Leaf, Heart, Target, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Leaf className="h-4 w-4" />
            <span>{'About EcoBrushly'}</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-6 text-balance">
            {'Making Sustainable Cleaning Accessible to Everyone'}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {'We\'re on a mission to help families transition to eco-friendly cleaning solutions without sacrificing effectiveness or breaking the bank.'}
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src="/eco-friendly-sustainable-cleaning-products-bamboo-.jpg"
              alt="Eco-friendly cleaning products"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{'Our Story'}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {'EcoBrushly was founded in 2023 by a team of environmental advocates and cleaning experts who were frustrated by the lack of honest, comprehensive reviews for eco-friendly cleaning products.'}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {'We noticed that while many people wanted to make more sustainable choices, they struggled to find reliable information about which products actually work. That\'s where we come in.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {'Today, we\'ve tested hundreds of eco-friendly cleaning gadgets and helped thousands of families make the switch to sustainable cleaning solutions.'}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">{'Our Values'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{'Sustainability First'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'Every product we recommend meets strict environmental standards.'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{'Honest Reviews'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'We test every product ourselves and share unbiased opinions.'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{'Real Results'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'We only recommend products that deliver actual cleaning power.'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{'Community Focus'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'We listen to our readers and prioritize the products you want reviewed.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How We Review */}
        <Card className="mb-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">{'How We Review Products'}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{'01'}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{'Research & Selection'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'We identify promising eco-friendly products based on materials, certifications, and community interest.'}
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{'02'}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{'Hands-On Testing'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'Our team uses each product for at least two weeks in real-world cleaning scenarios.'}
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{'03'}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{'Honest Assessment'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'We evaluate effectiveness, durability, value, and environmental impact before publishing.'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">{'Amazon Associate Disclosure'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'EcoBrushly is a participant in the Amazon Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. This means we may earn a small commission when you purchase products through our links, at no additional cost to you. These commissions help us continue providing free, quality content and product reviews. Our reviews and recommendations are always honest and based on our actual testing and experience.'}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
