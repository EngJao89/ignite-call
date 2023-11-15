import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'

const ClaimUsernameFormSchema = z.object({
  username: z.string(),
})

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm()

  async function handleClaimUsername(data: any) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuário"
        {...register('username')}
      />

      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
