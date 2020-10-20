<template>
  <section class="vote">
    <SectionHeader section-name="Опрос" is-aside />

    <div class="vote__text">
      <h2 class="vote__name">Что нельзя переносить в онлайн?</h2>
    </div>
    <form id="poll1699" action="/Poll/Vote" method="post">
      <input id="QuestionId" name="QuestionId" type="hidden" value="1699" />
      <input id="RegionId" name="RegionId" type="hidden" value="77" />
      <input
        id="RedirectUrlOnClose"
        name="RedirectUrlOnClose"
        type="hidden"
        value=""
      />
      <input id="UId" name="UId" type="hidden" value="10436156" />
      <ul class="vote__list">
        <li
          v-for="{ answer, index } in answers"
          :key="answer.id"
          class="vote__item"
        >
          <input
            :id="'answer' + index"
            class="ui-radio vote__radio"
            type="radio"
            name="Answers"
            :value="index"
          />
          <label class="vote__answer" for="answer8060">{{ answer }}</label>
        </li>
      </ul>
      <a href="#" class="vote__more">Ответить</a>
    </form>
  </section>
</template>

<script src="./Vote.ts" lang="ts"></script>
<style src="./Vote.scss" lang="scss"></style>
