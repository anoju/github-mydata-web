<template>
  <div class="coach_animation_Wrap">
    <div class="sec01 active">
      <p class="imgbg"><i class="bg"></i></p>
      <i class="item1"></i>
      <i class="arrow"></i>
      <i class="item2"></i>
      <p class="text">오늘 확인하면<br />좋은 정보들을 모아봤어요!</p>
    </div>
    <div class="sec02 ">
      <p class="imgbg"><i class="bg"></i></p>
      <div class="box box1">
        <i class="item type1"></i>
        <i class="arrow"></i>
        <p class="text">카드 결제일부터</p>
      </div>
      <div class="box box2">
        <i class="item type2"></i>
        <i class="arrow"></i>
        <p class="text">내 자산 정보와</p>
      </div>
      <div class="box box3">
        <i class="item type3"></i>
        <i class="arrow"></i>
        <p class="text">투자정보까지 <br />오늘 확인해 봐요!!</p>
      </div>
    </div>

    <div class="sec03 ">
      <p class="imgbg"><i class="bg"></i></p>
      <i class="item1"></i>
      <i class="item2"></i>
      <i class="arrow"></i>
      <p class="text">어렵게만 느껴지던 투자, <br />이제 재미있게 배워요!</p>
    </div>

    <div class="sec04 ">
      <p class="imgbg"><i class="bg"></i></p>
      <i class="item1"></i>
      <i class="item2"></i>
      <i class="item3"><span></span></i>
      <p class="text">일상에서 힌트를 얻어<br />자산을 쑥쑥~ 불려봐요!</p>
    </div>

    <div class="sec05 ">
      <p class="imgbg"><i class="bg"></i></p>
      <i class="item1"></i>
      <i class="item2"></i>
      <i class="arrow"></i>
      <p class="text">나의 금융정보를 <br />한눈에 확인해요!</p>
    </div>

    <div class="sec06 ">
      <p class="imgbg"><i class="bg"></i></p>
      <i class="item1"></i>
      <i class="arrow"></i>
      <p class="text">여기저기 흩어져 있던 <br />내 통장 입출금 내역을 한 곳에서!</p>
    </div>

    <div class="sec07 ">
      <p class="imgbg"><i class="bg"></i></p>
      <i class="item1"></i>
      <i class="item2"><span></span></i>
      <p class="text">좌우로 슬라이드하여 <br />자산관리를 해보세요!</p>

      <i class="arrow"></i>
      <p class="text2">어디서든 확인 가능한 <br />나의 자산정보!</p>

      <i class="arrow2"></i>
      <p class="text3">여기를 누르거나 <br />위로 슬라이드 하면</p>

      <div class="bg2"></div>

      <i class="item3"></i>
      <i class="arrow3"></i>
      <p class="text4">나의 총자산 정보를 <br />바로 확인할 수 있어요!</p>
    </div>

    <div class="sec08">
      <div class="top">
        <p class="subTit">쉽고 간편하게 관리하는</p>
        <p class="tit">스마트한 금융 생활 솔루션</p>
      </div>
      <div class="cont">
        <p class="tit2">오늘</p>
        <p class="text">시작해보세요!</p>
        <p class="img"><img src="~@/assets/images/UT/15/img_ani8.png" alt="" /></p>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          v-if="isStart"
          yellow
          to="/UT/02/UT02A005"
        >
          시작하기
        </kb-button>
        <kb-button
          v-else
          yellow
          to="/TO/00"
        >
          닫기
        </kb-button>
      </kb-button-wrap>
    </div>

    <kb-button a-tag class="btn_skip" @click="btnSkip">건너띄기</kb-button>
  </div>
</template>
<script>
export default {
  name: 'UT15H001',
  data() {
    return {
      skip: false,
      prevRoute: null,
      isStart: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  mounted() {
    this.section01();
    if (this.prevRoute.path === '/UT/02/UT02A004') this.isStart = true;
    console.log(this.prevRoute.path, this.isStart);
  },
  methods: {
    btnSkip() {
      this.skip = true;
      document.querySelector('.coach_animation_Wrap .sec08').classList.add('active');
    },
    section01() {
      const $this = this;
      const ani = $this.$anime.timeline({
        easing: 'easeOutExpo',
      });
      ani.add({
        targets: '.coach_animation_Wrap .imgbg .bg',
        opacity: [0, 1],
        delay: 600,
        duration: 700,
      })
        .add({
          targets: '.coach_animation_Wrap .sec01 .item1',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 800,
        })
        .add({
          targets: '.coach_animation_Wrap .sec01 .item2',
          scale: [0, 1],
          opacity: [0, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 500,
        })
        .add({
          targets: '.coach_animation_Wrap .sec01 .arrow',
          translateY: ['-10vw', '0'],
          opacity: [0, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec01 .text',
          translateY: ['-5vw', '0'],
          opacity: [0, 1],
          duration: 800,
          complete() {
            setTimeout(() => {
              if (!$this.skip) {
                document.querySelector('.coach_animation_Wrap .sec01').classList.add('end');
                document.querySelector('.coach_animation_Wrap .sec02').classList.add('active');
                $this.section02();
              }
            }, 1500);
          },
        });
    },

    section02() {
      const $this = this;
      const ani = $this.$anime.timeline({
        easing: 'easeOutExpo',
      });
      ani.add({
        targets: '.coach_animation_Wrap .sec02 .box1 .item',
        opacity: [0, 1],
        delay: 1000,
        duration: 700,
        complete() {
          document.querySelector('.coach_animation_Wrap .sec02 .box1').classList.add('motion');
        },
      })
        .add({
          targets: '.coach_animation_Wrap .sec02 .box1',
          translateX: [0, '-100%'],
          duration: 800,
        }, '+=2500')
        .add({
          targets: '.coach_animation_Wrap .sec02 .box2',
          translateX: ['100%', 0],
          duration: 800,
          complete() {
            document.querySelector('.coach_animation_Wrap .sec02 .box2').classList.add('motion');
          },
        }, '-=800')
        .add({
          targets: '.coach_animation_Wrap .sec02 .box2',
          translateX: [0, '-100%'],
          duration: 800,
        }, '+=2500')
        .add({
          targets: '.coach_animation_Wrap .sec02 .box3',
          translateX: ['100%', 0],
          duration: 800,
          complete() {
            document.querySelector('.coach_animation_Wrap .sec02 .box3').classList.add('motion');

            setTimeout(() => {
              if (!$this.skip) {
                document.querySelector('.coach_animation_Wrap .sec02').classList.add('end');
                document.querySelector('.coach_animation_Wrap .sec03').classList.add('active');
                $this.section03();
              }
            }, 2500);
          },
        }, '-=800');
    },

    section03() {
      const $this = this;
      const ani = $this.$anime.timeline({
        easing: 'easeOutExpo',
      });
      ani.add({
        targets: '.coach_animation_Wrap .sec03 .item1',
        scale: [0, 1],
        opacity: [0, 1],
        delay: 1000,
        duration: 800,
      })
        .add({
          targets: '.coach_animation_Wrap .sec03 .item2',
          scale: [0, 1],
          opacity: [0, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 500,
        })
        .add({
          targets: '.coach_animation_Wrap .sec03 .arrow',
          translateY: ['-10vw', '0'],
          opacity: [0, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec03 .text',
          translateY: ['-5vw', '0'],
          opacity: [0, 1],
          duration: 800,
          complete() {
            setTimeout(() => {
              if (!$this.skip) {
                document.querySelector('.coach_animation_Wrap .sec03').classList.add('end');
                document.querySelector('.coach_animation_Wrap .sec04').classList.add('active');
                $this.section04();
              }
            }, 1500);
          },
        });
    },

    section04() {
      const $this = this;
      const ani = $this.$anime.timeline({
        easing: 'easeOutExpo',
      });
      ani.add({
        targets: '.coach_animation_Wrap .sec04 .imgbg',
        delay: 500,
        duration: 800,
        easing: 'easeInOutQuad',
        backgroundPositionY: [0, '-160.2vw'],
      })
        .add({
          targets: '.coach_animation_Wrap .sec04 .item1',
          opacity: [0, 1],
          duration: 600,
          complete() {
            document.querySelector('.coach_animation_Wrap .sec04 .imgbg').classList.add('bg2');
          },
        })
        .add({
          targets: '.coach_animation_Wrap .sec04 .item2',
          opacity: [0, 1],
          duration: 600,
        }, '-=300')
        .add({
          targets: '.coach_animation_Wrap .sec04 .item3',
          opacity: [0, 1],
          duration: 600,
        }, '-=300')
        .add({
          targets: '.coach_animation_Wrap .sec04 .text',
          translateY: ['-5vw', '0'],
          opacity: [0, 1],
          duration: 800,
          complete() {
            setTimeout(() => {
              if (!$this.skip) {
                document.querySelector('.coach_animation_Wrap .sec04').classList.add('end');
                document.querySelector('.coach_animation_Wrap .sec05').classList.add('active');
                $this.section05();
              }
            }, 4000);
          },
        });
    },

    section05() {
      const $this = this;
      const ani = $this.$anime.timeline({
        easing: 'easeOutExpo',
      });
      ani.add({
        targets: '.coach_animation_Wrap .sec05 .item1',
        scale: [0, 1],
        opacity: [0, 1],
        delay: 1000,
        duration: 800,
      })
        .add({
          targets: '.coach_animation_Wrap .sec05 .item2',
          scale: [0, 1],
          opacity: [0, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 500,
        })
        .add({
          targets: '.coach_animation_Wrap .sec05 .arrow',
          translateY: ['-10vw', '0'],
          opacity: [0, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec05 .text',
          translateY: ['-5vw', '0'],
          opacity: [0, 1],
          duration: 800,
          complete() {
            setTimeout(() => {
              if (!$this.skip) {
                document.querySelector('.coach_animation_Wrap .sec05').classList.add('end');
                document.querySelector('.coach_animation_Wrap .sec06').classList.add('active');
                $this.section06();
              }
            }, 1500);
          },
        });
    },

    section06() {
      const $this = this;
      const ani = $this.$anime.timeline({
        easing: 'easeOutExpo',
      });
      ani.add({
        targets: '.coach_animation_Wrap .sec06 .imgbg',
        delay: 500,
        duration: 800,
        easing: 'easeInOutQuad',
        backgroundPositionY: [0, '-121.4vw'],
      })
        .add({
          targets: '.coach_animation_Wrap .sec06 .item1',
          opacity: [0, 1],
          delay: 200,
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec06 .arrow',
          translateY: ['-10vw', '0'],
          opacity: [0, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec06 .text',
          translateY: ['-5vw', '0'],
          opacity: [0, 1],
          duration: 800,
          complete() {
            setTimeout(() => {
              if (!$this.skip) {
                document.querySelector('.coach_animation_Wrap .sec06').classList.add('end');
                document.querySelector('.coach_animation_Wrap .sec07').classList.add('active');
                $this.section07();
              }
            }, 2000);
          },
        });
    },

    section07() {
      const $this = this;
      const ani = $this.$anime.timeline({
        easing: 'easeOutExpo',
      });

      ani.add({
        targets: '.coach_animation_Wrap .sec07 .item1',
        delay: 1000,
        duration: 800,
        opacity: [0, 1],
        translateY: ['100%', 0],
        easing: 'easeInOutQuad',
      })
        .add({
          targets: '.coach_animation_Wrap .sec07 .item2',
          opacity: [0, 1],
          delay: 200,
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec07 .text',
          translateY: ['-5vw', '0'],
          opacity: [0, 1],
          duration: 800,
        })
        .add({
          targets: '.coach_animation_Wrap .sec07 .arrow',
          translateY: ['10vw', '0'],
          opacity: [0, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 600,
          begin() {
            $this.$anime({
              targets: '.coach_animation_Wrap .sec07 .text,.coach_animation_Wrap .sec07 .item2',
              opacity: [1, 0],
              duration: 800,
            });
          },
        }, '+=2000')
        .add({
          targets: '.coach_animation_Wrap .sec07 .text2',
          translateY: ['5vw', '0'],
          opacity: [0, 1],
          duration: 800,
        })
        .add({
          targets: '.coach_animation_Wrap .sec07 .arrow2',
          opacity: [0, 1],
          scale: [1.5, 1],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 800,
          begin() {
            $this.$anime({
              targets: '.coach_animation_Wrap .sec07 .arrow,.coach_animation_Wrap .sec07 .text2',
              opacity: [1, 0],
              duration: 800,
            });
          },
        }, '+=2000')
        .add({
          targets: '.coach_animation_Wrap .sec07 .text3',
          translateY: ['5vw', '0'],
          opacity: [0, 1],
          duration: 800,
        })
        .add({
          targets: '.coach_animation_Wrap .sec07 .item1',
          top: 0,
          bottom: 'auto',
          height: '100vh',
          begin() {
            $this.$anime({
              targets: '.coach_animation_Wrap .sec07 .arrow2,.coach_animation_Wrap .sec07 .text3',
              opacity: [1, 0],
              duration: 800,
            });
          },
        }, '+=1000')
        .add({
          targets: '.coach_animation_Wrap .sec07 .bg2',
          opacity: [0, 1],
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec07 .item3',
          opacity: [0, 1],
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec07 .arrow3',
          opacity: [0, 1],
          translateY: ['10vw', '0'],
          easing: 'cubicBezier(.42,.97,.52,1.4)',
          duration: 600,
        })
        .add({
          targets: '.coach_animation_Wrap .sec07 .text4',
          translateY: ['5vw', '0'],
          opacity: [0, 1],
          duration: 800,
          complete() {
            setTimeout(() => {
              document.querySelector('.coach_animation_Wrap .sec07').classList.add('end');
              document.querySelector('.coach_animation_Wrap .sec08').classList.add('active');
            }, 1500);
          },
        });
    },
  },
};
</script>
