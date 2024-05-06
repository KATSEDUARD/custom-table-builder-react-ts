import { Collapse } from './Collapse';
import { CustomTableData } from '../types/CustomTableData';
import { useState } from 'react';
import React from 'react';
import { Button } from './Button';

type Props = {
    data: CustomTableData;
    caption?: string;
    showCaptionByDefault?: boolean;
};

export const CustomTableBuilder = ({
    data,
    caption,
    showCaptionByDefault,
}: Props) => {
    const [showCaption, setShowCaption] = useState(showCaptionByDefault);

    return (
        <div className='flex flex-col justify-center'>
            {showCaptionByDefault && (
                <Button onClick={() => setShowCaption(!showCaption)}>
                    {showCaption ? 'Caption Off' : 'Caption On'}
                </Button>
            )}
            <table className='border-collapse border border-gray-300 table-auto'>
                {showCaption && (
                    <caption className='text-xl'>{caption}</caption>
                )}
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
        </div>
    );
};
