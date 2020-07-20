import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineTable} from 'react-icons/ai';
import {GiSnake} from 'react-icons/gi';

import './styles.css';

export default function Logon() {

  return (
    <div>
      <Link className="back-link" to="/canvasExemple">
            <AiFillHeart size={16} color="#E02041" />
            Canvas heart
          </Link>
          <Link className="back-link" to="/ticTacToe">
            <AiOutlineTable size={16} color="#E02041" />
            TicTacToe
          </Link>
          <Link className="back-link" to="/snake">
            <GiSnake size={16} color="#E02041" />
            Snake
          </Link>
    </div>
  );
}