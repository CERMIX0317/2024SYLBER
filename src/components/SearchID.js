import React, { useState, useMemo , useCallback} from 'react';
import "./SearchID.css";
import {getUserApi, getAllUserApi} from '../apis/usersApi';

import {Input, 
  List, 
  ListItem,  
  ListContent, 
  ListIcon,
  Icon,
  Header,
  HeaderContent,
  Button} from 'semantic-ui-react';
import axios from 'axios';

const backurl = 'http://3.92.72.2:3000';

function SearchID({username}) {
  const [users, setUsers] = useState([]);

  useMemo(() => {
    getAllUserApi().then((res) => {
      setUsers([...res]);
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toString());
  };
  const filteredUsers = searchTerm ? users.filter(user =>
    user.id.toLowerCase().includes(searchTerm)
  ) : [];

  const handleButtonClick = async(username) => {
    try {
      const data = await axios.get(`${backurl}/user/${username}`);
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  return (
    <div className="App">
      <div className="search-container">
        <div className = "Search-ID">
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <HeaderContent>둘러보기!</HeaderContent>
          </Header>
          <Input
            type="text"
            placeholder="Search ID"
            value={searchTerm}
            onChange={handleSearch}
          />
        
          <div className="Search-results">
            {filteredUsers.length > 0 ?( 
              <ul>
                <List divided relaxed>
                {filteredUsers.map((users, index) => (
                  <ListItem>
                    <ListIcon name='heart' size='large' verticalAlign='middle' />
                    <ListContent>
                      <strong>{users.id}</strong>
                      &emsp;
                      <Button as='a' onClick={()=>handleButtonClick(users.username)}>놀러가기!</Button>
                    </ListContent>
                  </ListItem>
                ))}
                </List>
              </ul>
            ) : (searchTerm.length !== 0) ? (
              <p>일치하는 정보가 없습니다.</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchID;