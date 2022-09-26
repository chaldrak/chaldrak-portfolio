<template>
    <div className="navbar px-4 pt-4 lg:px-10">
        <!-- Mobile view -->
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li 
                    v-for="item in menu"
                    :key="item.name"
                >
                    <router-link
                        :to="item.href"
                    >
                        {{ item.name }}
                    </router-link>
                </li>
                <ThemeToggle class="md:hidden" />
            </ul>
          </div>
          <a className="normal-case text-xl">
            <img src="../assets/chaldrak.jpg" alt="chaldrak" class="w-12 rounded-full border-2 border-gray-400">
          </a>
        </div>
        <!-- Desktop -->
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-5">
                <li 
                    v-for="item in menu"
                    :key="item.name"
                >
                    <router-link
                        :to="item.href"
                    >
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div className="navbar-end space-x-5">
            <ThemeToggle class="hidden md:flex" />
            <a 
                href="/"
                target="_blank"
                title="Visit my blog" 
                className="btn btn-primary space-x-2 px-1 lg:px-3"
            >
                <span class="text-xs lg:text-sm">Geek Diary</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 lg:w-6 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>   
            </a>
        </div>
    </div>
</template>

<script setup="" lang="ts">
import ThemeToggle from './ThemeToggle.vue';
const menu = [
    {
        name: "About Me",
        href: "/"
    },
    {
        name: "Skills",
        href: "/skills"
    },
    {
        name: "Achievements",
        href: "/achievements"
    },
    {
        name: "Resume",
        href: "/contact"
    }
]
</script>

<style scoped>
.router-link-active {
    @apply bg-gray-200
}
</style>