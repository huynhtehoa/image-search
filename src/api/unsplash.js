import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5683d6621018a691d52053db001f5e2960c6fb125521f81d49cb08dccce2c314'
    }
});