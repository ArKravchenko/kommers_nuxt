<template>

  <section class="vote">
    <div class="section_header section_header--aside slided_title">
      <h3 class="section_name">
        <a href="#" class="link section_name__link slided_title__link">
          <span class="section_name__text slided_title__text">Опрос <span style="color: red">ЗАГЛУШКА</span></span>
          <span href="#" class="vicon vicon--rarrow section_header__nav slided_title__nav">
					<svg class="vicon__body">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
					</svg>
				</span>
        </a>
      </h3>
    </div>
    <div class="vote__branding">
      <a href="http://ya.ru" target="_blank">
        <img :src="$imgPlaceholder"
             v-lazytest
             :data-src="'https://www.kommersant.ru/banner/poll/kommersant_poll_big.jpg'"
             alt="Коммерсант">
      </a>
    </div>

    <h2 class="vote__name">
      Что нельзя переносить в онлайн?
    </h2>
    <form action="/Poll/Vote" method="post">
      <input name="QuestionId" type="hidden" value="1699">
      <input name="RegionId" type="hidden" value="77">
      <input name="RedirectUrlOnClose" type="hidden" value="">
      <input name="UId" type="hidden" value="10436156">
      <ul class="vote__list">
        <li class="vote__item">
          <label>
            <input type="radio" name="Answers" value="8060" class="ui-radio vote__input">
            <span class="vote__text">Семейные торжества семейные торжества семейные торжества</span>
          </label>
        </li>
        <li class="vote__item">
          <label>
            <input type="radio" name="Answers" value="8061" class="ui-radio vote__input">
            <span class="vote__text">Дружеские встречи</span>
          </label>
        </li>
        <li class="vote__item">
          <label>
            <input type="radio" name="Answers" value="8062" class="ui-radio vote__input">
            <span class="vote__text">Корпоративные праздники</span>
          </label>
        </li>
        <li class="vote__item">
          <label>
            <input type="radio" name="Answers" value="8063" class="ui-radio vote__input">
            <span class="vote__text">Выяснение отношенийM</span>
          </label>
        </li>
        <li class="vote__item">
          <label>
            <input type="radio" name="Answers" value="8064" class="ui-radio vote__input">
            <span class="vote__text">Решение судеб страны</span>
          </label>
        </li>
        <li class="vote__item">
          <label>
            <input type="radio" name="Answers" value="8065" class="ui-radio vote__input">
            <span class="vote__text">Сейчас всё можно онлайн</span>
          </label>
        </li>
        <li class="vote__item">
          <label>
            <input type="radio" name="Answers" value="8066" class="ui-radio vote__input">
            <span class="vote__text">Свой вариант — в комментарии</span>
          </label>
        </li>
      </ul>
      <button class="ui-button ui-button--standart ui-button--wide vote__more" type="submit">Ответить</button>
    </form>
  </section>

</template>

<!--<script src="./Vote.ts" lang="ts"></script>-->
<style src="./Vote.scss" lang="scss" scoped></style>


