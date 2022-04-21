<template>

  <div class="sharing_list">
    <a class="js-article-comment sharing link" href="#comments" title="Комментариев: 87">
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
    <input type="checkbox" aria-hidden="true" class="vh user-favorites js-toggle-input" id="favorites_4782529"
           data-user-favorites-id="4782529" data-user-favorites-type="1">

    <label class="ui-button sharing sharing--rubric_indent" for="favorites_4782529">
     <span class="vicon sharing__icon sharing__icon_s sharing__icon--add  js-toggle-item" title="Добавить в избранное"
          data-toggle-id="favorites_4782529" data-toggle-class-checked="hide">
			<svg class="vicon__body">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-favorite_add"></use>
			</svg>
		</span>
<!--    <span class="vicon sharing__icon sharing__icon_s sharing__icon&#45;&#45;remove  js-toggle-item"-->
<!--          title="Удалить из избранного" data-toggle-id="favorites_4782529" data-toggle-class-unchecked="hide">-->
<!--      <svg class="vicon__body">-->
<!--        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-favorite_remove"></use>-->
<!--      </svg>-->
<!--    </span>-->
    </label>

    <a :href="sharingHref" target="_blank" title="Поделиться" class="sharing" data-socials-network="fb">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-fb"></use></svg>
		</span>
    </a>

    <a :href="sharingHref" target="_blank" title="Поделиться" class="sharing" data-socials-network="vk">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-vk"></use></svg>
		</span>
    </a>

    <a :href="sharingHref" target="_blank" title="Поделиться" class="sharing" data-socials-network="tg">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-tg"></use></svg>
		</span>
    </a>

    <!-- !!! ВАЖНО !!! Здесь должен быть уникальный id заметки для расхлопа -->
    <input v-bind="isSharingOpen" type="checkbox" class="hide js-toggle-input" id="sharing_list_id1234567">
    <label class="ui-button sharing" for="sharing_list_id1234567" title="Ещё" @click="isSharingOpenToggle">
      <span v-show="!isSharingOpen" class="sharing_more js-toggle-item" data-toggle-id="sharing_list_id1234567">
        <span class="sharing__icon sharing__icon_s sharing_more__body">...</span>
      </span>
    </label>

    <a :href="sharingHref" target="_blank" title="Поделиться" :class="['sharing',{'is_hidden': !isSharingOpen}]"
       data-socials-network="tw" data-toggle-id="sharing_list_id1234567" data-toggle-class-unchecked="is_hidden">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-tw"></use></svg>
		</span>
    </a>

    <a :href="sharingHref" target="_blank" title="Поделиться" :class="['sharing',{'is_hidden': !isSharingOpen}]"
       data-socials-network="ok" data-toggle-id="sharing_list_id1234567" data-toggle-class-unchecked="is_hidden">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-ok"></use></svg>
		</span>
    </a>

    <a :href="sharingHref" target="_blank" title="Поделиться" :class="['sharing',{'is_hidden': !isSharingOpen}]"
       data-socials-network="wa" data-toggle-id="sharing_list_id1234567" data-toggle-class-unchecked="is_hidden">
		<span class="vicon sharing__icon sharing__icon_s">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-whatsapp"></use></svg>
		</span>
    </a>
  </div>


</template>

<script src="./SharingList.ts" lang="ts"></script>
<style src="./SharingList.scss" lang="scss" scoped></style>
<style src="./Sharing.scss" lang="scss" scoped></style>

