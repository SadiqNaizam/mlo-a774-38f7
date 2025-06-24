"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log('Login submitted', values);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  return (
    <Card className={cn("w-96", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className="h-auto bg-transparent px-0 py-2 border-0 border-b rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      className="h-auto bg-transparent px-0 py-2 border-0 border-b rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="link" type="button" className="text-sm text-muted-foreground p-0 h-auto font-normal hover:text-primary -mt-2">
              Forgot Password
            </Button>
            
            <div className="pt-2">
                <Button type="submit" className="w-full rounded-lg" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-muted-foreground w-full">
          Don't have an account?{' '}
          <Button variant="link" type="button" className="p-0 h-auto text-primary font-semibold">
            SignUp
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
