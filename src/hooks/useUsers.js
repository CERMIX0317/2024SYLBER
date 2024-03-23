import axios from "axios";
import { useCallback , useState} from "react";
import { atom, useRecoilState } from "recoil";
import {getUserApi, getAllUserApi} from '../apis/usersApi';

function useUsers() {
    const [users, setUsers] = useState([]);

        
    const reFetch = useCallback(() => {
        getAllUserApi().then((res) => {
            setUsers([...res]);
            console.log("success");
            console.log(users);
        }).catch((error) => {
                console.error(error);
        });
    }, []);

    return [users, reFetch];
}

export default useUsers;