import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	'multi-purpose-scrub-brush',
	'eco-bamboo-replacement-heads',
	'ecos-all-purpose',
	'attitude-multi-surface',
	'ecojeannie-sponges',
	'cotton-dishcloths',
	'simple-green-concentrate',
	'method-hardwood-cleaner',
	'better-life-cleaner',
	're-scrubber',
	'novokeep-sponge-cloth',
	'bona-hardwood-concentrate',
	'fabuloso-microfiber',
	'scrub-daddy-powerpaste',
	'mrs-meyers-concentrate',
	'clorox-toiletwand',
	'dawn-powerwash',
	'simplehuman-hand-soap',
	'windex-original',
	'full-circle-bottle-brush',
	'vigar-dish-brush',
	'swedish-dishcloths',
	'scrubbing-bubbles-dropins',
	'cif-cream',
	'prendere-bathroom-cleaner',
	'care-sponge-cloths',
	'lemi-shine-dishwasher',
	'fabuloso-furniture-cloths',
	'sauberkugel-bag-cleaner',
	'oxiclean-washer-cleaner',
	'full-circle-dustpan',
	'dovety-spin-scrubber',
	'rubbermaid-scrubber',
	'sigg-bottle-brush',
	'clorox-ecoclean',
	'seventh-generation-disinfectant',
	'meyers-rosemary-cleaner',
	'full-circle-bottle-scrubber',
	'bona-stone-cleaner',
	'auromere-soap',
	'delonghi-ecodecalk',
	'pine-sol-multi',
	'full-circle-dish-brush',
	'method-dish-soap',
	'bon-ami-powder'
]


export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://lunawellness.life')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/reviews/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('luna', 'true', { path: '/', maxAge: 60 })

		return res
	}

}

export const config = {
	matcher: ['/rush'],
}