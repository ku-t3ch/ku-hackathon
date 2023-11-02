import { FC, ReactNode } from 'react';
import tw from 'tailwind-styled-components';
import { ArrowLeft, ChevronRightCircle, X } from 'lucide-react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  isOpen: boolean;
  title: ReactNode | string;
  children: ReactNode;
  bgClassName: string;
  btnCancelColor?: string;
  btnApplyColor?: string;
  heroImage?: string;
  closeModal?: () => void;
  onClickApply?: () => void;
}

const modalAnimation = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1.0,
    opacity: 1,
  },
};

const BaseModal: FC<Props> = ({
  isOpen,
  title,
  children,
  bgClassName,
  btnCancelColor,
  btnApplyColor,
  heroImage,
  closeModal,
  onClickApply,
}) => {
  return (
    <Container $isOpenBackground={isOpen}>
      <ModalContainer>
        <motion.div
          variants={modalAnimation}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          transition={{
            duration: 0.25,
          }}
        >
          <Modal className="relative bg-[#1F2A37]">
            <div
              className={`absolute w-full h-full rounded-md ${bgClassName}`}
            />
            {heroImage && (
              <Image
                src={heroImage}
                width={352}
                height={352}
                className="absolute bottom-[.5vw] right-[1vw] opacity-5"
                unoptimized
                alt="hero-image"
              />
            )}
            <div className="relative">
              <Header>
                <div className="w-full text-lg font-medium">{title}</div>
                <div
                  className="p-[.5rem] hover:bg-[#1F2A37] hover:bg-opacity-50 rounded-lg transition duration-250"
                  onClick={closeModal}
                >
                  <X size={20} />
                </div>
              </Header>
              <Content>{children}</Content>
              <Footer>
                <div className="w-full">
                  <Button
                    radius="none"
                    style={{ backgroundColor: btnCancelColor }}
                    className="rounded-[.5rem]"
                    onClick={closeModal}
                  >
                    <ArrowLeft size={16} />
                    ย้อนกลับ
                  </Button>
                </div>
                <div>
                  <Button
                    radius="none"
                    style={{ backgroundColor: btnApplyColor }}
                    className="rounded-[.5rem]"
                    onClick={onClickApply}
                  >
                    <ChevronRightCircle size={16} />
                    สมัครเลย
                  </Button>
                </div>
              </Footer>
            </div>
          </Modal>
        </motion.div>
      </ModalContainer>
    </Container>
  );
};

const Container: any = tw.div`
  fixed
  h-screen
  w-screen
  ${(p: any) =>
    p.$isOpenBackground ? 'bg-[#1F2A37] bg-opacity-40 z-[1000]' : 'z-0'}
  transition
  duration-250
`;

const ModalContainer = tw.div`
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  w-full
`;

const Modal = tw.div`
  w-[90%]
  mx-auto
  max-w-[50rem]
  z-[1001]
  shadow-lg
  rounded-md
`;

const Header = tw.div`
  flex
  items-center
  w-full
  py-[1rem]
  px-[1.5rem]
`;

const Content = tw.div`
  p-[1.5rem]
  pt-[1rem]
`;

const Footer = tw.div`
  p-[1.5rem]
  pt-[1rem]
  flex
  items-center
`;

export default BaseModal;
