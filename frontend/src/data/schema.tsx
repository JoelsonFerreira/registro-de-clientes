import { z } from "zod"

const COMMON_ERROR_MESSAGES = { required_error: "Campo obrigatório!", invalid_type_error: "O tipo de dado deve ser um texto." }

export const clientSchema = z.object({
  id: z.string().optional(),
  name: z.string(COMMON_ERROR_MESSAGES).min(1, { message: COMMON_ERROR_MESSAGES.required_error }),
  email: z.string(COMMON_ERROR_MESSAGES).min(1, { message: COMMON_ERROR_MESSAGES.required_error }).email("E-mail inválido."),
  phone: z.string(COMMON_ERROR_MESSAGES).min(1, { message: COMMON_ERROR_MESSAGES.required_error }),
  coordX: z.string(COMMON_ERROR_MESSAGES).min(1, { message: COMMON_ERROR_MESSAGES.required_error }),
  coordY: z.string(COMMON_ERROR_MESSAGES).min(1, { message: COMMON_ERROR_MESSAGES.required_error }),
})

export type Client = z.infer<typeof clientSchema>