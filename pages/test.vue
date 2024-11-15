<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { ref } from 'vue';
import * as z from 'zod';

import { toast } from '@/components/ui/toast';

import type { SubmissionHandler } from 'vee-validate';

import publicimage from '/public/avatar/publicImage.png';

interface UserProfile {
  name: string;
  avatar: string;
  tags: string[];
  introduction: string;
}

type FormValues = {
  username: string;
};

const formSchema = toTypedSchema(z.object({
  username: z.string()
    .min(2, '使用者名稱至少需要 2 個字元')
    .max(50, '使用者名稱不能超過 50 個字元'),
}));

const isDialogOpen = ref(false);
const profile = ref<UserProfile>({
  avatar: publicimage,
  name: 'archie0732',
  tags: ['a', 'a', 'a'],
  introduction: 'shdhjdbhaskhbdkugadjkhkahdkhadohadhoaghd',
});

const onSubmit: SubmissionHandler<FormValues> = async (values: FormValues) => {
  try {
    profile.value.name = values.username;

    toast({
      title: '更新成功！',
      description: '個人資料已更新',
    });

    isDialogOpen.value = false;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (_) {
    toast({
      title: '更新失敗',
      description: '請稍後再試',
      variant: 'destructive',
    });
  }
};
</script>

<template>
  <div
    class="
      ml-2 mr-2 mt-2 flex items-start justify-between rounded-lg border-r-0
      bg-yellow-100 p-6 pb-0 pr-0 shadow-md
    "
  >
    <div class="flex items-center space-x-6">
      <img
        :src="profile.avatar"
        :alt="profile.name"
        class="h-32 w-32 rounded-full border-2 border-black object-cover"
      >
      <div>
        <h2 class="text-2xl font-bold text-gray-800">
          {{ profile.name }}
        </h2>
        <p class="mt-2 text-gray-600">
          {{ profile.tags.join(" | ") }}
        </p>
        <p class="m-auto mb-20">
          {{ profile.introduction }}
        </p>

        <Form
          v-slot="{ handleSubmit }"
          as=""
          keep-values
          :validation-schema="formSchema"
        >
          <Dialog v-model:open="isDialogOpen">
            <DialogTrigger as-child>
              <Button variant="outline">
                更改暱稱
              </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>更改暱稱</DialogTitle>
                <DialogDescription>
                  按下save changes 以保存變更
                </DialogDescription>
              </DialogHeader>

              <form
                id="dialogForm"
                @submit="handleSubmit($event, onSubmit as SubmissionHandler)"
              >
                <FormField
                  v-slot="{ componentField }"
                  name="username"
                >
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        :placeholder="profile.name"
                        v-bind="componentField"
                      />
                    </FormControl>
                    <FormDescription>
                      你的暱稱
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </form>

              <DialogFooter>
                <Button
                  type="submit"
                  form="dialogForm"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Form>
      </div>
      <Toaster />
    </div>
    <img
      src="@/public/avatar/bg002.png"
      :alt="`${profile.name}'s side image`"
      class="block h-60 rounded-lg object-fill"
    >
  </div>
</template>
