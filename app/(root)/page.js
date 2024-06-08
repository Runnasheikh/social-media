
import { SignIn, UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'
import React from 'react'

export default function Home () {
  return (
    <div>

      <SignedIn>
       <UserButton/>
      </SignedIn>
    </div>
  )
}

