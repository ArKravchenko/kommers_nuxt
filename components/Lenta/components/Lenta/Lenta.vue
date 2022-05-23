<template>
    <div>

        <aside class="grid-col-lenta aside_column">
            <section class="aside_news">
                <LentaVertical v-if="getLentaIsVertical"/>
            </section>
        </aside>

        <LentaHorizontal
                v-if="!getLentaIsVertical"
        />

    </div>
</template>
<script src="./Lenta.ts" lang="ts"></script>
<!--<style src="./InlinePlaceholder.scss" lang="scss"></style>-->
<style src="./AsideAds.scss" lang="scss"></style>
