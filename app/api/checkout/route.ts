import { NextResponse } from 'next/server'
//
import { validateCartItems } from 'use-shopping-cart/utilities'

import { DUMMY_INVENTORY } from '@/data'
import { stripe } from '@/lib/stripe/config'

export async function POST(request: Request) {
  const cartDetails = await request.json()
  const lineItems = validateCartItems(DUMMY_INVENTORY, cartDetails)
  const origin = request.headers.get('origin')

  const session = await stripe.checkout.sessions.create({
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: lineItems,
    shipping_address_collection: {
      allowed_countries: ['NG', 'CA'],
    },
    shipping_options: [
      {
        shipping_rate: 'shr_1NeIb5JCCQccNuttVR5l4dKF',
      },
    ],
    billing_address_collection: 'auto',
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  })
  return NextResponse.json(session)
}
