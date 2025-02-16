
<template>
    <div 
      class="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div class="relative">
        <img 
          :src="course.imageUrl" 
          :alt="course.title"
          class="w-full h-48 object-cover"
        />
        <div 
          class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-indigo-600"
        >
          {{ course.category }}
        </div>
      </div>
      
      <div class="p-6">
        <div class="flex items-center mb-2">
          <div class="flex items-center text-yellow-400">
            <svg 
              v-for="i in 5" 
              :key="i"
              :class="[
                i <= course.rating ? 'text-yellow-400' : 'text-gray-300',
                'h-5 w-5 fill-current'
              ]"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span class="ml-2 text-sm text-gray-600">
            {{ course.rating }} ({{ course.reviewCount }} reviews)
          </span>
        </div>
  
        <h3 class="text-xl font-bold text-gray-900 mb-2">{{ course.title }}</h3>
        <p class="text-gray-600 mb-4 line-clamp-2">{{ course.description }}</p>
  
        <div class="flex items-center justify-between border-t pt-4">
          <div class="flex items-center">
            <img 
              :src="course.instructor.avatar" 
              :alt="course.instructor.name"
              class="w-8 h-8 rounded-full"
            />
            <span class="ml-2 text-sm font-medium text-gray-900">
              {{ course.instructor.name }}
            </span>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-indigo-600">
              ${{ course.price }}
            </div>
            <div class="text-sm text-gray-500">
              {{ course.duration }} hours
            </div>
          </div>
        </div>
      </div>
  
      <div class="px-6 pb-6">
        <button 
          @click="$emit('view-details', course.id)"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          View Course Details
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    course: {
      type: Object,
      required: true
    }
  });
  
  defineEmits(['view-details']);
  </script>