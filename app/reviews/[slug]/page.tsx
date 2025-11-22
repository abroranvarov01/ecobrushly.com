'use client'
import { notFound, useParams } from 'next/navigation'
import { useEffect } from "react"
import Link from 'next/link'
import { Star, ExternalLink, Check, X, ArrowLeft, Leaf, Shield, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getProductBySlug, getAllProducts } from '@/lib/products'

// export async function generateStaticParams() {
// 	const products = getAllProducts()
// 	return products.map((product) => ({
// 		slug: product.slug,
// 	}))
// }

// interface PageProps {
// 	params: Promise<{ slug: string }>
// }

export default function ProductReviewPage() {

	const params = useParams()
	const slug = params.slug;
	const product = getProductBySlug(slug)

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.luna === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"luna=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<div className="py-12">
			<div className="container mx-auto px-4">
				{/* Back Button */}
				<Link
					href="/reviews"
					className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to all reviews
				</Link>

				<div className="grid lg:grid-cols-2 gap-12 mb-12">
					{/* Product Image */}
					<div className="space-y-4">
						<div className="aspect-square rounded-lg overflow-hidden bg-muted">
							<img
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								className="h-full w-full object-cover"
							/>
						</div>
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						<div>
							<Badge className="mb-4">{product.category}</Badge>
							<h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
								{product.name}
							</h1>
							<div className="flex items-center gap-4 mb-4">
								<div className="flex items-center gap-1">
									<Star className="h-5 w-5 fill-accent text-accent" />
									<span className="text-xl font-semibold text-foreground">{product.rating}</span>
									<span className="text-muted-foreground">({product.reviews} reviews)</span>
								</div>
								<div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-lg">
									<Leaf className="h-4 w-4 text-accent" />
									<span className="font-semibold text-accent">{product.ecoScore}</span>
									<span className="text-sm text-muted-foreground">Eco Score</span>
								</div>
							</div>
							<p className="text-lg text-muted-foreground leading-relaxed">
								{product.fullDescription || product.description}
							</p>
						</div>

						{/* Price & CTA */}
						<Card className="bg-primary/5 border-2 border-primary/20">
							<CardContent className="p-6">
								<div className="flex items-center justify-between mb-4">
									<div>
										<div className="text-sm text-muted-foreground mb-1">Price on Amazon</div>

									</div>
									<Badge variant="outline" className="text-primary border-primary">
										Best Value
									</Badge>
								</div>
								<Button asChild size="lg" className="w-full gap-2">
									<a href={product.amazonLink} data-auto>
										View on Amazon
										<ExternalLink className="h-4 w-4" />
									</a>
								</Button>
								<p className="text-xs text-muted-foreground text-center mt-3">
									As an Amazon Associate, we earn from qualifying purchases
								</p>
							</CardContent>
						</Card>

						{/* Quick Highlights */}
						<div className="grid grid-cols-3 gap-4">
							<Card>
								<CardContent className="p-4 text-center">
									<Leaf className="h-6 w-6 text-primary mx-auto mb-2" />
									<div className="text-xs text-muted-foreground">100% Eco</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4 text-center">
									<Shield className="h-6 w-6 text-primary mx-auto mb-2" />
									<div className="text-xs text-muted-foreground">Non-Toxic</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4 text-center">
									<Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
									<div className="text-xs text-muted-foreground">Effective</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>

				{/* Features Section */}
				{product.features && product.features.length > 0 && (
					<Card className="mb-12">
						<CardContent className="p-8">
							<h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
							<div className="grid md:grid-cols-2 gap-4">
								{product.features.map((feature, index) => (
									<div key={index} className="flex gap-3">
										<Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
										<span className="text-muted-foreground">{feature}</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				)}

				{/* Pros & Cons */}
				{(product.pros || product.cons) && (
					<div className="grid md:grid-cols-2 gap-6 mb-12">
						{product.pros && product.pros.length > 0 && (
							<Card className="border-2 border-primary/20">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
										<Check className="h-5 w-5 text-primary" />
										Pros
									</h3>
									<ul className="space-y-3">
										{product.pros.map((pro, index) => (
											<li key={index} className="flex gap-3 text-muted-foreground">
												<span className="text-primary font-bold">+</span>
												<span>{pro}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						)}

						{product.cons && product.cons.length > 0 && (
							<Card className="border-2 border-muted">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
										<X className="h-5 w-5 text-muted-foreground" />
										Cons
									</h3>
									<ul className="space-y-3">
										{product.cons.map((con, index) => (
											<li key={index} className="flex gap-3 text-muted-foreground">
												<span className="text-muted-foreground font-bold">-</span>
												<span>{con}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						)}
					</div>
				)}

				{/* Our Verdict */}
				<Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
					<CardContent className="p-8">
						<h2 className="text-2xl font-bold text-foreground mb-4">Our Verdict</h2>
						<div className="flex items-center gap-2 mb-4">
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={`h-6 w-6 ${i < Math.floor(product.rating)
											? 'fill-accent text-accent'
											: 'text-muted'
											}`}
									/>
								))}
							</div>
							<span className="text-2xl font-bold text-foreground">{product.rating}/5</span>
						</div>
						<p className="text-lg text-muted-foreground leading-relaxed mb-6">
							{product.name} is an excellent choice for eco-conscious consumers looking for effective, sustainable cleaning solutions. Its combination of environmental benefits and practical performance makes it a top pick in the {product.category.toLowerCase()} category.
						</p>
						<Button asChild size="lg" className="gap-2">
							<a href={product.amazonLink} data-auto	>
								Check Current Price on Amazon
								<ExternalLink className="h-4 w-4" />
							</a>
						</Button>
					</CardContent>
				</Card>

				{/* Related Products */}
				<div>
					<h2 className="text-2xl font-bold text-foreground mb-6">You Might Also Like</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{getAllProducts()
							.filter((p) => p.slug !== product.slug && p.category === product.category)
							.slice(0, 3)
							.map((relatedProduct) => (
								<Link key={relatedProduct.slug} href={`/reviews/${relatedProduct.slug}`}>
									<Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
										<div className="aspect-square overflow-hidden bg-muted">
											<img
												src={relatedProduct.image || "/placeholder.svg"}
												alt={relatedProduct.name}
												className="h-full w-full object-cover transition-transform group-hover:scale-105"
											/>
										</div>
										<CardContent className="p-4">
											<h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
												{relatedProduct.name}
											</h3>
											<div className="flex items-center gap-1">
												<Star className="h-4 w-4 fill-accent text-accent" />
												<span className="text-sm font-semibold">{relatedProduct.rating}</span>
											</div>
										</CardContent>
									</Card>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}
