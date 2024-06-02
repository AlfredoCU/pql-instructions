export type TAvailableColumns = {
  id: string;
  label: string;
  align?: "right";
  minWidth?: number;
  format?: (value: number) => string;
};
