"use client"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email : z.string().email({message : "Invalid email address"}),
    phone : z.string().min(10).max(15),
    location : z.string().min(2)
})
const EditUser = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "john.doe",
            email: "john.dow@gmail.com",
            phone: "+1 234 56789",
            location: "New York ,NY"
        },
    })
    return (
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle className={"mb-6"}>Edit User</SheetTitle>
                    <SheetDescription asChild>
                      <Form {...form}>
                          <form className={"space-y-8"}>
                              <FormField control = {form.control} name = "username" render={({field}) =>(
                                  <FormItem>
                                      <FormLabel>Username</FormLabel>
                                      <FormControl>
                                          <Input  {...field} />
                                      </FormControl>
                                      <FormDescription>
                                          This is your public display name.
                                      </FormDescription>
                                      <FormMessage />
                                  </FormItem>

                              )} />

                              <FormField control = {form.control} name = "email" render={({field}) =>(
                                  <FormItem>
                                      <FormLabel>Email</FormLabel>
                                      <FormControl>
                                          <Input  {...field} />
                                      </FormControl>
                                      <FormDescription>
                                          This is your email address.
                                      </FormDescription>
                                      <FormMessage />
                                  </FormItem>

                              )} />
                              <FormField control = {form.control} name = "phone" render={({field}) =>(
                                  <FormItem>
                                      <FormLabel>Phone Number</FormLabel>
                                      <FormControl>
                                          <Input  {...field} />
                                      </FormControl>
                                      <FormDescription>
                                          This is your contact number.
                                      </FormDescription>
                                      <FormMessage />
                                  </FormItem>

                              )} />

                              <FormField control = {form.control} name = "location" render={({field}) =>(
                                  <FormItem>
                                      <FormLabel>Location</FormLabel>
                                      <FormControl>
                                          <Input  {...field} />
                                      </FormControl>
                                      <FormDescription>
                                          This is public lcoation.
                                      </FormDescription>
                                      <FormMessage />
                                  </FormItem>

                              )} />

                          <Button type = "submit"> Submit</Button>
                          </form>
                      </Form>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
    )
}

export default EditUser