<template>
  <BaseSection :scroll-spy-name="'Home'" class="section-white">
    <BaseBannerHero v-bind="heroBanner">
      <template v-slot:headerText>
        Tech Leaders' Growth Community
      </template>
      <template v-slot:headerLeadText>
        <p class="lead">Empowering Tech Managers, VPs, Directors, and CTOs to grow in a safe community of
          techies and leaders.</p>
      </template>
      <template v-slot:buttonArea>
        <NuxtLink to="/" class="button button-primary">Let's Join</NuxtLink>
      </template>
    </BaseBannerHero>
  </BaseSection>
  <BaseSection scroll-spy-name="About" class="section-gray">
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
    <div class="relative">
      <FeatureList>
        <template #last>
          <li>
            <BasePannel variant="transparent" class="mb-0 py-0 z-20">
              <div class="grid gap-content">
                <h3 class="text-brand-blue mb-0">Techfellow Community</h3>
                <p>Discover the essence of our community and its purpose.</p>
                <div class="flex items-center relative">
                  <NuxtLink to="/" class="button button-primary">Learn More About Community</NuxtLink>
                </div>
              </div>
            </BasePannel>
          </li>
        </template>
      </FeatureList>
      <div class="h-1 z-10 w-full absolute -bottom-32">
        <div class="absolute right-0 w-48 bottom-2 h-auto md:w-72 md:-bottom-4 xl:-bottom-20">
          <nuxt-img src="/happy.png" class="w-full h-auto"></nuxt-img>
        </div>
      </div>
    </div>
  </BaseSection>
  <BaseSection class="section-dark" :scroll-spy-name="'Community'">
    <template #header>
      <BaseSectionHeader
          :badge="{title:'Our Meetups'}"
          title="Techfellows Gatherings:
Uniting Minds"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley.
      </BaseSectionHeader>
    </template>
    <EventsList></EventsList>
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
import EventsList from "~/components/EventsList.vue";
import type {BannerHero} from "~/components/base/BannerHero.vue";

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
