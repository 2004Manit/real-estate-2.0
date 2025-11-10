import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2 } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 justify-center mb-8 group">
          <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center shadow-purple">
            <Building2 className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Estatein
          </span>
        </Link>

        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-8">
            <Tabs value={isLogin ? "login" : "signup"} onValueChange={(v) => setIsLogin(v === "login")}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
                <p className="text-muted-foreground mb-6">Sign in to your account to continue</p>
                
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="Enter your email" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Password</label>
                    <Input type="password" placeholder="Enter your password" className="bg-background border-border" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember" className="text-sm text-muted-foreground">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button variant="hero" className="w-full" size="lg">
                    Sign In
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      Phone
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="signup">
                <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                <p className="text-muted-foreground mb-6">Join Estatein today and start your property journey</p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="First name" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Last name" className="bg-background border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="Enter your email" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Password</label>
                    <Input type="password" placeholder="Create a password" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Confirm Password</label>
                    <Input type="password" placeholder="Confirm your password" className="bg-background border-border" />
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the Terms of Service and Privacy Policy
                    </label>
                  </div>
                  <Button variant="hero" className="w-full" size="lg">
                    Create Account
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-card text-muted-foreground">Or sign up with</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      Phone
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
