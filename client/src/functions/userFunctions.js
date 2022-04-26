import axios from "axios"

export const getUser = async (userId,setData) => {
    await axios.get(`http://localhost:5000/api/users?userId=${userId}`).then(res => {
        console.log(res);
        setData(res.data)
    }).catch(err => {
        console.log(err);
        
    })
}

