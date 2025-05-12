<template>
  <BaseSection class="section-white mb-0 pb-0">
    <div class="justify-between gap-8 md:flex md:flex-wrap md:flex-nowrap">
      <div class="w-full space-y-8 md:w-auto md:max-w-[43%]">
        <logo></logo>
        <p class="text-balance">
          Connecting Tech Leaders, VPs, Directors, and CTOs in a vibrant
          community, fostering growth and driving impactful change through
          shared knowledge & experiences.
        </p>
        <div class="flex items-center justify-start gap-2">
          <nuxt-link
            v-for="profile in socialMediaProfiles.getAllEnabled"
            :key="profile.name"
            :to="profile.url"
            :title="profile.name"
          >
            <nuxt-img
              :src="profile.svg"
              :alt="profile.name + ' - logo'"
              class="h-5 w-5"
            ></nuxt-img>
          </nuxt-link>
        </div>
      </div>
      <!-- <div class="" v-for="menu in footerMenus.menus" :key="menu.name">
        <p class="font-bold text-brand-dark">{{ menu.name }}</p>
        <ul class="space-y-4">
          <li v-for="link in menu.links" :key="link.url">
            <nuxt-link :to="link.url" :title="link.name"
              >{{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </div> -->
      <div class="my-8 md:my-0 md:w-1/4">
        <p class="font-bold text-brand-dark">Support Us</p>
        <div class="flex-row items-center justify-start md:flex md:gap-4">
          <img
            src="/qr-payment.png"
            alt="QR Code for Donations"
            class="h-32 w-32"
          />
          <p class="text-small space-y-4 text-gray-500">
            Bank account for TechFellows NGO in Slovakia. Your contribution
            helps us a lot in organising meetups, and in our mission to support
            the tech community.
          </p>
        </div>
      </div>
      <div v-if="phone || email">
        <p class="font-bold text-brand-dark">Contacts</p>
        <ul class="">
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
      2024 © TechFellows All Right Reserved
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
