<template>
    <div class="aboutme" id="aboutme">
        <div class="aboutme__greeting">Дæ бон<br />хорз!</div>
        <div class="aboutme__content">
            <div class="aboutme__title">
                Меня зовут Миша Кисиев. Я занимаюсь удалением татуировок и татуажа уже более трех лет.
            </div>
            <div class="aboutme__text">
                Вывел процедуру удаления тату на новый уровень в регионе. Многие сомневались, что тату можно удалить до
                чистой кожи, без шрамов. Я доказал обратное.<br />Занимаюсь активным саморазвитием. 300 дней подряд
                ранних подъемов, чтения, бега.
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.aboutme {
    padding-top: 40px;
    padding-bottom: 66px;

    @include tablet {
        padding-top: 66px;
        display: flex;
        column-gap: 70px;
    }

    @include desktop {
        column-gap: 114px;
    }

    &__greeting {
        font-family: "Viaoda Libre", sans-serif;
        font-size: 40px;
        line-height: 120%;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 33px;
        color: $black;
    }

    &__content {
    }

    &__title {
        font-family: "Mont", sans-serif;
        font-weight: 800;
        font-size: 20px;
        line-height: 160%;
        text-align: center;
        margin-bottom: 24px;
        color: $black;

        @include tablet {
            text-align: start;
            font-size: 25px;
            line-height: 40px;
        }
    }

    &__text {
        font-family: "Mont", sans-serif;
        font-weight: 600;
        font-size: 17px;
        line-height: 160%;
        text-align: center;
        color: $grayDark2;

        @include tablet {
            text-align: start;
            font-size: 25px;
            line-height: 40px;
        }
    }
}
</style>
