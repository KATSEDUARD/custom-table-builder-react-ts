import React, { useState } from 'react';

type Props = {
    children: React.ReactNode;
};

export const Collapse = ({ children }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className='flex justify-center items-center gap-2'>
            <div
                onClick={() => setIsCollapsed(!isCollapsed)}
                className='py-2 px-4 rounded-lg bg-blue-700 text-white hover:bg-blue-950 cursor-pointer'
            >
                {isCollapsed ? 'Show' : 'Hide'}
            </div>
            {!isCollapsed && children}
        </div>
    );
};
