'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{'Get in Touch'}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {'Have a question, suggestion, or product you\'d like us to review? We\'d love to hear from you!'}
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{'Email Us'}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {'For general inquiries and partnerships'}
                    </p>
                    <a
                      href="mailto:contact@ecobrushly.com"
                      className="text-sm text-primary hover:underline"
                    >
                      {'contact@ecobrushly.com'}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{'Product Requests'}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {'Suggest products for us to review'}
                    </p>
                    <a
                      href="mailto:reviews@ecobrushly.com"
                      className="text-sm text-primary hover:underline"
                    >
                      {'reviews@ecobrushly.com'}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">{'Send Us a Message'}</h2>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {'Message Sent!'}
                  </h3>
                  <p className="text-muted-foreground">
                    {'Thank you for contacting us. We\'ll get back to you within 24-48 hours.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        {'Name'}
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        {'Email'}
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      {'Subject'}
                    </label>
                    <Input id="subject" placeholder="What is this about?" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      {'Message'}
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    {'Send Message'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
