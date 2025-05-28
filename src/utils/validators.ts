import { ContactMessage } from '../interfaces/contactMessage'

export function validateContactMessage(data: ContactMessage): string | null {
  if (!data.name.trim()) return 'Nome é obrigatório'
  if (!data.email.trim()) return 'Email é obrigatório'
  if (!data.message.trim()) return 'Mensagem é obrigatória'
  if (!/\S+@\S+\.\S+/.test(data.email)) return 'Email inválido'
  return null
}
