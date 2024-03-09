"use client"

import { Table } from "@tanstack/react-table"

import { Input } from "@/components/ui/input"

import { NewCLientForm } from "@/components/clients/new-client-form";
import { NewClientModal } from "@/components/clients/new-client-modal";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

type DataTableToolbarProps = {
  globalFilter: string
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>
}

export function DataTableToolbar({
  globalFilter,
  setGlobalFilter
}: DataTableToolbarProps) {
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

      <NewClientModal>
        <AlertDialogHeader>
          <AlertDialogTitle>Adicionar novo cliente</AlertDialogTitle>
        </AlertDialogHeader>
        <NewCLientForm> 
          <AlertDialogFooter>
            <AlertDialogCancel type="button">Cancelar</AlertDialogCancel>
            <AlertDialogAction type="submit">Registrar</AlertDialogAction>
          </AlertDialogFooter>
        </NewCLientForm>
      </NewClientModal>
    </div>
  )
}