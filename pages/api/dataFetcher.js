import axios from "axios"


const dataFetcher = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}`)
        return res.data.students
    }
    catch (err) {
        console.log(err.message);
    }
}

export default dataFetcher


