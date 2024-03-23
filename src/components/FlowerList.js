import React, { useState, useMemo , useCallback} from 'react';
import "./FlowerList.css";
import {
    ListItem,
    ListHeader,
    ListDescription,
    ListContent,
    List,
    Image,
    Button,
} from 'semantic-ui-react'

const FlowerList = ({flowers, onComplete, onRemove}) => {


    return (
        <div className="FlowerList">
            <ol>
                {flowers.map((flower, index) => {
                    return(
                        <li>
                            <span className="Header">{flower.message}</span>
                            <br/>
                            <span>Sent by <b>  {flower.sender} </b> </span>
                            <Button type="button" onClick={() => {
                                if (typeof onComplete === "function") {
                                    onComplete(index);
                                }
                            }}>수령
                            </Button>
                            <Button className="remove" type="button" onClick={() => {
                                if (typeof onRemove === "function") {
                                    onRemove(index);
                                }
                            }}>제거
                            </Button>
                            <br/>
                        </li>
                    )
                })}
            </ol>
        </div>
    );
}

export default FlowerList;