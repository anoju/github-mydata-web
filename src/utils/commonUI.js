export default {
  install(Vue) {
    if (this.installed) return;

    this.installed = true;
    Vue.prototype.$getOnlyNumber = this.getOnlyNumber;
    Vue.prototype.$getStyle = this.getStyle;
    Vue.prototype.$getOffset = this.getOffset;
    Vue.prototype.$getComponentName = this.getComponentName;
    Vue.prototype.$getSiblings = this.getSiblings;
    Vue.prototype.$getParents = this.getParents;
    Vue.prototype.$fadeOut = this.fadeOut;
    Vue.prototype.$fadeIn = this.fadeIn;
    Vue.prototype.$slideUp = this.slideUp;
    Vue.prototype.$slideDown = this.slideDown;
    Vue.prototype.$scrollTo = this.scrollTo;
    Vue.prototype.$addComma = this.addComma;
    Vue.prototype.$removeComma = this.removeComma;
    Vue.prototype.$onlyNumber = this.onlyNumber;
    Vue.prototype.$dateString = this.dateString;
    Vue.prototype.$dateFormat = this.dateFormat;
    Vue.prototype.$weekString = this.weekString;
  },
  getOnlyNumber(num) {
    return num.toString().replace(/[^0-9]/g, '');
  },
  getStyle(element, attr) {
    // const rtnVal = parseInt(window.getComputedStyle(element, null).getPropertyValue(attr), 10);
    // return rtnVal;
    let strValue = '';
    if (document.defaultView && document.defaultView.getComputedStyle) {
      strValue = document.defaultView.getComputedStyle(element, '').getPropertyValue(attr);
    } else if (element.currentStyle) {
      attr = attr.replace(/\-(\w)/g, (strMatch, p1) => p1.toUpperCase()); // eslint-disable-line no-useless-escape
      strValue = element.currentStyle[attr];
    }
    return strValue;
  },
  getOffset(element) {
    let $elX = 0;
    let $elY = 0;
    while (element && !Number.isNaN(element.offsetLeft) && !Number.isNaN(element.offsetTop)) {
      // console.log(el.style.position)
      $elX += element.offsetLeft;
      $elY += element.offsetTop;
      element = element.offsetParent;
    }
    return { top: $elY, left: $elX };
  },
  async getComponentName(component) {
    return (component instanceof Function
      ? (await component()).default
      : component
    ).name;
  },
  getSiblings(e) {
    // for collecting siblings
    const siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
      return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  },
  getParents(elem, selector) {
    // Setup parents array
    const parents = [];

    // Get matching parent elements
    while (elem && elem !== document) {
      // If using a selector, add matching parents to array
      // Otherwise, add all parents
      if (selector) {
        if (elem.matches(selector)) {
          parents.push(elem);
        }
      } else {
        parents.push(elem);
      }

      // Jump to the next parent node
      elem = elem.parentNode;
    }

    return parents;
  },
  fadeOut(elem, speed, fn) {
    if (this.$getStyle(elem, 'display') === 'none' || elem.classList.contains('fadeAction')) return;
    elem.classList.add('fadeAction');
    if (speed === undefined)speed = 500;
    // elem.style.opacity = 1;

    this.$anime({
      targets: elem,
      opacity: 0,
      duration: speed,
      easing: 'easeInOutQuad',
      complete: (() => {
        elem.removeAttribute('style');
        elem.classList.remove('fadeAction');
        elem.style.display = 'none';
        if (fn !== undefined && typeof fn === 'function') {
          fn();
        }
      }),
    });
  },
  fadeIn(elem, speed, fn) {
    if (this.$getStyle(elem, 'display') !== 'none' || elem.classList.contains('fadeAction')) return;
    elem.classList.add('fadeAction');
    if (speed === undefined)speed = 500;
    elem.removeAttribute('style');
    let isHide = false;
    if (this.$getStyle(elem, 'display') === 'none')isHide = true;
    if (isHide) elem.style.display = 'block';
    elem.style.opacity = 0;

    this.$anime({
      targets: elem,
      opacity: 1,
      duration: speed,
      easing: 'easeInOutQuad',
      complete: (() => {
        elem.removeAttribute('style');
        elem.classList.remove('fadeAction');
        if (isHide)elem.style.display = 'block';
        if (fn !== undefined && typeof fn === 'function') {
          fn();
        }
      }),
    });
  },
  slideUp(elem, speed, fn) {
    if (this.$getStyle(elem, 'display') === 'none' || elem.classList.contains('slideAction')) return;
    elem.classList.add('slideAction');
    if (speed === undefined)speed = 500;
    elem.style.overflow = 'hidden';
    this.$anime({
      targets: elem,
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      duration: speed,
      easing: 'easeInOutQuad',
      complete: (() => {
        elem.removeAttribute('style');
        elem.classList.remove('slideAction');
        elem.style.display = 'none';
        if (fn !== undefined && typeof fn === 'function') {
          fn();
        }
      }),
    });
  },
  slideDown(elem, speed, fn) {
    if (this.$getStyle(elem, 'display') !== 'none' || elem.classList.contains('slideAction')) return;
    elem.classList.add('slideAction');
    if (speed === undefined)speed = 500;
    elem.removeAttribute('style');
    const elHeight = elem.offsetHeight;
    const elMgT = parseInt(this.$getStyle(elem, 'margin-top'), 10);
    const elMgB = parseInt(this.$getStyle(elem, 'margin-bottom'), 10);
    const elPdT = parseInt(this.$getStyle(elem, 'padding-top'), 10);
    const elPdB = parseInt(this.$getStyle(elem, 'padding-bottom'), 10);
    let isHide = false;
    if (this.$getStyle(elem, 'display') === 'none')isHide = true;
    elem.style.overflow = 'hidden';
    elem.style.height = '0px';
    elem.style.marginTop = '0px';
    elem.style.marginBottom = '0px';
    elem.style.paddingTop = '0px';
    elem.style.paddingBottom = '0px';

    this.$anime({
      targets: elem,
      height: elHeight,
      marginTop: elMgT,
      marginBottom: elMgB,
      paddingTop: elPdT,
      paddingBottom: elPdB,
      duration: speed,
      easing: 'easeInOutQuad',
      complete: (() => {
        elem.removeAttribute('style');
        elem.classList.remove('slideAction');
        if (isHide)elem.style.display = 'block';
        if (fn !== undefined && typeof fn === 'function') {
          fn();
        }
      }),
    });
  },
  scrollTo(el, val, speed, fn) {
    if (speed === undefined)speed = 500;
    let $el = window.document.scrollingElement || window.document.body || window.document.documentElement;
    if (el !== undefined && el !== '') {
      if (typeof el === 'string') {
        $el = document.querySelector(el);
      } else {
        $el = el;
      }
    }
    if ($el === null) return;
    let leftVal = $el.scrollLeft;
    let topVal = $el.scrollTop;
    if (val !== undefined && val !== '') {
      if (val.left !== undefined)leftVal = val.left;
      if (val.top !== undefined)topVal = val.top;
    }
    this.$anime({
      targets: $el,
      scrollLeft: leftVal,
      scrollTop: topVal,
      duration: speed,
      easing: 'easeInOutQuad',
      complete: (() => {
        if (fn !== undefined && typeof fn === 'function') {
          fn();
        }
      }),
    });
  },
  addComma(val) {
    if (val === null || val === undefined) return '';
    const parts = val.toString().split('.');
    return (
      parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? `.${parts[1]}` : '')
    );
  },
  removeComma(val) {
    if (val === null || val === undefined) return '';
    return val.toString().replace(/,/gi, '');
  },
  onlyNumber(val, isToFixed = false) {
    let rtnVal = val.toString().replace(/[^-.0-9]/g, '');
    let toFixedLength = 0;
    if (isToFixed) {
      const parts = rtnVal.split('.');
      if (parts.length > 2) {
        toFixedLength = parts[1].length;
        console.log(toFixedLength, parts);
        rtnVal = parts[0] + `.${parts[1]}`;
      }
    }
    rtnVal = parseFloat(rtnVal, 10).toFixed(toFixedLength);
    return rtnVal;
  },
  dateString(start = 0, digit = 16, afterDay = 0) {
    const timeString = (date) => {
      const $year = date.getFullYear();
      let $month = date.getMonth() + 1;
      let $day = date.getDate();
      let $hour = date.getHours();
      let $min = date.getMinutes();
      let $sec = date.getSeconds();
      if (('' + $month).length === 1)$month = '0' + $month;
      if (('' + $day).length === 1)$day = '0' + $day;
      if (('' + $hour).length === 1)$hour = '0' + $hour;
      if (('' + $min).length === 1)$min = '0' + $min;
      if (('' + $sec).length === 1)$sec = '0' + $sec;
      return ('' + $year + $month + $day + $hour + $min + $sec);
    };
    const todayTimeString = (addDay) => {
      const $today = new Date();
      if (addDay)$today.setDate($today.getDate() + addDay);
      return timeString($today);
    };
    if (afterDay !== 0) {
      return todayTimeString(afterDay).substr(start, digit);
    }
    return todayTimeString().substr(start, digit);
  },
  dateFormat(val, type = 'day', dayMark = '.', timeMark = ':') {
    const $dateAry = [];
    const $timeAry = [];
    if (type === 'day') {
      $dateAry.push(val.substr(0, 4));
      if (val.length > 4)$dateAry.push(val.substr(4, 2));
      if (val.length > 6)$dateAry.push(val.substr(6, 2));

      if (val.length > 8)$timeAry.push(val.substr(8, 2));
      if (val.length > 10)$timeAry.push(val.substr(10, 2));
      if (val.length > 12)$timeAry.push(val.substr(12, 2));
      return $dateAry.join(dayMark) + ' ' + $timeAry.join(timeMark);
    }

    if (type === 'time') {
      $timeAry.push(val.substr(0, 2));
      if (val.length > 2)$timeAry.push(val.substr(2, 2));
      if (val.length > 4)$timeAry.push(val.substr(4, 2));
      return $timeAry.join(timeMark);
    }
    return console.error('$dateFormat type error');
  },
  weekString(d) {
    console.log(d);
    const $today = d ? new Date(d) : new Date();
    const $week = ['일', '월', '화', '수', '목', '금', '토'];
    const $dayLabel = $week[$today.getDay()];
    return $dayLabel;
  },
};
