<script>
   import { goto } from '$app/navigation';

   import Button from '$ui/Buttons/Button.svelte';
   import ButtonOutline from '$ui/Buttons/ButtonOutline.svelte';
</script>

<nav class="flex items-center space-x-6">
   <div class="flex items-center">
      <a href="#">Курсы</a>
   </div>
   <div class="flex items-center space-x-3">
      <Button on:click={() => goto('/login')}>Вход</Button>
      <ButtonOutline on:click={() => goto('/signup')}>Регистрация</ButtonOutline>
   </div>
</nav>
