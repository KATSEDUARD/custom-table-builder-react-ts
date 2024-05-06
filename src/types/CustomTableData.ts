export type CustomTableData = {
    columns: (string | CustomTableData)[];
    tableData?: CustomTableData[];
};
