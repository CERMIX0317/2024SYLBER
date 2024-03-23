import React, { Component } from 'react'
import HeaderExampleUsersIcon from './Header'
import {
    AccordionTitle,
    AccordionContent,
    Accordion,
    Icon,
} from 'semantic-ui-react'

export default class AccordionExampleStyled extends Component {

    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <div>
                <HeaderExampleUsersIcon username="SJB"/>
                <br/>
                <h1 style={{textAlign: 'center', font: '30px Century Gothic', padding: 20,}}>Questions About Hello
                    Garden!</h1>
                <br/>
                <div style={{textAlign: 'center', margin: 'auto', maxWidth: '600px'}}>

                    <Accordion styled>
                        <AccordionTitle
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                            style={{textAlign: 'center', font: '28px Century Gothic',}} // 가운데 정렬 스타일 추가
                        >
                            <Icon name='dropdown'/>
                            Hello Garden! 이란?
                        </AccordionTitle>
                        <AccordionContent active={activeIndex === 0}
                                          style={{textAlign: 'center',}}> {/* 가운데 정렬 스타일 추가 */}
                            <p style={{fontSize: '20px', textAlign: 'left', font: 'Century Gothic',}}>
                                Hello Garden!은 사용자들이 가상의 정원을 가꾸며 친구들과 소통할 수 있는 서비스입니다. <br/> 사용자들은 다양한 꽃을 키우고, 친구들과 꽃을
                                나눕니다. <br/> 여러분들이
                                키운 꽃은 꿈이 되고, 사랑이 됩니다.
                            </p>
                        </AccordionContent>

                        <AccordionTitle
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                            style={{textAlign: 'center', font: '28px Century Gothic',}}
                        >
                            <Icon name='dropdown'/>
                            제가 키운 꽃은 어떤 의미를 가지나요?
                        </AccordionTitle>
                        <AccordionContent active={activeIndex === 1}
                                          style={{textAlign: 'center'}}>
                            <p style={{fontSize: '20px', textAlign: 'left', font: 'Century Gothic',}}>
                                여러분들이 키운 꽃은 그 자체로 사랑을 의미합니다. <br/> 실제로 저희는 모은 꽃을 꽃다발로 제작하여 판매하는 서비스 역시 제공해드리고
                                있죠.<br/> 하지만, 여러분들의 사랑은 도움이 필요한 모든 사람들에게도 도움이 될 수 있습니다. <br/> 서비스의 수익금과 꽃의 판매 수익은 일정 부분
                                투명하게
                                기부되며, 이를 통해 사랑의 끈을 더욱 넓히고자 합니다.
                            </p>
                        </AccordionContent>

                        <AccordionTitle
                            active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}
                            style={{textAlign: 'center', font: '28px Century Gothic',}}
                        >
                            <Icon name='dropdown'/>
                            꽃은 어떻게 키울 수 있나요?
                        </AccordionTitle>
                        <AccordionContent active={activeIndex === 2}
                                          style={{textAlign: 'center', font: '28px Century Gothic',}}>
                            <p style={{fontSize: '20px', textAlign: 'left', font: 'Century Gothic',}}>
                                여러분들은 다른 사람들의 정원에 물을 주거나, 친구들에게 꽃을 선물할 수 있습니다.<br/> 친구들에게 꽃과 함께 전달된 사랑은 여러분들의 꽃 역시
                                성장시킵니다! <br/> 여러분들의 정원을 가꾸는 데에 필요한 씨앗과 물은 이를 통해서 얻어집니다. <br/> 여러분들도 Hello Garden!에서 친구들과 함께 꽃을 키우며, 사랑을 나누어 보는 것은 어떤가요?
                            </p>
                        </AccordionContent>
                    </Accordion>
                </div>
            </div>

        )
    }
}
