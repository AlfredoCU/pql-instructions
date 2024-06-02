export type TColumns = {
  id: string;
  label: string;
  width?: number;
  align?: "right";
  minWidth?: number;
  format?: (value: number) => string;
};
