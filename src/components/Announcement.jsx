import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

export default function Announcement() {
  return (
    <div>
      <Container>Super Deal!!! Free Shipping on Orders Over Rs.5000</Container>
    </div>
  );
}
