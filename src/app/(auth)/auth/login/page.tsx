import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

const Login = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">

        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">

                 <div className="relative hidden md:block">
                    {/* Background Image */}
                    <Image
                      src="/dashboard-analysis.png"
                      alt="Dashboard Analysis"
                      fill
                      priority
                      className="object-cover"
                    />
    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60" />
    
                    {/* Center Content */}
                    <div
                      className="
                        absolute
                        inset-0
                        z-10
                        flex
                        flex-col
                        items-center
                        justify-center
                        px-10
                        text-center
                        text-white
                      "
                    >
                      <h2
                        className="
                          max-w-2xl
                          text-2xl
                          font-bold
                          leading-tight
                          lg:text-3xl
                        "
                      >
                        Pennywise
                      </h2>
    
                      <p
                        className="
                          mt-6
                          max-w-2xl
                          text-base
                          leading-7
                          text-white/80
                          lg:text-2
                        "
                      >
                       Experience the next generation of personal finance.
                       Secure, intuitive, and designed to empower your financial journey.
                      </p>
                    </div>
                  </div>

              <form className="p-6 md:p-8">
                <FieldGroup>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                    <p className="text-balance text-muted-foreground">
                      Login to your PennyWise  account
                    </p>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-2 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <Button type="submit">Login</Button>
                  </Field>
                  <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                    Or continue with
                  </FieldSeparator>

                  <Field>
                    <Button variant="outline" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="sr-only">Sign up with Google</span>
                    </Button>
                  </Field>
                  

                  <FieldDescription className="text-center">
                    Don&apos;t have an account? <Link href="/auth/signup">Sign up</Link>
                  </FieldDescription>

                </FieldGroup>

              </form>

            </CardContent>
          </Card>

          <FieldDescription className="px-6 text-center">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </FieldDescription>

        </div>

      </div>
    </div>
  )
}

export default Login
