import React from 'react';
import './Vitae.scss';

const Vitae = () => {
  return (
    <div className="vitae_container">
      <div className="yellow_subtitle">
        <div className="yellow_subtitle bg"></div>
        <div className="yellow_subtitle text">CURRICULUM VITAE</div>
      </div>
      <div className="profile">
        <div className="profile_photo"></div>
        <div className="profile_description">
          <h1 className="profile_name">임지훈</h1>
          <span className="profile_birthday">2000. 1. 29</span>
          <p className="profile_p">
            hoonskyn@cau.ac.kr
            <br />
            010 2332 7417
          </p>
        </div>
      </div>
      <div className="vitae_item">
        <h2>학력</h2>
        <h3>중앙대학교 서울캠퍼스</h3>
        <sub>2019. 3~</sub>
        <span className="vitae_item_description">
          소프트웨어학부 학부과정 재학중(휴학예정)
          <br />총 4학기 총학점평균 — <b>3.97</b> / 4.50
          <br />총 4학기 전공학점평균 — <b>4.12</b> / 4.50
          <br />
        </span>
        <h3>남산고등학교</h3>
        <sub>2016. 3~ 2019. 1</sub>
        <span className="vitae_item_description">
          이공계열 졸업
          <br />
        </span>
      </div>
      <div className="vitae_item">
        <h2>수상 및 실적</h2>
        <h3>CDIC 캡스톤디자인공모전</h3>
        <sub>2020. 10</sub>
        <span className="vitae_item_description">
          소프트웨어학장상(최우수상)
        </span>
        <h3>SW & AI 창업아이디어경진대회</h3>
        <sub>2020. 9</sub>
        <span className="vitae_item_description">
          우수상
        </span>
        <h3>2019 스마트관광 앱 개발 공모전</h3>
        <sub>2019. 10</sub>
        <span className="vitae_item_description">
          노력상(한국관광공사장상) 수상
        </span>
        <h3>다빈치 소프트웨어 Dream 창업캠프(입문)</h3>
        <sub>2019. 3</sub>
        <span className="vitae_item_description">
          최우수상(한국창업교육협의회장상) 수상
        </span>
        <h3>중앙대학교 2019학년도 입시</h3>
        <sub>2019. 3</sub>
        <span className="vitae_item_description">
          수시 SW인재전형 <br />
          수석 입학
        </span>
      </div>
      <div className="vitae_item">
        <h2>대외활동</h2>
        <h3>YAPP</h3>
        <sub>2021. 2 ~ 현재</sub>
        <span className="vitae_item_description">
          대학생 연합 기업형 IT 동아리
        </span>
        <h3>CLUG</h3>
        <sub>2021. 1 ~ 현재</sub>
        <span className="vitae_item_description">
          중앙대학교 유닉스 & 리눅스 사용자 모임
        </span>
        <h3>깃뚜라미(Gitturami)</h3>
        <sub>2019. 6 ~ 현재</sub>
        <span className="vitae_item_description">
          중앙대학교 소프트웨어학부 SW 개발 동아리
        </span>
      </div>
      <div className="vitae_item">
        <h2>기타사항</h2>
        <h3>SW마에스트로 11기 연수생 모집 과정</h3>
        <sub>2020. 2 ~ 2020. 5</sub>
        <span className="vitae_item_description">
          1차, 2차 코딩 테스트 합격
        </span>
      </div>
    </div>
  );
};

export default Vitae;
