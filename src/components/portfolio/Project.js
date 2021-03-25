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
                    항상 <b>엔드 유저</b>의 입장에서
                    <br/>
                    <b>공감</b>하는 마음으로 개발합니다.
                </div>
            </div>
            <span className="content_title">프로젝트</span>
            <div className="content_container" id="bznav_sme">
                <div className="content_item">
                    <h2>
                        잔디의 같이<span className="content_job">2021.02</span>
                    </h2>
                    <div className="content_stacks">
                        <span className="span_stack">REACT</span>
                        <span className="span_stack">TYPESCRIPT</span>
                        <span className="span_stack">RxJS</span>
                        <span className="span_stack">TECH PM</span>
                        <span className="span_stack">UI/UX</span>
                    </div>
                    <p className="content_description">
                        GitHub 레포지터리 데이터를 통해 개발 성향 및 경향성을 분석하여 시각화해주는 서비스
                        <ul>
                            <li>서비스 기획, 아키텍쳐 설계, 인프라 구축 등 개발 전두지휘</li>
                            <li>랭킹 시스템을 위한 자체 알고리즘 구현</li>
                            <li>UI/UX 기획 및 디자인</li>
                            <li>비동기 통신 로직의 제어를 위해 RxJS 사용</li>
                            <li>OAuth 인증 처리를 위한 플로우, 접근 스코프 구현</li>
                            <li>emotion, TailwindCSS 사용하여 스타일 독립화</li>
                            <li>Antd Chart를 이용하여 데이터 시각화</li>
                            <li>Context API 이용하여 글로벌 사용이 필요한 state 관리 플로우 구축</li>
                            <li>ESLint, Prettier 이용하여 코드 포맷 획일화</li>
                            <li>통신 독립적인 뷰를 그리는 컴포넌트, 통신을 위한 컴포넌트 구분하여 통신 독립화</li>
                            <li>직접 UI/UX 고민하고 디자인</li>
                            <li>Heroku, Vercel을 이용하여 서비스 배포</li>
                            <li>교내 해커톤에서 1위 수상</li>
                        </ul>
                    </p>
                    <a
                        target="_blank"
                        href="https://www.jandevelop.com"
                        className="static_btn rounded pb"
                        style={{marginRight: '10px', marginBottom: '10px'}}
                    >
                        LIVE SERVICE
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/CLUG-kr/Frontend_JANDI-s_VALUE"
                        className="static_btn rounded pb "
                    >
                        GITHUB REPOSITORY
                    </a>
                </div>
            </div>
            <div className="content_container" id="bznav_sme">
                <div className="content_item">
                    <h2>
                        비즈넵 웹 애플리케이션<span className="content_job">2020.10~</span>
                    </h2>
                    <div className="content_stacks">
                        <span className="span_stack">ANGULAR</span>
                        <span className="span_stack">RxJS</span>
                        <span className="span_stack">GRAPHQL</span>
                        <span className="span_stack">NG-ZORRO</span>
                        <span className="span_stack">UX</span>
                        <span className="span_stack">MONOREPO</span>
                    </div>
                    <p className="content_description">
                        중소사업자들의 편리하고 간편한 사업관리를 위한 솔루션을 제공하는 웹 버전 서비스
                        <ul>
                            <li>스타일 일관성, 과도한 의존성 제거를 위해 적극적으로 코드 리팩토링</li>
                            <li>거래처 관리 서비스 개발</li>
                            <ul>
                                <li>복잡한 비즈니스 로직을 효율적으로 처리하기 위해 컴포넌트 단위 로직 정책 수립</li>
                                <li>클라이언트에서 처리 가능한 최대한의 에러 핸들러 구현</li>
                            </ul>
                            <li>UI/UX 성능 및 사용성 개선 작업</li>
                            <li>디자인 시스템 단위 독립 스타일 작업</li>
                            <li>데이터 그리드 사용성 개선 작업</li>
                            <li>Angular Dependency Injectable한 채널톡 부착 로직 구현</li>
                            <li>공통적으로 사용 가능한 상세 그리드 페이지 구현</li>
                            <ul>
                                <li>URL Query Param에 대해 그리드 데이터 필터링 및 실시간 반영 구현</li>
                                <li>상세하게 날짜를 선택할 수 있는 Date Picker 구현</li>
                            </ul>
                        </ul>
                    </p>
                    <a
                        target="_blank"
                        href="https://bznav.com/"
                        className="static_btn rounded pb"
                        style={{marginRight: '10px', marginBottom: '10px'}}
                    >
                        LIVE SERVICE
                    </a>
                </div>
            </div>
            <div className="content_container" id="bznav_mobile">
                <div className="content_item">
                    <h2>
                        비즈넵 모바일 애플리케이션<span className="content_job">2021.01~</span>
                    </h2>
                    <div className="content_stacks">
                        <span className="span_stack">ANGULAR</span>
                        <span className="span_stack">IONIC</span>
                        <span className="span_stack">RxJS</span>
                        <span className="span_stack">GRAPHQL</span>
                        <span className="span_stack">ECHARTS</span>
                    </div>
                    <p className="content_description">
                        중소사업자들의 편리하고 간편한 사업관리를 위한 솔루션을 제공하는 모바일 버전 서비스
                        <ul>
                            <li>Echarts를 이용해 차트 구현 및 데이터 시각화</li>
                            <li>유저들에게 사업 인사이트를 주기적으로 발행하여 제공해주는 리포트 View 개발</li>
                            <li>더 나은 UX 플로우를 위해 디자이너/기획자와 함께 커뮤니케이션하며 적극적으로 개선</li>
                            <li>서비스 비즈니스 로직 독립 운영을 위한 임베드 앱 개발</li>
                            <li>서비스 앱 내부 iframe과 임베드 앱 간의 통신을 위한 브릿지 개발</li>
                        </ul>
                    </p>
                    <a
                        target="_blank"
                        href="https://apps.apple.com/kr/app/%EB%B9%84%EC%A6%88%EB%84%B5/id1186216942"
                        className="static_btn rounded pb"
                        style={{marginRight: '10px', marginBottom: '10px'}}
                    >
                        LIVE SERVICE
                    </a>
                </div>
            </div>
            <div className="content_container" id="rtcorona">
                <div className="content_item">
                    <h2>
                        실시간 코로나<span className="content_job">2020.02</span>
                    </h2>
                    <div className="content_stacks">
                        <span className="span_stack">VUE.JS</span>
                        <span className="span_stack">NODE.JS</span>
                        <span className="span_stack">AJAX</span>
                        <span className="span_stack">FIREBASE</span>
                        <span className="span_stack">UI/UX</span>
                    </div>
                    <p className="content_description">
                        실시간 국내/외 COVID-19 상황판, 실시간 뉴스, 확진자 동선 정보 등을 실시간으로 한 눈에 파악할 수 있는 서비스
                        <ul>
                            <li>프로젝트 기획부터 개발까지 1인 개발</li>
                            <li>Firebase Hosting, Functions, Realtime Database 사용하여 인프라 구축</li>
                            <li>10분 단위로 크롤링 스케쥴링을 통해 COVID-19 데이터 수집</li>
                            <li>사용자들이 자유롭게 토론할 수 있는 공개게시판 운영</li>
                            <li>중앙대학교 커뮤니티(에브리타임)에서 뜨거운 반응을 얻음</li>
                            <li>Google Analytics 기준 최근 30분 실시간 접속자 100명 달성</li>
                            <li>직접 UI/UX 고민하고 디자인</li>
                            <li>프론트엔드 공부를 한 후 Vue를 이용해 개발한 첫 프로젝트</li>
                        </ul>
                    </p>
                    <a
                        target="_blank"
                        href="https://github.com/huneeeee/rtCorona"
                        className="static_btn rounded pb "
                    >
                        GITHUB REPOSITORY
                    </a>
                </div>
            </div>
            <div className="content_container" id="ddarorong">
                <div className="content_item">
                    <h2>
                        따로롱<span className="content_job">2019.11</span>
                    </h2>
                    <div className="content_stacks">
                        <span className="span_stack">MANUFACTURING</span>
                        <span className="span_stack">iOS</span>
                        <span className="span_stack">UI/UX</span>
                    </div>
                    <p className="content_description">
                        실시간으로 따릉이 정류장 정보와 주행 코스, 경유지 등 정보를 제공해주는 서비스
                        <ul>
                            <li>UI/UX, 프로젝트 기획자로 참여</li>
                            <li>개발, 디자인, 기획 전반적인 협업 프로세스에 참여</li>
                            <li>iOS 프로젝트 기반 작업</li>
                        </ul>
                    </p>
                    {/*<p>*/}
                    {/*    중앙대학교 소프트웨어학부 동아리 '깃뚜라미'에서 2019 스마트관광 앱*/}
                    {/*    개발 공모전을 위해 개발한 팀 프로젝트입니다. 실시간으로 따릉이*/}
                    {/*    정류장 정보와 주행 코스, 경우지 등 따릉이를 이용해 여행을 돕는*/}
                    {/*    네이티브 애플리케이션입니다. 현재는 Android만 출시되어 있습니다.*/}
                    {/*    저는 iOS 개발팀으로 처음에 들어갔으나, 공모전 주최측에서 지정한 T*/}
                    {/*    map API가 Objective-C로 구성되어 있어 개발에 걸림돌이 있었고 다양한*/}
                    {/*    환경적 문제로 인해 저는 UI/UX 및 프로젝트 기획으로 참여하게*/}
                    {/*    되었습니다.*/}
                    {/*</p>*/}
                    <a
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.gitturami.bike"
                        className="static_btn rounded pb"
                    >
                        LIVE SERVICE
                    </a>
                </div>
            </div>
            <div className="content_container" id="recordingios">
                <div className="content_item">
                    <h2>
                        VoiceFeed
                        <span className="content_job">2019.07</span>
                    </h2>
                    <div className="content_stacks">
                        <span className="span_stack">SWIFT</span>
                        <span className="span_stack">iOS</span>
                        <span className="span_stack">UI/UX</span>
                    </div>
                    <p className="content_description">
                        MR을 재생하면서 목소리를 동시에 녹음할 수 있는 iOS 애플리케이션
                        <ul>
                            <li>프로젝트 기획부터 개발까지 1인 개발</li>
                            <li>직접 UI/UX 고민하고 디자인</li>
                            <li>Swift를 이용한 첫 iOS 앱 프로젝트</li>
                        </ul>
                    </p>
                    <a
                        target="_blank"
                        href="https://github.com/huneeeee/projectAlpha"
                        className="static_btn rounded pb "
                    >
                        GITHUB REPOSITORY
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
