import Vue from "vue"
import type {VNode} from 'vue'

let options: IntersectionObserverInit = {
  rootMargin: '200px',
  threshold: 0
};

const observer = new IntersectionObserver((entry, observer) => {
  entry.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      const checkSrcSrcset = (target: Element) => {
        if ((<HTMLElement>target).dataset.src) {
          (<HTMLImageElement>target).src = (<HTMLElement>target).dataset.src!
          delete (<HTMLElement>target).dataset.src
        }
        if ((<HTMLElement>target).dataset.srcset) {
          (<HTMLSourceElement>target).srcset = (<HTMLElement>target).dataset.srcset!
          delete (<HTMLElement>target).dataset.srcset
        }
      }

      const tagnames: string[] = [
        'PICTURE'
      ]

      // console.log(target?.parentElement?.tagName)

      if (target.parentElement
        && tagnames.includes(target.parentElement.tagName)
        && target.parentElement.children?.length) {
        Array.prototype.forEach.call(target.parentElement.children, (el) => {
          checkSrcSrcset(el)
        })
      } else {
        checkSrcSrcset(target);
      }
      observer.unobserve(target);
      // console.log('Intersecting', target)
    }
  })
}, options);

const directive = {
  bind(el: Element, binding: any, vnode: VNode, oldVnode: VNode) {
    observer.observe(el);
  },
  // inserted(el: Element, binding: any, vnode: VNode, oldVnode: VNode) {
  //   // observer.observe(el);
  // },
  // update(el: Element, binding: any, vnode: VNode, oldVnode: VNode) {
  //   // observer.observe(el);
  // },
  // componentUpdated(el: Element, binding: any, vnode: VNode, oldVnode: VNode) {
  //   // observer.observe(el);
  // },

  unbind(el: Element, binding: any, vnode: VNode, oldVnode: VNode) {
    // // If the element that has v-closable is removed, then
    // // unbind click/touchstart listeners from the whole page
    // document.removeEventListener('click', handleOutsideClick);
    // document.removeEventListener('touchstart', handleOutsideClick);
    observer.unobserve(el);
  },
}

Vue.directive('lazytest', directive)

