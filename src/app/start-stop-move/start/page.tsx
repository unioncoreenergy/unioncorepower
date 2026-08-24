import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Power } from "lucide-react";

export default function StartServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex justify-center">
      <Card className="w-full max-w-2xl [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Power className="h-10 w-10 text-accent" />
            <CardTitle className="text-4xl font-headline">Start New Service</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Welcome! Let's get your power connected.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Service Address</h3>
              <p className="text-sm text-muted-foreground">Where are you moving to?</p>
              <div className="grid sm:grid-cols-2 gap-4">
                  <div className="col-span-2">
                      <Label htmlFor="street-address">Street Address</Label>
                      <Input id="street-address" placeholder="123 Main St" />
                  </div>
                  <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Anytown" />
                  </div>
                  <div>
                      <Label htmlFor="zip-code">ZIP Code</Label>
                      <Input id="zip-code" placeholder="12345" />
                  </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Personal Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                     <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" />
                    </div>
                     <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                    </div>
                     <div className="col-span-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                </div>
            </div>

             <div className="space-y-2">
                <h3 className="font-semibold text-lg">Service Start Date</h3>
                 <p className="text-sm text-muted-foreground">When would you like your service to begin?</p>
                 <Input id="start-date" type="date" />
             </div>

            <Button type="submit" className="w-full text-lg py-6 [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
                Submit Request
            </Button>
            <Button asChild variant="outline" className="w-full mt-2">
              <a href="tel:+18886085436">Call to Start Service: (888) 608-5436</a>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
