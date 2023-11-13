import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { createContext, useContext, useEffect, useState } from 'react';
import BaseCard from './BaseCard';
import DesignerModal from './Modal/DesignerModal';
import DeveloperModal from './Modal/DeveloperModal';
import axios from 'axios';

interface Props {}

enum Modal {
  Designer = 0,
  Developer = 1,
  Close = -1,
}

const ModalContext = createContext<{
  closeModal: () => void;
}>({
  closeModal: () => {},
});

interface ReqRequestData {
  designers: number;
  developers: number;
}

const JoinSection: NextPage<Props> = () => {
  const [register, setRegister] = useState<ReqRequestData>({
    designers: 0,
    developers: 0,
  });
  const [targetModal, setTargetModal] = useState<Modal>(-1);

  const openModal = (idx: Modal) => {
    setTargetModal(idx);
  };

  const closeModal = () => {
    setTargetModal(-1);
  };

  const getModal = (idx: Modal) => {
    switch (idx) {
      case Modal.Designer:
        return <DesignerModal />;
      case Modal.Developer:
        return <DeveloperModal />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    const getRegisterCount = async () => {
      try {
        const { data } = await axios.get('https://api-ku-hackathon.vercel.app/api/registrants');

        setRegister(data);
      } catch {}
    };

    getRegisterCount();
  }, []);

  return (
    <>
      <Element
        name="join"
        className="max-w-[90vw] xl:max-w-[75rem] pt-[5rem] md:pt-[10rem] self-center w-full flex flex-col items-center gap-3"
      >
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-2">
            <div className="text-3xl md:text-4xl font-bold text-center">
              สาขาที่รับสมัคร
            </div>
            <div className="text-xl text-green-500 font-bold text-center">
              Major Register
            </div>
          </div>
          <div className="mt-[5rem] w-full grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
            <BaseCard
              title="Designer"
              bgImage={`${process.env.cdn}/join-items/cards/card-designer.webp`}
              borderColor="#FF6100"
              themeColor="#FF914D"
              applyAmount={register?.designers ?? 0}
              extension="คน"
              onClickBtn={() => openModal(Modal.Designer)}
            />
            <BaseCard
              title="Developer"
              bgImage={`${process.env.cdn}/join-items/cards/card-developer.webp`}
              borderColor="#00A1FF"
              themeColor="#38B6FF"
              applyAmount={register?.developers ?? 0}
              extension="ทีม"
              onClickBtn={() => openModal(Modal.Developer)}
            />
          </div>
        </div>
      </Element>
      <ModalContext.Provider value={{ closeModal }}>
        {getModal(targetModal)}
      </ModalContext.Provider>
    </>
  );
};

export const useModal = () => useContext(ModalContext);

export default JoinSection;
