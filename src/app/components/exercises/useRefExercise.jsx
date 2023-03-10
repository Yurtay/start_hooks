import React, { useRef, useEffect, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const nameBlock = useRef("Блок");
    const [blockSize, setBlockSize] = useState({ width: 60, height: 40 });

    const handleChange = () => {
        setBlockSize({ width: 80, height: 150 });
    };

    useEffect(() => {
        nameBlock.current = "text";
    });

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                onClick={handleChange}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: blockSize.height,
                    width: blockSize.width,
                    color: "white"
                }}
            >
                <small>{nameBlock.current}</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
