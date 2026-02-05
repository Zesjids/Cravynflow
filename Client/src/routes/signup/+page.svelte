<script>
</script>

<main class="min-h-screen w-full flex items-center justify-center bg-[url('/image/bg.jpg')] bg-cover bg-center bg-no-repeat">
  <section class="flex flex-col p-10 rounded-3xl bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-y-4">

    <div class="flex justify-between align-center">
      <div class=" p-0 rounded-lg">
        <button class="bg-white/5 backdrop-blur-l shadow-2xl border-white/10 text-sm font-medium border px-5 py-2 rounded-3xl">Sign up</button>
        <button class=" bg-white/5 backdrop-blur-l shadow-2xl border-white/10 text-sm font-medium border px-5 py-2 rounded-3xl">Sign in</button>
      </div>

      <div>
        <ion-icon class="text-2xl font-medium bg-white/5 backdrop-blur-l border-white/10 p-1.5 rounded-3xl active:text-red-400" name="close-outline"></ion-icon>
      </div>

    </div>

    <div>
      <p class="text-xl font-semibold">Create an account</p>
    </div>

    <div class="flex flex-col gap-y-2">
      <input class=" p-2.5 text-sm bg-white/5 backdrop-blur-l border-white/10 shadow-2xl rounded-md" type="text" placeholder="Firstname">
      <input class=" bg-white/5 backdrop-blur-l border-white/10 shadow-2xl p-2.5 text-sm rounded-md" type="text" placeholder="Lastname">
      <input class=" bg-white/5 backdrop-blur-l border-white/10 shadow-2xl p-2.5 text-sm bg-none rounded-md" type="text" placeholder="Enter your email">
    </div>

    <button class="text-sm bg-stone-200 px-4 py-3 rounded-lg text-black font-medium mt-2">Create an account</button>

    <p class="flex justify-center text-sm">OR SIGN IN WITH</p>

    <div class="flex justify-center gap-x-4">
      <div class="bg-white/5 backdrop-blur-l border-white/10 shadow-2xl rounded-md px-12 py-3">
        <ion-icon class="text-2xl" name="logo-google"></ion-icon>
      </div>

      <div class="bg-white/5 backdrop-blur-l border-white/10 shadow-2xl rounded-md px-12 py-3">
        <ion-icon class="text-2xl" name="logo-apple"></ion-icon>
      </div>
    </div>


    <p class="text-xs mt-4">By creating an account, you agree to our Terms & Service</p>
  </section>
</main>
