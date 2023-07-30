
const url = "https://jsonplaceholder.typicode.com/posts";

const renderPosts = (posts) => {

    const appDiv = document.getElementById("app");
    let postList = "";

    posts.forEach(post => {
        postList += `
                    <div>
                        <h3>${post.id}: ${post.title}</h3>
                        <div>${post.body}</div>
                    </div>
                    `
    });

    appDiv.innerHTML = postList;
}

const fetchPosts = async () => {
    
    try {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Error HTTP:", reponse.status);
        }

        const data = await response.json();
        renderPosts(data);
    } catch (error) {
        console.log(error);
    }
}

fetchPosts();