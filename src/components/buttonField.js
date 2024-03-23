import React, { useState, useMemo, useCallback } from 'react';
import CHBImg from './image/CHB.png';
import HYDImg from './image/HYD.png';
import IRISImg from './image/IRIS.png';
import TULIPImg from './image/TULIP.png';
import LGBImg from './image/LGB.png';
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
} from 'semantic-ui-react'

const ButtonField = ({seedPos, username}) => {
    // 버튼들의 위치를 저장하는 상태

    const [showFlowerInfo, setShowFlowerInfo] = useState(-1);

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const randomGreenColor = () => {
        // 초록색의 RGB 범위: (0, 128, 0)에서 (0, 255, 0)
        var red = 0;
        var green = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
        var blue = 0;

        // RGB 값을 헥스 코드로 변환
        var hexColor = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

        return hexColor;
    }

    const [buttons, setButtons] = useState(
        Array.from({ length: 25 }, (_, index) => ({
            xPos: (index % 5) * 100,
            yPos: Math.floor(index / 5) * 100,
            BGC: randomGreenColor()
        }))
    );

    // 버튼의 위치를 업데이트하는 함수
    const updateButtonPosition = useCallback(() => {
        setButtons(prevButtons =>
            prevButtons.map((button, index) => ({
                xPos: (index % 5) * 100,
                yPos: Math.floor(index / 5) * 100,
                BGC: randomGreenColor()
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
                <div
                    key={index}
                    style={{
                        font: 'bold 20px Arial',
                        background: button.BGC,
                        position: 'absolute',
                        left: (button.xPos + seedPos.seedX - 250),
                        top: (button.yPos + seedPos.seedY - 250),
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                    }}
                    onClick={() => {
                        console.log({index});
                        setShowFlowerInfo((showFlowerInfo) => (showFlowerInfo === index ? -1 : index));
                    }}
                >
                    {index}
                    <img src = {IRISImg}  style = {{ width: 100 }}/>
                </div>
            ))}
            {showFlowerInfo >= 0 && (
                <Card style = {{ width: 250, left: seedPos.seedX + 300, top: seedPos.seedY - 150}}>
                    <Image src={IRISImg} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>{username}님의 IRIS</CardHeader>
                        <CardMeta>
                            <span className='date'>YJB가 2024.03.17에 선물했어요!</span>
                        </CardMeta>
                        <CardDescription>
                            심정벅동엉덩준상
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='user' />
                            성장 진척도: 98%
                        </a>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default ButtonField;
