<template>
    <div class="gallery-text-feedbacks">
        <Gallery
            title="Довольные клиенты"
            :slides-per-view="1"
            :space-between="10"
            :breakpoints="{
                560: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
            }">
            <template v-slot:slides>
                <SwiperSlide
                    v-for="{ id, text, date, clientName, link } in clients"
                    :key="id"
                    class="gallery-text-feedbacks__slide">
                    <!-- <div class="gallery-text-feedbacks__item-text">{{ text }}</div> -->
                    <TextFeedbackCard :text="text" :link="link" :date="date" :clientName="clientName" />
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
        clientName: "dolor sit amet consectetur adipisicing elit",
        date: new Date(),
        link: "#",
    },
    {
        id: 1,
        text,
        clientName: "Алина2",
        date: new Date(),
        link: null,
    },
    {
        id: 2,
        text: text.slice(0, 100),
        clientName: "Алина3",
        date: new Date(),
        link: "#",
    },
    {
        id: 3,
        text,
        clientName: "Алина4",
        date: new Date(),
        link: "#",
    },
];
</script>

<style lang="scss">
.gallery-text-feedbacks {
    &__slide {
        background-color: $white;
    }

    &__item-text {
    }
}
</style>
