/* const mockResponse = {
    data: {
        hits: [
            {
                webFormatURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png'
            }
        ],
        total: 1
    }
}   */

const mockResponse = [];


export default {
    get: vi.fn().mockResolvedValue(mockResponse)
}
