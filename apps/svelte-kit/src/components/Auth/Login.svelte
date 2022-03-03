<script lang="ts">
   import { LogInDocument, type LogInMutation, type LogInMutationVariables } from '$api/generated'

   import Button from '$ui/Buttons/Button.svelte'
   import Input from '$ui/Form/Input.svelte'
   import { mutation, operationStore } from '@urql/svelte'

   const login = mutation(operationStore<LogInMutation, LogInMutationVariables>(LogInDocument))

   let email: string = 'jhon@test.com'
   let password: string = '1234567'

   let error: string = ''

   const handleSubmit = () => {
      login({
         email,
         password
      }).then((res) => {
         if (res.error) {
            error = res.error.graphQLErrors[0].message
         } else {
            error = ''
         }
      })
   }
</script>

<div class="max-w-md mx-auto my-6 bg-slate-200 p-4 lg:p-6 rounded-lg shadow-md">
   <h1 class="underline decoration-blue-500">Вход</h1>

   <form on:submit|preventDefault={handleSubmit} class="flex flex-col space-y-3">
      <label for="email">
         <span>Почта</span><br />
         <Input name="email" bind:value={email} />
      </label>
      <label for="password">
         <span>Пароль</span> <br />
         <Input name="password" bind:value={password} />
      </label>

      {#if error}
         {error}
      {/if}

      <Button>Войти</Button>
   </form>

   <p class="text-center underline pt-3">
      <a href="/signup">Регистрация</a>
   </p>
   <p class="text-center underline pt-3">
      <a href="/reset-password">Сброс пароля</a>
   </p>
</div>
