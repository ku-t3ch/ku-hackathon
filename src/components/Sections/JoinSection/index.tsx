import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { useState } from 'react';
import BaseCard from './BaseCard';
import DesignerModal from './Modal/DesignerModal';
import DeveloperModal from './Modal/DeveloperModal';

interface Props {}

type ModalName = 'designer' | 'developer';

const JoinSection: NextPage<Props> = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    designer: false,
    developer: false,
  });

  const openModal = (name: ModalName) => {
    setIsModalOpen((p) => ({ ...p, [name]: true }));
  };

  const closeModal = () => {
    setIsModalOpen({
      designer: false,
      developer: false,
    });
  };

  return (
    <>
      <Element
        name="join"
        className="max-w-[95vw] xl:max-w-[70vw] pt-[5rem] md:pt-[10rem] self-center w-full px-5 flex flex-col items-center gap-3"
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
          <div className="mt-[5rem] grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
            <BaseCard
              title="Designer"
              bgImage={`${process.env.cdn}/join-items/cards/card-designer.webp`}
              borderColor="#FF6100"
              themeColor="#FF914D"
              onClickBtn={() => openModal('designer')}
            />
            <BaseCard
              title="Developer"
              bgImage={`${process.env.cdn}/join-items/cards/card-developer.webp`}
              borderColor="#00A1FF"
              themeColor="#38B6FF"
              onClickBtn={() => openModal('developer')}
            />
          </div>
        </div>
      </Element>
      <DesignerModal isOpen={isModalOpen.designer} closeModal={closeModal} />
      <DeveloperModal isOpen={isModalOpen.developer} closeModal={closeModal} />
    </>
  );
};

export default JoinSection;
