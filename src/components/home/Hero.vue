
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

    <!-- Hero Section -->
    <div class="relative bg-indigo-600 overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://www.shutterstock.com/shutterstock/photos/2128959116/display_1500/stock-vector-abstract-waving-particle-technology-background-design-abstract-wave-moving-dots-flow-particles-hi-2128959116.jpg" 
          alt="Background"
          class="w-full h-full object-cover opacity-10"
        />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Transform Your Career with Expert-Led Courses
          </h1>
          <p class="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Join thousands of successful students who have accelerated their careers through our professional training programs.
          </p>
          <div class="flex justify-center space-x-4">
            <button 
              @click="showFeatureNotification('courses')"
              class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors"
            >
              View Courses
            </button>
            <button 
              @click="showFeatureNotification('learn')"
              class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onUnmounted } from 'vue';

// Reactive state
const showNotification = ref(false);
const notificationMessage = ref('');

// Timer reference
let notificationTimer = null;

// Show notification
const showFeatureNotification = (type) => {
  // Clear any existing timer
  if (notificationTimer) {
    clearTimeout(notificationTimer);
  }
  
  // Set message based on button type
  notificationMessage.value = type === 'courses' 
    ? 'Feature coming soon: Course catalog will be available shortly!'
    : 'Feature coming soon: Detailed information will be available soon!';
  
  showNotification.value = true;
  
  // Hide notification after 3 seconds
  notificationTimer = setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};

// Clean up timer when component unmounts
onUnmounted(() => {
  if (notificationTimer) {
    clearTimeout(notificationTimer);
  }
});
</script>