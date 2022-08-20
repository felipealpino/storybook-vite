import { IInputErrorsFormat } from "../../components/Inputs/interfaces/IInputErrorsFormat";

export function errorMessageBuilder(
  inputName: string,
  errors: IInputErrorsFormat[]
): string | undefined {
  const found = errors.find((error) => error.name === inputName);
  if (found) return found.message;
  return undefined;
}
