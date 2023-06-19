import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './custom-ag-theme-alpine.css';
import TableSkeleton from './skeletonTable';
import EmptyState from './emtpyState';

interface ITable {
  columnDefs?: any;
  data?: any;
  frameworkComponents?: any;
  onGridReady?: (a: any) => void;
  customOnGridRead?: (a: any) => void;
  gridOptions?: any;
  suppressRowClickSelection?: any;
  rowSelection?: any;
  rest?: any;
}

const Table = (props: ITable) => {
  const {
    columnDefs,
    data,
    frameworkComponents,
    onGridReady: customOnGridRead = () => false,
    gridOptions,
    suppressRowClickSelection,
    rowSelection,
    ...rest
  } = props;
  const [gridApi, setGridApi] = useState<any>(null);
  useEffect(() => {
    if (gridApi && data && data.length === 0) {
      gridApi.hideOverlay();
      gridApi.showLoadingOverlay();
    }
  }, [data, gridApi]);
  const onGridReady = (params: any) => {
    setGridApi(params.api);
    customOnGridRead(params);
  };
  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={{
          resizable: true,
          flex: 1,
          sortable: true,
        }}
        rowSelection={rowSelection}
        animateRows={true}
        {...rest}
        onGridReady={onGridReady}
        rowData={data || []}
        enableRtl={true}
        frameworkComponents={{
          ...frameworkComponents,
          customLoadingOverlay: () => <EmptyState />,
          customNoRowsOverlay: (param: any) => {
            const columns = param.api.columnModel.columnDefs.map((item: any) => item.skeletonType);
            return <TableSkeleton rowCount={10} columns={columns} />;
          },
        }}
        loadingOverlayComponent={'customLoadingOverlay'}
        noRowsOverlayComponent={'customNoRowsOverlay'}
        suppressPropertyNamesCheck={true}
        gridOptions={gridOptions}
        suppressDragLeaveHidesColumns={true}
        rowStyle={{
          borderColor: '#e8eaf666',
        }}
        suppressRowHoverHighlight
      />
    </div>
  );
};

export default Table;
