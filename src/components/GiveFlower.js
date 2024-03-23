import React, { useState, useMemo , useCallback} from 'react';
import "./GiveFlower.css";
import {Input, 
  List, 
  ListItem,  
  ListContent, 
  ListIcon,
  Icon,
  Header,
  HeaderContent,
  Sidebar,
  Menu,
  Button} from 'semantic-ui-react';
import axios from 'axios';
import {getUserApi, getAllUserApi, postUserApi} from '../apis/usersApi';

const backurl = 'http://3.92.72.2:3000';

function GiveFlower({myuser}) {
  const [users, setUsers] = useState([]);

  getAllUserApi().then((res) => {
    setUsers([...res]);
  })  

  const [searchTerm, setSearchTerm] = useState('');
  const [myFlowerList, setFlowerList] = useState([]);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toString());
  };
  const filteredUsers = searchTerm ? users.filter(user =>
    user.username.toLowerCase().includes(searchTerm)
  ) : [];

  const getFlowerList = async() =>{
    try{
        const data = await axios.get(`${backurl}/user/${myuser}`);
        console.log(data);
        setFlowerList(data.flowers.map((a)=>a.type));
    }catch(error){
        throw error;
    }
  };

  const giveflower = async(username, type)=>{
    try{
        const data = await axios.get(`${backurl}/user/${username}/FA/${type}`);
        console.log(data);
        alert('성공적으로 전달!');
    }catch(error){
        throw error;
    }
  };

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);

  // 리스트 아이템을 클릭하면 선택된 아이템을 설정하고 검색 기능을 가진 사이드바를 표시합니다.
  const handleListItemClick = (item) => {
    setSelectedItem(item);
    setVisible2(!visible2);
  };

  // 검색 기능을 가진 사이드바
  const SideBarWithSearch = () => {
    // 검색 기능을 통해 리스트 아이템을 필터링합니다.
    const filteredListItems = users.filter(item =>
      item.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <Sidebar
          as={Menu}
          animation='overlay'
          direction='right'
          onHide={() => setVisible2(false)}
          vertical
          visible={visible2}
          width='wide'
        >
          <Menu.Item>
            <Input
              icon='search'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Menu.Item>
          {filteredListItems.map((item, index) => (
            <Menu.Item key={index}>
                {item.username}
                <Button onClick={()=>giveflower(item.username, selectedItem)}>꽃 주기</Button>
            </Menu.Item>
            ))}
        </Sidebar>
      );
    };
  
    return (
      <div class = "giveflower">
        <Button onClick={() => {setVisible1(!visible1); getFlowerList();}}>꽃 목록!</Button>
        <Sidebar
          as={Menu}
          animation='overlay'
          direction='left'
          onHide={() => setVisible1(false)}
          vertical
          visible={visible1}
          width='wide'
        >
          {/* 처음 사이드바에서는 리스트 목록을 표시합니다. */}
          {myFlowerList.map((item, index) => (
            <Menu.Item key={index} onClick={() => handleListItemClick(item)}>
              {item}
            </Menu.Item>
          ))}
        </Sidebar>
        <SideBarWithSearch />
      </div>
    );
};

export default GiveFlower;