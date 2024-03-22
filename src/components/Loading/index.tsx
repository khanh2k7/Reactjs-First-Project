import React from 'react';

type NqkProps = {
    names: {
        name: string;
        age: number;
    }[]
}

export const Loading = (props: NqkProps) => {
    return (
        <div>
           {props.names.map(name => {
            return (
                <div>
                    {name.name} - {name.age}
                </div>
            );
           })}
        </div>
    );
};