export const getCommentsData = async() => {
    return [
        {
            _id: "10",
            user: {
                _id: "a",
                name: "Mohammed Razaii"
            },
            desc: "It was a nice post, Thank you!",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2023-09-04T17:22:05.092+0000"
        },
        {
            _id: "11",
            user: {
                _id: "b",
                name: "Paul M. Williams"
            },
            desc: "a reply for Mohammed",
            post: "1",
            parent: "10",
            replyOnUser: "a",
            createdAt: "2023-09-04T17:22:05.092+0000"
        },
        {
            _id: "12",
            user: {
                _id: "b",
                name: "Jude Eze"
            },
            desc: "Keep it up bro",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2023-09-04T17:22:05.092+0000"
        },
        {
            _id: "13",
            user: {
                _id: "c",
                name: "Jessica C. Stephens"
            },
            desc: "I'm always interested in your content :)",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2023-09-04T17:22:05.092+0000"
        },
    ]
}