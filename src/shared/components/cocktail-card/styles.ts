import { Card, Typography, styled } from "@mui/material";
import Link from "next/link";

export const Cocktail = styled(Card)`
  border-radius: 16px;
  cursor: pointer;
`;

export const CardText = styled(Typography)`
  width: 100%;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
`;

export const CocktailLink = styled(Link)`
  display: contents;
`;