import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Truck } from "lucide-react";

export default function MoveServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex justify-center">
      <Card className="w-full max-w-2xl [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Truck className="h-10 w-10 text-primary" />
            <CardTitle className="text-4xl font-headline">Move Service</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Moving to a new home? Let's get your service transferred.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            
            <div className="space-y-4">
                <h3 className="font-semibold text-xl">Current Address (Stop Service)</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <Label htmlFor="current-street-address">Street Address</Label>
                        <Input id="current-street-address" placeholder="123 Old St" />
                    </div>
                    <div>
                        <Label htmlFor="stop-date">Service Stop Date</Label>
                        <Input id="stop-date" type="date" />
                    </div>
                </div>
            </div>

            <Separator className="my-8"/>

            <div className="space-y-4">
                <h3 className="font-semibold text-xl">New Address (Start Service)</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <Label htmlFor="new-street-address">Street Address</Label>
                        <Input id="new-street-address" placeholder="456 New Ave" />
                    </div>
                    <div>
                        <Label htmlFor="new-city">City</Label>
                        <Input id="new-city" placeholder="New City" />
                    </div>
                    <div>
                        <Label htmlFor="new-zip-code">ZIP Code</Label>
                        <Input id="new-zip-code" placeholder="54321" />
                    </div>
                    <div>
                        <Label htmlFor="start-date">Service Start Date</Label>
                        <Input id="start-date" type="date" />
                    </div>
                </div>
            </div>

            <Separator className="my-8"/>

             <div className="space-y-4">
              <h3 className="font-semibold text-xl">Account Information</h3>
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

            <Button type="submit" className="w-full text-lg py-6 [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
                Submit Transfer Request
            </Button>
            <Button asChild variant="outline" className="w-full mt-2">
              <a href="tel:+18886085436">Call to Move Service: (888) 608-5436</a>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
