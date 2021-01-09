import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, PlusCircle } from './icon';
import Pic from './Pic';
import './Box.scss';

const Box = (props) => {
  const { data, flower, closeModal } = props;
  const {
    name,
    start,
    end,
    position,
    mainSName,
    snameCn1,
    snameEn1,
    snameCn2,
    snameEn2,
    snameCn3,
    detail,
    height,
    low,
    location,
    season,
  } = data;
  const [page, setPage] = useState(0);
  console.log(data);
  const s = start > 9 || end > 9;
  console.log('s', s);
  return (
    <div className="taiwan12flower-box container">
      <div
        className="taiwan12flower-box box"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="taiwan12flower-box close-button" onClick={closeModal}>
          <PlusCircle />
        </div>
        {position === 'right' ? (
          <div className="taiwan12flower-box time-line">
            <div className="taiwan12flower-box time-line-container">
              <div className="taiwan12flower-box month">
                <span className="taiwan12flower-box m en-style">{start}</span>
              </div>
              <div className="taiwan12flower-box month last">
                <span className="taiwan12flower-box m en-style">{end}</span>
              </div>
              <div className={`taiwan12flower-box month-bottom ${s ? 's' : ''}`}>
                <div />
              </div>
              <div className="taiwan12flower-box month-text">／ 花期 ／</div>
            </div>
          </div>
        ) : (
          <div className="taiwan12flower-box time-line re">
            <div className="taiwan12flower-box time-line-container re">
              <div className="taiwan12flower-box month re">
                <span className="taiwan12flower-box m en-style re">{end}</span>
              </div>
              <div className="taiwan12flower-box month last re">
                <span className="taiwan12flower-box m en-style re">{start}</span>
              </div>
              <div className={`taiwan12flower-box month-bottom re ${s ? 's' : ''}`}>
                <div />
              </div>
              <div className="taiwan12flower-box month-text re">／ 花期 ／</div>
            </div>
          </div>
        )}
        <div className="taiwan12flower-box name">{name}</div>
        <div className="taiwan12flower-box main-img fade-in">
          <Pic no={flower} />
        </div>
        {page === 0 && (
          <div className="taiwan12flower-box context fade-in">
            <div className="taiwan12flower-box context-one">
              <div className="taiwan12flower-box label">學名 ／</div>
              <p className="en-style">{mainSName}</p>
            </div>
            <div className="taiwan12flower-box context-two">
              <div>
                {snameCn1} <div className="taiwan12flower-box sname en-style">{snameEn1}</div>
              </div>
              <div>
                {snameCn2} <div className="taiwan12flower-box sname en-style">{snameEn2}</div>
              </div>
              <div>{snameCn3}</div>
            </div>
            <div className="taiwan12flower-box context-three">
              <p>{detail}</p>
            </div>
            <div className="taiwan12flower-box change-context">
              <div className="taiwan12flower-box pre disabled">
                <ChevronLeft />
              </div>
              <div
                className="taiwan12flower-box next"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                  setPage(1);
                }}
              >
                <ChevronRight />
              </div>
            </div>
          </div>
        )}
        {page === 1 && (
          <div className="taiwan12flower-box context fade-in">
            <div className="taiwan12flower-box information-container">
              <div className="taiwan12flower-box bg" />
              <div className="taiwan12flower-box left">
                <div className="taiwan12flower-box height">{height}</div>
                <div className="taiwan12flower-box center-line" />
                <div className="taiwan12flower-box low">{low} ／ m</div>
              </div>
              <div className="taiwan12flower-box right">
                <div className="taiwan12flower-box height">height</div>
                <div className="taiwan12flower-box center-line-long" />
                <div className="taiwan12flower-box low">low</div>
              </div>
            </div>
            <div className="taiwan12flower-box info-detail">
              <p>{location}</p>
            </div>
            <div className="taiwan12flower-box change-context">
              <div
                className="taiwan12flower-box pre"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                  setPage(0);
                }}
              >
                <ChevronLeft />
              </div>
              <div className="taiwan12flower-box next disabled">
                <ChevronRight />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;
