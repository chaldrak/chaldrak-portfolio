<template>
    <footer className="footer items-center px-10 py-4 text-neutral-content">
        <div className="items-center text-neutral grid-flow-col">
            <p>M@thMyTic - Copyright © 2022 - All right reserved</p>
        </div> 
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a
                v-for="item in socials"
                :key="item.href"
                class="text-neutral"
                :class="item.hover"
            >
                <Component 
                    :is="item.icon" 
                />
            </a>
        </div>
    </footer>
</template>

<script setup lang="ts">
import Github from "../../node_modules/vue-material-design-icons/Github.vue";
import Twitter from "../../node_modules/vue-material-design-icons/Twitter.vue";
import Facebook from "../../node_modules/vue-material-design-icons/Facebook.vue";
import Instagram from "../../node_modules/vue-material-design-icons/Instagram.vue";
import Linkedin from "../../node_modules/vue-material-design-icons/Linkedin.vue";
import Youtube from "../../node_modules/vue-material-design-icons/Youtube.vue";
import Discord from "../../node_modules/vue-material-design-icons/Discord.vue";

const socials = [
    {
        href: "",
        icon: Github,
        hover: "hover:text-black"
    },
    {
        href: "",
        icon: Facebook,
        hover: "hover:text-blue-600"
    },
    {
        href: "",
        icon: Twitter,
        hover: "hover:text-blue-400"
    },
    {
        href: "",
        icon: Instagram,
        hover: "hover:text-yellow-700"
    },
    {
        href: "",
        icon: Linkedin,
        hover: "hover:text-blue-800"
    },
    {
        href: "",
        icon: Youtube,
        hover: "hover:text-red-600"
    },
    {
        href: "",
        icon: Discord,
        hover: "hover:text-purple-600"
    }
]
</script>