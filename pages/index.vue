<template>
  <BaseSection
    :scroll-spy-name="'Home'"
    class="section-white"
    scroll-spy-class="-mt[1rem]"
  >
    <BaseHero v-bind="heroBanner">
      <template v-slot:headerText> Tech Leaders' Growth Community</template>
      <template v-slot:headerLeadText>
        <p class="lead">
          Empowering Tech Managers, VPs, Directors, and CTOs to grow in a safe
          community of techies and leaders.
        </p>
      </template>
      <template v-slot:buttonArea>
        <a
          href="mailto:info@techfellows.io?subject=🏆 I want to join TechFellows"
          class="button button-primary"
          >Let's Join</a
        >
      </template>
    </BaseHero>
  </BaseSection>

  <BaseSection scroll-spy-name="About" class="section-gray">
    <template #header>
      <BaseSectionHeader
        :badge="{ title: 'Who are Techfellows' }"
        title="Exploring the Identity of Techfellows"
      >
        We aspire to be one of the biggest communities of top-class tech
        builders & leaders. You can count on us for advocating for geeks/nerds,
        and for eye-opening discourse on topics such as leadership, recruiting,
        technical challenges, technology selection, and joint investments.
      </BaseSectionHeader>
    </template>
    <div class="relative">
      <FeatureList>
        <template #last>
          <li>
            <BasePannel variant="transparent" class="z-20 mb-0 py-0">
              <div class="gap-content grid">
                <h3 class="mb-0 text-brand-blue">Techfellow Community</h3>
                <p>Discover the essence of our community and its purpose.</p>
                <div class="relative flex items-center">
                  <NuxtLink to="/" class="button button-primary"
                    >Learn More About Community
                  </NuxtLink>
                </div>
              </div>
            </BasePannel>
          </li>
        </template>
      </FeatureList>
      <div class="absolute -bottom-32 z-10 h-1 w-full">
        <div
          class="absolute bottom-2 right-0 h-auto w-48 md:-bottom-4 md:w-72 xl:-bottom-20"
        >
          <nuxt-img src="/happy.png" class="h-auto w-full"></nuxt-img>
        </div>
      </div>
    </div>
  </BaseSection>

  <BaseSection class="section-dark" :scroll-spy-name="'Community'">
    <template #header>
      <BaseSectionHeader
        :badge="{ title: 'Our Meetups' }"
        title="Techfellows Gatherings:
Uniting Minds"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.
      </BaseSectionHeader>
    </template>
    <EventsList></EventsList>
  </BaseSection>

  <BaseSection :scroll-spy-name="'OurVision'">
    <div class="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div class="overflow-hidden rounded-app bg-brand-gray-300">
        <NuxtImg
          src="/image-20.png"
          class="h-full w-full object-cover"
        ></NuxtImg>
      </div>
      <div class="flex flex-col justify-between gap-4">
        <div class="flex flex-col gap-4">
          <div>
            <BaseBadge variant="gray" title="Our Vision" />
          </div>
          <h2 class="mb-0 mt-8 uppercase">Techfellows manifesto</h2>
          <p>
            We aspire to be one of the biggest communities of top-class tech
            builders & leaders. You can count on us for advocating for
            geeks/nerds, and for eye-opening discourse on topics such as
            leadership, recruiting, technical challenges, technology selection,
            and joint investments.
          </p>
          <div>
            <NuxtLink to="/" class="button button-primary inline-flex"
              >Learn More About Community
            </NuxtLink>
          </div>
        </div>
        <BaseTagCloud :tags="tags" class="mt-8" />
      </div>
    </div>
  </BaseSection>

  <BaseSection class="section-blue">
    <div class="flex flex-wrap items-center justify-around gap-8">
      <div class="max-w-56 grow" v-for="partner in partners" :key="partner.id">
        <nuxt-img
          :src="partner.logo"
          :alt="`${partner.name} logo`"
          class="h-auto w-full"
        ></nuxt-img>
      </div>
    </div>
  </BaseSection>
  <BaseSection class="section-gray">
    <template #header>
      <BaseSectionHeader
        :badge="{ title: 'Testimonials' }"
        title="Customer is Our Priority"
      />
    </template>
    <SwiperSlider />
  </BaseSection>
</template>

<script setup lang="ts">
import EventsList from "~/components/EventsList.vue";
import heroBanner from "~/data/hero-banner.json";

const partners = usePartnersStore().partners;
const tags = useManifestoTagsStore().tags;
</script>
