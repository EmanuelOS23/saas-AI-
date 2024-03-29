"use client";

import * as z from "zod";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ConversationPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            prompt: ""

        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async(values:z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return(
        <div>
           <Heading
           title="Conversation"
           description="Our most advanced conversation model."
            icon={MessageSquare}
            iconColor="text-violet-700"
            bgColor="text-violet-700/10"
           />
           <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                                rounded-lg
                                border
                                w-full
                                p-4
                                px-3
                                md:px-6
                                focus-within:shadow-sm
                                grid
                                grid-cols-12
                                gap-2
                           "
                        >
                            <FormField
                            name="prompt"
                            render={({field}) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                        <Input
                                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                        disabled={isLoading} 
                                        placeholder="How do I calculate the quadratic roots of an equation?" 
                                        {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                        </form>
                    </Form>
                </div>
           </div>
        </div>
    )
}

export default ConversationPage;
