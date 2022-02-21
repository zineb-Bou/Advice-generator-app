import React from 'react';
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
    setId(Math.floor(Math.random() * 100));
  };

  return (
    <div
      css={css`
        background-color: ${color.darkGrayishBlue};
        box-shadow: 0 0 10px ${color.darkGrayishBlue};
        color: ${color.lightCyan};
        box-sizing: border-box;
        border-radius: 8px;
        width: 28rem;
        max-width: 28rem;
        height: 20rem;
        margin: 0 1rem;
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        @media (max-width: 480px) {
          width: 20rem;
        }
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
      <p
        css={css`
          margin: 0.8rem 0;
          width: 75%;
          line-height: 1.5;
          font-size: 1.2rem;
          font-weight: 800;
          text-align: center;
          letter-spacing: 1px;
        `}
      >
        ❝ {advice.advice}❞
      </p>
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
          top: 300px;
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
