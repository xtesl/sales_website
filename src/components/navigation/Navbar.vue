<template>
  <div class="relative">
    <!-- Notification -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div
        v-if="showNotification"
        class="fixed top-20 right-4 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-lg z-50 max-w-sm"
      >
        {{ notificationMessage }}
      </div>
    </Transition>

    <!-- Existing Navbar -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo and brand -->
          <div class="flex items-center">
            <a href="/" class="flex-shrink-0 flex items-center">
              <span class="text-indigo-600 text-2xl mr-1">
                <img src="/images/icon.jpg" alt="logo" />
              </span>
              <span class="font-bold text-xl text-indigo-600">DDA</span>
            </a>
          </div>
          
          <!-- Desktop navigation links -->
          <div class="hidden md:flex items-center">
            <div class="ml-10 flex items-baseline space-x-4">
              <a 
                v-for="(item, index) in navItems" 
                :key="index"
                :href="item.href"
                :class="[
                  item.current 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600',
                  'px-3 py-2 text-sm font-medium transition-all duration-200'
                ]"
                @click="handleNavClick(item)"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="flex md:hidden items-center">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen" 
              class="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg 
                v-if="!mobileMenuOpen" 
                class="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                v-else 
                class="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden bg-white shadow-lg"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            v-for="(item, index) in navItems" 
            :key="index"
            :href="item.href"
            :class="[
              item.current 
                ? 'text-indigo-600' 
                : 'text-gray-700 hover:text-indigo-600',
              'block px-3 py-2 text-base font-medium transition-colors duration-200'
            ]"
            @click="handleNavClick(item)"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
  navItems: {
    type: Array,
    default: () => [
      { name: 'Home', href: '#/', current: true },
      { name: 'Courses', href: '#', current: false },
      { name: 'Features', href: '#', current: false },
      { name: 'Testimonials', href: '#', current: false },
      { name: 'FAQ', href: '#', current: false },
    ]
  },
  logoText: {
    type: String,
    default: 'LearnPro'
  }
});

// Emits
defineEmits(['enroll']);

// Reactive state
const mobileMenuOpen = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');

// Timer reference
let notificationTimer = null;

// Handle navigation click
const handleNavClick = (item) => {
  // Only show notification for non-home links
  if (item.name.toLowerCase() !== 'home') {
    notificationMessage.value = `Feature Coming Soon!`;
    showNotification.value = true;
    
    // Clear any existing timer
    if (notificationTimer) {
      clearTimeout(notificationTimer);
    }
    
    // Set new timer to hide notification after 3 seconds
    notificationTimer = setTimeout(() => {
      showNotification.value = false;
    }, 3000);
  }
  
  // Close mobile menu if it's open
  mobileMenuOpen.value = false;
};
</script>