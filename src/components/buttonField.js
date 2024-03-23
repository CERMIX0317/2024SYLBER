import React, { useState, useMemo, useCallback, MenuItem, Header, activeItem, Menu } from 'react';
import {
    CHBImg,
    HYDImg,
    IRISImg,
    TULIPImg,
    LGBImg, LILYImg, MYSImg
} from './image/images'
import {getUserApi, getAllUserApi} from '../apis/usersApi';

import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Button,
} from 'semantic-ui-react'

const ButtonField = ({seedPos, username}) => {
    // 버튼들의 위치를 저장하는 상태
    const [flowers, setFlowers] = useState([]);
    const [seedAmount, setSeedAmount] = useState(0);

    getUserApi(username).then((res) => {
        res = JSON.parse(res);
        setFlowers(res.flowers);
        setSeedAmount(res.seedAmount);
    }).catch((err) => {
        alert('존재하지 않는 유저네임입니다.');
        console.error(err);
    });

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

    const ReturnFlowerInfo = (index) => {
        switch(index%7) {
            case 0:
                return "벚꽃";
            case 1:
                return "수국";
            case 2:
                return "아이리스";
            case 3:
                return "튤립";
            case 4:
                return "Legend Blossom";
            case 5:
                return "연꽃";
            case 6:
                return "물망초";
            default:
                return "정보 없음";
        }
    }
    const ReturnFlowerImgInfo = (index) => {
        switch(index%7) {
            case 0:
                return CHBImg;
            case 1:
                return HYDImg;
            case 2:
                return IRISImg;
            case 3:
                return TULIPImg;
            case 4:
                return LGBImg;
            case 5:
                return LILYImg;
            case 6:
                return MYSImg;
            default:
                return MYSImg;

        }
    }
    const newFlower = (tarindex) => {
        return {
            type: Math.floor(Math.random() * 7),
            growth: 0,
            index: tarindex
        }
    }
    const ReturnFlower = (tarindex) => {
        flowers.map((flower, index) => {
            if (index === tarindex) {
                return flower;
            }
        })
    }
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
                        font: '20px Century Gothic',
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
                    <img src = {ReturnFlowerImgInfo(ReturnFlower(showFlowerInfo).type)}  style = {{ width: 100 }}/>
                </div>
            ))}
            {showFlowerInfo >= 0 && (
                <Card style = {{ width: 250, left: seedPos.seedX -  window.innerWidth/3, top: seedPos.seedY - 250}}>
                    <Image src={ReturnFlowerImgInfo(ReturnFlower(showFlowerInfo).type)} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>{username}님의 {ReturnFlowerInfo(ReturnFlower(showFlowerInfo).type)}</CardHeader>
                        <CardMeta>
                            <span className='date'>YJB가 2024.03.17에 선물했어요!</span>
                        </CardMeta>
                        <CardDescription>
                            고맙습니다!
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='percent' />
                            성장 진척도: {ReturnFlower(showFlowerInfo).growth}%
                        </a>
                    </CardContent>
                </Card>
            )}
            {showFlowerInfo < 0 && ( <Card style = {{ width: 250, left: seedPos.seedX -  window.innerWidth/3, top: seedPos.seedY - 250}}>
                    <CardContent>
                        <CardDescription>
                            빈칸을 선택하여 꽃을 심거나 <br/> 꽃을 선택하여 정보를 확인하세요!
                            <br/><br/>
                            <Button onClick={
                                () => {
                                    if(seedAmount === 0) {
                                        alert('씨앗이 부족합니다!');
                                    }  else {
                                        setSeedAmount(seedAmount - 1);
                                        alert('씨앗을 심었습니다!');
                                        //새 꽃 추가
                                        setFlowers([...flowers, newFlower(showFlowerInfo)]);
                                    }
                                }
                            }>씨앗 심기 ({seedAmount} 보유)</Button>
                        </CardDescription>
                    </CardContent>
                </Card>
            )
            }
        </div>
    );
};

export default ButtonField;