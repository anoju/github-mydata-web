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
      <p class="text">어렵게만 느껴지던 투자, <br />어제 재미있게 배워요!</p>
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
          yellow
          to="/UT/02/UT02A005"
        >
          등록
        </kb-button>
      </kb-button-wrap>
    </div>

    <a href="#" class="btn_skip" @click="btnSkip">건너띄기</a>
  </div>
</template>
<script>
export default {
  name: 'UT15H001',
  data() {
    return {
      skip: false,
    };
  },
  mounted() {
    this.section01();
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
<style scoped lang="scss">
  .coach_animation_Wrap { overflow:hidden; position:absolute; top:0; left:0; bottom:0; width:100%;
    .btn_skip { position:fixed; bottom:5.56vw; right:5.56vw; width:28.33vw; height:12.22vw; ;font-size:0; background:url('~@/assets/images/UT/15/btn_skip.png') no-repeat center center / 100%; animation: fadeIn .6s ease 1.5s both;}
    & > div {  visibility: hidden; position:absolute; top:0; left:0; bottom:0; width:100%; transition:all .3s ease; opacity:0;
      // overflow:hidden;
    }
    & > div.active { visibility: visible; opacity:1;}
    & > div.active.end { visibility: hidden; opacity:0;}
    .imgbg { position:absolute; top:0; left:0; width:100%; height:100%; background:url('~@/assets/images/UT/15/bg_ani.png') no-repeat 0 0 / 500%}
    .imgbg .bg { position:absolute; top:0; left:0; width:100%; bottom:0; background:rgba(0,0,0,0.7); opacity:0;}
    .text { font-size:5vw; color:#fff; text-align:center;}

    .sec01.active { animation:none;}
    .sec01 {
      .item1 { display:block; position:absolute; top:15.56vw; width:100%; height:16.11vw; background:url('~@/assets/images/UT/15/img_ani1_1.png') no-repeat 0 0 / 100%; opacity:0;}
      .item2 { display:block; position:absolute; top:8.33vw; left:50%; width:30.56vw; height:30.56vw; margin-left:-15.28vw; background:url('~@/assets/images/UT/15/img_ani1_2.png') no-repeat center center / 100%; opacity:0;}
      .arrow { display:block; position:absolute; top:35.28vw; left:50%; width:3.89vw; height:8.33vw; margin-left:-1.94vw; background:url('~@/assets/images/UT/15/img_ani1_3.png') no-repeat center center / 100%; opacity:0;}
      .text { display:block; position:absolute; top:45.56vw; left:0; width:100%; opacity:0;}
    }

    .sec02 {
      .box { display:block; position:absolute; top:31.94vw; width:100%; transform: translateX(100%);}
      .box1{ transform: translateX(0%);}
      .box1 .item { opacity:0;}
      .item { display:block; width:88.89vw; height:72.22vw; margin:0 auto;}
      .item.type1 { background:url('~@/assets/images/UT/15/img_ani2_1.png') no-repeat 0 0 / 100%}
      .item.type2 { background:url('~@/assets/images/UT/15/img_ani2_2.png') no-repeat 0 0 / 100%}
      .item.type3 { background:url('~@/assets/images/UT/15/img_ani2_3.png') no-repeat 0 0 / 100%}
      .arrow { display:block; width:2.78vw; height:10vw; margin:0 auto; background:url('~@/assets/images/UT/15/img_ani2_4.png') no-repeat 0 0 / 100%; opacity:0; transform: translateY(-10vw);}
      .text { display:block; font-size:6.11vw; text-align:center; color:#fff; opacity:0; transform: translateY(-5vw);}
      .box.motion .arrow { opacity:1; transition: .6s cubic-bezier(.42,.97,.52,1.4); transform: translateY(0);}
      .box.motion .text { opacity:1; transition: .5s cubic-bezier(.42,.97,.52,1.4) .6s; transform: translateY(0);}
    }

    .sec03 {
      .imgbg { background:url('~@/assets/images/UT/15/bg_ani.png') no-repeat 50% 0 / 500%;}
      .item1 { display:block; position:absolute; top:15.56vw; width:100%; height:16.11vw; background:url('~@/assets/images/UT/15/img_ani3_1.png') no-repeat 0 0 / 100%; opacity:0;}
      .item2 { display:block; position:absolute; top:8.33vw; right:12.5vw; z-index:1; width:30.56vw; height:30.56vw; background:url('~@/assets/images/UT/15/img_ani3_2.png') no-repeat center center / 100%; opacity:0;}
      .arrow { display:block; position:absolute; top:32.5vw; right:15.83vw; width:10.28vw; height:8.61vw; background:url('~@/assets/images/UT/15/img_ani3_3.png') no-repeat center center / 100%; opacity:0;}
      .text { display:block; position:absolute; top:46.39vw; right:5.56vw; width:auto; opacity:0;}
    }

    .sec04 {
      .imgbg { background:url('~@/assets/images/UT/15/bg_ani.png') no-repeat 50% 0 / 500%;}
      .imgbg:before { content:''; display:none; position:absolute; top:0; left:0; width:100%; height:100%; background:url('~@/assets/images/UT/15/bg_ani.png') no-repeat 75% -160.2vw / 500%}
      .imgbg.bg2:before { display:block;}
      .item1 { display:block; position:absolute; top:37.22vw; left:5.56vw; width:58.33vw; height:7.22vw; background:url('~@/assets/images/UT/15/img_ani4_1.png') no-repeat 0 0 / 100%; opacity:0;}
      .item2 { display:block; position:absolute; top:47.78vw; left:4.56vw; width:116.67vw; height:33.33vw; background:url('~@/assets/images/UT/15/img_ani4_2.png') no-repeat 0 0 / 100%; opacity:0;}
      .item3 { display:block; position:absolute; top:90.56vw; left:50%; width:42.22vw; height:13.33vw; background:url('~@/assets/images/UT/15/img_ani4_3_1.png') no-repeat 0 0 / 100%; transform: translateX(-50%); opacity:0;}
      .item3 span { display:block; position:absolute; top:0; left:50%; width:8.89vw; height:13.33vw; margin-left:-4.445vw; background:url('~@/assets/images/UT/15/img_ani4_3_2.png') no-repeat 0 0 / auto 100%;}
      .text { display:block; position:absolute; top:109.44vw; left:0; width:100%; opacity:0;}

      &.active .item2 { animation:leftRight2 5s ease 3s infinite;}
      &.active .item3 span { animation:leftRight 5s ease 3s infinite;}
    }

    .sec05 {
      .imgbg { background:url('~@/assets/images/UT/15/bg_ani.png') no-repeat 25% 0 / 500%;}
      .item1 { display:block; position:absolute; top:15.56vw; width:100%; height:16.11vw; background:url('~@/assets/images/UT/15/img_ani5_1.png') no-repeat 0 0 / 100%; opacity:0;}
      .item2 { display:block; position:absolute; top:8.33vw; left:12.5vw; z-index:1; width:30.56vw; height:30.56vw; background:url('~@/assets/images/UT/15/img_ani5_2.png') no-repeat center center / 100%; opacity:0;}
      .arrow { display:block; position:absolute; top:32.5vw; left:13.89vw; width:10.28vw; height:8.61vw; background:url('~@/assets/images/UT/15/img_ani5_3.png') no-repeat center center / 100%; opacity:0;}
      .text { display:block; position:absolute; top:46.39vw; left:8.33vw; width:auto; opacity:0;}
    }

    .sec06 {
      .imgbg { background:url('~@/assets/images/UT/15/bg_ani.png') no-repeat 25% 0 / 500%;}
      .item1 { display:block; position:absolute; top:17.22vw; left:2.78vw; width:94.44vw; height:91.11vw; background:url('~@/assets/images/UT/15/img_ani6_1.png') no-repeat 0 0 / 100%; opacity:0;}
      .arrow { display:block; position:absolute; top:105.28vw; left:50%; width:2.78vw; height:10vw; margin-left:-1.39vw; background:url('~@/assets/images/UT/15/img_ani6_2.png') no-repeat 0 0 / 100%; opacity:0;}
      .text { display:block; position:absolute; top:120vw; left:0; width:100%; opacity:0;}
    }

    .sec07 {
      .imgbg { background:url('~@/assets/images/UT/15/bg_ani.png') no-repeat 100% 0 / 500%;}
      .item1 { display:block; position:absolute; bottom:0vw; left:0vw; width:100vw; height:50.78vw; background:url('~@/assets/images/UT/15/img_ani7_1.png') no-repeat 0 0 / 100%;}
      .item2 { display:block; position:absolute; top:72.22vw; left:50%; width:42.22vw; height:13.33vw; background:url('~@/assets/images/UT/15/img_ani4_3_1.png') no-repeat 0 0 / 100%; transform: translateX(-50%); opacity:0;}
      .item2 span { display:block; position:absolute; top:0; left:50%; width:8.89vw; height:13.33vw; margin-left:-4.445vw; background:url('~@/assets/images/UT/15/img_ani4_3_2.png') no-repeat 0 0 / auto 100%;}
      .text { display:block; position:absolute; top:91.11vw; left:0; width:100%; opacity:0;}

      .arrow { display:block; position:absolute; bottom:43.78vw; left:50%; width:2.78vw; height:10vw; margin-left:-1.39vw; background:url('~@/assets/images/UT/15/img_ani7_2.png') no-repeat 0 0 / 100%; opacity:0;}
      .text2 { display:block; position:absolute; bottom:60vw; left:0; width:100%; font-size:5vw; color:#fff; text-align:center; opacity:0;}

      .arrow2 { display:block; position:absolute; bottom:33.78vw; left:50%; width:8.89vw; height:13.33vw; margin-left:-4.445vw; background:url('~@/assets/images/UT/15/img_ani4_3_2.png') no-repeat 0 0 / auto 100%; opacity:0;}
      .text3 { display:block; position:absolute; bottom:53vw; left:0; width:100%; font-size:5vw; color:#fff; text-align:center; opacity:0;}

      .bg2 { display:block; position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.7); opacity:0;}
      .item3 { display:block; position:absolute; top:119.17vw; left:0%; width:100%; height:27.78vw; background:url('~@/assets/images/UT/15/img_ani7_3.png') no-repeat 0 0 / 100%; opacity:0;}
      .arrow3 { display:block; position:absolute; top:110vw; left:50%; width:2.78vw; height:10vw; margin-left:-1.39vw; background:url('~@/assets/images/UT/15/img_ani7_2.png') no-repeat 0 0 / 100%; opacity:0;}
      .text4 { display:block; position:absolute; top:89.44vw; left:0; width:100%; font-size:5vw; color:#fff; text-align:center; opacity:0;}

      &.active .item2 span { animation:leftRight 4s ease 3s infinite;}

    }

    .sec08 { visibility: hidden; display:flex; position:absolute; top:0; left:0; width:100%; height:100%; overflow-y:auto; background:#fff; flex-flow:column; text-align:center; opacity:0; transition:all .3s ease;
      .top { padding-top:104px; opacity:0; transition: .3s ease .3s;}
      .top .subTit { font-size:16px; font-size:16px; color:#666;}
      .top .tit { margin-top:2px; font-size:18px; color:#222; font-weight:bold;}
      .cont { flex:1 1 auto; display:flex; flex-flow: column; justify-content: center; padding:56px 0 110px; opacity:0; transition: .3s ease .5s;}
      .cont .tit2 { font-size:32px; font-weight:bold;}
      .cont .text { margin-top:2px; font-size:18px; color:#222;}
      .cont .img { margin-top:20px;}
      .cont .img img { display:block; width:200px; height:205px; margin:0 auto;}

      &.active { visibility: visible; opacity:1; display:flex;}
      &.active .top,
      &.active .cont { opacity:1;}
      &.active + .btn_skip { display:none;}
    }
  }

  @keyframes leftRight {
    0% { transform: translateX(0);}
    20% { transform: translateX(-100%);}
    40% { transform: translateX(0);}
    60% { transform: translateX(100%);}
    80%, 100% { transform: translateX(0);}
  }

  @keyframes leftRight2 {
    0% { transform: translateX(0);}
    20% { transform: translateX(-22%);}
    40% { transform: translateX(-22%);}
    60% { transform: translateX(0);}
    80%, 100% { transform: translateX(0);}
  }

  html.ios{
    .coach_animation_Wrap{
      & > div {
        top:constant(safe-area-inset-top);
        top:env(safe-area-inset-top);
      }
      .imgbg .bg,
      .sec07 .bg2{
        top:calc(-1 * constant(safe-area-inset-top));
        top:calc(-1 * env(safe-area-inset-top));
      }
      .sec07 .item1{
        background-position:0 constant(safe-area-inset-top);
        background-position:0 env(safe-area-inset-top);
      }
      .sec07 .arrow{
        bottom:calc(43.78vw - constant(safe-area-inset-top));
        bottom:calc(43.78vw - env(safe-area-inset-top));
      }
      .sec07 .text2{
        bottom:calc(60vw - constant(safe-area-inset-top));
        bottom:calc(60vw - env(safe-area-inset-top));
      }
      .sec07 .arrow2{
        bottom:calc(33.78vw - constant(safe-area-inset-top));
        bottom:calc(33.78vw - env(safe-area-inset-top));
      }
      .sec07 .text2{
        bottom:calc(60vw - constant(safe-area-inset-top));
        bottom:calc(60vw - env(safe-area-inset-top));
      }
      .sec07 .text3{
        bottom:calc(53vw - constant(safe-area-inset-top));
        bottom:calc(53vw - env(safe-area-inset-top));
      }
      .sec07 .item3{
        top:calc(119.17vw + constant(safe-area-inset-top));
        top:calc(119.17vw + env(safe-area-inset-top));
      }
      .sec07 .arrow3{
        top:calc(110vw + constant(safe-area-inset-top));
        top:calc(110vw + env(safe-area-inset-top));
      }
      .sec07 .text4{
        top:calc(89.44vw + constant(safe-area-inset-top));
        top:calc(89.44vw + env(safe-area-inset-top));
      }
    }
  }
</style>
