<template>
  <header
    class="sticky right-0 top-0 left-0 z-50 bg-transperant h-20 overflow-hidden transition duration-700"
  >
    <div
      class="container relative px-4 mx-auto h-full flex justify-between items-center"
    >
      <div class="brand-name">
        <nuxt-link to="/">LOGO</nuxt-link>
      </div>
      <!-- transition-transform duration-500 ease-in-out transform translate-x-full -->
      <nav
        class="fixed right-0 top-0 sm:relative z-50 h-screen sm:h-auto w-64 sm:w-auto bg-blue-200 sm:bg-transparent transition-transform duration-700 ease-in-out transform sm:translate-x-0"
        :class="{ 'translate-x-full': !isOpen }"
      >
        <ul
          class="flex flex-col items-center pt-20 sm:pt-0 sm:flex-row  sm:w-auto "
        >
          <li
            class="m-2 capitalize text-xl"
            v-for="link in links"
            :key="link.name"
            @click="openNav"
          >
            <nuxt-link :to="link.to"> {{ link.name }}</nuxt-link>
          </li>
        </ul>
      </nav>

      <div
        class="relative mobile-menu sm:hidden relative z-50 h-16 w-12 cursor-pointer flex flex-col justify-center items-center "
        @click="openNav"
      >
        <div
          class=" transition-transform duration-500 ease-in-out origin-center  transform translate-y-0  h-1 w-10 bg-gray-700 my-1 rounded-lg"
          :class="{ 'translate-y-3': isOpen, 'rotate-45': isOpen }"
        ></div>
        <div
          class=" transition-transform left-0  duration-500 ease-in-out transform translate-x-0 h-1 w-10 bg-gray-700 my-1 rounded-lg opacity-1 "
          :class="{ 'opacity-0': isOpen, 'translate-x-16': isOpen }"
        ></div>
        <div
          class="  transition-transform duration-500 ease-in-out origin-center transform translate-y-0  h-1 w-10 bg-gray-700 my-1 rounded-lg"
          :class="{ '-translate-y-3': isOpen, '-rotate-45': isOpen }"
        ></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "home",
          to: "/"
        },
        {
          name: "about",
          to: "/about"
        },
        {
          name: "blog",
          to: "/blog"
        }
      ],
      isOpen: false
    };
  },
  methods: {
    openNav() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style></style>
