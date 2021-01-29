import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <div className="aboutme_container">
      <div className="yellow_subtitle">
        <div className="yellow_subtitle bg"></div>
        <div className="yellow_subtitle text">ABOUT ME</div>
      </div>
      <div className="caption_container">
        <div className="caption_title caption_item">
          개발은 <br />
          저의 <b>원동력</b>이자
          <br />
          <b>삶, 그 자체</b>입니다.
        </div>
        <div className="caption_description caption_item">
          <p>
            지난 8년이라는 시간 동안 많은 좌절과 실패를 겪어보기도 하고,
            무언가를 완성해냈을 때 받는 카타르시스도 많이 느껴보았습니다. 짧지만
            굵은 8년이라는 프로그래밍 인생의 희로애락은 여전히 저를 움직이게
            하고 설레게 합니다. 저는 이러한 설렘을 잃지 않기 위해 항상 고민하고
            성찰하며, 세상을 바꾸는 힘을 가진 프로그래머가 되기 위해 계속 도전을
            이어갈 것입니다.
          </p>
        </div>
      </div>
      <span className="content_title">요즘 관심있는 것들은..</span>
      <div className="intin_devstack_container">
        <div className="intin_devstack_item">
          <div className="intin_devstack_item_logo_container angular"></div>
          <br />
          <div className="intin_devstack_item_name">
            <div className="bg"></div>
            <div className="text">ANGULAR</div>
          </div>
          {/*<p className="intin_devstack_item_description">*/}
          {/*  React를 공부하면서 ES6 표준으로 개발하는 선배의 모습을 보고 배우기*/}
          {/*  시작하였습니다. 현재는 그 편의성과 기능에 매료되어 꾸준히 접하고*/}
          {/*  있습니다.*/}
          {/*</p>*/}
        </div>
        <div className="intin_devstack_item">
          <div className="intin_devstack_item_logo_container nextjs"></div>
          <br />
          <div className="intin_devstack_item_name">
            <div className="bg"></div>
            <div className="text">NEXT.JS</div>
          </div>
          {/*<p className="intin_devstack_item_description">*/}
          {/*  실시간 코로나라는 웹 서비스를 개발하면서 처음 접한 Node.js는 매번*/}
          {/*  백엔드 개발의 즐거움과 신선함을 제공해줍니다. 풀스택 개발자가 되고*/}
          {/*  싶어 꾸준히 Node.js도 함께 공부하고 있습니다.*/}
          {/*</p>*/}
        </div>
        <div className="intin_devstack_item">
          <div className="intin_devstack_item_logo_container node"></div>
          <br />
          <div className="intin_devstack_item_name">
            <div className="bg"></div>
            <div className="text">NODE.JS</div>
          </div>
          {/*<p className="intin_devstack_item_description">*/}
          {/*  Vue.js를 통해 개발하던 중 더 큰 규모의 웹 서비스를 개발해보고 싶다는*/}
          {/*  생각에 무턱대고 React에 뛰어들었습니다. 이 사이트 또한 React로*/}
          {/*  개발된 웹 어플리케이션입니다.*/}
          {/*</p>*/}
        </div>
      </div>
      {/*  */}
      <span className="content_title">개발 스택</span>
      <div className="devstack_container">
        <div className="devstack_item">
          <div className="devstack_item_logo_container ts"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">TYPESCRIPT</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container rxjs"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">RxJS</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container gql"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">GRAPHQL</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container angular"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">ANGULAR</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container apollo"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">APOLLO CLIENT</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container js"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">JAVASCRIPT</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container angular"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">ANGULAR</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container react"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">REACT</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container es6"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">ES6</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container figma"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">FIGMA</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container xd"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">ADOBE XD</div>
          </div>
        </div>
        <div className="devstack_item">
          <div className="devstack_item_logo_container firebase"></div>
          <br />
          <div className="devstack_item_name">
            <div className="bg"></div>
            <div className="text">FIREBASE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
