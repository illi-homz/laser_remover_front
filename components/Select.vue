<template>
    <div class="g-select" :class="{ opened: isOpen, error: !!props.error }">
        <div class="g-select__error">{{ props.error || '-' }}</div>
        <div class="g-select__wrapper">
            <div class="g-select__header" @click="toggle()">
                <span class="g-select__label">{{ title }}</span>
            </div>
            <div ref="optionsNode" class="g-select__body scroll" :class="{ opened: isOpen }">
                <ul class="g-select__items no-scrollbar">
                    <li
                        v-for="{ id, title } in items"
                        :key="id"
                        class="g-select__item"
                        :class="{ active: id === props.modelValue }"
                        @click="onItemClick(id)">
                        {{ title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    items?: {
        [key: string | number]: string;
    };
    modelValue?: string | number;
    error?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const title = computed(() => {
    const value = props.modelValue || -1;
    return props.items?.[value] || "Выбери услугу";
});

type ItemType = {
    id: string | number;
    title: string;
};
const items = computed((): ItemType[] => {
    if (!props.items) return [];

    return Object.keys(props.items).reduce((acc: ItemType[], id: string) => {
        const title = props.items?.[id] || "";
        const item: ItemType = { id, title };

        return [...acc, item];
    }, []);
});

const onItemClick = (idx?: number | string) => {
    emit("update:modelValue", idx);
};

const optionsNode = ref<HTMLElement | null>(null);
const isOpen = ref(false);

const cb = () => close();

const close = () => {
    // slideUp(optionsNode.value);
    isOpen.value = false;
    setTimeout(() => {
        document.body.removeEventListener("click", cb);
    }, 0);
};

const open = () => {
    // slideDown(optionsNode.value);
    isOpen.value = true;
    setTimeout(() => {
        document.body.addEventListener("click", cb);
    }, 0);
};

const toggle = () => {
    isOpen.value ? close() : open();
};
</script>

<style lang="scss">
.g-select {
    position: relative;

    &.error {
        .g-select__wrapper {
            border-color: $red;
        }
        .g-select__error {
            opacity: 1;
            visibility: visible;
        }
    }

    &__wrapper {
        border: 1px solid $grayMedium;
        border-radius: 2px;
        transition: all .3s ease;
    }

    &__error {
        font-family: $mont;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: $red;
        margin-bottom: 2px;
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
    }

    &__header {
        height: 48px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        position: relative;
        cursor: pointer;
        position: relative;
        z-index: 2;

        &:before,
        &:after {
            content: "";
            width: 8px;
            height: 2px;
            border-radius: 2px;
            background-color: rgba(36, 49, 56, 0.4);
            position: absolute;
            right: 0;
            top: 50%;
            transition: transform 0.3s ease;
        }
        &:before {
            right: 25px;
            transform: rotate(40deg);
        }
        &:after {
            right: 20px;
            transform: rotate(-40deg);
        }
    }

    &__label {
    }

    &__body {
        padding: 20px 0;
        height: 200px;
        max-height: 300px;
        opacity: 0;
        visibility: hidden;
        width: 100%;
        // left: -1px;
        left: 0;
        top: 0;
        border: 1px solid rgba(36, 49, 56, 0.2);
        background-color: #fff;
        position: absolute;
        z-index: 5;
        transition: all 0.2s ease;
        transform: translateY(-10%);
        z-index: 1;

        &.opened {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            top: 100%;
        }

        &.scroll {
            overflow-y: scroll;
        }
    }

    &__items {
        height: 100%;
        overflow-y: scroll;
    }

    &__item {
        cursor: pointer;
        min-height: 30px;
        display: flex;
        align-items: center;
        white-space: normal;
        padding: 0 23px;

        &.active {
            background-color: rgba(36, 49, 56, 0.2);
        }

        &:hover {
            background-color: #dadada;
        }
    }
    &.opened {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;

        .g-select__header {
            &:before {
                transform: rotate(-40deg);
            }
            &:after {
                transform: rotate(40deg);
            }
        }
        .g-select__body {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
    &.error {
        // border-color: $red-error;
        .g-select__header {
            &:before,
            &:after {
                // background-color: $red-error;
            }
        }
    }
}
</style>
