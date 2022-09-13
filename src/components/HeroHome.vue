<template>
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="../assets/chaldrak.jpg" className="linkIcon max-w-sm rounded-lg shadow-2xl -rotate-6" />
            <div>
                <h1 className="text-5xl font-bold flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 rotate-90">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <span>Chaldrak B. Armand DOKPA</span>
                </h1>
                <hr class="my-6">
                <p className="pb-6">Web Developer Full-Stack <span class="text-2xl">🎊</span></p>
                <button className="btn btn-primary laptop">Get Started</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.linkIcon{
    animation: loader 2s infinite;
}
.laptop {
    animation: bounce 2s infinite;
}
@keyframes loader {
    0% {
        @apply -rotate-6;
    }
    100% {
        @apply rotate-6;
    }
}
@keyframes bounce {
    0% {
        scale: 0.2;
    }
    50% {
        scale: 1;
    }
    100% {
        scale: 1;
    }
}
</style>