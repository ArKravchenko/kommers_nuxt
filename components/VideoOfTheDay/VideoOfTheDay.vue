<template>
  <div class="votd">
    <h4 class="votd__tag">Видеофакт</h4>
    <div class="votd__canvas">
      <span class="vicon votd__canvas_play">
        <svg class="vicon__body">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#vicon-play"
          ></use>
        </svg>
      </span>
      <div class="votd__photo">
        <!-- perhaps, set playable video-file instead of img -->
        <img
          class="votd__img"
          src="https://im.kommersant.ru/Issues.photo/CORP/2020/09/21/KMO_096855_23634_2_t218_172555.jpg"
          alt=""
        />
      </div>
    </div>
    <h2 class="votd__name">
      <a href="#" class="votd__link votd__link--overlay">
        От крупнейшего арктического шельфового ледника 79N в Гренландии
        откололся массив площадью 113 кв. км.
      </a>
    </h2>
  </div>
</template>

<script src="./VideoOfTheDay.ts" lang="ts"></script>
<style src="./VideoOfTheDay.scss" lang="scss" scoped></style>
