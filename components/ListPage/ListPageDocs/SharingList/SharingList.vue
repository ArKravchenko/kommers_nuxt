<template>

  <div class="sharing_list">
    <a class="sharing link" href="#comments" title="Комментариев: 87">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xlink:href="#vicon-commenting"></use></svg>
		</span>
      <span class="sharing__text" itemprop="interactionStatistic" itemscope
            itemtype="https://schema.org/InteractionCounter">
			<meta itemprop="interactionType" content="https://schema.org/CommentAction"/>
			<meta itemprop="userInteractionCount" content="298"/>
			99+ <span style="color: red"> ЗАГЛУШКА</span>
		</span>
    </a>

    <span class="sharing" :title="`Время прочтения: ${readTime} минут`">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-read_time"></use>
			</svg>
		</span>
		<span class="sharing__text">
			{{ readTime }} мин.
		</span>
	</span>

    <!-- !!! ВАЖНО !!! Здесь должен быть уникальный id заметки для фаворита -->
    <input type="checkbox" aria-hidden="true" class="vh user-favorites">

    <label class="ui-button sharing sharing--rubric_indent">
     <span v-show="!isFavAdded"
           @click="isFavAddedToggle"
           class="vicon sharing__icon sharing__icon_s sharing__icon--add" title="Добавить в избранное"
           data-toggle-id="favorites_4782529">
			<svg class="vicon__body">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-favorite_add"></use>
			</svg>
		</span>
      <span v-show="isFavAdded"
            @click="isFavAddedToggle"
            class="vicon sharing__icon sharing__icon_s sharing__icon--remove"
            title="Удалить из избранного">
      <svg class="vicon__body">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-favorite_remove"></use>
      </svg>
    </span>
    </label>

    <!--    <a v-if="sharingHref"-->
    <!--       :href="sharingHref"-->
    <!--       target="_blank"-->
    <!--       title="Поделиться"-->
    <!--       class="sharing">-->
    <!--		<span class="vicon sharing__icon sharing__icon_s">-->
    <!--			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-fb"></use></svg>-->
    <!--		</span>-->
    <!--    </a>-->

    <a v-if="sharingHref"
       :href="`//vk.com/share.php?url=https://kommersant.ru${sharingHref}`"
       target="_blank"
       title="Поделиться"
       class="sharing">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-vk"></use></svg>
		</span>
    </a>

    <a v-if="sharingHref"
       :href="`//t.me/share/url?url=https://kommersant.ru${sharingHref}`"
       target="_blank"
       title="Поделиться"
       class="sharing">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-tg"></use></svg>
		</span>
    </a>

    <!-- !!! ВАЖНО !!! Здесь должен быть уникальный id заметки для расхлопа -->
    <input v-bind="isSharingOpen" type="checkbox" class="hide">
    <label class="ui-button sharing"
           title="Ещё"
           @click="isSharingOpenToggle">
      <span v-show="!isSharingOpen" class="sharing_more">
        <span class="sharing__icon sharing__icon_s sharing_more__body">...</span>
      </span>
    </label>

    <a v-if="sharingHref"
       :href="`//www.twitter.com/share?url=https://kommersant.ru${sharingHref}`"
       target="_blank"
       title="Поделиться"
       :class="['sharing',{'is_hidden': !isSharingOpen}]">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-tw"></use></svg>
		</span>
    </a>

    <a v-if="sharingHref"
       :href="`https://connect.ok.ru/offer?url=https://kommersant.ru${sharingHref}`"
       target="_blank"
       title="Поделиться"
       :class="['sharing',{'is_hidden': !isSharingOpen}]">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-ok"></use></svg>
		</span>
    </a>

    <a v-if="sharingHref"
       :href="`whatsapp://send?text=https://kommersant.ru${sharingHref}`"
       target="_blank"
       title="Поделиться"
       :class="['sharing',{'is_hidden': !isSharingOpen}]"
    >
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-whatsapp"></use></svg>
		</span>
    </a>
  </div>


</template>

<script src="./SharingList.ts" lang="ts"></script>
<style src="./SharingList.scss" lang="scss" scoped></style>
<style src="./Sharing.scss" lang="scss" scoped></style>

