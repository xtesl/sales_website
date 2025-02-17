<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Featured Course Section -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <!-- Sale Banner -->
      <div class="bg-gradient-to-r from-pink-500 to-rose-500 rounded-t-xl p-3 sm:p-4 text-center">
        <div class="text-white font-bold text-lg sm:text-xl mb-1">🔥 Special Launch Offer</div>
        <div class="text-white text-xs sm:text-sm">Limited Time: Save 50% on our Most Popular Course</div>
      </div>

      <!-- Course Banner -->
      <div class="bg-white rounded-b-xl shadow overflow-hidden">
        <div class="p-4 sm:p-6 lg:p-8">
          <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <!-- Course Preview Image -->
            <div class="w-full lg:w-2/5">
              <img 
                src="/images/graphic_design_new_flyer.jpg" 
                alt="Course Preview"
                class="w-full h-auto rounded-lg shadow"
              />
              <div class="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="flex items-center space-x-2">
                  <span class="text-2xl sm:text-3xl font-bold text-indigo-600">GHS100.00</span>
                  <span class="text-base sm:text-lg text-gray-500 line-through">GHS200.00</span>
                </div>
                <button class="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>

            <!-- Course Info -->
            <div class="w-full lg:w-3/5">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                CANVA FLYER DESIGN COURSE
              </h2>
              <p class="text-gray-600 text-base sm:text-lg mb-4">
                Create Stunning Flyers in Minutes-No Design Experience Needed!
              </p>
              <p class="text-gray-400 text-base sm:text-lg mb-4">
                Are you struggling to create eye-catching flyers that actually grab attention?
                Do you feel overwhelmed by complex design software?
                Or maybe you want start a side hustle in graphic design but don't know where to begin?
                Have you joined many classes but still find it difficult to come up with your own design ideas?
              </p>
              <p class="text-gray-400 text-base sm:text-lg mb-4">
                The good news? You don't need expensive software or years of experience to create high-quality
                flyers that convert. You just need the right guidance and tools.
              </p>
              <p class="text-gray-400 text-base sm:text-lg mb-6">
                CANVA FLYER DESIGN COURSE
                your step-by-step guide to mastering canva and designing flyers that sell, inspire and impress.
              </p>
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4 mb-6">
                
                <div class="hidden sm:block text-gray-500"></div>
                
              </div>
              <div class="flex flex-col sm:flex-row gap-4 sm:gap-4">
               
              

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- What You'll Learn Section -->
      <div class="mt-12 sm:mt-16">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">What You'll Learn</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div v-for="(item, index) in learningPoints" :key="index" class="flex items-start">
            <svg class="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-gray-700 text-sm sm:text-base">{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- Who This Course is For -->
      <div class="mt-12 sm:mt-16 bg-white rounded-xl shadow p-6 sm:p-8">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Who This Course is For</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="(person, index) in targetAudience" :key="index" class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div class="text-2xl flex-shrink-0">{{ person.emoji }}</div>
            <div>
              <div class="font-semibold text-gray-900 text-sm sm:text-base">{{ person.title }}</div>
              <div class="text-xs sm:text-sm text-gray-600">{{ person.description }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Choose This Course -->
      <div class="mt-12 sm:mt-16">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Why Choose This Course</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="(reason, index) in reasons" :key="index" class="bg-white rounded-xl shadow p-4 sm:p-6">
            <div class="text-2xl sm:text-3xl mb-4">{{ reason.emoji }}</div>
            <h4 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{{ reason.title }}</h4>
            <p class="text-sm sm:text-base text-gray-600">{{ reason.description }}</p>
          </div>
        </div>
      </div>

      <!-- Bonuses Section -->
      <div class="mt-12 sm:mt-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-6 sm:p-8 text-white">
        <h3 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Exclusive Bonuses (Worth $500+)</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="(bonus, index) in bonuses" :key="index" class="flex items-start">
            <div class="text-2xl mr-4 flex-shrink-0">{{ bonus.emoji }}</div>
            <div>
              <div class="font-semibold text-base sm:text-lg">{{ bonus.title }}</div>
              <div class="text-purple-100 text-sm sm:text-base">{{ bonus.description }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Student Success Stories -->
      <div class="mt-12 sm:mt-16">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Student Success Stories</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="(story, index) in successStories" :key="index" class="bg-white rounded-xl shadow p-4 sm:p-6">
            <div class="flex items-center mb-4">
              <img :src="story.avatar" :alt="story.name" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"/>
              <div>
                <div class="font-semibold text-gray-900 text-sm sm:text-base">{{ story.name }}</div>
                <div class="text-xs sm:text-sm text-gray-500">{{ story.role }}</div>
              </div>
            </div>
            <p class="text-gray-600 text-sm sm:text-base mb-4">{{ story.testimonial }}</p>
            <div class="flex items-center text-yellow-400">
              <span v-for="n in 5" :key="n">⭐</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Final CTA -->
      <div class="mt-12 sm:mt-16 text-center">
        <div class="inline-block bg-white rounded shadow p-6 sm:p-8">
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h3>
          <p class="text-gray-600 text-sm sm:text-base mb-6">Join thousands of successful graduates and start your journey today.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div class="text-center sm:text-right">
              <div class="text-xs sm:text-sm text-gray-500 line-through">Original Price: GHS200.00</div>
              <div class="text-xl sm:text-2xl font-bold text-indigo-600">Today's Price: GHS100.00</div>
            </div>
            <button class="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-indigo-700 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  const learningPoints = [
    "Design Principles",
    "How to navigate and use Canvas design tools like a pro",
    "Flyer design principles that make your design pro",
    "Creating flyers for different niches: Events, Real Estate, Church, Sales Promotions and nore",
    "Keywords for searching quality elements in canva",
    "Adding the perfect fonts, colors, and images for maximum impact",
    "Deploy applications using modern cloud services",
    "Tips to design flyers that convert views into action"
  ];
  
  const targetAudience = [
    {
      emoji: "🎓",
      title: "Complete Beginners",
      description: "No prior coding experience needed"
    },
    {
      emoji: "🏪",
      title: "Business Owners",
      description: "Who want to promote their prodcuts and services"
    },
    {
      emoji: "🎨",
      title: "Freelancers and aspiring graphic designers",
      description: "Who want to start their design career"
    },
    {
      emoji: "📱",
      title: "Social media managers and marketers",
      description: "Looking to create engaging social media content"
    },
    {
      emoji: "✨",
      title: "Anyone who wants to create stunning designs without spending on expensive software",
      description: "Budget-conscious creators"
    }
  ];
  
  const reasons = [
    {
      emoji: "💡",
      title: "100% Practical",
      description: "Create real flyers during the course"
    },
    {
      emoji: "♾️",
      title: "Lifetime Access and Regular Updates",
      description: "Learn at your own pace"
    },
    {
      emoji: "🏆",
      title: "Proven Strategies",
      description: "Designed by a Canva expert with years of experience"
    }
  ];
  
  const bonuses = [
    {
      emoji: "🎁",
      title: "Resources Guide",
      description: "Best free sites for stock images, icons and fonts"
    },
    {
      emoji: "💼",
      title: "Portfolio",
      description: "How to build your own portfolio"
    },
    {
      emoji: "💫",
      title: "Tips",
      description: "Get tips to sell your flyers and design services online"
    }
  ];
  
  const successStories = [
    {
      avatar: "/api/placeholder/100/100",
      name: "Jessica Adu",
      testimonial: `"Before this course, I was clueless about design. Now I've created flyers for local
      businesses and started earning from it!"
      `
    },
    {
      avatar: "/api/placeholder/100/100",
      name: "Mark Sarpong",
      testimonial: `
      "Easy to follow, practical, and fun! The templates alone are worth the price."
      `
    },
    {
      avatar: "/api/placeholder/100/100",
      name: `Sarah Owusu`,
      testimonial: `"I've saved hundreds by designing my own promotional flyers!"`
    }
  ];
  </script>