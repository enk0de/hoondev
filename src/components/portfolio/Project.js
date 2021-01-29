import React from 'react';
import './Project.scss';

const Project = () => {
  return (
    <div className="project_container">
      <div className="yellow_subtitle">
        <div className="yellow_subtitle bg"></div>
        <div className="yellow_subtitle text">PORTFOLIO</div>
      </div>
      <div className="caption_container">
        <div className="caption_title caption_item">
          항상 <b>엔드 유저</b>의 입장에서 생각하고
          <br />
          즐거운 마음으로 개발하는 <b>프론트엔드 개발자</b>입니다.
        </div>
      </div>
      <span className="content_title">개인 프로젝트</span>
      <div className="content_container" id="rtcorona">
        <div className="content_item">
          <h2>
            실시간 코로나<span className="content_job">1인 개발</span>
          </h2>
          <div className="content_stacks">
            <span className="span_stack">VUE.JS</span>
            <span className="span_stack">NODE.JS</span>
            <span className="span_stack">AJAX</span>
            <span className="span_stack">FIREBASE</span>
            <span className="span_stack">UI/UX</span>
          </div>
          <p>
            COVID-19 관련 정보를 실시간으로 빠르고 정확하게, 그리고 한 눈에
            파악할 수 있는 서비스를 제공합니다. 구현된 기능으로는 실시간 국내/외
            COVID-19 상황판, 실시간 뉴스, 확진자 동선 정보 등이 있으며, 현재는
            다양한 문제로 인해 일부 서비스만 제공합니다. Node.js를 이용해 크롤링
            기능을 개발하였으며, 프론트엔드단은 Vue.js로 개발하였습니다.
            Firebase GCP를 통해 서비스를 제공했으나 현재는 중단되었습니다.
          </p>
          <a
            // href="https://rtcorona.kr"
            className="static_btn rounded disabled"
            style={{ marginRight: '10px', marginBottom: '10px' }}
          >
            LIVE SERVICE
          </a>
          <a
            href="https://github.com/huneeeee/rtCorona"
            className="static_btn rounded pb "
          >
            GITHUB REPOSITORY
          </a>
        </div>
      </div>
      <div className="content_container" id="recordingios">
        <div className="content_item">
          <h2>
            보컬+MR 동시 녹음으로 보컬 피드백이 가능한 앱
            <span className="content_job">1인 개발</span>
          </h2>
          <div className="content_stacks">
            <span className="span_stack">SWIFT</span>
            <span className="span_stack">iOS</span>
            <span className="span_stack">UI/UX</span>
          </div>
          <p>
            MR을 재생하면서 제 목소리를 동시에 녹음하고 싶을 때 녹음 앱의 특성
            상 노래 재생과 녹음을 동시에 할 수 없다는 것에 매번 불편함을
            느껴 개발한 앱입니다. AVFoundation 프레임워크에 있는 오디오를 다루는 다양한
            라이브러리를 이용하였습니다.
          </p>
          <a
            style={{ marginRight: '10px', marginBottom: '10px' }}
            className="static_btn rounded disabled"
          >
            DISABLED
          </a>
          <a
            href="https://github.com/huneeeee/projectAlpha"
            className="static_btn rounded pb "
          >
            GITHUB REPOSITORY
          </a>
        </div>
      </div>
      <div className="content_container" id="ddarorong">
        <div className="content_item">
          <h2>
            따로롱<span className="content_job">기획</span>
          </h2>
          <div className="content_stacks">
            <span className="span_stack">SUPPORTER</span>
            <span className="span_stack">MANUFACTURING</span>
          </div>
          <p>
            중앙대학교 소프트웨어학부 동아리 '깃뚜라미'에서 2019 스마트관광 앱
            개발 공모전을 위해 개발한 팀 프로젝트입니다. 실시간으로 따릉이
            정류장 정보와 주행 코스, 경우지 등 따릉이를 이용해 여행을 돕는
            네이티브 애플리케이션입니다. 현재는 Android만 출시되어 있습니다.
            저는 iOS 개발팀으로 처음에 들어갔으나, 공모전 주최측에서 지정한 T
            map API가 Objective-C로 구성되어 있어 개발에 걸림돌이 있었고 다양한
            환경적 문제로 인해 저는 UI/UX 및 프로젝트 기획으로 참여하게
            되었습니다.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.gitturami.bike"
            className="static_btn rounded pb"
          >
            LIVE SERVICE
          </a>
        </div>
      </div>

      {/*<span className="content_title">외주</span>*/}
      {/*<div className="content_container" id="selhak">*/}
      {/*  <div className="content_item">*/}
      {/*    <h2>*/}
      {/*      셀프 학점 은행제<span className="content_job">UI/UX 디자인</span>*/}
      {/*    </h2>*/}
      {/*    <div className="content_stacks">*/}
      {/*      <span className="span_stack">SUPPORTER</span>*/}
      {/*      <span className="span_stack">UI/UX</span>*/}
      {/*      <span className="span_stack">ZEPLIN</span>*/}
      {/*      <span className="span_stack">ADOBE XD</span>*/}
      {/*      <span className="span_stack">PHOTOSHOP</span>*/}
      {/*    </div>*/}
      {/*    <p>*/}
      {/*      이 앱은 지나친 학점은행제 광고들 속 오아시스 같은 어플입니다.*/}
      {/*      평생교육을 대표하며, 모든 학습자가 스스로 학점은행제를 할 수 있도록*/}
      {/*      만든 앱입니다. 저는 UI/UX 디자인을 담당하였으며, Adobe XD와*/}
      {/*      Photoshop으로 작업한 후 Zeplin 처리를 통해 마무리하였습니다. 개발*/}
      {/*      단계에서 의도한 디자인이 제대로 적용되지 않은 점이 개인적으로는*/}
      {/*      안타까운 작품입니다.*/}
      {/*    </p>*/}
      {/*    <a*/}
      {/*      onClick={() => {*/}
      {/*        alert('기능 준비 중입니다.');*/}
      {/*      }}*/}
      {/*      className="static_btn rounded pb"*/}
      {/*    >*/}
      {/*      DESIGN PREVIEW*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <sub>*/}
      {/*    이보다 더 많은 작업물이 있지만, 클라이언트의 요청으로 기재가 불가능한*/}
      {/*    상황입니다. 양해 부탁드립니다.*/}
      {/*  </sub>*/}
      {/*</div>*/}
    </div>
  );
};

export default Project;
