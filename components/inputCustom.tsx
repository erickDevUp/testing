import React from "react";
import styled from "styled-components";

type Props = { register: any };

export default function InputCustom({ register }: Props) {
  return (
    <>
      <Section>
        <label htmlFor="amount">Amount:</label>
        <InputAmount type="number" {...register("amount")} placeholder="00" />
      </Section>
    </>
  );
}

const InputAmount = styled.input`
  width: 100%;
  height: 30px;
  color: #777;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ddd;
`;

const Section = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 20px;
  border-radius: 1rem;

  margin-bottom: 10px;

  color: #555;
  font-size: small;
`;
