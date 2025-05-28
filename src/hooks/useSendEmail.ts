import email from '@emailjs/browser'
import { ContactMessage } from '../interfaces/contactMessage'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

export const useSendEmail = () => {
  async function sendEmail(
    message: ContactMessage
  ): Promise<ReturnType<typeof email.send>> {
    const templateParams = {
      name: message.name,
      title: 'Olá, entrei em contato atraves do seu Portfolio',
      email: message.email,
      message: message.message,
    }

    return await email.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    })
  }

  return { sendEmail }
}
