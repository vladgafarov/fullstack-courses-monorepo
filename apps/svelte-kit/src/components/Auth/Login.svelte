<script lang="ts">
   import { LogInDocument, type LogInMutation, type LogInMutationVariables } from '$api/generated'
   import { goto } from '$app/navigation'
   import { mutation, operationStore } from '@urql/svelte'

   const login = mutation(operationStore<LogInMutation, LogInMutationVariables>(LogInDocument))

   let email: string = 'jhon@test.com'
   let password: string = '1234567'

   let error: string = ''
   let loading: boolean = false

   const handleSubmit = async () => {
      loading = true
      login({
         email,
         password
      }).then((res) => {
         loading = false
         if (res.error) {
            error = res.error.graphQLErrors[0].message
         } else {
            error = ''
            goto('/')
         }
      })
   }
</script>

<div class="max-w-md mx-auto my-6 bg-slate-200 p-4 lg:p-6 rounded-lg shadow-md">
   <h1 class="underline decoration-blue-500">Вход</h1>

   <form on:submit|preventDefault={handleSubmit} class="flex flex-col space-y-3">
      <label>
         <span>Почта</span>
         <input name="email" bind:value={email} />
      </label>
      <label>
         <span>Пароль</span>
         <input name="password" type="password" bind:value={password} />
      </label>

      {#if error}
         <p class:error>{error}</p>
      {/if}

      <button class="btn btn-primary" disabled={loading}>Войти</button>
   </form>

   <p class="text-center underline pt-3">
      <a href="/signup">Регистрация</a>
   </p>
   <p class="text-center underline pt-3">
      <a href="/reset-password">Сброс пароля</a>
   </p>
</div>
