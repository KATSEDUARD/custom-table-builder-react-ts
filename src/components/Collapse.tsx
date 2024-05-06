import React, { useState } from 'react';
import { Button } from './Button';

type Props = {
    children: React.ReactNode;
};

export const Collapse = ({ children }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className='flex justify-center items-center gap-2'>
            <Button onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? 'Show' : 'Hide'}
            </Button>
            {!isCollapsed && children}
        </div>
    );
};
