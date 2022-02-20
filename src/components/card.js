import React from 'react';
import { render } from 'react-dom';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { color } from '../utils/color';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdviceCard() {
  const [advice, setAdvice] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://api.adviceslip.com/advice/${id}`)
      .then((res) => {
        setAdvice(res.data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleOnclick = () => {
    setId(Math.floor(Math.random() * 200 + 1));
  };

  return (
    <div
      css={css`
        background-color: ${color.darkGrayishBlue};
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
          rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        border-radius: 8px;
        max-width: 25rem;
        margin: 0 1rem;
        padding: 50px 20px;
        text-align: center;
        line-height: 2;
        font-size: 1.2rem;
        font-weight: 800;
        color: ${color.lightCyan};
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 280px;
        justify-content: space-between;
      `}
    >
      <h2
        css={css`
          color: ${color.neonGreen};
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 4px;
        `}
      >
        advice # {advice.id}
      </h2>
      <p>{advice.advice}</p>
      <svg width={295} height={16} xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zm173 0h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width={6} height={16} rx={3} />
            <rect x={14} width={6} height={16} rx={3} />
          </g>
        </g>
      </svg>
      <button
        onClick={handleOnclick}
        css={css`
          background-color: ${color.neonGreen};
          position: absolute;
          border: none;
          border-radius: 100px;
          display: grid;
          padding: 10px;
          top: 260px;
          &:hover {
            filter: drop-shadow(0 0 0.5rem ${color.neonGreen});
          }
        `}
      >
        <span className="sr-only">show new advice</span>
        <svg
          aria-hidden="true"
          width={24}
          height={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
}
