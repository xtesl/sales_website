<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Hero Section - Made more responsive -->
      <div class="bg-indigo-600 text-white py-8 sm:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Courses</h1>
          <p class="text-indigo-100 text-sm sm:text-base md:text-lg max-w-3xl">
            Discover our comprehensive selection of professional courses designed to help you advance your career and master new skills.
          </p>
        </div>
      </div>
  
      <!-- Filters Section - Improved mobile layout -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6 sm:mb-8">
          <!-- Search and Category Filters -->
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto">
            <!-- Search Input -->
            <div class="relative w-full sm:w-64">
              <input 
                v-model="searchQuery"
                type="text"
                placeholder="Search courses..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <svg 
                class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            
            <!-- Category Select -->
            <select 
              v-model="selectedCategory"
              class="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Categories</option>
              <option 
                v-for="category in categories" 
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>
          </div>
  
          <!-- Sort Select -->
          <div class="w-full sm:w-auto">
            <select 
              v-model="sortBy"
              class="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
  
        <!-- Course Grid - Adjusted gaps and padding -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <CourseCard 
            v-for="course in filteredCourses" 
            :key="course.id"
            :course="course"
            @view-details="handleViewDetails"
          />
        </div>
  
        <!-- No Results - Adjusted padding -->
        <div 
          v-if="filteredCourses.length === 0"
          class="text-center py-8 sm:py-16"
        >
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            No courses found
          </h3>
          <p class="text-sm sm:text-base text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref, computed } from 'vue';
import CourseCard from './CourseCard.vue';

// Sample course data - replace with your actual data
const courses = ref([
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and more.',
    imageUrl: '/api/placeholder/800/600',
    category: 'Web Development',
    rating: 4.8,
    reviewCount: 2547,
    price: 99.99,
    duration: 42,
    instructor: {
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/100/100'
    }
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science, including Python, pandas, numpy, and machine learning concepts.',
    imageUrl: '/api/placeholder/800/600',
    category: 'Data Science',
    rating: 4.7,
    reviewCount: 1823,
    price: 89.99,
    duration: 38,
    instructor: {
      name: 'Michael Chen',
      avatar: '/api/placeholder/100/100'
    }
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Learn modern UI/UX design principles and tools like Figma, Adobe XD, and design systems.',
    imageUrl: '/api/placeholder/800/600',
    category: 'Design',
    rating: 4.9,
    reviewCount: 1245,
    price: 79.99,
    duration: 35,
    instructor: {
      name: 'Emma Davis',
      avatar: '/api/placeholder/100/100'
    }
  }
]);

// Reactive state
const searchQuery = ref('');
const selectedCategory = ref('');
const sortBy = ref('popular');

// Computed categories from courses
const categories = computed(() => 
  [...new Set(courses.value.map(course => course.category))]
);

// Filtered and sorted courses
const filteredCourses = computed(() => {
  let filtered = courses.value;

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(course => 
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    );
  }

  // Apply category filter
  if (selectedCategory.value) {
    filtered = filtered.filter(course => 
      course.category === selectedCategory.value
    );
  }

  // Apply sorting
  switch (sortBy.value) {
    case 'newest':
      filtered = [...filtered].sort((a, b) => b.id - a.id);
      break;
    case 'price-low':
      filtered = [...filtered].sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered = [...filtered].sort((a, b) => b.price - a.price);
      break;
    default: // 'popular'
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return filtered;
});

// Event handlers
const handleViewDetails = (courseId) => {
  // Implement navigation to course details page
  console.log('Navigate to course:', courseId);
  // You could use router.push(`/courses/${courseId}`) here
};
</script>