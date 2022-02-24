import { useState, useEffect } from 'react';

const ClockFunctional = () => {
  /* const myState = useState('initial value');
  console.log('The variable that holds the value', myState[0]);
  console.dir('The function that updates the value', myState[1]); */
  const [date, setDate] = useState(new Date());

  const tick = () => setDate(new Date());
  /*  // mimic componentDidMount
  useEffect(() => console.log('First mount'), []);
  // mimic componentDidUpdate
  useEffect(() => console.log('Every render'));
  // mimic componendDidUpdate
  useEffect(() => console.log('ONLY WHEN date changes'), [date]); */

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    //componentWillUnmount
    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default ClockFunctional;
