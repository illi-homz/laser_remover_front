<template>
    <div class="text-feedback-card">
        <div class="text-feedback-card__wrap">
            <div ref="textRef" class="text-feedback-card__text" :class="{ hide: isLong }">{{ props.text }}</div>
            <a
                v-if="!!props.link"
                :href="props.link"
                target="_blank"
                class="text-feedback-card__link"
                :class="{ show: isLong }">
                Читать в источнике
            </a>
        </div>
        <div class="text-feedback-card__footer">
            <div class="text-feedback-card__name">{{ props.clientName }}</div>
            <div class="text-feedback-card__date">{{ date }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string;
    link?: string | null;
    clientName: string;
    date?: string | Date;
}>();

const textRef = ref<null | HTMLElement>(null);
const isLong = ref(false);
const date = computed(() => {
    if (!props.date) return convertToLicalDateString(new Date());

    return convertToLicalDateString(new Date(props.date));
});

const convertToLicalDateString = (date: Date) => {
    return new Intl.DateTimeFormat("ru-RU", {
        month: "long",
        year: "numeric",
        day: "2-digit",
    })
        .format(date)
        .replace("г.", "")
        .trim();
};

const textLineHeight = 23;
const textLineHeightPx = textLineHeight + "px";

onNuxtReady(() => {
    const linesMaxCount = 5;
    const maxBlockHeight = textLineHeight * linesMaxCount;
    const textBlockHeight = textRef.value?.offsetHeight || 0;

    if (textBlockHeight > maxBlockHeight) {
        isLong.value = true;
    }
});
</script>

<style lang="scss">
.text-feedback-card {
    display: flex;
    flex-direction: column;
    height: 240px;
    padding: 24px;

    &__wrap {
        flex: 1;
    }

    &__text {
        font-family: $mont;
        font-weight: 600;
        font-size: 16px;
        line-height: v-bind("textLineHeightPx");
        margin-bottom: 4px;

        &.hide {
            @include elipsize(5);
        }
    }

    &__link {
        display: none;
        font-family: $mont;
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        color: $accent;
        position: relative;

        &::before,
        &::after {
            content: "";
            position: absolute;
            right: 8px;
            top: 50%;
            width: 8px;
            height: 1px;
            background-color: $accent;
        }

        &::before {
            transform: translateY(calc(-50% - 3px)) rotate(45deg);
        }
        &::after {
            transform: translateY(calc(-50% + 3px)) rotate(-45deg);
        }

        &.show {
            display: block;
        }
    }

    &__footer {
        display: flex;
        align-items: center;
    }

    &__name {
        flex: 1;
        font-family: $mont;
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        color: $grayDark2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 12px;
    }

    &__date {
        font-family: $mont;
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        color: $grayMedium;
    }
}
</style>
