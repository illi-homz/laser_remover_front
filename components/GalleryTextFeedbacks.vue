<template>
    <div class="gallery-text-feedbacks" id="gallery-text-feedbacks">
        <Gallery
            v-if="props.items?.length"
            title="Довольные клиенты"
            :slides-per-view="1"
            :space-between="0"
            :breakpoints="{
                560: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
            }">
            <template v-slot:slides>
                <SwiperSlide
                    v-for="{ id, content, date = new Date(), username, link } in props.items"
                    :key="id"
                    class="gallery-text-feedbacks__slide">
                    <TextFeedbackCard :text="content" :link="link" :date="date" :clientName="username" />
                </SwiperSlide>
            </template>
        </Gallery>
    </div>
</template>

<script setup lang="ts">
import { AllFeedbacksTextType } from "~/types";

const props = defineProps<{
    items?: AllFeedbacksTextType[];
}>();
</script>

<style lang="scss">
.gallery-text-feedbacks {
    .gallery__swiper {
        padding-left: 0;
        padding-right: 0;
    }

    &__slide {
        background-color: $white;
    }

    &__item-text {
    }
}
</style>
