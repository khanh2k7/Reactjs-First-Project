import React from 'react';

type NqkProps = {
    name: string;
    age: number;
}

export const Loading = (props: NqkProps) => {
    return (
        <div>
            {props.name} - {props.age}
        </div>
    );
};