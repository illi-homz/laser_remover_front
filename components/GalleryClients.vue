<template>
    <div class="gallery-clients">
        <Gallery :slides-per-view="3" title="Довольные клиенты" :space-between="20">
            <template v-slot:slides>
                <SwiperSlide v-for="{ id, text } in clients" :key="id" class="gallery-clients__slide">
                    <div class="gallery-clients__item-text">{{ text }}</div>
                </SwiperSlide>
            </template>
        </Gallery>
    </div>
</template>

<script setup lang="ts">
const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At possimus iure debitis perspiciatis necessitatibus consequuntur tempore quibusdam ut enim, numquam delectus autem doloribus, perferendis est sed libero, corrupti nihil maxime.";
const clients = [
    {
        id: 0,
        text,
        name: "Алина",
        date: new Date(),
        link: "https://google.com",
    },
];
</script>

<style lang="scss">
.gallery-clients {
    &__slide {
        background-color: $white;
        padding: 24px;
    }

    &__item-text {
    }
}
</style>
