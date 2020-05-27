export default class CommentsService {

    data = [
        {
            commentAuthor: 'Author1',
            commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
                ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
                'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
                'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            commentDate: '01.01.2020 16:10:59',
            id: 1
        },
        {
            commentAuthor: 'Author2',
            commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua',
            commentDate: '02.02.2020 20:51:33',
            id: 2
        },
        {
            commentAuthor: 'Author3',
            commentText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
                'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ' +
                'qui officia deserunt mollit anim id est laborum',
            commentDate: '03.03.2020 22:30:42',
            id: 3
        }
    ];

    getComments() {
        return new Promise((resolve) => {
            setTimeout(() => {
                let localStorageComments = localStorage.getItem('arrayWithComments');
                if (localStorageComments !== null) {
                    let parse = JSON.parse(localStorageComments);
                    resolve(parse);
                } else {
                    resolve(this.data)
                }
                }, 1000);
        });
    }
}



