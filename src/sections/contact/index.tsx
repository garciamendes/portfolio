import { useState } from 'react'
import { useSendEmail } from '../../hooks/useSendEmail'
import { ContactMessage } from '../../interfaces/contactMessage'
import { validateContactMessage } from '../../utils/validators'
import { useTranslation } from '../../hooks/useTranslation'

export default function Contact() {
  const { gettext } = useTranslation()
  const { sendEmail } = useSendEmail()
  const [form, setForm] = useState<ContactMessage>({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateContactMessage(form)
    if (validationError) {
      console.error(validateContactMessage)
      return
    }

    setIsLoading(true)
    try {
      await sendEmail(form)

      setForm({ name: '', email: '', message: '' })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Erro ao enviar email:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-between w-full gap-8 my-8">
      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 flex lg:hidden border-t border-black"></div>
        <h2 className="text-3xl font-bold text-black whitespace-nowrap">
          {gettext('contact.title')}
        </h2>
        <div className="flex-1 border-t border-black"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-[500px] gap-5"
      >
        <input
          className="border-2 border-black rounded-md pl-6 w-full h-[50px] outline-none"
          name="name"
          placeholder={gettext('contact.inputs.name')}
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="border-2 border-black rounded-md pl-6 w-full h-[50px] outline-none"
          name="email"
          type="email"
          placeholder={gettext('contact.inputs.email')}
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          className="border-2 border-black rounded-md pl-6 pt-4 w-full outline-none"
          name="message"
          placeholder={gettext('contact.inputs.message')}
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className="h-[56px] w-full md:w-[173px] border-none rounded-sm bg-black text-white cursor-pointer font-bold"
        >
          {isLoading
            ? gettext('contact.button.loading')
            : gettext('contact.button.placeholder')}
        </button>
      </form>
    </div>
  )
}
