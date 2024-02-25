<template>
  <BaseSection class="section-white mb-0 pb-0">
    <div
      class="flex flex-wrap justify-start gap-8 md:flex-nowrap md:justify-between"
    >
      <div class="w-full space-y-8 md:w-auto md:max-w-[43%]">
        <logo></logo>
        <p class="text-balance">
          A community network for CTOs, Tech Leaders, and Engineering Managers
        </p>
        <div class="flex items-center justify-start gap-8">
          <nuxt-link
            v-for="profile in socialMediaProfiles.getAllEnabled"
            :key="profile.name"
            :to="profile.url"
            :title="profile.name"
          >
            <nuxt-img
              :src="profile.svg"
              :alt="profile.name + ' - logo'"
            ></nuxt-img>
          </nuxt-link>
        </div>
      </div>
      <!--      <div class="" v-for="menu in footerMenus.menus" :key="menu.name">-->
      <!--        <p class="font-bold text-brand-dark">{{ menu.name }}</p>-->
      <!--        <ul class="space-y-4">-->
      <!--          <li v-for="link in menu.links" :key="link.url">-->
      <!--            <nuxt-link :to="link.url" :title="link.name"-->
      <!--              >{{ link.name }}-->
      <!--            </nuxt-link>-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </div>-->
      <div v-if="phone || email">
        <p class="font-bold text-brand-dark">Contacts</p>
        <ul class="space-y-4">
          <li v-if="phone">
            <a :href="`tel:${phone.value}`">{{ phone.value }}</a>
          </li>
          <li v-if="email">
            <a :href="`mailto:${email.value}`">{{ email.value }}</a>
          </li>
        </ul>
      </div>
    </div>
    <p class="mt-4 border-t border-gray-200 pt-4 text-center text-sm">
      2023 © Techfellows All Right Reserved
    </p>
  </BaseSection>
</template>
<script setup lang="ts">
import { useSocialMediaStore } from "~/stores/socialMediaStore";
import { useFooterLinksStore } from "~/stores/footerLinksStore";
import { useContactInfoStore } from "~/stores/contactInfoStore";

const socialMediaProfiles = useSocialMediaStore();
const footerMenus = useFooterLinksStore();
const contactInfo = useContactInfoStore();

const phone = contactInfo.getInfoByType("phone");
const email = contactInfo.getInfoByType("email");
</script>
