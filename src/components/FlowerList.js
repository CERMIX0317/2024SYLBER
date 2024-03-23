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
            <List divided verticalAlign='middle'>

                {flowers.map((flower, index) => {
                    return (
                        <ListItem>
                            <br/>
                            <ListContent floated="right">
                                <Button onClick={() => {
                                    if (typeof onComplete === "function") {
                                        onComplete(index);
                                    }
                                }} color = 'green' size = 'small'>수령
                                </Button>
                                <Button className="remove" type="button" onClick={() => {
                                    if (typeof onRemove === "function") {
                                        onRemove(index);
                                    }
                                }} color = 'red' size = 'small'>제거
                                </Button>
                            </ListContent>
                            <ListContent>
                                <ListHeader as='b' className="Header">{flower.message}</ListHeader>
                                <ListDescription>Sent by <b>  {flower.sender} </b> </ListDescription>
                            </ListContent>
                            <br/>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    );
}
export default FlowerList;