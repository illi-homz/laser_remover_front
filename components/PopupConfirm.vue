<template>
    <Popup
        :visible="isVisible"
        @open="open"
        @close="close"
        @cancel="cancel"
        class="popup-confirm"
    >
        <div class="popup-confirm__card" @click.stop>
            <nuxt-icon
                name="close"
                class="popup-confirm__close-btn"
                filled
                @click="close"
            />
            <img src="@/assets/img/confirm.png" class="popup-confirm__img" />
            <div class="popup-confirm__title">Заявка отправлена!</div>
            <div class="popup-confirm__text">Мы свяжемся с тобой через некоторое время</div>
        </div>
    </Popup>
</template>

<script setup lang="ts">
const props = defineProps<{
    visible: boolean;
}>();

const emit = defineEmits(["open", "cancel", "close"]);
const isVisible = computed(() => props.visible);

const open = (right: number) => {
    emit("open", right);
};
const cancel = () => {
    emit("cancel");
};
const close = () => {
    emit("close");
};
</script>

<style lang="scss">
.popup-confirm {
    &__card {
        background-color: $white;
        position: relative;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        transition: transform 0.2s ease;

        svg {
            width: 32px;
            height: 32px;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
    &__img {
        width: 290px;
        object-fit: contain;
        margin-bottom: 16px;
    }

    &__title {
        font-family: $mont;
        font-size: 20px;
        font-weight: 700;
        color: $gray1;
        text-transform: uppercase;
        margin-bottom: 8px;
    }
    
    &__text {
        font-family: $mont;
        font-size: 16px;
        line-height: 23px;
        font-weight: 400;
        color: $grayDark2;
    }
}
</style>