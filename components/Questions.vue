<template>
    <div class="questions" id="questions">
        <div class="block-title questions__title">Частые вопросы</div>
        <ul class="questions__list">
            <li v-for="({ id, answer, question }, idx) in props.questions" :key="id">
                <div
                    class="questions__question-wrap"
                    @click="toggleAnswers(idx)"
                    :class="{ active: activeIndex === idx }">
                    <div class="questions__question">{{ question }}</div>
                    <div class="questions__indicator" />
                </div>
                <div ref="answersNodes" class="questions__answer">{{ answer }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { QuestionType } from "~/types";

const props = defineProps<{
    questions: QuestionType[];
}>();

const answersNodes = ref<HTMLElement[] | null>(null);
const activeIndex = ref(-1);

const toggleAnswers = (idx: number) => {
    answersNodes.value?.forEach((el, index) => {
        idx !== index && slideUp(el, 300);
    });
    const node = answersNodes.value?.[idx];
    slideToggle(node, 300);
    activeIndex.value = activeIndex.value === idx ? -1 : idx;
};
</script>

<style lang="scss">
.questions {
    padding-top: 40px;
    padding-bottom: 48px;

    @include tablet {
        padding-top: 48px;
        padding-bottom: 72px;
        padding-left: 130px;
        padding-right: 130px;
        max-width: $lg + px;
        margin: 0 auto;
    }

    & &__title {
        color: $black;
        margin-bottom: 52px;
        padding: 0 24px;

        @include tablet {
            margin-bottom: 32px;
            padding: 0;
        }
    }

    &__list {
        li {
            border-bottom: 1px solid $grayMedium;
            padding: 28px 24px;

            &:nth-child(2n + 1) {
                background-color: $grayLight;
            }

            @include tablet {
                padding: 24px;
            }
        }
    }

    &__question-wrap {
        display: flex;
        align-items: center;
        cursor: pointer;

        &.active .questions__indicator {
            &::after {
                opacity: 0;
            }
        }
    }

    &__question {
        flex: 1;
        color: $black;
        font-family: $mont;
        font-weight: 700;
        font-size: 23px;
        line-height: 32px;
    }

    &__indicator {
        width: 56px;
        height: 56px;
        border: 2px solid $black;
        background-color: $white;
        position: relative;
        border-radius: 2px;

        &::before,
        &::after {
            content: "";
            width: 20px;
            height: 2px;
            background-color: $black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%);
        }

        &::after {
            transform: translate(-50%) rotate(90deg);
            transition: all .2s ease;
        }
    }

    &__answer {
        color: $grayDark3;
        margin-top: 16px;
        padding-right: 76px;
        font-family: $mont;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        display: none;
    }
}
</style>
