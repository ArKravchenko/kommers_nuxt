<template>

  <div class="incut_content">
    <!-- нативный чекбокс для расхлопов -->
    <input :id="uniqueInputId" class="js-toggle-input vh" type="checkbox" aria-hidden="true">
    <h2 class="incut_content__name incut_4698571_222333_name"
        @click.stop.prevent="clickIsExpandedToggle">
      <template v-if="getTitle">
        <DocBodyElement v-for="(child, i) in getTitle"
                        :key="'title'+i"
                        :doc-body-element="child"
        />
      </template>
      <label :for="uniqueInputId" class="incut_content__label" aria-hidden="true" >
          <span class="incut_content__arrow ui-rotate"
                :class="{'ui-rotate_180':isExpanded}"
          >
            <span class="vicon vicon--rarrow" aria-hidden="true">
              <svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use></svg>
            </span>
          </span>
      </label>
    </h2>
    <div ref="collapse"
         class="ui-collapse ui-collapse--animated"
         :class="[isExpanded? 'ui-collapse--show': 'ui-collapse--hide']"
         data-toggle-class-animated="ui-collapse--animated"
    >
      <div v-if="getCollapseRawHtml"
           class="incut_content__body"
           v-html="getCollapseRawHtml"/>
      <div v-else class="incut_content__body">
        <h4 class="incut_content__subheader" v-if="getSubtitle">
          <DocBodyElement v-for="(child, j) in getSubtitle"
                          :key="'subtitle'+j"
                          :doc-body-element="child"
          />
        </h4>

        <template v-if="getBodyElements">
          <DocBodyElement v-for="(child, k) in getBodyElements"
                          :key="'body'+k"
                          :doc-body-element="child"
                          :para-wrapper-tag="'p'"
                          :para-wrapper-class="'doc__text'"
          />
        </template>
      </div>
    </div>
  </div>


</template>

<script src="./Collapse.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


