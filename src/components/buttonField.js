import React, { useState, useMemo , useCallback} from 'react';
const buttons = [{xPos: 0, yPos: 0}];
const x = [0, 1, 2, 3, 4];
const y = [0, 1, 2, 3, 4];
const ButtonField = () => {
    return (
        <div className="buttonField">
            {x.map((xPos, index) => {
                return (
                    <div>
                        {y.map((yPos, index) => {
                            return (
                                <button style={{
                                    position: 'absolute',
                                    left: 100 * xPos,
                                    top: 100 * yPos,
                                    width: 100,
                                    height: 100
                                }}></button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default ButtonField;
