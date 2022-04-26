import axios from "axios"

export const timelineFunction = async (userId, setData,username) => {
    const res = username ? 
                        await axios.get(`http://localhost:5000/api/posts/profile/${username}`)
                      :
                        await axios.get(`http://localhost:5000/api/posts/timeline/${userId}`)
    setData(res.data)

}

