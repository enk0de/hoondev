import React from 'react';
import './Title.scss';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import styled, { css } from 'styled-components';

const Title = () => {
  return (
    <div className="title_container">
      <div className="caption">
        <div className="bg"></div>
        <div className="text">I AM</div>
      </div>
      <div className="caption">
        <div className="bg"></div>
        <div className="text">
          <Typist
            cursor={{
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: false,
              hideWhenDoneDelay: 1000,
            }}
          >
            <Typist.Delay ms={600} />
            DESIGNER
            <Typist.Backspace count={8} delay={400} />
            <Typist.Delay ms={600} />
            DEVELOPER
          </Typist>
        </div>
      </div>
      <br />
      <div className="description">
        <span className="name">임지훈</span>
        <p>
          중앙대학교 소프트웨어학부 재학
          <br />
          디자이너 겸 개발자
        </p>
      </div>
      <a
        href="https://open.kakao.com/o/sPxBY5ec"
        target="_blank"
        className="static_btn rounded default"
      >
        CONTACT ME
      </a>
    </div>
  );
};

export default Title;
