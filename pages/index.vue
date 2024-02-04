<template>
  <BaseSection :scroll-spy-name="'Home'">
    <BaseBannerHero v-bind="heroBanner">
      <template v-slot:headerText>
        Tech Leaders' Growth Community
      </template>
      <template v-slot:headerLeadText>
        <p class="lead">Empowering Tech Managers, VPs, Directors, and CTOs to grow in a safe community of
          techies and leaders.</p>
      </template>
      <template v-slot:buttonArea>
        <BaseButton to="/join">Let's Join</BaseButton>
      </template>
    </BaseBannerHero>
  </BaseSection>
  <BaseSection variant="gray" scroll-spy-name="About">
    <template #header>
      <BaseSectionHeader
          :badge="{title:'Who are Techfellows'}"
          title="Exploring the Identity of Techfellows"
      >
        We aspire to be one of the biggest communities of top-class tech builders & leaders. You can count on us for
        advocating for geeks/nerds, and for eye-opening discourse on topics such as leadership, recruiting, technical
        challenges, technology selection, and
        joint investments.
      </BaseSectionHeader>
    </template>
    <div slot="default" class="columns-2 ">
      <div v-for="item in website.items" class="break-inside-avoid-column bg-white p-12 relative rounded-app-sm">
        <div class="h-[6.875rem] aspect-square bg-brand-gray right-0 top-0 absolute rounded-app-sm">
          <div class="w-[76.36%] aspect-square bg-brand-dark rounded-app-sm right-0 top-0 absolute">s</div>
        </div>
        <div class="h-8 text-brand-dark mb-4">
          <img :src="'/'+item.icon" class="h-full w-auto" :alt="item.title" />
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </BaseSection>
  <BaseSection>
    {{ website }}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
  </BaseSection>
  <BaseSection>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at culpa debitis, eius fuga fugit
      illo in labore libero maxime necessitatibus odit perspiciatis quasi quos recusandae reprehenderit temporibus,
      ut.</p>
  </BaseSection>
</template>

<script setup lang="ts">
import {useAboutStore} from "@/stores/aubout";

const website = useAboutStore()

const heroBanner: BannerHero = {
  imagePath: '/main-header.png',
  videoHolder: {
    imagePath: '/video-image.png',
    description: 'Short recap of our past meet-up'
  },
  techFellowNumbers: {
    numbers: [
      {
        number: '10+',
        description: 'Years Experience'
      }, {
        number: '100+',
        description: 'Speakers'
      }, {
        number: '800+',
        description: 'Happy listeners'
      },
    ]
  },
}
</script>
