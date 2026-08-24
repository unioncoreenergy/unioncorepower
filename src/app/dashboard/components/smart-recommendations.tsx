'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import { getSmartRecommendations, SmartRecommendationsInput } from '@/ai/flows/smart-recommendations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Lightbulb, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  location: z.string().min(2, { message: "Please enter a valid location." }),
});

// Dummy energy data for demonstration
const dummyEnergyData = {
  "monthly_usage_kwh": [
    { "month": "Jan", "usage": 186 },
    { "month": "Feb", "usage": 305 },
    { "month": "Mar", "usage": 237 },
    { "month": "Apr", "usage": 173 },
    { "month": "May", "usage": 209 },
    { "month": "Jun", "usage": 250 }
  ],
  "peak_hours": "5-9 PM"
};

export default function SmartRecommendations() {
  const [recommendations, setRecommendations] = useState<Array<{title: string; description: string}> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      // Mock recommendations for static deployment
      const mockRecommendations = [
        {
          title: "Energy Efficiency Tip",
          description: "Consider upgrading to LED bulbs to reduce energy consumption by up to 75%."
        },
        {
          title: "Smart Thermostat",
          description: "Installing a programmable thermostat can save 10-23% on heating and cooling costs."
        },
        {
          title: "Solar Options",
          description: "Based on your location, solar panels could reduce your energy bill significantly."
        }
      ];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setRecommendations(mockRecommendations);
    } catch (error) {
      console.error("Failed to get recommendations:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not retrieve recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="[clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-accent" />
            <CardTitle className="text-2xl font-headline">Smart Savings</CardTitle>
        </div>
        <CardDescription>Enter your location to get personalized energy-saving tips.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your City or ZIP Code</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., San Francisco or 94107" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="[clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get My Tips
            </Button>
          </form>
        </Form>
        
        {isLoading && (
            <div className="mt-6 flex items-center justify-center">
                <Loader2 className="mr-2 h-8 w-8 animate-spin text-accent" />
                <p>Generating your recommendations...</p>
            </div>
        )}

        {recommendations && (
          <div className="mt-6 rounded-lg border bg-muted/50 p-4">
            <h3 className="font-bold mb-2">Here are your personalized tips:</h3>
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="border-l-4 border-accent pl-3">
                  <h4 className="font-semibold text-sm">{rec.title}</h4>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
