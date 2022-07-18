<template>

  <div class="doc_sharing">
    <div class="doc_sharing__body">
		<span class="sharing" :title="`Количество просмотров: ${getViews}`">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-eye"></use>
				</svg>
			</span>
			<span class="sharing__text">
				{{ getViews || getViews === 0 ? getViews : '&nbsp;' }}
<!--        <span style="color: red"> ЗАГЛУШКА</span>-->
			</span>
		</span>

      <a @click.prevent.stop="openComments" class="sharing link" href="#comments" :title="`Комментариев: ${getComments}`">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                      xlink:href="#vicon-commenting"></use></svg>
			</span>
        <span class="sharing__text" itemprop="interactionStatistic" itemscope
              itemtype="https://schema.org/InteractionCounter">
          <meta itemprop="interactionType" content="https://schema.org/CommentAction"/>
          <meta itemprop="userInteractionCount" :content="this.comments"/>
          {{ getComments || getComments === 0 ? getComments : '&nbsp;' }}
        </span>
      </a>

      <span class="sharing" v-if="readingTime" :title="`Время прочтения: ${readingTime}`">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-read_time"></use>
				</svg>
			</span>
			<span class="sharing__text">
				{{ readingTime }}
			</span>
		</span>

      <input type="checkbox" class="hide">
      <button class="ui-button sharing togglable togglable--0 sharing--article_indent">
			<span v-show="!isFavAdded"
            @click="isFavAddedToggle"
            class="user-favorites" title="Добавить в избранное">
				<span class="vicon sharing__icon sharing__icon_m sharing__icon--add">
					<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xlink:href="#vicon-favorite_add"></use>
					</svg>
				</span>
			</span>
        <span v-show="isFavAdded"
              @click="isFavAddedToggle"
              class="user-favorites"
              title="Удалить из избранного">
				<span class="vicon sharing__icon sharing__icon_m sharing__icon--remove">
					<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xlink:href="#vicon-favorite_remove"></use>
					</svg>
				</span>
			</span>
      </button>

      <!--      <a v-if="sharingHref"-->
      <!--         :href="sharingHref"-->
      <!--         target="_blank"-->
      <!--         title="Поделиться"-->
      <!--         class="sharing hide_mobile">-->
      <!--			<span class="vicon sharing__icon sharing__icon_m">-->
      <!--				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-fb"></use></svg>-->
      <!--			</span>-->
      <!--      </a>-->

      <a v-if="sharingHref" :href="`//vk.com/share.php?url=https://kommersant.ru${sharingHref}`"
         target="_blank"
         title="Поделиться"
         class="sharing hide_mobile">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-vk"></use></svg>
			</span>
      </a>

      <a v-if="sharingHref"
         :href="`//t.me/share/url?url=https://kommersant.ru${sharingHref}`"
         target="_blank"
         title="Поделиться"
         class="sharing hide_mobile">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-tg"></use></svg>
			</span>
      </a>

      <!-- !!! ВАЖНО !!! Здесь должен быть уникальный id дока для расхлопа -->
      <input v-bind="isSharingOpen"
             type="checkbox"
             class="hide"
      >
      <label title="Ещё" class="hide_mobile ui-button" @click="isSharingOpenToggle">
			<span v-show="!isSharingOpen" class="sharing sharing--article_indent sharing_more">
				<span class="sharing__icon sharing__icon_m sharing_more__body">...</span>
			</span>
      </label>

      <a v-if="sharingHref"
         :href="`//www.twitter.com/share?url=https://kommersant.ru${sharingHref}`"
         target="_blank"
         title="Поделиться"
         :class="['sharing hide_mobile',{'is_hidden': !isSharingOpen}]">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-tw"></use></svg>
			</span>
      </a>

      <a v-if="sharingHref"
         :href="`https://connect.ok.ru/offer?url=https://kommersant.ru${sharingHref}`"
         target="_blank"
         title="Поделиться"
         :class="['sharing hide_mobile',{'is_hidden': !isSharingOpen}]">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-ok"></use></svg>
			</span>
      </a>

      <a v-if="sharingHref"
         :href="`whatsapp://send?text=https://kommersant.ru${sharingHref}`"
         target="_blank" title="Поделиться"
         :class="['sharing hide_mobile',{'is_hidden': !isSharingOpen}]">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                      xlink:href="#vicon-whatsapp"></use></svg>
			</span>
      </a>
    </div>
  </div>


</template>

<script src="./ArticleSharing.ts" lang="ts"></script>
<style src="./ArticleSharing.scss" lang="scss" scoped></style>

