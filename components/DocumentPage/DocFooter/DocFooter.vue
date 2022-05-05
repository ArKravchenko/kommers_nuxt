<template>

  <footer class="doc_footer">
    <ul class="doc_footer__list" v-if="getFooterIssue">
      <li class="doc_footer__item">
        <template v-if="getFooterIssue.href">
          <a :href="getFooterIssue.href">{{ getFooterIssue.title }}</a>&nbsp;{{ getFooterIssue.appendix }}
        </template>
        <template v-else>
          {{ getFooterIssue.title }}&nbsp;{{ getFooterIssue.appendix }}
        </template>
      </li>
    </ul>

    <template v-if="getFooterAuthors">
      <h4 class="doc_footer__term">
        Авторы:
      </h4>
      <ul class="doc_footer__list">
        <li class="doc_footer__item" :key="'author'+i" v-for="(author, i) in getFooterAuthors">
            <span itemprop="author" itemscope itemtype="https://schema.org/Person">
              <a :href="author.href" itemprop="url">
                <span itemprop="name" class="doc_footer__item_name">{{ author.text }}</span>
              </a>
              <span class="doc_footer__subscribe">
                <!-- tumbler подписки на автора с текстом -->
                <input type="checkbox" class="ui-tumbler_trigger user-subscriptions"
                       :id="`author_${author.subscription.id}`">
                <label class="ui-tumbler ui-tumbler--subscribe" :for="`author_${author.subscription.id}`">
                  <span class="ui-tumbler__box">
                    <span class="ui-tumbler__dot"></span>
                  </span>
                  <span class="doc_footer__tumbler_text">
                    подписаться
                  </span>
                </label>
              </span>
            </span>
        </li>
      </ul>
    </template>

    <template v-if="getFooterThemes">
      <h4 class="doc_footer__term">
        Темы:
      </h4>
      <ul class="doc_footer__list" >
        <li class="doc_footer__item" :key="'theme'+j" v-for="(theme, j) in getFooterThemes">
          <a :href="theme.href" class="doc_footer__item_name">{{ theme.text }}</a>
          <span class="doc_footer__subscribe">
            <!-- tumbler подписки на тему -->
            <input type="checkbox" class="ui-tumbler_trigger user-subscriptions"
                   :id="`theme_${theme.subscription.id}`">
            <label class="ui-tumbler ui-tumbler--subscribe" :for="`theme_${theme.subscription.id}`">
              <span class="ui-tumbler__box">
                <span class="ui-tumbler__dot"></span>
              </span>
              <span class="doc_footer__tumbler_text">
                подписаться
              </span>
            </label>
          </span>
        </li>
      </ul>
    </template>
  </footer>


</template>

<script src="./DocFooter.ts" lang="ts"></script>
<!--<style src="./DocHeader.scss" lang="scss" scoped></style>-->

