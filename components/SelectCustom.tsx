"use client";
import styled from "styled-components";

type Props = { label: String; currencies: Array<String>; register: any };

export default function SelectCustom({ label, currencies, register }: Props) {
  return (
    <Continer>
      <label htmlFor={label as string}>{label}:</label>
      <Select {...register(label as string)} id={label} defaultValue="EUR">
        {currencies.map((currency, i) => (
          <option value={currency as string} key={i}>
            {currency}
          </option>
        ))}
      </Select>
    </Continer>
  );
}

const Select = styled.select`
  width: 100%;
  height: 30px;
  color: #777;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ddd;

  option {
    color: #555;
    background: white;
    font-weight: bold;
    display: flex;
    min-height: 50px;
    padding: 10px 1px;
  }
`;
const Continer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
