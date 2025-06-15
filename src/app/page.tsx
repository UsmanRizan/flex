import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

const HomePage = () => {
  return (
    <div>
      HomePage

      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedIn>
        You are signed in!
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>

    </div>
  )
}

export default HomePage
