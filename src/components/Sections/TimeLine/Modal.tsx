import { List, X } from 'lucide-react';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

const modalAnimation = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
  },
};

interface Props {
  isOpen?: boolean;
  title: ReactNode;
  content: ReactNode;
  closeModal?: () => void;
}

const Modal: FC<Props> = ({ isOpen = false, title, content, closeModal }) => {
  return (
    <Container>
      <motion.div
        variants={modalAnimation}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        transition={{
          duration: 0.38,
        }}
      >
        <Card>
          <Header>
            <div onClick={closeModal} className="w-full flex gap-2 font-medium">
              <List size={16} />
              <span>{title}</span>
            </div>
            <div
              onClick={closeModal}
              className="p-[.5rem] hover:bg-gray-900 hover:bg-opacity-40 hover:rounded-lg"
            >
              <X size={16} />
            </div>
          </Header>
          <div className="p-[1rem]">{content}</div>
        </Card>
      </motion.div>
    </Container>
  );
};

const Container = tw.div`
  fixed
  z-[999]
  bottom-0
  w-screen
`;

const Card = tw.div`
  h-auto
  bg-gray-800
  text-sm
  z-[1001]
  shadow
`;

const Header = tw.div`
  flex
  items-center
  px-[.5rem]
  py-[.5rem]
  border-b
  border-gray-700
`;

export default Modal;
