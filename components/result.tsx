import styled from "styled-components";

type Props = {
  from: string;
  to: string;
  amount: number;
  result: number;
};

export default function Result({ from, amount, to, result }: Props) {
  return (
    <Section>
      <span>
        {amount} {from}
      </span>
      <span>=</span>
      <span>
        {result} {to}
      </span>
    </Section>
  );
}

const Section = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  border-radius: 1rem;
  margin-bottom: 10px;
  width: 300px;

  font-weight: bold;
  color: #555;
  font-size: small;
`;
