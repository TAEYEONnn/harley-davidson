window.addEventListener('DOMContentLoaded', function () {
  //==== html document 요소가 모두 로드된 후 실행될 코드 : gsap가 자체적으로 생성하는 요소를 제어하기 위한 코드

  // 1. 커서 효과
  const cursor = $('#cursor');

  $(document).on('mousemove', function (e) {
    gsap.to(cursor, {
      left: e.pageX - cursor.width() * 0.5,
      top: e.pageY - cursor.height() * 0.5,
      ease: 'power4.out',
      duration: 0.9,
    });
  });

  // 2. 헤더 애니메이션 효과
  $('.cursor_effect')
    .mouseenter(function () {
      gsap.to('.dot', 0.5, { scale: 1, background: 'transparent' });
    })
    .mouseleave(function () {
      gsap.to('.dot', 0.5, { scale: 0.15, background: '#f26a2b' });
    });

  $('#header, #menu .menu_header')
    .mouseenter(function () {
      $(this).addClass('on');
    })
    .mouseleave(function () {
      $(this).removeClass('on');
    });

  $('#header .ham').click(function () {
    $('#menu').fadeToggle().toggleClass('on');

    // side image move half left and right
    const sideImgW = $('.star div:nth-child(1)').width();
    // $('.side').css('width', `calc(100% + ${sideImgW}px)`);
  });

  $('#menu .menu_header .ham').click(function () {
    $('#menu').fadeToggle().toggleClass('on');
  });

  // Section 01 Scroll Animation
  let tit = gsap.timeline(); // to, from, fromTo 등의 애니메이션 효과를 생성
  ScrollTrigger.create({
    animation: tit,
    trigger: '.trigger-this-1',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.8, // 마우스 이동후 .8초 정도 지연
  });

  tit
    .add('s1') // s1 이라는 이름을 지어서 첫 번재 효과로 지정
    .to('.main_title_01', { opacity: 0, y: -100, duration: 4 }, 's1')

    .add('s2') // s2 이라는 이름을 지어서 첫 번재 효과로 지정
    .to('.main_title_02', { opacity: 1, y: -50, duration: 4 }, 's2')
    .to('.main_title_02', { opacity: 0, y: -100, duration: 4 })

    .add('s3') // s2 이라는 이름을 지어서 첫 번재 효과로 지정
    .to('.main_title_03', { opacity: 1, y: -50, duration: 4 }, 's3')
    .to('.main_title_03', { opacity: 0, y: -100, duration: 4 })

    .add('s4') // s2 이라는 이름을 지어서 첫 번재 효과로 지정
    .to('.main_title_04', { opacity: 1, y: -50, duration: 4 }, 's4')
    .to('.main_title_04', { opacity: 0, y: -100, duration: 4 })

    .add('s5') // s2 이라는 이름을 지어서 첫 번재 효과로 지정
    .to('.main_title_05', { opacity: 1, y: -50, duration: 4 }, 's5')
    .to('.main_title_05', { opacity: 0, y: -100, duration: 4 })

    .add('s6') // s2 이라는 이름을 지어서 첫 번재 효과로 지정
    .to('.main_title_06', { opacity: 1, y: -50, duration: 4 }, 's6')
    .to('.main_title_06', { opacity: 0, y: -100, duration: 4 });

  gsap.to('.fix-this-1', {
    scrollTrigger: {
      trigger: '.trigger-this-1',
      start: 'top top', // 앞의 값 : trigger에 적용되어 있는 요소의 위치, 뒤의 값 : 화면의 표시 위치
      end: 'bottom bottom', // 앞의 값 : trigger에 적용되어 있는 요소의 위치, 뒤의 값 : 화면의 표시 위치
      scrub: true,
      pin: true, // trigger에 지정된 요소의 크기만큼 화면을 고정
      // markers: true,
    },
  });

  // Section 02 Animation
  gsap.to('#section02 .the', {
    scrollTrigger: {
      trigger: '.trigger-this-the',
      start: 'top top', // 앞의 값 : trigger에 적용되어 있는 요소의 위치, 뒤의 값 : 화면의 표시 위치
      end: '106.2% bottom', // 앞의 값 : trigger에 적용되어 있는 요소의 위치, 뒤의 값 : 화면의 표시 위치
      scrub: true,
      pin: true, // trigger에 지정된 요소의 크기만큼 화면을 고정
      // markers: true,
    },
  });

  // gsap.to('#section02 .the img', {
  //   y: -30,
  //   scrollTrigger: {
  //     trigger: '#section02',
  //     start: 'top top',
  //     end: 'bottom bottom',
  //     scrub: true,
  //     // markers: true,
  //   },
  // });

  gsap.to('.fix-this-2', {
    scrollTrigger: {
      trigger: '.trigger-this-2',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      scrub: true,
      // markers: true,
    },
  });

  let sec02 = gsap.timeline();
  ScrollTrigger.create({
    animation: sec02,
    trigger: '#section02',
    start: '500 top',
    end: 'bottom bottom',
    scrub: 1,
    // markers: true,
  });

  sec02.to('#section02 .left', { x: -1000, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .star03', { x: 1000, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .ultra', { x: -4000, y: 0, rotation: 0 }, 0);

  sec02.to('#section02 .ride', { x: -3000, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .to_live', { x: 3300, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .title02', { x: -2100, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .title02 .subtitle', { x: 4200, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .to_ride', { x: 3800, y: 0, rotation: 0 }, 0);

  sec02.to('#section02 .al_s', { x: -700, y: -1700, rotation: -55 }, 0); // 마지막 파라미터 0이 없으면 순차 실행
  sec02.to('#section02 .al_i', { x: -600, y: -2000, rotation: -50 }, 0);
  sec02.to('#section02 .al_n', { x: -500, y: -2300, rotation: -40 }, 0);
  sec02.to('#section02 .al_c', { x: -400, y: -2500, rotation: -25 }, 0);
  sec02.to('#section02 .al_e', { x: -300, y: -2600, rotation: -5 }, 0);

  sec02.to('#section02 .no_1', { x: 100, y: -2300, rotation: 20 }, 0);
  sec02.to('#section02 .no_9', { x: 300, y: -2250, rotation: 40 }, 0);
  sec02.to('#section02 .no_8', { x: 500, y: -2000, rotation: 55 }, 0);
  sec02.to('#section02 .no_12', { x: 600, y: -1800, rotation: 55 }, 0);

  sec02.to('#section02 .underline', { x: 0, y: 900, opacity: 0 }, 0);

  // section 03 orange box active when added class on
  gsap.to('#section03', {
    scrollTrigger: {
      trigger: '#section03',
      start: '-800 top',
      scrub: true,
      toggleClass: 'on',
      // markers: true,
    },
  });

  // Section 03 Scroll Animation
  gsap.from('.fix-this-3', {
    scrollTrigger: {
      trigger: '.trigger-this-3',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      scrub: 1,
      // markers: true,
    },
  });

  let sec03 = gsap.timeline();
  ScrollTrigger.create({
    animation: sec03,
    trigger: '#section03',
    start: '-3000 top',
    end: 'bottom bottom',
    scrub: 1,

    // markers: true,
  });

  sec03.from('#section03 .r', { x: 500, y: 0, rotation: 0 }, 0);
  // sec03.from('#section02 .the', { x: 1000, y: 0, rotation: 0, duration: 1 }, 0);
  sec03.from('#section03 .middle_text', { x: -2400, y: 0, rotation: 0 }, 0);
  sec03.from(
    '#section03 .title01',
    { x: 2300, y: 0, rotation: 0, duration: 2 },
    0
  );
  sec03.from(
    '#section03 .title02',
    { x: -3300, y: 0, rotation: 0, duration: 2 },
    0
  );
  sec03.from(
    '#section03 .today',
    { x: -2100, y: 0, rotation: 0, duration: 1 },
    0
  );
  sec03.from(
    '#section03 .long_text1',
    { x: 2000, y: 3000, rotation: 0, duration: 1 },
    0
  );
  sec03.from(
    '#section03 .long_text2',
    { x: 4000, y: 100, rotation: 0, duration: 2 },
    0
  );

  // section 04 overlay opacity animation
  gsap.to('.fix-this-4', {
    scrollTrigger: {
      trigger: '.trigger-this-4',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      scrub: true,
      // markers: true,
    },
  });

  gsap.to('.overlay', {
    opacity: 1,
    scrollTrigger: {
      trigger: '#section04',
      start: '2000 top',
      end: 'bottom bottom',
      scrub: true,
      // markers: true,
    },
  });

  // section 04 bottom text image animation
  let sec04 = gsap.timeline();
  ScrollTrigger.create({
    animation: sec04,
    trigger: '#section04',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    // markers: true,
  });

  sec04.to('#section04 .title_w', { x: -5500 }, 0);
  sec04.to('#section04 .title_b', { x: 6000 }, 0);
  sec04.to('#section04 .bg', { scale: 1.2 }, 0);

  sec04.to('#section04 .img01', { y: -4000 }, 0);
  sec04.to('#section04 .img02', { y: -3500 }, 0);
  sec04.to('#section04 .img03', { y: -3800 }, 0);
  sec04.to('#section04 .img04', { y: -3600 }, 0);
  sec04.to('#section04 .img05', { y: -3500 }, 0);
  sec04.to('#section04 .img06', { y: -3400 }, 0);

  const imgs = document.querySelectorAll('#section04 .visual_container > div');

  imgs.forEach((img, idx) => {
    let sc05 = gsap.timeline();

    ScrollTrigger.create({
      animation: sc05,
      trigger: img,
      start: '-500px top',
      end: 'bottom bottom',
      scrub: 1.8,
      // markers: true,
    });
    sc05.fromTo(
      img,
      {
        x: idx % 2 === 0 ? -300 : 300,
        opacity: 0,
        ease: 'linear',
      },
      { x: 0, ease: 'linear', opacity: 1 }
      // '+=10'
      // idx / 2
      // idx * 0.5
    );
  });

  //section 05 page개 길이를 계산
  let sectionCount = this.document.querySelectorAll('.fix-this-5 .page');
  // console.log(sectionCount);
  let sec05_total = 0;

  sectionCount.forEach((section) => {
    sec05_total += section.clientWidth;
  }); // 각각의 page 가로크기를 합산

  // console.log(sec05_total);
  // console.log(innerWidth);

  gsap.to('.fix-this-5', {
    x: -(sec05_total - innerWidth),
    scrollTrigger: {
      trigger: '.trigger-this-5',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      scrub: true,
      // markers: true,
    },
  });

  // page 1 text animatiion
  gsap.to('#section05', {
    scrollTrigger: {
      trigger: '#section05',
      start: '-300 top',
      scrub: true,
      // markers: true,
      toggleClass: 'on',
    },
  });

  // page 2 text animatiion
  gsap.to('#section05 .page02', {
    scrollTrigger: {
      trigger: '#section05',
      start: '300 top',
      scrub: true,
      // markers: true,
      onEnter: () => {
        $('#section05 .page02').addClass('on');
      },
      onEnterBack: () => {
        $('#section05 .page02').addClass('on');
      }, // 화면 스크롤을 되돌릴때 스크럽 연결 - 없으면 on 클래스가 제거되지 않음
      onLeave: () => {
        $('#section05 .page02').removeClass('on');
      },
      onLeaveBack: () => {
        $('#section05 .page02').removeClass('on');
      }, // 화면 스크롤을 되돌릴때 스크럽 연결 - 없으면 on 클래스가 제거되지 않음
      // toggleClass: 'on', // 가로 스크롤 지점을 인식할 수 없음 - #section05 요소의 top과 bottom을 인식
    },
  });

  // page 3 text scroll up animatiion
  gsap.to('#section05 .page03 .txt', {
    y: -innerHeight * 2,
    scrollTrigger: {
      trigger: '#section05',
      start: () => '+=' + innerHeight * 1.5, // 화면 높이 길이의 하나 반 만큼 가로스크롤이 이동했을 때 start 마커가 하단에 나타남
      scrub: true,
      // markers: true,
    },
  });

  // page 4 text animatiion
  gsap.to('#section05 .page04', {
    scrollTrigger: {
      trigger: '#section05',
      start: '3000 top',
      scrub: true,
      // markers: true,
      onEnter: () => {
        $('#section05 .page04').addClass('on');
      },
      onEnterBack: () => {
        $('#section05 .page04').addClass('on');
      }, // 화면 스크롤을 되돌릴때 스크럽 연결 - 없으면 on 클래스가 제거되지 않음
      onLeave: () => {
        $('#section05 .page04').removeClass('on');
      },
      onLeaveBack: () => {
        $('#section05 .page04').removeClass('on');
      }, // 화면 스크롤을 되돌릴때 스크럽 연결 - 없으면 on 클래스가 제거되지 않음
      // toggleClass: 'on', // 가로 스크롤 지점을 인식할 수 없음 - #section05 요소의 top과 bottom을 인식
    },
  });

  // page 5 video controll animatiion
  const video05 = document.querySelector('#sc05_video');
  gsap.to('#section05', {
    scrollTrigger: {
      trigger: '#section05',
      start: '5000 top',
      scrub: true,
      markers: true,
      onEnter: () => {
        video05.play();
      },

      onLeaveBack: () => {
        video05.currentTime = 0; // 비디오 재생 시간을 0으로 되돌림
        video05.pause();
      },
    },
  });

  //섹션 6 화면 위치할 때 글자 슬라이드 업
  gsap.to('#section06', {
    scrollTrigger: {
      trigger: '#section06',
      start: 'top top',
      scrub: true,
      toggleClass: 'on',
      // markers: true,
    },
  });

  //섹션 6 화면 위치 시 스크롤 고정
  gsap.to('.fix-this-6', {
    scrollTrigger: {
      trigger: '.trigger-this-6',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      // markers: true,
    },
  });

  let sec06 = gsap.timeline();
  ScrollTrigger.create({
    animation: sec06,
    trigger: '#section06',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    // markers: true,
  });

  //section 06 chapter image move animation
  gsap.to('#section06 .visual_container .chapter', {
    x: 480,
    scrollTrigger: {
      trigger: '#section06',
      start: '800 top',
      scrub: true,
      // markers: true,
    },
  });

  //section 06 square height animation
  gsap.to('#section06 .visual_container .square > div', {
    height: 0,
    scrollTrigger: {
      trigger: '#section06',
      start: '1200 top',
      end: '5000 bottom',
      scrub: true,
      // markers: true,
    },
  });

  //section 06 title move animation
  gsap.to('#section06 .visual_container .title', {
    x: 180,
    scrollTrigger: {
      trigger: '#section06',
      start: '1200 top',
      end: '5000 bottom',
      scrub: true,
      // markers: true,
    },
  });

  gsap.to('#section06 .visual_container .title', {
    scale: 50,
    y: -13000,
    x: 3750,
    scrollTrigger: {
      trigger: '#section06',
      start: '1600 top',
      end: '6000 bottom',
      scrub: true,
      // markers: true,
    },
  });

  //section 06 hydra move animation
  gsap.to('#section06 .visual_container .hydra', {
    x: 1800,
    scrollTrigger: {
      trigger: '#section06',
      start: '1200 top',
      end: 'bottom bottom',
      scrub: true,
      // markers: true,
    },
  });

  sec06.to('#section06 .side .left', { x: -1000 }, 0);
  sec06.to('#section06 .side .right', { x: 1000 }, 0);
  sec06.to('#section06 .underbar', { y: 800 }, 0);

  //section 07 video controll animation
  const video07 = this.document.querySelector('#sc07_video');
  gsap.to('#section07', {
    scrollTrigger: {
      trigger: '#section07',
      start: 'top top',
      scrub: true,
      toggleClass: 'on',
      // markers: true,
      onEnter: () => {
        video07.play();
        $('#section07 .side').addClass('on');
        $('#header').addClass('on');
      },
      onLeaveBack: () => {
        video07.curruntTime = 0;
        $('#section07 .side').removeClass('on');
        $('#header').removeClass('on');
      },
    },
  });

  //section07 fix on scroll
  gsap.to('.fix-this-7', {
    scrollTrigger: {
      trigger: '.trigger-this-7',
      start: '-400 top',
      end: 'bottom bottom',
      pin: true,
      scrub: true,
      // markers: true,
    },
  });

  //section07 video scale down animation
  gsap.to('#section07 .video', {
    scale: 0.8,
    y: 15,
    scrollTrigger: {
      trigger: '#section07',
      start: '1000 top',
      end: 'bottom bottom',
      scrub: true,
      // markers: true,
    },
  });

  //section07 side image remove class on
  gsap.to('#section07 .side', {
    scale: 0.8,
    y: 15,
    scrollTrigger: {
      trigger: '#section07',
      start: '1800 top',
      end: 'bottom bottom',
      scrub: true,
      // markers: true,
      onEnter: () => {
        // 스크롤이 트리거 요소의 시작 위치에 도달헀을 때
        $('#section07 .side').addClass('on');
      },
      // onEnterBack: () => {
      //   // 스크롤이 트리거 요소의 시작 위치에 역방향으로 도달헀을 때
      //   $('#section07 .side').addClass('on');
      // },

      // onLeave: () => {
      //   // 스크롤이 트리거 요소의 끝 위치를 지났을 때
      //   $('#section07 .side').removeClass('on');
      // },
      onEnter: () => {
        // 스크롤이 트리거 요소의 시작 위치에 도달헀을 때
        $('#section07 .side').addClass('on');
      },
    },
  });

  //secion 08,09 title text slide animation
  function section0809Title(section, position) {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: `${position} top`,
        scrub: true,
        // markers: true,
        toggleClass: 'on',
      },
    });
  }

  section0809Title('#section08', '-500');
  section0809Title('#section09', '-700');

  //secion 091 title text slide animation
  gsap.to('.fix-this-91', {
    scrollTrigger: {
      trigger: '.trigger-this-91',
      start: 'top top',
      scrub: true,
      pin: true,
      // markers: true,
      onEnter: () => {
        $('#header').removeClass('on');
      },
      onLeaveBack: () => {
        $('#header').addClass('on');
      },
    },
  });

  //secion 091 title text slide animation
  gsap.to('#section091', {
    scrollTrigger: {
      trigger: '#section091',
      start: '-300 top',
      scrub: true,
      // markers: true,
      toggleClass: 'on',
    },
  });

  //secion 091 night image animation
  gsap.to('#section091 .night', {
    x: -2000,
    y: 200,
    // rotation: 20,
    scrollTrigger: {
      trigger: '#section091',
      start: '500 top',
      end: 'bottom bottom',
      scrub: 1,
      markers: true,
      duration: 2,
    },
  });

  let sec091 = gsap.timeline();
  ScrollTrigger.create({
    animation: sec091,
    trigger: '#section091',
    start: '500 top',
    end: 'bottom bottom',
    scrub: 1,
    // markers: true,
  });

  // sec091.to('#section091 .night', { x: -1000, y: 200, rotation: 0 }, 0);

  // section 10 horizontal scroll animation
  const section10pages = this.document.querySelectorAll('#section10 .page');
  // console.log(section10pages);
  let sec10_total = 0;

  section10pages.forEach((section) => {
    sec10_total += section.clientWidth; // 각각의 page 가로크기 합산
  });

  // console.log(sec10_total);

  gsap.to('.fix-this-10', {
    x: -(sec05_total - innerWidth),
    scrollTrigger: {
      trigger: '.trigger-this-10',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      scrub: true,
      // markers: true,
    },
  });

  const video10 = document.querySelector('#sc10_video');
  const video11 = document.querySelector('#sc11_video');

  gsap.to('#section10', {
    scrollTrigger: {
      trigger: '#section10',
      start: '1200 top',
      scrub: true,
      // markers: true,
      onEnter: () => {
        video11.play();
      },

      onLeaveBack: () => {
        video11.curruntTime = 0; // 비디오 재생 시간을 0으로 되돌림
        video11.pause();
      },
    },
  });

  function playVideoSec10(top, vidElmt) {
    gsap.to('#section10', {
      scrollTrigger: {
        trigger: '#section10',
        start: `${top} top`,
        scrub: true,
        // markers: true,
        onEnter: () => {
          video10.play();
        },

        onLeaveBack: () => {
          video10.curruntTime = 0; // 비디오 재생 시간을 0으로 되돌림
          video10.pause();
        },
      },
    });
  }

  playVideoSec10('-500', video10);
  playVideoSec10('1200', video11);

  // javascript add or remove class :
  // abc.classList.add('on') or abc.classList.remove('on')

  // select element:
  //  document.querySelector('abc");

  //jQuery add or remove class:
  // abc.classList.add('on') or abc.classList.remove('on')

  // select element:
  // $('.abc')

  function animateTextSec10(top, elmt) {
    gsap.to(elmt, {
      scrollTrigger: {
        trigger: '#section10',
        start: `${top} top`,
        scrub: true,
        // markers: true,
        onEnter: () => {
          $(elmt).addClass('on');
        },

        onLeaveBack: () => {
          $(elmt).removeClass('on');
        },
      },
    });
  }

  animateTextSec10('1200', '#section10 .page03');
  animateTextSec10('4500', '#section10 .page05 .container01 .title');
  animateTextSec10('5500', '#section10 .page05 .container02 .title');
  animateTextSec10('6500', '#section10 .page05 .container03 .title');

  function scrollMouse(evenOdd, height) {
    gsap.to(`#section10 .page03 .night ${evenOdd}`, {
      y: height * 2,
      scrollTrigger: {
        trigger: '#section10',
        start: '200 top',
        scrub: true,
        // markers: true,
      },
    });
  }

  scrollMouse('.odd', -innerHeight);
  scrollMouse('.even', innerHeight);

  // scroll move to each section
  const sections = $('[data-idx]');

  for (let i = 0; i < sections.length; i++) {
    $('.indicators').append(`<span class="point-${i}"></span>`);

    ScrollTrigger.create({
      trigger: sections[i],
      start: 'top 50%',
      end: 'bottom 50%',
      toggleClass: {
        targets: `.point-${i}`,
        className: 'current',
      },
    });
  }

  $('.indicators span').click(function () {
    const idx = $(this).index();
    const sectionTop = sections[idx].offsetTop;

    container.scrollTo(0, sectionTop, 600, {
      easing: easing.easeInOutCirc, // 스크롤 이징 함수
    });
  });

  const menuPositions = $('[menu-pos]');

  $('[menu-list]').click(function () {
    const idx = $(this).index();
    const menuListTop = menuPositions[idx].offsetTop;

    container.scrollTo(0, menuListTop, 600, {
      easing: easing.easeInOutCirc, // 스크롤 이징 함수
    });

    $('#menu').fadeToggle().toggleClass('on');
  });

  const slLeft = $('#section10 .page05').offset().left;

  $('[data-last]').click(function () {
    const section10Top = sections[10].offsetTop + slLeft - 550;
    // alert(section10Top);
    container.scrollTo(0, section10Top, 600, {
      easing: easing.easeInOutCirc, // 스크롤 이징 함수
    });

    // setTimeout(() => {
    //   $('.fix-this-10').css({
    //     transform: `translate3d(${-slLeft}px, 0px, 0px)`,
    //   });
    // }, 1000);

    $('#menu').fadeToggle().toggleClass('on');
  });
});
