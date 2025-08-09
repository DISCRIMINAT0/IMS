"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  return (
    <section className="w-full py-10 md:py-16">
      <div className="container px-4 md:px-6 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Client Login</CardTitle>
            <CardDescription>Access repeat orders and track requests.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setLoading(true)
                setTimeout(() => setLoading(false), 1000)
                alert("This is a placeholder login. Integrate authentication to enable.")
              }}
              className="grid gap-4"
            >
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700">
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            <div className="mt-4 text-sm">
              <Link href="#" className="text-blue-700 hover:underline">
                Forgot password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
