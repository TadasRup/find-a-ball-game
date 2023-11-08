import React from 'react';
import { motion } from 'framer-motion';

const Cup = ({ isSelected, onClick }) => {
  return (
    <motion.div
      className={`cup ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    ></motion.div>
  );
};

export default Cup;
