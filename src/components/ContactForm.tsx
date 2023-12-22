"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import nodemailer from "nodemailer";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  firstname: z.string(),
  lastname: z.string(),
  phone: z.string(),
  email: z.string(),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = {
      clientEmail: "alfonsoayo7@gmail.com",
      clientName: "MyProperty",
      customerName: `${values?.firstname} ${values?.lastname}`,
      customerEmail: values?.email,
      message: values?.message,
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/my_property_app/contact_us`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      form.reset();
      toast({
        title: "Contact sent successfully",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-20">
      <h2 className="font-bold text-2xl text-[--secondary] mb-6 ">
        Send A Message
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Firstname and Lastname */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 ">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First name"
                      {...field}
                      className="bg-transparent p-6 border-[--secondary] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      {...field}
                      className="bg-transparent p-6 border-[--secondary] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 ">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone number"
                      {...field}
                      className="bg-transparent p-6 border-[--secondary] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      {...field}
                      className="bg-transparent p-6 border-[--secondary] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Textarea */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write here!!"
                    {...field}
                    className="bg-transparent p-4 border-[--secondary] "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="default"
            className="rounded-full px-10 py-6 hover:text-[--accent] hover:bg-[--secondary] border-2 text-white border-[--secondary] outline-dotted outline-2 outline-offset-2 bg-[--secondary] ">
            Contact us
          </Button>
        </form>
      </Form>
    </div>
  );
}
