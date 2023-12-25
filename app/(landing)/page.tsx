import { Button } from "@/components/ui/button"
import Link from "next/link"


const LandingPage = () => {
  return (
    <div className="ml-12">
      <div className="mt-5 text-center text-sm md:text-xl "> 
      Landing Page (unprotected) Under Devlopment 
      </div>
      <div className="flex flex-direction-column s-between-12">
        <Link href="/sign-in"  className="pl-12 mt-12 flex item-center">
        <Button>
          Login
        </Button>
        </Link>


        <Link href="/sign-up" className="pl-12 mt-12 flex item-center">
        <Button>
          Register
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
