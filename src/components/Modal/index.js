import React, { useRef, useEffect, useCallback } from "react";
// import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: 80%;
  padding: 10px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 999;
  border-radius: 10px;

  @media screen and (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
    height: 60%;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  object-fit: contain;
  background: white;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  /* justify-content: center; */
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 999;
`;

const Modal = ({ showModal, setShowModal, postContent }) => {
  const modalRef = useRef();

  //   const animation = useSpring({
  //     config: {
  //       duration: 250,
  //     },
  //     opacity: showModal ? 1 : 0,
  //     transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  //   });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.warn("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          {/* <animated.div style={animation}> */}
          <ModalWrapper showModal={showModal}>
            {postContent?.applicationPicture[0]?.formats?.thumbnail?.url && (
              <ModalImg
                src={`${postContent.applicationPicture[0].formats.medium.url}`}
                alt=""
              />
            )}
            <ModalContent>
              <div>
                <h4>{postContent.name}</h4>
                <p>System: {postContent.system}</p>
                <p>Nr gniazd: {postContent.gatesNo}</p>
                <p>Liczba płyt: {postContent.cavitiesNo}</p>
                <p>Waga detalu [g]: {postContent.weight}</p>
                <p>System: {postContent.system}</p>
                <p>Końcówka dyszy: {postContent.gateStyle}</p>
                <p>Zastosowanie detalu: {postContent.applicationCase}</p>
              </div>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
          {/* </animated.div> */}
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
