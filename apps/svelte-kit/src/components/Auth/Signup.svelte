<script lang="ts">
   import {
      LogInDocument,
      SignUpDocument,
      type LogInMutation,
      type LogInMutationVariables,
      type SignUpMutation,
      type SignUpMutationVariables
   } from '$api/generated'
   import { goto } from '$app/navigation'
   import { mutation, operationStore } from '@urql/svelte'

   const signup = mutation(operationStore<SignUpMutation, SignUpMutationVariables>(SignUpDocument))

   let name: string = ''
   let lastName: string = ''
   let email: string = ''
   let password: string = ''

   let error: string = ''
   let loading: boolean = false

   const handleSubmit = async () => {
      loading = true

      signup({
         name,
         lastName,
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
   <h1 class="underline decoration-blue-500">Регистрация</h1>

   <form on:submit|preventDefault={handleSubmit} class="flex flex-col space-y-3">
      <label>
         <span>Имя</span>
         <input name="name" bind:value={name} />
      </label>
      <label>
         <span>Фамилия</span>
         <input name="lastName" bind:value={lastName} />
      </label>
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

      <button class="btn btn-primary" disabled={loading}>Зарегистрироваться</button>
   </form>

   <p class="text-center underline pt-3">
      <a href="/login">Вход</a>
   </p>
</div>
