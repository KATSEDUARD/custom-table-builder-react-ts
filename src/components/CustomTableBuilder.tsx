import { Collapse } from './Collapse';
import { CustomTableData } from '../types/CustomTableData';

type Props = {
    data: CustomTableData;
};

export const CustomTableBuilder = ({ data }: Props) => {
    return (
        <table className='border-collapse border border-gray-300'>
            <thead className='bg-gray-200'>
                <tr>
                    {data.columns.map((column, index) => (
                        <th
                            key={index}
                            className='border border-gray-300 px-4 py-2'
                        >
                            {column as string}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.tableData?.map((row, index) => (
                    <tr key={index}>
                        {row.columns.map((column, index) => (
                            <td
                                key={index}
                                className='border border-gray-300 px-4 py-2 text-center text-nowrap'
                            >
                                {typeof column === 'object' ? (
                                    <Collapse>
                                        <CustomTableBuilder data={column} />
                                    </Collapse>
                                ) : (
                                    column
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
