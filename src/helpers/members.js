

export const getToken = async () => {
    const url = `http://localhost:8081/auth`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "username": "sarah",
            "password": "connor"
        }), // Ésta información está aquí sólo con fines prácticos
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data
}

export const getMembers = async () => {
    const url = `http://localhost:8081/api/members`;
    const { token } = await getToken();
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data
}

export const postMember = async (member) => {
    const url = `http://localhost:8081/api/members`;
    const token = await Auth.token();
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: {
            ...member
        }
    });
    const { data } = await response.json();
    return data
}