import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
    <div className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 xl:px-0 ${className}`}>
        {children}
    </div>
);

export default Container;