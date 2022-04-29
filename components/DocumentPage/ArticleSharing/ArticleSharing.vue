<template>

  <div class="doc_sharing" >
    <div class="doc_sharing__body">
		<span class="sharing" title="Количество просмотров: 128К">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-eye"></use>
				</svg>
			</span>
			<span class="sharing__text">
				128К <span style="color: red"> ЗАГЛУШКА</span>
			</span>
		</span>

      <a class="js-article-comment sharing link" href="#comments" title="Комментариев: 87">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-commenting"></use></svg>
			</span>
        <!-- <span class="sharing__text" itemprop="interactionStatistic" itemscope itemtype="https://schema.org/InteractionCounter">
          <meta itemprop="interactionType" content="https://schema.org/CommentAction"/>
          <meta itemprop="userInteractionCount" content="298" />
          99+
        </span> -->
      </a>

      <span class="sharing" title="Время прочтения: 6 минут">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-read_time"></use>
				</svg>
			</span>
			<span class="sharing__text">
				6 мин. <span style="color: red"> ЗАГЛУШКА</span>
			</span>
		</span>

      <input type="checkbox" class="hide js-toggle-input" id="sharing_list">
      <button class="ui-button sharing togglable togglable--0 sharing--article_indent">
			<span class="user-favorites togglable__0" title="Добавить в избранное" data-user-favorites-action="add" data-user-favorites-id="4663069" data-user-favorites-type="1">
				<span class="vicon sharing__icon sharing__icon_m sharing__icon--add">
					<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-favorite_add"></use>
					</svg>
				</span>
			</span>
        <span class="user-favorites togglable__1" title="Удалить из избранного" data-user-favorites-action="del" data-user-favorites-id="4663069" data-user-favorites-type="1">
				<span class="vicon sharing__icon sharing__icon_m sharing__icon--remove">
					<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-favorite_remove"></use>
					</svg>
				</span>
			</span>
      </button>

      <a href="#" target="_blank" title="Поделиться" class="sharing hide_mobile" data-socials-network="fb">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-fb"></use></svg>
			</span>
      </a>

      <a href="#" target="_blank" title="Поделиться" class="sharing hide_mobile" data-socials-network="vk">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-vk"></use></svg>
			</span>
      </a>

      <a href="#" target="_blank" title="Поделиться" class="sharing hide_mobile" data-socials-network="tg">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-tg"></use></svg>
			</span>
      </a>

      <!-- !!! ВАЖНО !!! Здесь должен быть уникальный id дока для расхлопа -->
      <input type="checkbox" class="hide js-toggle-input" id="sharing_list_id1234567">
      <label for="sharing_list_id1234567" title="Ещё" class="hide_mobile ui-button">
			<span class="sharing sharing--article_indent sharing_more js-toggle-item" data-toggle-id="sharing_list_id1234567" data-toggle-class-checked="hide">
				<span class="sharing__icon sharing__icon_m sharing_more__body">...</span>
			</span>
      </label>

      <a href="#" target="_blank" title="Поделиться" class="sharing hide_mobile is_hidden js-toggle-item" data-socials-network="tw" data-toggle-id="sharing_list_id1234567" data-toggle-class-unchecked="is_hidden">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-tw"></use></svg>
			</span>
      </a>

      <a href="#" target="_blank" title="Поделиться" class="sharing hide_mobile is_hidden js-toggle-item" data-socials-network="ok" data-toggle-id="sharing_list_id1234567" data-toggle-class-unchecked="is_hidden">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-ok"></use></svg>
			</span>
      </a>

      <a href="#" target="_blank" title="Поделиться" class="sharing hide_mobile is_hidden js-toggle-item" data-socials-network="wa" data-toggle-id="sharing_list_id1234567" data-toggle-class-unchecked="is_hidden">
			<span class="vicon sharing__icon sharing__icon_m">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-whatsapp"></use></svg>
			</span>
      </a>
    </div>
  </div>



</template>

<script src="./ArticleSharing.ts" lang="ts"></script>
<style src="./ArticleSharing.scss" lang="scss" scoped></style>

