import React, { useState, useMemo, useCallback, MenuItem, Header, activeItem, Menu } from 'react';
import {
    CHBImg,
    HYDImg,
    IRISImg,
    TULIPImg,
    LGBImg,
    LILYImg,
    MYSImg
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

const images = [CHBImg,
    HYDImg,
    IRISImg,
    TULIPImg,
    LGBImg,
    LILYImg,
    MYSImg];
const names = ['벛꽃',
        '수국',
        '붓꽃',
        '튤립',
        '무지개꽃',
        '연꽃',
        '물망초'];



const ButtonField = ({seedPos, username}) => {
    // 버튼들의 위치를 저장하는 상태
    const [flowers, setFlowers] = useState([]);
    const [seeds, setSeeds] = useState(0);
    const [type, setType] = useState(0);
    const L = useMemo(() => flowers.length, [flowers]);

    console.log(L);

    useMemo(() => {
        getUserApi(username).then((res) => {
            setFlowers(res.flowers);
            setSeeds(res.seeds);
          }).catch((err) => {
            alert('존재하지 않는 유저네임입니다.');
            console.error(err);
        });
    }, []);

    console.log(flowers);
    

    

    const [showFlowerInfo, setShowFlowerInfo] = useState(-1);
    const [showFlowerType, setShowFlowerType] = useState(0);

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
            {buttons.map((button, index) => 
                {
                    if (index < L){
                        //setType(flowers[index].type[0]);
                        console.log(flowers[index].type);
                    }
                    return <div key={index}
                        style={{
                        font: '16px Century Gothic',
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
                        if(index < L){
                            setShowFlowerInfo((showFlowerInfo) => ((showFlowerInfo === index ? -1 : index)));
                            setShowFlowerType(flowers[index].type);
                        }
                        else{
                            setShowFlowerInfo(() => (-1));
                        }
                    }}>
                        {(index < L) && <img src = {images[flowers[index].type]}  style = {{ width: 100, alignContent: 'center'}}/>}
                    </div>;
                }
            )}
            {showFlowerInfo >= 0 && (
                <Card style = {{ width: 250, left: seedPos.seedX -  window.innerWidth/3, top: seedPos.seedY - 250}}>
                    <Image src={images[showFlowerType]} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>{username}님의 {names[showFlowerType]}</CardHeader>
                        <CardMeta>
                            <span className='date'>YJB가 2024.03.17에 선물했어요!</span>
                        </CardMeta>
                        <CardDescription>
                            힘내요!
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='percent' />
                            성장 진척도: 100%
                        </a>
                    </CardContent>
                </Card>
            )}
            {showFlowerInfo < 0 && ( <Card style = {{ width: 250, left: seedPos.seedX -  window.innerWidth/3, top: seedPos.seedY - 250}}>
                    <CardContent>
                        <CardDescription>
                            빈칸을 선택하여 꽃을 심거나 <br/> 꽃을 선택하여 정보를 확인하세요!
                            <br/><br/>
                            <Button>씨앗 심기 (∞개 보유)</Button>
                        </CardDescription>
                    </CardContent>
                </Card>
            )
        }
        </div>
    );
};

export default ButtonField;
