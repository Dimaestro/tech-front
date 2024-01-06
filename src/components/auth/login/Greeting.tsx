import React from 'react';

interface IGreeting {
  name: string;
}

const Greeting = ( { name }: IGreeting
) => {
  return (
    <div>
      <h2>
        Hello my friend {name}
      </h2>
    </div>
  );
};

export default Greeting;
