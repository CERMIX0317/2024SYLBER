import React, { useState, useMemo, useCallback } from 'react';

const ButtonField = () => {
    // 버튼들의 위치를 저장하는 상태
    const [buttons, setButtons] = useState(
        Array.from({ length: 25 }, (_, index) => ({
            xPos: (index % 5) * 100,
            yPos: Math.floor(index / 5) * 100,
        }))
    );

    // 버튼의 위치를 업데이트하는 함수
    const updateButtonPosition = useCallback(() => {
        setButtons(prevButtons =>
            prevButtons.map((button, index) => ({
                xPos: (index % 5) * 100,
                yPos: Math.floor(index / 5) * 100,
            }))
        );
    }, []);

    // 컴포넌트가 마운트될 때 한 번만 버튼 위치를 업데이트
    useMemo(() => {
        updateButtonPosition();
    }, [updateButtonPosition]);

    return (
        <div className="buttonField">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    style={{
                        position: 'absolute',
                        left: button.xPos,
                        top: button.yPos,
                        width: 100,
                        height: 100,
                    }}
                >
                    {index}
                </button>
            ))}
        </div>
    );
};

export default ButtonField;
