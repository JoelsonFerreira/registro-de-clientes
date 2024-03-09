import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

type NewClientModalProps = {
  children?: ReactNode;
}

export function NewClientModal({ children }: NewClientModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Registrar cliente</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  )
}
