<template>

 <div>
   {{Math.random()}} ServiceMenu component cache

   <input type="checkbox" class="hide js-toggle-input" id="archive_compact" checked>

   <div class="service_menu">

     <Crumbs/>

     <div class="service_menu__item">
       <input type="checkbox" class="ui-tumbler_trigger" id="subscribe">
       <label class="ui-icon ui-tumbler" for="subscribe">
			<span class="icon_text">
				Подписаться
			</span>
         <span class="ui-tumbler__box" aria-hidden="true">
				<span class="ui-tumbler__dot"></span>
			</span>
       </label>
     </div>
     <div class="service_menu__item">
       <label class="ui-icon" for="archive_compact" @click="isServiceMenuOpenToggle">
         <span class="icon_text js-toggle-item">
				    {{ isServiceMenuOpen? 'Скрыть архив' : 'Архив' }}
         </span>

         <span :class="['ui-rotate', {'ui-rotate_180': isServiceMenuOpen}]">
           <span class="service_menu__arrow vicon">
              <svg class="vicon__body">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
              </svg>
          </span>
			  </span>
       </label>
     </div>
   </div>

   <div v-show="isServiceMenuOpen" class="ui-collapse"
        data-toggle-id="archive_compact"
        data-toggle-class-checked="ui-collapse--hide"
        data-toggle-class-unchecked="ui-collapse--hide"
        data-toggle-class-animated="ui-collapse--animated">
     <div class="grid service_panel">
       <form class="grid-col-half">
         <div class="ui-field">
           <div class="ui-field_nav ui-label">
             <h4 class="ui-field_nav__caption ui-field_nav__item">Выводить:</h4>
             <ul class="ui-field_nav__list">
               <li class="ui-field_nav__item">
                 <a href="#">по дням</a>
               </li>
               <li class="ui-field_nav__item">
                 <a href="#">по неделям</a>
               </li>
               <li class="ui-field_nav__item">
                 по месяцам
               </li>
             </ul>
           </div>
           <div class="ui-field_pack ui-field_pack--solid">
             <a href="#" class="ui-button ui-button--standart ui-nav ui-nav--prev" data-disabled="1">
												<span class="vicon vicon--small vicon--larrow">
													<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use></svg>
												</span>
             </a>
             <input class="ui-input ui-input--calendar" type="date" id="calendar" value="2018-07-22" min="2018-01-01" max="2020-12-31">
             <a href="#" class="ui-button ui-button--standart ui-nav ui-nav--next" data-disabled>
												<span class="vicon vicon--small vicon--rarrow">
													<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use></svg>
												</span>
             </a>
           </div>
         </div>
       </form>
       <form class="grid-col-half" action="/search/results" method="get">
         <div class="ui-field">
           <label class="ui-label" for="archive_search">
             поиск по архиву:
           </label>
           <div class="ui-field_pack ui-field_pack--solid">
             <input type="search" placeholder="" class="ui-input ui-input--search" id="archive_search">
             <button class="vicon ui-button ui-button--search" aria-label="Поиск">
               <svg class="vicon__body">
                 <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-search"></use>
               </svg>
             </button>
           </div>
         </div>
       </form>
     </div>
   </div>

 </div>

</template>

<script src="./ServiceMenu.ts" lang="ts"></script>
<style src="./ServiceMenu.scss" lang="scss" scoped></style>

