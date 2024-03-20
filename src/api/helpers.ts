const url = {
    'random': 'https://api.quotable.io/quotes/random',
}
export const getNotes = async (method: string, limit: number = 10) => {
    try  {
        const response = await fetch(url[method] + `?limit=${limit}` + `&maxLength=150` + `&minLength=100`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (e) {
        console.error(e);
        alert('Вместо этого обычно бывает toast с текстом ошибки запроса')
        throw e;
    }
}