import type { Dispatch, ReactNode, SetStateAction } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type NewClientModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function NewClientModal({ 
  children,
  isOpen,
  setIsOpen,
}: NewClientModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Registrar cliente</Button>
      </DialogTrigger>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}
