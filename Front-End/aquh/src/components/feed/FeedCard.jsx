import classes from "./FeedCard.module.css";
import { useNavigate } from "react-router-dom";
import FeedPage from "../../pages/FeedPage";
import { useRecoilValue } from "recoil";
import { memberNumberState } from "../../store/loginUserState";
import FeedModal from "./FeedModal";
// import FeedModal from "./FeedModalPage";
import Modal from "react-modal";
import https from "../../utils/https";

import React, { useEffect, useState } from "react";
import emptyHeart from "../../assets/emptyHeart.png";
import fullHeart from "../../assets/fullHeart.png";

function FeedCard({
  feedTitle,
  feedContent,
  feedCreateDate,
  feedImage,
  setModalOpen,
  feedNumber,
  setclickedFeedNumber,
  userNickName,
  feedLevel,
  feedLikeCount,
  feedSymbolList,
}) {
  // 글 상세보기 modal 오픈, 글 불러오기
  const openModal = () => {
    setclickedFeedNumber(feedNumber);
    setModalOpen(true);
  };

  // =========================================================
  return (
    <div className={classes.FeedCard} onClick={openModal}>
      {/* TODO : 카드를 클릭하면 모달창으로 상세페이지 설정 */}

      {/* {charImg()} */}
      <div className={classes.feedHeader}>
        <img src={`../../pfp${feedLevel}.png`} className={classes.profileImg} />
        <p className={classes.creator_nickname}>
          &nbsp;&nbsp;&nbsp;{userNickName}&nbsp;&nbsp;&nbsp;
        </p>
        {feedSymbolList != undefined
          ? feedSymbolList.map((symbol, index) => {
              return (
                <span key={index}>
                  <img src={`${symbol}`} className={classes.symbolImg} />
                  &nbsp; &nbsp;
                </span>
              );
            })
          : null}
      </div>
      <h3 className={classes.feedTitle}>{feedTitle}</h3>
      <p className={classes.feedInfo}>
        <span className={classes.feedCreateDate}>
          작성 날짜 : {feedCreateDate}
        </span>
        <span className={classes.feedLike}>좋아요 수 : {feedLikeCount}</span>
      </p>
      {/* TODO : 생성일 0분전으로 바꾸는 로직 */}
      <p className={classes.feedContent}> {feedContent}</p>
      {feedImage && (
        <img
          className={classes.feedCardImg}
          src={`${feedImage}`}
          alt="img_null"
        />
      )}
    </div>
  );
}
export default FeedCard;
