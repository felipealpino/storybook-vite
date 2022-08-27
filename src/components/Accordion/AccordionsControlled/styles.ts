import styled from "styled-components";
import { IAccordionsControlled } from ".";

export const AccordionsControlledContainer = styled.div<IAccordionsControlled>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap}px`};
`;
