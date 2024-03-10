"use client"
import { useState } from "react";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

import { NewCLientForm } from "@/components/clients/new-client-form";
import { NewClientModal } from "@/components/clients/new-client-modal";
import { ClientPath } from "@/components/clients/client-path";

type DataTableToolbarProps = {
  globalFilter: string
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>
}

export function DataTableToolbar({
  globalFilter,
  setGlobalFilter
}: DataTableToolbarProps) {
  const [newClientModalIsOpen, setNewClientModalIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          value={globalFilter ?? ''}
          onChange={event => setGlobalFilter(String(event.target.value))}
          className="h-8 w-[150px] lg:w-[250px]"
          placeholder="Filtrar clientes..."
        />
      </div>

      <div className="space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Calcular rota</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Clientes na ordem da rota</DialogTitle>
            </DialogHeader>
            <ClientPath />
            <DialogFooter>
              <DialogClose asChild>
                <Button>Sair</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <NewClientModal isOpen={newClientModalIsOpen} setIsOpen={setNewClientModalIsOpen}>
          <DialogHeader>
            <DialogTitle>Adicionar novo cliente</DialogTitle>
          </DialogHeader>
          <NewCLientForm onClose={() => setNewClientModalIsOpen(false)}> 
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant={"outline"}>Sair</Button>
              </DialogClose>
              <Button type="submit">Registrar</Button>
            </DialogFooter>
          </NewCLientForm>
        </NewClientModal>
      </div>
    </div>
  )
}