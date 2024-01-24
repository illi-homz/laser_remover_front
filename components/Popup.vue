<template>
    <div
        class="popup"
        :class="{ visible: isVisible }"
        :style="`padding-right: ${paddingRight}px`"
        @click="emit('cancel')"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    visible: boolean;
}>();

const emit = defineEmits(["open", "cancel", "close"]);
const isVisible = computed(() => props.visible);
const paddingRight = ref(0);

watch(isVisible, (value, oldValue) => {
    const body = document.getElementsByTagName("body")[0];

    if (isVisible.value) {
        const windowWidth = window.innerWidth;
        const bodyWidth = body.offsetWidth;
        const paddRight = Math.abs(windowWidth - bodyWidth);
        body.style.paddingRight = paddRight + "px";
        paddingRight.value = paddRight;
        body.classList.add("lock");

        emit("open", paddRight);
    } else {
        body.style.paddingRight = "0";
        paddingRight.value = 0;
        body.classList.remove("lock");

        emit("close");
    }
});
</script>

<style lang="scss">
.popup {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #3338;
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &.visible {
        visibility: visible;
        opacity: 1;
    }
}
</style>