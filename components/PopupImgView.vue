<template>
    <Popup
        :visible="isVisible"
        @onOpen="onOpen"
        @onClose="onClose"
        @onCancel="onCancel"
        class="popup-img-view"
    >
        <div class="popup-img-view__card" @click.stop>
            <nuxt-icon
                name="close"
                class="popup-img-view__close-btn"
                filled
                @click="onClose"
            />
            <img :src="url" class="popup-img-view__img" />
        </div>
    </Popup>
</template>

<script lang="ts" setup>
const emit = defineEmits(["onOpen", "onCancel", "onClose"]);

const isVisible = ref(false);
const url = ref("");

const onOpen = (right: number) => {
    emit("onOpen", right);
};
const onCancel = () => {
    isVisible.value = false;
    emit("onCancel");
};
const onClose = () => {
    isVisible.value = false;
    emit("onClose");
};

const show = (u: string) => {
    console.log("show u", u);
    isVisible.value = true;
    url.value = u;
};

defineExpose({
    show,
});
</script>

<style lang="scss">
.popup-img-view {
    &__card {
        background-color: $white;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__img {
        object-fit: cover;
        width: 90vw;
        max-height: 90vh;

        @include tablet {
            max-height: unset;
            width: unset;
            height: 90vh;
            max-width: 90vw;
        }
    }

    &__close-btn {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        top: 20px;
        right: 20px;
        border: 2px solid $white;
        cursor: pointer;
        background-color: #333b;
        transition: background-color 0.2s ease;

        @include desktop {
            width: 56px;
            height: 56px;
            top: 0;
            right: -124px;
        }

        svg {
            width: 24px;
            height: 24px;

            path {
                stroke: $white;
            }
        }

        &:hover {
            background-color: #333d;
        }
    }
}
</style>
