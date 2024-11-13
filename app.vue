<template>
  <div class="min-h-screen bg-gray-300">
    <header class="bg-cyan-500 text-gray-100 shadow-lg">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-4xl font-bold">{{ profile.blogTitle }}</h1>
        <p class="mt-2 text-purple-200">{{ profile.blogSubtitle }}</p>
      </div>
    </header>

    <!-- main -->
    <main class="container mx-auto px-4 py-8">
      <!-- profile -->
      <div class="bg-white rounded-lg shadow-md p-6 pb-0 mb-10 flex items-start justify-between border-r-0 pr-0">
        <div class="flex-1 space-x-6">
          <img :src="profile.avatar" :alt="profile.name" class="w-32 h-32 rounded-full object-cover" />
          <div>
            <h2 class="text-2xl font-bold text-gray-800">{{ profile.name }}</h2>
            <p class="text-gray-600 mt-2">{{ profile.tags.join(" | ") }}</p>
            <div class="mt-2 text-gray-700"></div>
          </div>
        </div>
        <img :src="bg002" :alt="`${profile.name}'s side image`" class="h-60 rounded-lg object-fill block" />
      </div>

      <!-- anime -->
      <section class="mb-8">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">我的動漫評分</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="anime in favoriteAnime" :key="anime.title" class="bg-white rounded-lg shadow-md overflow-hidden">
            <img :src="anime.image" :alt="anime.title" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h4 class="text-xl font-bold text-gray-800">{{ anime.title }}</h4>
              <div class="mt-2 flex items-center">
                <span class="bg-gray-200 px-2 py-1 rounded text-sm">{{ anime.platform }}</span>
                <span class="ml-2 text-gray-600 text-sm">{{ anime.genre }}</span>
              </div>
              <p class="text-gray-600 mt-2">{{ anime.description }}</p>
              <div class="mt-3 flex items-center">
                <span class="text-yellow-500">★</span>
                <span class="ml-1 text-gray-600">{{ anime.rating }}/10</span>
              </div>
              <div class="mt-2 text-sm text-gray-500">已看至: {{ anime.playTime }}話</div>
            </div>
          </div>
        </div>
      </section>

      <!-- game -->
      <section class="mb-8">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">我的遊戲收藏</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="game in favoriteGames" :key="game.title" class="bg-white rounded-lg shadow-md overflow-hidden">
            <img :src="game.image" :alt="game.title" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h4 class="text-xl font-bold text-gray-800">{{ game.title }}</h4>
              <div class="mt-2 flex items-center">
                <span class="bg-gray-200 px-2 py-1 rounded text-sm">{{ game.platform }}</span>
                <span class="ml-2 text-gray-600 text-sm">{{ game.genre }}</span>
              </div>
              <p class="text-gray-600 mt-2">{{ game.description }}</p>
              <div class="mt-3 flex items-center">
                <span class="text-yellow-500">★</span>
                <span class="ml-1 text-gray-600">{{ game.rating }}/10</span>
              </div>
              <div class="mt-2 text-sm text-gray-500">遊玩時間: {{ game.playTime }}小時</div>
            </div>
          </div>
        </div>
      </section>

      <!-- aaaaa -->
      <section>
        <h3 class="text-2xl font-bold text-gray-800 mb-4">最新文章</h3>
        <div class="space-y-6">
          <article v-for="post in blogPosts" :key="post.title" class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center space-x-2">
              <span class="px-2 py-1 bg-gray-200 rounded text-sm">{{}}</span>
              <h4 class="text-xl font-bold text-gray-800">{{ post.title }}</h4>
            </div>
            <p class="text-gray-500 text-sm mt-2">{{ post.date }}</p>
            <p class="text-gray-700 mt-3">{{ post.excerpt }}</p>
            <button class="mt-4 text-purple-600 hover:text-purple-800">繼續閱讀 →</button>
          </article>
        </div>
      </section>
    </main>

    <!-- tail -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>© 2024 {{ profile.blogTitle }}. All rights reserved.</p>
        <div class="mt-4 space-x-4">
          <a
            v-for="(link, platform) in profile.socialLinks"
            :key="platform"
            :href="link"
            class="text-gray-400 hover:text-white"
          >
            {{ platform }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const publicImage = "/avatar/publicImage.png";
const bg002 = "/avatar/bg002.png";
const testContent = "test content";
const profile = ref({
  blogTitle: testContent,
  blogSubtitle: testContent,
  name: testContent,
  avatar: publicImage,
  tags: ["aaa", "aaa", "aaa", "aaa"],
  introduction: testContent,
  socialLinks: {
    Twitter: "#",
    Instagram: "#",
    YouTube: "#",
    Steam: "#",
  },
});

const favoriteAnime = ref([
  {
    title: "咒術回戰",
    image: publicImage,
    description: "大便",
    rating: 0,
  },
  {
    title: testContent,
    image: publicImage,
    description: testContent,
    rating: 9.0,
  },
  {
    title: testContent,
    image: publicImage,
    description: testContent,
    rating: 9.2,
  },
  {
    title: testContent,
    image: publicImage,
    testContent,
    rating: 0,
  },
]);

const favoriteGames = ref([
  {
    title: "薩爾達傳說 王國之淚",
    image: publicImage,
    platform: "Nintendo Switch",
    genre: "動作冒險",
    description: "aaaaaaaa",
    rating: 9.8,
    playTime: 200,
  },
  {
    title: "艾爾登法環",
    image: publicImage,
    platform: "PS5",
    genre: "動作RPG",
    description: "aaaaa",
    rating: 9.5,
    playTime: 150,
  },
  {
    title: "aaaaa",
    image: publicImage,
    platform: "aaa",
    genre: "aaa",
    description: "aaaaa",
    rating: 9.6,
    playTime: 120,
  },
]);

const blogPosts = ref([
  {
    title: "舔狗真討厭",
    date: "2024-03-15",
    category: "舔狗評論",
    excerpt: "好舔一直舔...",
  },
  {
    title: "ㄚㄚㄚㄚ舔狗",
    date: "2024-03-12",
    category: "舔狗觀察心得",
    excerpt: "200小時的觀察心得",
  },
  {
    title: "aaaa",
    date: "2024-03-10",
    category: "aaa",
    excerpt: "aaaa",
  },
]);
</script>
