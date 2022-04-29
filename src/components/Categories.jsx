import { categories } from "../data";
import { mobile } from "../responsive";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "5px", flexDirection: "column" })}
`;

export default function Categories() {
  return (
    <Link to="/products">
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </Link>
  );
}
