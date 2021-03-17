import React from "react";

export interface TableStructure {
  accessor: string;
  label: string;
  isNumeric?: boolean;
}

export interface Props<T> {
  tableStructure: TableStructure[];
  data: T[];
  footer?: React.ReactNode;
}