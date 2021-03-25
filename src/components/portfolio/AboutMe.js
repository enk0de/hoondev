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
          더 나은 <b>프로덕트</b>를 위해
          <br />
          끊임없이 <b>고민</b>하는
          <br />
          <b>프론트엔드 엔지니어</b>
        </div>
        <div className="caption_description caption_item">
          <p>
            좋은 코드와 설계, 그리고 지속 가능한 업무 프로세스 아래에서 일하는 것이 곧 좋은 프로덕트를 만들 것이라는 신념을 가지고 있습니다. 프로덕트를 개발할 때 커뮤니케이션을 우선순위로 생각하며, 누구보다도 제가 개발하는 서비스에 대한 자부심과 오너십을 가지고 작업에 임합니다.
          </p>
        </div>
      </div>
      <span className="content_title">개발 스택</span>
      <div className="devstack_container">
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
    </div>
  );
};

export default AboutMe;
