"use client"

import type { ReactNode } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { type Client, clientSchema } from "@/data/schema"
import { createClient } from "@/actions/create-client"

type NewCLientFormProps = {
  children?: ReactNode;
  onClose: () => void
}

export function NewCLientForm({ children, onClose }: NewCLientFormProps) {
  const form = useForm<Client>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
    },
  })

  const onCreateClient = async (data: Client) => {    
    await createClient(data);
    onClose();
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onCreateClient)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Jõao Pedro" {...field} />
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
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="joao@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="11 999999999" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="coordX"
            render={({ field }) => (
              <FormItem>
                <FormLabel>X</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="coordY"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Y</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {children}
      </form>
    </Form>
  )
}
