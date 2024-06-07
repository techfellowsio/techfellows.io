<template>
  <BaseSection
    :scroll-spy-name="'Home'"
    class="section-white"
    scroll-spy-class="-mt[1rem]"
  >
    <BaseHero v-bind="heroBanner">
      <template v-slot:headerText
        >Empowering World Change Through Shared Knowledge</template
      >
      <template v-slot:headerLeadText>
        <p class="lead">
          Connecting Tech Leaders, VPs, Directors, and CTOs in a vibrant
          community, fostering growth and driving impactful change through
          shared knowledge & experiences.
        </p>
      </template>

      <template v-slot:buttonArea>
        <ButtonLetsJoin />
      </template>
    </BaseHero>
  </BaseSection>

  <BaseSection scroll-spy-name="About" class="section-gray">
    <template #header>
      <BaseSectionHeader
        :badge="{ title: 'What connects us?' }"
        title="Exploring the Identity of Techfellows"
      >
        We are a community of Tech Founders, CTOs, Engineering Directors based
        across Slovakia, Czechia and Poland. We exist to connect and knowledge
        share on topics like taking care of tech talent, scaling tech teams and
        tools.
      </BaseSectionHeader>
    </template>
    <div class="relative">
      <FeatureList>
        <template #last>
          <li>
            <BasePannel variant="transparent" class="z-20 mb-0 py-0">
              <div class="gap-content grid">
                <h3 class="mb-0 text-brand-blue">TechFellows Community</h3>
                <p>Discover the essence of our community and its purpose.</p>
                <div class="relative flex items-center">
                  <a v-bind="manifesto.button" class="button button-primary">
                    {{ manifesto.button.text || manifesto.button.title }}
                  </a>
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
        title="TechFellows Community"
      >
        <p>
          TechFellows is a hub for tech leaders keen on sharing knowledge,
          learning together, and shaping technology's future. <br />
        </p>
        <p>
          Join our exclusive Slack workspace for dynamic discussions and
          networking with tech enthusiasts. It's an ideal place for feedback and
          exploring ideas.

          <br />
        </p>
        <p>
          We host internal events for members to engage in deep discussions and
          network casually through online forums or in-person socials.
          <br />
        </p>
        <p>
          Our public meetups are open to all, offering a space for knowledge
          exchange and networking across the tech community, suitable for
          experts and newcomers alike.
          <br />
        </p>
      </BaseSectionHeader>
    </template>
    <EventsList></EventsList>
  </BaseSection>

  <BaseSection :scroll-spy-name="'OurVision'">
    <div class="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div class="overflow-hidden rounded-app bg-brand-gray-300">
        <NuxtImg
          src="/image-20.jpg"
          class="h-full w-full object-cover"
        ></NuxtImg>
      </div>
      <div class="flex flex-col justify-between gap-4">
        <div class="flex flex-col gap-4">
          <div>
            <BaseBadge variant="gray" title="Our Vision" />
          </div>
          <p>
            We don't want to be the biggest community, we don't want to be known
            as the community for everyone. <br />
            We are a high-density talent group of world-class technology
            builders and leaders in Central Europe. Topics like leadership, team
            management, product building, hiring/firing, and technical
            challenges are our daily bread. Does this resonate with you? if so,
            you could be an ideal member of our community, join us.
          </p>

          <div>
            <a
              class="button button-primary inline-flex"
              v-bind="manifesto.button"
            >
              {{ manifesto.button.text || manifesto.button.title }}
            </a>
          </div>
        </div>
        <br />
        <div>
          <BaseBadge variant="gray" title="Our Values" />
        </div>
        <BaseTagCloud :tags="manifesto.tags" class="mt-8" />
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
  <BaseSection class="section-gray" :scroll-spy-name="'Testimonials'">
    <template #header>
      <BaseSectionHeader :badge="{ title: 'Testimonials' }" />
    </template>
    <SwiperSlider />
  </BaseSection>
</template>

<script setup lang="ts">
import EventsList from "~/components/EventsList.vue";
import heroBanner from "~/data/hero-banner.json";
import ButtonLetsJoin from "~/components/ButtonLetsJoin.vue";

const partners = usePartnersStore().partners;
const manifesto = useManifestoTagsStore().manifesto;
</script>
