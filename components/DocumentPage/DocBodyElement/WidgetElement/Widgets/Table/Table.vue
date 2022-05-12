<template>

  <div class="incut incut--wide">
    <div class="doc_media">
      <figure class="doc_media__figure">
        <div class="scrolldiv">

          <template v-for="(child ,i) in getTableBodyElements">
            <template v-if="typeof child === 'string'">
              {{ child }}
            </template>
            <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
          </template>

        </div>

      </figure>
    </div>
    <!-- modal enlarge button -->
    <button v-if="getTableIsExpandable"
            type="button"
            class="incut__more incut__more--media ui-button modal_trigger ui-modal__hide ui-modal__open"
            data-modal-selector="#table_1">
      Открыть в новом окне
      <span class="vicon vicon--rarrow incut__arrow incut__arrow--big" aria-hidden="true">
											<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xlink:href="#vicon-rarrow"></use></svg>
										</span>
    </button>
    <!-- modal enlarge button end -->
  </div>


</template>

<script src="./Table.ts" lang="ts"></script>
<style src="./Table.scss" lang="scss"></style>


