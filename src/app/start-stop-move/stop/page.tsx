import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PowerOff } from "lucide-react";

export default function StopServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex justify-center">
      <Card className="w-full max-w-2xl [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-3 mb-2">
            <PowerOff className="h-10 w-10 text-destructive" />
            <CardTitle className="text-4xl font-headline">Stop Service</CardTitle>
          </div>
          <CardDescription className="text-lg">
            We're sorry to see you go. Please confirm your details to stop your service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Service Address</h3>
              <p className="text-sm text-muted-foreground">Confirm the address where service will be disconnected.</p>
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
              <h3 className="font-semibold text-lg">Account Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                     <div>
                        <Label htmlFor="account-number">Account Number</Label>
                        <Input id="account-number" placeholder="123456789" />
                    </div>
                     <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                    </div>
                </div>
            </div>

             <div className="space-y-2">
                <h3 className="font-semibold text-lg">Service Stop Date</h3>
                 <p className="text-sm text-muted-foreground">When should we turn off the power?</p>
                 <Input id="stop-date" type="date" />
             </div>
             
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Forwarding Address</h3>
                 <p className="text-sm text-muted-foreground">Where should we send your final bill?</p>
                 <Input id="forwarding-address" placeholder="456 New Ave, New City, 54321" />
             </div>

            <Button type="submit" variant="destructive" className="w-full text-lg py-6 [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
                Confirm Stop Service
            </Button>
            <Button asChild variant="outline" className="w-full mt-2">
              <a href="tel:+18886085436">Call to Stop Service: (888) 608-5436</a>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
