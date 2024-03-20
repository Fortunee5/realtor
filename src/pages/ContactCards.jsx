import { AbsoluteCenter, IconButton, chakra} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { HiChatAlt2 } from 'react-icons/hi';
 


 const MotionBox = motion(chakra.div);
 const MotionIconButton = motion(IconButton);

const ContactCards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainButton = {
    open: { rotate: 90},
    closed: { rotate: 0},
  };

  const listButtons = {
    open: (index) => ({
      y: -(index * 10 + 70),
      opacity: 1,
      transition: { delay: index * 0.3 },
    }),
    closed: (index) => ({
      y: index * 10,
      opacity: 0,
      transition: { delay: index * 0.1 },
    }),
  };

  const buttons = [
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/standoutabode?t=Hdm-aEsBH-Lcv0wLWc6upw&s=09',
      color: 'blue',
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/standoutabode',
      color: 'red',
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.link/m8zpeg',
      color: 'green',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:kayodesolarin@yahoo.com',
      color: 'gray',
    },
  ];

  return (
    <MotionBox
      position="fixed"
      bottom="3rem"
      right="2rem"
      zIndex="sticky"
      flexDirection="column-reverse"
      display="flex"
    >
      <AnimatePresence>
        {isOpen &&
          buttons.map((button, i) => (
            <MotionBox
              boxShadow="5px 3px 10px gray"
              fontSize="30px"
              bg={button.color}
              as="a"
              key={button.url}
              href={button.url}
              variants={listButtons}
              initial="closed"
              animate="open"
              exit="closed"
              custom={i}
              width="55px"
              height="55px"
              transformOrigin="bottom"
              borderRadius="50%"
              textColor="white"
            >
              <AbsoluteCenter>{button.icon}</AbsoluteCenter>
            </MotionBox>
          ))}
      </AnimatePresence>
      <MotionIconButton
        bg="blue.200"
        boxShadow="2px 3px 8px blue"
        position="fixed"
        bottom="3rem"
        right="2rem"
        zIndex="sticky"
        size="lg"
        width="7%"
        height="7%"
        borderRadius="50%"
        icon={isOpen ? <FiX /> : <HiChatAlt2 />}
        onClick={() => setIsOpen(!isOpen)}
        variants={mainButton}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variant="solid"
        isRound={true}
      />
    </MotionBox>
  );
};

export default ContactCards;