<script>
   import Nav from '$components/Nav.svelte';

   import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
   <header
      class="fixed w-full bg-white h-16 z-50 flex flex-row justify-between items-center border-b-2 border-green-400 px-6"
   >
      <div>
         <a href="/" class="font-proxima-bold text-2xl">Courses</a>
      </div>

      <Nav />
   </header>

   <main class="flex-grow mt-16"><slot /></main>

   <footer class="py-4 px-6 bg-slate-600 text-white">
      <div>
         <a href="/" class="text-green-400 font-proxima-bold text-2xl"> Courses </a>
      </div>
      <div>&copy; Copyright 2022</div>
   </footer>
</div>
