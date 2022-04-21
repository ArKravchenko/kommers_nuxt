<template>


  <div class="ba">
    {{Math.random()}} CompanyNews
    <div class="ba__text ba__text--shadow">
      <h2 class="ba__tag ba__tag--black">
        <a href="#" class="link">Новости компаний <span style="color: red">ЗАГЛУШКА {{JSON.stringify(companyNewsData)}}</span></a>
        <span class="ba__link_more"><a href="#" class="link decor">Все</a></span>
      </h2>
      <ul class="ba__list">
        <li class="ba__item">
          <h2 class="ba__date">22.07.2020</h2>
          <h3 class="ba__name ba__name--black">
            <a href="#" class="link">Название компании</a>
          </h3>
          <h4 class="ba__subtitle ba__subtitle--black">
            <a href="#" class="link link_overlay">«Галс-Девелопмент» подписал соглашение о сотрудничестве с школой
              Heritage Education Group </a>
          </h4>
        </li>
        <li class="ba__item">
          <h2 class="ba__date">21.07.2020</h2>
          <h3 class="ba__name ba__name--black">
            <a href="#" class="link">«Галс-Девелопмент»</a>
          </h3>
          <h4 class="ba__subtitle ba__subtitle--black">
            <a href="#" class="link link_overlay">«Галс-Девелопмент» завершил важный этап нового строительства объекта
              «Невская Ратуша» </a>
          </h4>
        </li>
        <li class="ba__item">
          <h2 class="ba__date">15.07.2020</h2>
          <h3 class="ba__name ba__name--black">
            <a href="#" class="link">«Галс-Девелопмент»</a>
          </h3>
          <h4 class="ba__subtitle ba__subtitle--black">
            <a href="#" class="link link_overlay">«Просвещение» и «ИКС Холдинг» формируют цифровое будущее школ </a>
          </h4>
        </li>
        <li class="ba__item">
          <h2 class="ba__date">7.07.2020</h2>
          <h3 class="ba__name ba__name--black">
            <a href="#" class="link">«Галс-Девелопмент»</a>
          </h3>
          <h4 class="ba__subtitle ba__subtitle--black">
            <a href="#" class="link link_overlay">В ЦДМ на Лубянке возобновили работу развлекательные центры </a>
          </h4>
        </li>
      </ul>
    </div>
  </div>


</template>

<script src="./CompanyNews.ts" lang="ts"></script>
<style src="./CompanyNews.scss" lang="scss" scoped></style>


