import ClickOutSide from 'vue-click-outside';
import uiEventBus from '@/components/uiEventBus.vue';

export default {
  install(Vue) {
    Vue.directive('click-outside', ClickOutSide);

    Vue.directive('scroll-animate', {
      inserted(el, binding) {
        let wrap = el.closest('.scl__body');
        if (wrap === null)wrap = window;
        let className = binding.value;
        if (typeof binding.value === 'object')className = binding.value.class;
        const isClass = !!((className === 'on' || className === 'active'));
        let setStyle = '';
        const { delay } = binding.value;
        if (delay > 0) setStyle += `-webkit-animation-delay:${delay}ms;animation-delay:${delay}ms;`;
        const { duration } = binding.value;
        if (duration > 0) setStyle += `-webkit-animation-duration:${duration}ms;animation-duration:${duration}ms;`;

        const isInfinite = binding.modifiers.infinite;
        const isRepeat = binding.modifiers.repeat;

        if (!isClass) {
          if (isInfinite)el.classList.add('infinite');
          el.classList.add('animated', 'paused');
          el.classList.add(className);
          if (setStyle !== '') el.setAttribute('style', setStyle);
        }

        let isInit = false;
        const sclEvt = (() => {
          const margin = 50;
          let wrapTop = wrap.scrollTop;
          let wrapHeight = wrap.offsetHeight;
          if (wrap === window) {
            wrapTop = wrap.scrollY;
            wrapHeight = wrap.innerHeight;
          }
          const wrapBottom = wrapTop + wrapHeight;
          const elTop = Vue.prototype.$getOffset(el).top + margin;
          const elHeight = el.offsetHeight;
          const elBottom = elTop + elHeight - margin;

          if (!isInit && (wrapTop < elBottom) && (elTop < wrapBottom)) {
            isInit = true;
            if (isClass) {
              el.classList.add(className);
            } else {
              el.classList.remove('paused');
            }
            if (isRepeat !== true)wrap.removeEventListener('scroll', sclEvt);
          } else if (isInit && isRepeat) {
            if (((wrapTop - elHeight) > (elBottom + margin)) || ((elTop - margin) > (wrapBottom + elHeight))) {
              isInit = false;
              el.classList.remove(className);
              el.classList.add('paused');
              setTimeout(() => {
                el.classList.add(className);
              }, 1);
            }
          }
        });
        wrap.addEventListener('scroll', sclEvt);
        window.addEventListener('resize', sclEvt);
        wrap.dispatchEvent(new Event('scroll'));
      },
    });

    Vue.directive('scroll-in', {
      inserted(el, binding) {
        let wrap = el.closest('.scl__body');
        if (wrap === null)wrap = window;

        const inSclEvt = ((evt) => {
          const margin = 50;
          let wrapTop = wrap.scrollTop;
          let wrapHeight = wrap.offsetHeight;
          if (wrap === window) {
            wrapTop = wrap.scrollY;
            wrapHeight = wrap.innerHeight;
          }
          const wrapBottom = wrapTop + wrapHeight;
          const elTop = Vue.prototype.$getOffset(el).top + margin;
          const elHeight = el.offsetHeight;
          const elBottom = elTop + elHeight - margin;
          if ((wrapTop < elBottom) && (elTop < wrapBottom)) {
            wrap.removeEventListener('scroll', inSclEvt);
            window.removeEventListener('resize', inSclEvt);
            if (typeof binding.value === 'function') {
              binding.value(el, evt);
            } else if (typeof binding.value === 'string') {
              el.classList.add(binding.value);
            }
          }
        });
        wrap.addEventListener('scroll', inSclEvt);
        window.addEventListener('resize', inSclEvt);
        wrap.dispatchEvent(new Event('scroll'));
      },
    });

    Vue.directive('scroll-fixed', {
      inserted(el, binding) {
        let wrap = el.closest('.scl__body');
        let lastScrollPosition = 0;
        let isFixed = false;
        if (wrap === null)wrap = window;
        const child = binding.value.el !== undefined ? el.querySelector(binding.value.el) : el.children[0];
        const fixedSclEvt = (() => {
          const elWrap = (wrap === window) ? document : wrap;
          const fixedEls = elWrap.querySelectorAll('.fixed');
          let fixedTop = 0;
          if (fixedEls.length) {
            fixedEls.forEach((i) => {
              // fixedTop += i.children[0].offsetHeight
              fixedTop += i.firstChild.offsetHeight;
            });
          }
          if (elWrap !== document) {
            const $prevEl = elWrap.previousElementSibling;
            if ($prevEl !== null) {
              const $prevClassList = $prevEl.classList;
              if ($prevClassList.contains('pop_head')) {
                fixedTop += $prevEl.firstChild.offsetHeight;
              }
            }
          }

          let margin = fixedTop > 0 ? fixedTop : 0;
          const height = el.offsetHeight;
          let childH = child.offsetHeight;
          let sclTop = wrap.scrollTop;
          if (wrap === window) {
            sclTop = wrap.scrollY;
          }

          if (sclTop < lastScrollPosition) margin -= childH;
          if (Vue.prototype.$getOffset(el).top <= (sclTop + margin - height)) {
            el.classList.add('fixed');
            if (height > 0 && !isFixed) {
              el.setAttribute('style', `height:${height}px`);
              child.setAttribute('style', `top:${fixedTop}px;`);
              childH = child.offsetHeight;
              isFixed = true;
              uiEventBus.$emit('kbSwiperUpdate', 'update');
            }
          } else {
            el.classList.remove('fixed');
            if (isFixed) {
              el.removeAttribute('style');
              child.removeAttribute('style');
              isFixed = false;
              uiEventBus.$emit('kbSwiperUpdate', 'update');
            }
            setTimeout(() => {
              lastScrollPosition = sclTop;
            }, 1);
          }
        });
        wrap.addEventListener('scroll', fixedSclEvt);
        window.addEventListener('resize', fixedSclEvt);
        wrap.dispatchEvent(new Event('scroll'));
      },
    });

    Vue.directive('scroll-visual', {
      inserted(el, binding) {
        let isTop = true;
        let isbottom = false;
        let isOpacity = false;
        let itemAry = null;
        if (binding.value !== undefined) {
          if (binding.value.top === false) isTop = false;
          if (binding.value.bottom) isbottom = true;
          if (binding.value.opacity) isOpacity = true;
          if (binding.value.items !== undefined) itemAry = binding.value.items;
        }
        let wrap = el.closest('.scl__body');
        if (wrap === null)wrap = window;
        const child = binding.value.el !== undefined ? el.querySelector(binding.value.el) : el.children[0];
        const elWrap = (wrap === window) ? document : wrap;
        const itemsEvt = ((val, h) => {
          if (val === 'reset') {
            itemAry.forEach((i) => {
              const item = elWrap.querySelector(i.el);
              if (item !== null)item.removeAttribute('style');
            });
          } else {
            itemAry.forEach((i) => {
              const item = elWrap.querySelector(i.el);
              const { direction } = i;
              if (item !== null && direction !== undefined) {
                let itemSetStyle = `opacity:${1 - (val / h)};`;
                switch (direction) {
                  case 'right':
                    itemSetStyle += `transform:translateX(${val}px);`;
                    break;
                  case 'left':
                    itemSetStyle += `transform:translateX(${val * -1}px);`;
                    break;
                  case 'top':
                    itemSetStyle += `transform:translateY(${val * -1}px);`;
                    break;
                  case 'bottom':
                    itemSetStyle += `transform:translateY(${val}px);`;
                    break;
                  default:
                    break;
                }
                item.setAttribute('style', itemSetStyle);
              }
            });
          }
        });

        const visualSclEvt = (() => {
          const fixedEls = elWrap.querySelectorAll('.fixed');
          let fixedTop = 0;
          if (fixedEls.length) {
            fixedEls.forEach((i) => {
              // fixedTop += i.children[0].offsetHeight
              fixedTop += i.firstChild.offsetHeight;
            });
          }
          if (elWrap !== document) {
            const $prevEl = elWrap.previousElementSibling;
            if ($prevEl !== null) {
              const $prevClassList = $prevEl.classList;
              if ($prevClassList.contains('pop_head')) {
                fixedTop += $prevEl.firstChild.offsetHeight;
              }
            }
          }

          const bottomFixedEls = elWrap.querySelectorAll('.bottom_fixed');
          let fixedBottom = 0;
          if (bottomFixedEls.length) {
            bottomFixedEls.forEach((i) => {
              fixedBottom += i.firstChild.offsetHeight;
            });
          }
          if (elWrap !== document) {
            const $nextEl = elWrap.nextElementSibling;
            if ($nextEl !== null) {
              const $nextClassList = $nextEl.classList;
              if ($nextClassList.contains('pop_foot')) {
                fixedBottom += $nextEl.firstChild.offsetHeight;
              }
            }
          }

          const marginTop = fixedTop > 0 ? fixedTop : 0;
          const marginBottom = fixedBottom > 0 ? fixedBottom : 0;
          const elTop = Vue.prototype.$getOffset(el).top;
          const elH = el.offsetHeight;
          let sclTop = wrap.scrollTop;
          let wrapHeight = wrap.offsetHeight;
          if (wrap === window) {
            sclTop = wrap.scrollY;
            wrapHeight = wrap.innerHeight;
          }
          const wrapStart = sclTop + marginTop;
          const wrapEnd = sclTop + wrapHeight - marginBottom;
          const move = wrapStart - elTop;
          const move2 = (elTop + elH) - wrapEnd;
          if (elTop <= wrapStart && wrapStart <= (elTop + elH) && isTop) {
            let setStyle = `transform:translateY(${move / 2}px);`;
            if (isOpacity) {
              const opacityVal = (move / elH).toFixed(4);
              setStyle += `opacity:${1 - opacityVal};`;
            }
            child.setAttribute('style', setStyle);
            if (itemAry !== null) {
              itemsEvt(move, wrapHeight);
            }
          } else if (elTop <= wrapEnd && wrapEnd <= (elTop + elH) && isbottom) {
            let setStyle2 = `transform:translateY(${-(move2 / 2)}px);`;
            if (isOpacity) {
              const opacityVal2 = (move2 / elH).toFixed(4);
              setStyle2 += `opacity:${1 - opacityVal2};`;
            }
            child.setAttribute('style', setStyle2);
            if (itemAry !== null) {
              itemsEvt(move2, wrapHeight);
            }
          } else {
            child.removeAttribute('style');
            if (itemAry !== null) {
              itemsEvt('reset');
            }
          }
        });
        wrap.addEventListener('scroll', visualSclEvt);
        window.addEventListener('resize', visualSclEvt);
        wrap.dispatchEvent(new Event('scroll'));
      },
    });

    Vue.directive('scroll-number', {
      inserted(el, binding) {
        let toNumber = Vue.prototype.$removeComma(el.innerText);
        let start = 0;
        let speed = 1000;
        let timeDelay = 0;
        let isComma = false;
        let completeFn = null;
        if (binding.value !== undefined) {
          if (binding.value.to !== undefined) toNumber = Vue.prototype.$removeComma(binding.value.to);
          if (binding.value.start !== undefined) start = binding.value.start;
          if (binding.value.speed !== undefined) speed = binding.value.speed;
          if (binding.value.delay !== undefined) timeDelay = binding.value.delay;
          if (binding.value.comma !== undefined) isComma = binding.value.comma;
          if (typeof binding.value.complete === 'function') completeFn = binding.value.complete;
        }
        const isNotNumber = Number.isNaN(parseInt(toNumber, 10));
        if (!isNotNumber) toNumber = parseInt(toNumber, 10);

        let wrap = el.closest('.scl__body');
        if (wrap === null)wrap = window;
        if (isComma) {
          el.innerText = Vue.prototype.$addComma(start);
        } else {
          el.innerText = start;
        }
        const inSclNumEvt = (() => {
          const margin = 50;
          let wrapTop = wrap.scrollTop;
          let wrapHeight = wrap.offsetHeight;
          if (wrap === window) {
            wrapTop = wrap.scrollY;
            wrapHeight = wrap.innerHeight;
          }
          const wrapBottom = wrapTop + wrapHeight;
          const elTop = Vue.prototype.$getOffset(el).top + margin;
          const elHeight = el.offsetHeight;
          const elBottom = elTop + elHeight - margin;
          if ((wrapTop < elBottom) && (elTop < wrapBottom) && !el.classList.contains('scl__on')) {
            el.classList.add('scl__on');
            wrap.removeEventListener('scroll', inSclNumEvt);
            wrap.removeEventListener('resize', inSclNumEvt);
            if (isNotNumber) {
              // 숫자 아닐때
              el.innerText = toNumber;
            } else {
              const animeObj = {
                val: start,
              };
              Vue.prototype.$anime({
                targets: animeObj,
                val: toNumber,
                round: 1,
                duration: speed,
                delay: timeDelay,
                easing: 'linear',
                update: (() => {
                  if (isComma) {
                    el.innerHTML = Vue.prototype.$addComma(animeObj.val);
                  } else {
                    el.innerHTML = animeObj.val;
                  }
                }),
                complete: (() => {
                  if (completeFn !== null)completeFn();
                }),
              });
            }
          }
        });

        wrap.addEventListener('scroll', inSclNumEvt);
        window.addEventListener('resize', inSclNumEvt);
        wrap.dispatchEvent(new Event('scroll'));
      },
      update(el, binding) {
        if (binding.value === undefined) return;
        if (binding.value.to === undefined) return;
        if (binding.oldValue.to === binding.value.to) return;
        if (el.classList.contains('scl__on')) {
          let toNumber = Vue.prototype.$removeComma(binding.value.to);
          let start = 0;
          let speed = 1000;
          let timeDelay = 0;
          let isComma = false;
          let completeFn = null;
          const isNotNumber = Number.isNaN(parseInt(toNumber, 10));
          if (!isNotNumber) toNumber = parseInt(toNumber, 10);
          if (binding.value.start !== undefined) start = binding.value.start;
          if (binding.value.speed !== undefined) speed = binding.value.speed;
          if (binding.value.delay !== undefined) timeDelay = binding.value.delay;
          if (binding.value.comma !== undefined) isComma = binding.value.comma;
          if (typeof binding.value.complete === 'function') completeFn = binding.value.complete;

          if (isNotNumber) {
            // 숫자 아닐때
            el.innerText = toNumber;
          } else {
            const animeObj = {
              val: start,
            };
            Vue.prototype.$anime({
              targets: animeObj,
              val: toNumber,
              round: 1,
              duration: speed,
              delay: timeDelay,
              easing: 'linear',
              update: (() => {
                if (isComma) {
                  el.innerHTML = Vue.prototype.$addComma(animeObj.val);
                } else {
                  el.innerHTML = animeObj.val;
                }
              }),
              complete: (() => {
                if (completeFn !== null)completeFn();
              }),
            });
          }
        }
      },
    });

    Vue.directive('focus', {
      inserted(el, binding, vnode) {
        const { componentInstance } = vnode;
        if (componentInstance && componentInstance.focus) {
          componentInstance.focus();
        }
      },
    });

    Vue.directive('scroll', {
      inserted(el, binding) {
        let wrap = el.closest('.scl__body');
        if (wrap === null)wrap = window;
        const f = ((evt) => {
          if (binding.value(evt, el)) {
            wrap.removeEventListener('scroll', f);
          }
        });
        wrap.addEventListener('scroll', f);
      },
    });

    Vue.directive('tooltip', {
      inserted(el, binding) {
        // console.log(el, binding, vnode, oldVnode);
        const { value } = binding;
        const clickEvent = (() => {
          Vue.prototype.$modal({
            component: () => import('@/' + value),
            // modalProps: {
            //   bgClick: true,
            // },
            returnFocus: el,
          });
        });
        el.addEventListener('click', clickEvent);
      },
    });
  },
};
