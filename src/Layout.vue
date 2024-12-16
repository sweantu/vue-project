<template>
    <!-- Note -->
    <div class="bg-yellow-300 p-1">
        <h4 class="text-center text-sm font-medium">
            Resize the browser window to see the responsive effect.
        </h4>
    </div>

    <!-- Header -->
    <header class="p-16 text-center bg-green-600 text-white">
        <h1 class="text-4xl font-bold">My Website</h1>
        <p class="text-lg">With a <b>flexible</b> layout.</p>
    </header>

    <!-- Navigation Bar -->
    <nav class="navbar flex flex-col md:flex-row bg-gray-500 text-white">
        <a href="#" class="text-center px-5 py-4 hover:bg-white hover:text-black" aria-current="page">Home</a>
        <a href="#" class="text-center px-5 py-4 hover:bg-white hover:text-black">About</a>
        <a href="#" class="text-center px-5 py-4 hover:bg-white hover:text-black">Services</a>
        <a href="#" class="text-center px-5 py-4 hover:bg-white hover:text-black">Contact</a>
    </nav>

    <!-- Main Content -->
    <section class="row flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-4 p-5">
        <!-- Sidebar -->
        <aside class="side basis-1/3 bg-gray-300 p-5">
            <h2 class="text-xl font-bold">About Me</h2>
            <h5 class="text-lg font-semibold mt-4">Photo of me:</h5>
            <div class="fakeimg bg-gray-600 w-full p-5 h-52 flex items-center justify-center text-white">
                Placeholder Image
            </div>
            <p class="mt-4 text-sm">Some text about me in culpa qui officia deserunt mollit anim.</p>
            <h3 class="text-lg font-semibold mt-5">More Text</h3>
            <p class="text-sm">Lorem ipsum dolor sit amet.</p>
            <div class="fakeimg bg-gray-600 w-full p-5 h-16 flex items-center justify-center text-white mt-4">
                Placeholder Image
            </div>
            <div class="fakeimg bg-gray-600 w-full p-5 h-16 flex items-center justify-center text-white mt-4">
                Placeholder Image
            </div>
            <div class="fakeimg bg-gray-600 w-full p-5 h-16 flex items-center justify-center text-white mt-4">
                Placeholder Image
            </div>
        </aside>

        <!-- Main Content -->
        <article class="main basis-2/3 bg-blue-200 p-5">
            <h2 class="text-2xl font-bold">TITLE HEADING</h2>
            <h5 class="text-lg font-semibold mt-2">Title description, Dec 7, 2017</h5>
            <div class="fakeimg bg-gray-600 w-full p-5 h-52 flex items-center justify-center text-white mt-4">
                Placeholder Image
            </div>
            <p class="mt-4 text-sm">
                Some text.. Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
            </p>
            <br>
            <h2 class="text-2xl font-bold mt-5">TITLE HEADING</h2>
            <h5 class="text-lg font-semibold mt-2">Title description, Sep 2, 2017</h5>
            <div class="fakeimg bg-gray-600 w-full p-5 h-52 flex items-center justify-center text-white mt-4">
                Placeholder Image
            </div>
            <p class="mt-4 text-sm">
                Some text.. Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
            </p>
        </article>
    </section>

    <!-- Footer -->
    <footer class="footer bg-gray-100 text-center p-5">
        <h2 class="text-lg font-bold">Footer</h2>
        <p class="text-sm">Contact us: email@example.com</p>
    </footer>
</template>
