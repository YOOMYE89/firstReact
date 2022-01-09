import React, {useCallback, useState, useRef, useEffect} from 'react';

const SimpleHabit = (props) => {
    // state = {     count: 0 };

    // 새로생성하지 않고 전역 처리함
    // react 자식 요소가 shallow 비교를 통해서 reRender 하지 않도록 hook 에서 제공하는 함수들
    const [count, setCount] = useState(0);
    const spanRef = useRef();
    const handleIncrement = useCallback(() => {
        setCount(count + 1)
    });

    // mount & update
    useEffect(() => {
        console.log(`mounted & updated : ${count}`)
    })

    // mounted
    // useEffect(() => {
    //     console.log(`mounted & updated : ${count}`)
    // },[]) 

        // count state 변경시
    // useEffect(() => {
    //     console.log(`mounted & updated : ${count}`)
    // },[count]) 

    return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}

export default SimpleHabit;
