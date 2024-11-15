<template>
  <div class="min-h-screen bg-gray-300">
    <header class="relative bg-cyan-500 text-gray-100 shadow-lg">
      <div class="flex">
        <div class="container px-4 py-6">
          <h1 class="text-4xl font-bold">
            {{ profile.blogTitle }}
          </h1>
          <p class="mt-2 flex-row text-purple-200">
            {{ profile.blogSubtitle }}
          </p>
        </div>
        <img
          src="@/public/avatar/megumin.png"
          class="absolute right-0 top-0 h-full"
        >
      </div>
    </header>

    <!-- main -->
    <main class="container mx-auto flex flex-col gap-8 px-4 py-8">
      <!-- profile -->
      <div
        class="
          flex items-start justify-between rounded-lg border-r-0 bg-white p-6
          pb-0 pr-0 shadow-md
        "
      >
        <div class="flex-1 space-x-6">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="h-32 w-32 rounded-full object-cover"
          >
          <div>
            <h2 class="text-2xl font-bold text-gray-800">
              {{ profile.name }}
            </h2>
            <p class="mt-2 text-gray-600">
              {{ profile.tags.join(" | ") }}
            </p>
            <p class="m-auto">
              {{ profile.introduction }}
            </p>
            <div class="mt-2 text-gray-700" />
          </div>
        </div>
        <img
          :src="bg002"
          :alt="`${profile.name}'s side image`"
          class="block h-60 rounded-lg object-fill"
        >
      </div>

      <!-- anime -->
      <section class="flex flex-col items-center justify-center px-16">
        <Carousel
          class="relative w-full pt-10"
          :opts="{
            align: 'start',
          }"
        >
          <CarouselContent>
            <CarouselItem
              v-for="anime in favoriteAnime"
              :key="anime"
              class="
                lg:basis-1/3
                md:basis-1/2
              "
            >
              <div
                class="overflow-hidden rounded-lg"
              >
                <img
                  :src="anime.image"
                  :alt="anime.title"
                  class="h-48 w-full object-cover"
                >
                <div class="bg-white p-4">
                  <h4 class="text-xl font-bold text-gray-800">
                    {{ anime.title }}
                  </h4>
                  <div class="mt-2 flex items-center">
                    <span class="bg-gray-200 px-2 py-1 text-sm">{{
                      anime.platform
                    }}</span>
                    <span class="ml-2 text-sm text-gray-600">{{
                      anime.genre
                    }}</span>
                  </div>
                  <div class="mt-3 flex items-center">
                    <span class="text-yellow-500">★</span>
                    <span class="ml-1 text-gray-600">{{ anime.rating }}/10</span>
                  </div>
                  <div
                    v-if="anime.chapter !== '已追完'"
                    class="mt-2 text-sm text-gray-500"
                  >
                    已看至: {{ anime.chapter }}話
                  </div>
                  <div
                    v-else
                    class="mt-2 text-sm text-gray-500"
                  >
                    已追完
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <!-- game -->
      <section class="flex flex-col items-center justify-center px-16">
        <Carousel
          class="relative w-full pt-10"
          :opts="{
            align: 'start',
          }"
        >
          <CarouselContent>
            <CarouselItem
              v-for="game in favoriteGames"
              :key="game"
              class="
                lg:basis-1/3
                md:basis-1/2
              "
            >
              <div
                class="overflow-hidden rounded-lg"
              >
                <img
                  :src="game.image"
                  :alt="game.title"
                  class="h-48 w-full object-cover"
                >
                <div class="bg-white p-4">
                  <h4 class="text-xl font-bold text-gray-800">
                    {{ game.title }}
                  </h4>
                  <div class="mt-2 flex items-center rounded-r-lg">
                    <span class="bg-gray-200 px-2 py-1 text-sm">{{
                      game.platform
                    }}</span>
                    <span class="ml-2 text-sm text-gray-600">{{
                      game.genre
                    }}</span>
                  </div>
                  <p class="mt-2 text-gray-600">
                    {{ game.description }}
                  </p>
                  <div class="mt-3 flex items-center">
                    <span class="text-yellow-500">★</span>
                    <span class="ml-1 text-gray-600">{{ game.rating }}/10</span>
                  </div>
                  <div
                    class="mt-2 text-sm text-gray-500"
                  >
                    已遊玩: {{ game.chapter }} 小時
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <!-- aaaaa -->
      <section>
        <h3 class="mb-4 text-2xl font-bold text-gray-800">
          最新文章
        </h3>
        <div class="space-y-6">
          <article
            v-for="post in blogPosts"
            :key="post.title"
            class="rounded-lg bg-white p-6 shadow-md"
          >
            <div class="flex items-center space-x-2">
              <span class="rounded bg-gray-200 px-2 py-1 text-sm">{{}}</span>
              <h4 class="text-xl font-bold text-gray-800">
                {{ post.title }}
              </h4>
            </div>
            <p class="mt-2 text-sm text-gray-500">
              {{ post.date }}
            </p>
            <p class="mt-3 text-gray-700">
              {{ post.excerpt }}
            </p>
            <button
              class="
                mt-4 text-purple-600
                hover:text-purple-800
              "
            >
              繼續閱讀 →
            </button>
          </article>
        </div>
      </section>
    </main>

    <!-- tail -->
    <footer class="bg-gray-800 py-8 text-white">
      <div class="container mx-auto px-4 text-center">
        <p>© 2024 {{ profile.blogTitle }}. All rights reserved.</p>
        <div class="mt-4 space-x-4">
          <a
            v-for="(link, platform) in profile.socialLinks"
            :key="platform"
            :href="link"
            class="
              text-gray-400
              hover:text-white
            "
          >
            {{ platform }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const publicImage = '/avatar/publicImage.png';
const bg002 = '/avatar/bg002.png';
const testContent = 'test content';
const profile = ref({
  blogTitle: testContent,
  blogSubtitle: testContent,
  name: testContent,
  avatar: publicImage,
  tags: ['aaa', 'aaa', 'aaa', 'aaa'],
  introduction: testContent,
  socialLinks: {
    Twitter: '#',
    Instagram: '#',
    YouTube: '#',
    Steam: '#',
  },
});

const favoriteAnime = ref([
  {
    title: '咒術回戰',
    image: publicImage,
    description: '大便',
    platform: '大便',
    rating: 0,
    chapter: 'complete',
  },
  {
    title: '我推的孩子',
    image: publicImage,
    description: testContent,
    platform: 'shit',
    rating: -9.0,
    chapter: 10,
  },
  {
    title: testContent,
    image: publicImage,
    description: testContent,
    platform: 'aaa',
    rating: 9.2,
    chapter: 10,
  },
  {
    title: testContent,
    image: publicImage,
    description: testContent,
    rating: 10,
    platform: 'aaaa',
    chapter: 0,
  },
]);

const favoriteGames = ref([
  {
    title: '薩爾達傳說 王國之淚',
    image: publicImage,
    platform: 'Nintendo Switch',
    genre: '動作冒險',
    description: 'aaaaaaaa',
    rating: 9.8,
    playTime: 200,
  },
  {
    title: '艾爾登法環',
    image: publicImage,
    platform: 'PS5',
    genre: '動作RPG',
    description: 'aaaaa',
    rating: 9.5,
    playTime: 150,
  },
  {
    title: 'aaaaa',
    image: publicImage,
    platform: 'aaa',
    genre: 'aaa',
    description: 'aaaaa',
    rating: 9.6,
    playTime: 120,
  },
]);

const blogPosts = ref([
  {
    title: '舔狗真討厭',
    date: '2024-03-15',
    category: '舔狗評論',
    excerpt: '好舔一直舔...',
  },
  {
    title: 'ㄚㄚㄚㄚ舔狗',
    date: '2024-03-12',
    category: '舔狗觀察心得',
    excerpt: '200小時的觀察心得',
  },
  {
    title: 'aaaa',
    date: '2024-03-10',
    category: 'aaa',
    excerpt: 'aaaa',
  },
]);
</script>
