import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 text-sm", className)} {...props}>
      <form>

          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <Button variant="white" type="submit" className="w-full">
              Sign In
            </Button>
          </div>



      </form>
      <div className="*:[a]:text-[#AAD4C5] *:[a]:hover:text-primary text-center">
        By clicking Continue to join or sign in, you agree to RPBX's <a href="#">User Agreement</a>, {" "}
        <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.
      </div>

      <div className="*:[a]:text-[#AAD4C5] *:[a]:hover:text-primary text-center">
        New to RioPlex?{" "}
        <a href="#">Join Now</a>
      </div>
    </div>
  )
}
// {" "}